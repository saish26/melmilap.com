import { Test, TestingModule } from '@nestjs/testing';
import { HobbyController } from './hobby.controller';
import { HobbyService } from './hobby.service';

describe('HobbyController', () => {
  let controller: HobbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HobbyController],
      providers: [HobbyService],
    }).compile();

    controller = module.get<HobbyController>(HobbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
