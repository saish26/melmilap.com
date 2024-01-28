import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BcryptService } from 'src/auth/bcrypt.service';
import { ChromaService } from 'src/chroma/chroma.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, BcryptService, ChromaService],
})
export class UserModule {}
