import { IsOptional, IsString } from 'class-validator';

export class CreateHobbyDto {
  @IsString()
  @IsOptional()
  title: string;
}
