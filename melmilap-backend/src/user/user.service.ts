import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';
import { UserDetail } from 'src/user_detail/entities/user_detail.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';

@Injectable()
export class UserService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    // @InjectRepository(Address) private readonly addressRepository: Repository<Address>,
    // @InjectRepository(Hobby) private readonly hobbyRepository: Repository<Hobby>,
    // @InjectRepository(UserDetail) private readonly userDetailRepository: Repository<UserDetail>,
    // @InjectRepository(SocialLink) private readonly socialLinkRepository: Repository<SocialLink>,
  ) {}

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10
  const {hobby,feature_image,social_link,user_details,address}= createUserDto
    const userData = {
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      gender: createUserDto.gender,
      password:await bcrypt.hash(createUserDto.password, saltOrRounds),
      horoscope: createUserDto.horoscope,
      date_of_birth: createUserDto.date_of_birth,
      relationship_status: createUserDto.relationship_status,
      contact: createUserDto.contact,
    }
console.log(userData,'ss')
    return this.userRepository.save(userData);
    
  

  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllUser(): Promise<User[]> {
    return this.userRepository.find({
      relations: {
  }});
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  // updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   const user: User = new User();
  //   user.name = updateUserDto.name;
  //   user.age = updateUserDto.age;
  //   user.email = updateUserDto.email;
  //   user.username = updateUserDto.username;
  //   user.password = updateUserDto.password;
  //   user.id = id;
  //   return this.userRepository.save(user);
  // }

  /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
