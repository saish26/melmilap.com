import { Module } from '@nestjs/common';
import { FeatureImageService } from './feature_image.service';
import { FeatureImageController } from './feature_image.controller';

@Module({
  controllers: [FeatureImageController],
  providers: [FeatureImageService],
})
export class FeatureImageModule {}
