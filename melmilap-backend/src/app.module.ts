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

@Module({
  imports: [AuthModule, UserModule, AddressModule, HobbyModule, SocialLinkModule, UserDetailModule, FeatureImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
