import { IsOptional, IsString } from 'class-validator';

export class CreateSocialLinkDto {
  @IsString()
  @IsOptional()
  title: string;
}
