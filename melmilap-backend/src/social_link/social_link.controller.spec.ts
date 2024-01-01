import { Test, TestingModule } from '@nestjs/testing';
import { SocialLinkController } from './social_link.controller';
import { SocialLinkService } from './social_link.service';

describe('SocialLinkController', () => {
  let controller: SocialLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialLinkController],
      providers: [SocialLinkService],
    }).compile();

    controller = module.get<SocialLinkController>(SocialLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
