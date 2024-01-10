import { IsOptional, IsString } from 'class-validator';

export class CreateFeatureImageDto {
  @IsString()
  @IsOptional()
  image_link: string;
}
