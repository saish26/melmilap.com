import { Module } from '@nestjs/common';
import { ChromaService } from './chroma.service';
import { ChromaController } from './chroma.controller';

@Module({
  controllers: [ChromaController],
  providers: [ChromaService],
})
export class ChromaModule {}
