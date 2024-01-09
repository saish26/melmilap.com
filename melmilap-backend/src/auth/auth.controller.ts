import { Controller,Get,Post,Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  LoginDto, SignupDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/signup')
  // @UseGuards(JwtAuthGuard)
  create(@Body() signupDto: CreateUserDto) {
    return this.userService.createUser(signupDto);
  }


 



  
}
