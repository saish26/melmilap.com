import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
      private jwtServices: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async login(loginDTO: LoginDto) {

    try {
      let user = await this.userRepository.findOneBy({ email: loginDTO.email })
      if (user == null) {
        throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
      }
     if (!await bcrypt.compare(loginDTO.password,user.password)) {
        throw new HttpException('incorrect password', HttpStatus.BAD_REQUEST)
     }
      console.log(user.password)
      const payload = {
        id: user.id,
        email: user.email
        
      }
      const accessToken = await this.jwtServices.signAsync(payload)
      return {...user, accessToken}
    } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST)
      
    }
  }

  
}
