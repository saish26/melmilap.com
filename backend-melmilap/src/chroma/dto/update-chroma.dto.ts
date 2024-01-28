import { PartialType } from '@nestjs/mapped-types';
import { CreateChromaDto } from './create-chroma.dto';

export class UpdateChromaDto extends PartialType(CreateChromaDto) {}
