import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSocialLinkDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ name: 'title', example: 'twitter' })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ name: 'links', example: 'https://www.twitter.com/' })
  links: string;
}
