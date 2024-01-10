import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserDetailModule } from './user_detail/user_detail.module';
import { AddressModule } from './address/address.module';
import { FeatureImageModule } from './feature_image/feature_image.module';
import { HobbyModule } from './hobby/hobby.module';
import { SocialLinkModule } from './social_link/social_link.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/database.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    UserDetailModule,
    AddressModule,
    FeatureImageModule,
    HobbyModule,
    SocialLinkModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
