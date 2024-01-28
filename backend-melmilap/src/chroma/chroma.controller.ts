import { Controller } from '@nestjs/common';
import { ChromaService } from './chroma.service';

@Controller('chroma')
export class ChromaController {
  constructor(private readonly chromaService: ChromaService) {}
}
