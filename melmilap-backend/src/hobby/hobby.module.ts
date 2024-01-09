import { Module } from '@nestjs/common';
import { HobbyService } from './hobby.service';
import { HobbyController } from './hobby.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [HobbyController],
  providers: [HobbyService],
})
export class HobbyModule {}
