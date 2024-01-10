import { HttpException, Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { BcryptService } from './bcrypt.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userService.create(createUserDto);
      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const { password, ...rest } = await this.userService.isAuthenticatedUser(
        loginAuthDto,
      );

      const token: any = await this.generateToken(rest);

      return {
        id: rest.id,
        username: rest.email,
        token,
        refreshToken: '',
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async validateUser(username: string, password: string) {
    try {
      const user = await this.userService.isAuthenticatedUser({
        username,
      });
      if (
        user &&
        (await this.bcryptService.comparePassword(password, user.password))
      ) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  public async generateToken(user: any): Promise<string> {
    return this.jwtService.sign(
      {
        id: user.id,
        username: user.username,
      },
      {
        secret: process.env.JWT_SECRET || '!melmilap@2023',
        expiresIn: '4days',
      },
    );
  }
}
