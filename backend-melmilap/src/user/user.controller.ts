import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, FindUserMatchDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('match/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  findMatch(
    @Param('id') id: string,
    @Body() findUserMatchDto: FindUserMatchDto,
  ) {
    return this.userService.findMatch(id,findUserMatchDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findMatchByHobby(@Param('id') id: string) {
    return this.userService.findMatchByHobby(id);
  }

  @Get('recommended/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  findRecommended(@Param('id') id: string) {
    return this.userService.recommended(id);
  }

  @Get('details/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
