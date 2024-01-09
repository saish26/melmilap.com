import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';
import { UserDetail } from 'src/user_detail/entities/user_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Address,SocialLink,Hobby,UserDetail])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
