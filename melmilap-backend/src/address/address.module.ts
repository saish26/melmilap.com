import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { User } from 'src/user/entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetail } from 'src/user_detail/entities/user_detail.entity';

@Module({
     imports: [TypeOrmModule.forFeature([User,Address,SocialLink,Hobby,UserDetail])],

  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
