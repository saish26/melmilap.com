import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { HobbyModule } from './hobby/hobby.module';
import { SocialLinkModule } from './social_link/social_link.module';
import { UserDetailModule } from './user_detail/user_detail.module';
import { FeatureImageModule } from './feature_image/feature_image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/database.config';
import 'dotenv/config';
import { User } from './user/entities/user.entity';
import { UserDetail } from './user_detail/entities/user_detail.entity';
import { Address } from './address/entities/address.entity';
import { SocialLink } from './social_link/entities/social_link.entity';
import { Hobby } from './hobby/entities/hobby.entity';
import { FeatureImage } from './feature_image/entities/feature_image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    AuthModule,
    UserModule,
    AddressModule,
    HobbyModule,
    SocialLinkModule,
    UserDetailModule,
    FeatureImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
