import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, FindUserMatchDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { calculateJaccardSimilarity } from 'src/utils/helpers/calculateJaccardSimilarity';
import { BcryptService } from 'src/auth/bcrypt.service';
import { ChromaService } from 'src/chroma/chroma.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly bService: BcryptService,
    private readonly chromaService: ChromaService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const isUserWithEmailExists = await this.userRepo.findOneBy({
        email: createUserDto.email,
      });

      if (isUserWithEmailExists) {
        throw new HttpException(
          'User with this email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      const hashedPassword = await this.bService.hashPassword(
        createUserDto.password,
      );

      const userdata = {
        ...createUserDto,
        password: hashedPassword,
      };

      const collection = await this.chromaService.getOrCreateCollection(
        'melmilap_collection',
      );

      const user = await this.userRepo.save(userdata);
      await collection.add({ ids: user.id, documents: user.description });

      return;
    } catch (error) {
      throw new HttpException(error.status, error.message);
    }
  }

  async findAll() {
    try {
      const users = await this.userRepo
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.feature_images', 'feature_image')
        .getMany();

      return users;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async recommended(id: string) {
    try {
      const users = await this.userRepo.findOneBy({ id });
      if (users?.interest) {
        const results = this.findMatch(id, { interest: users.interest });
        return results;
      }
      return {};
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findMatch(id: string, findUserMatchDto: FindUserMatchDto) {
    try {
      const matches: User[] = [];

      const collection = await this.chromaService.getOrCreateCollection(
        'melmilap_collection',
      );

      const result = await collection.query({
        nResults: 10,
        queryTexts: findUserMatchDto.interest,
      });

      for (const id of result.ids[0]) {
        const user = await this.userRepo
          .createQueryBuilder('user')
          .leftJoinAndSelect('user.feature_images', 'feature_image')
          .where('user.id=:id', { id: id.toString() })
          .getOne();

        matches.push(user);
      }

      return matches;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: string) {
    try {
      const userDetails = await this.userRepo
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.user_details', 'user_detail')
        .leftJoinAndSelect('user.address', 'address')
        .leftJoinAndSelect('user.hobbies', 'hobby')
        .leftJoinAndSelect('user.feature_images', 'feature_image')
        .where('user.id=:id', { id })
        .getOne();

      return userDetails;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAndConnect(id: string, personId: string) {
    try {
      let user = await this.userRepo.findOneBy({ id });
      const personToBeConnected = await this.userRepo.findOneBy({
        id: personId,
      });

      user.connections = [personToBeConnected];
      await this.userRepo.save(user);

      return;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findMatchByHobby(id: string) {
    try {
      const user = await this.userRepo
        .createQueryBuilder('user')
        .leftJoin('user.hobbies', 'hobby')
        .addSelect(['hobby.title'])
        .where('user.id=:id', { id })
        .getOne();

      const allUsers = await this.userRepo
        .createQueryBuilder('user')
        .leftJoin('user.hobbies', 'hobby')
        .addSelect(['hobby.title'])
        .where('user.id <> :id', { id })
        .getMany();

      const result = this.matchPersonWithDatabase(user, allUsers);

      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  matchPersonWithDatabase = async (personData: User, allUsers: User[]) => {
    const personHobbies = personData.hobbies.map((hobby) => hobby.title);

    const results = await Promise.all(
      allUsers.map(async (user: any) => {
        const userHobbies = user.hobbies.map((hobby) => hobby.title);
        const similarity = calculateJaccardSimilarity(
          personHobbies,
          userHobbies,
        );

        if (similarity > 0.6) {
          const matchedUser = await this.userRepo
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.feature_images', 'feature_image')
            .where('user.id=:id', { id: user?.id })
            .getOne();
          return {
            matchedUser,
            similarity,
          };
        }

        // If similarity is not above the threshold, return null
        return null;
      }),
    );

    // Filter out null values (users with similarity below the threshold)
    const filteredResults = results.filter((result) => result !== null);

    return filteredResults;
  };

  async findYourConnection(id: string) {
    try {
      const connections = await this.userRepo
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.feature_images', 'feature_image')
        .leftJoinAndSelect('user.connections', 'connection')
        .where('user.id=:id', { id })
        .getMany();

      return connections;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async isAuthenticatedUser({ username }) {
    try {
      const user = await this.userRepo
        .createQueryBuilder('user')
        .where('user.email = :email', { email: username })
        .getOne();

      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
