import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { calculateJaccardSimilarity } from 'src/utils/helpers/calculateJaccardSimilarity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
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
      await this.userRepo.save(createUserDto);
      return;
    } catch (error) {
      throw new HttpException(error.status, error.message);
    }
  }

  async findMatch(id: string) {
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

      const value = this.matchPersonWithDatabase(user, allUsers);

      return value;
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
          const matchedUser = await this.userRepo.findOneBy({ id: user?.id });
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

  async isAuthenticatedUser({ username }) {
    try {
      const user = await this.userRepo
        .createQueryBuilder('user')
        .where('user.username = :username', { username: username })
        .getOne();

      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
