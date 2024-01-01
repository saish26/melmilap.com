import { Test, TestingModule } from '@nestjs/testing';
import { FeatureImageController } from './feature_image.controller';
import { FeatureImageService } from './feature_image.service';

describe('FeatureImageController', () => {
  let controller: FeatureImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureImageController],
      providers: [FeatureImageService],
    }).compile();

    controller = module.get<FeatureImageController>(FeatureImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
