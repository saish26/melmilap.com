import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserService } from 'src/user/user.service';
import { Address } from 'src/address/entities/address.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';

import { UserDetail } from 'src/user_detail/entities/user_detail.entity';
import { Auth } from './entities/auth.entity';


@Module({
       imports: [TypeOrmModule.forFeature([User,Address,SocialLink,Hobby,UserDetail,Auth]),
JwtModule.register({
      secret: process.env.SECRET_KEY || 'Ekj1a03mOJa6AAJxwE95pZnHopvzWo',
      signOptions: {
        expiresIn: '5days',
      },
    }),],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,UserService],
})
export class AuthModule {}
