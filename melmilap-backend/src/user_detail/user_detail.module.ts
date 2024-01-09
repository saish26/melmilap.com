import { Module } from '@nestjs/common';
import { UserDetailService } from './user_detail.service';
import { UserDetailController } from './user_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';
import { UserDetail } from './entities/user_detail.entity';

@Module({
   imports: [TypeOrmModule.forFeature([User,Address,SocialLink,Hobby,UserDetail])],
  controllers: [UserDetailController],
  providers: [UserDetailService],
})
export class UserDetailModule {}
