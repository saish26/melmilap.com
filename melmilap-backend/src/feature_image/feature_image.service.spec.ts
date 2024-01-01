import { Test, TestingModule } from '@nestjs/testing';
import { FeatureImageService } from './feature_image.service';

describe('FeatureImageService', () => {
  let service: FeatureImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureImageService],
    }).compile();

    service = module.get<FeatureImageService>(FeatureImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
