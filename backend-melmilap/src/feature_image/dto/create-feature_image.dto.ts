import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateFeatureImageDto {
  @ApiProperty({
    name: 'image_link',
    example: 'https://www.imagesanshar.com/rose.jpg',
  })
  @IsString()
  @IsOptional()
  image_link: string;
}
