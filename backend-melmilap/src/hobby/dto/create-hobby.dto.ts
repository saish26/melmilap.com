import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateHobbyDto {
  @ApiProperty({ name: 'title', example: 'racing' })
  @IsString()
  @IsOptional()
  title: string;
}
