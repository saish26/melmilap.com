import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { CreateFeatureImageDto } from 'src/feature_image/dto/create-feature_image.dto';
import { CreateHobbyDto } from 'src/hobby/dto/create-hobby.dto';
import { CreateSocialLinkDto } from 'src/social_link/dto/create-social_link.dto';
import { CreateUserDetailDto } from 'src/user_detail/dto/create-user_detail.dto';

export class CreateUserDto {
  @ApiProperty({ name: 'first_name', example: 'John' })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ name: 'last_name', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ name: 'email', example: 'johndoe@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ name: 'gender', example: 'm' })
  @IsString()
  gender: string;

  @ApiProperty({ name: 'horoscope', example: 'cancer' })
  @IsString()
  horoscope: string;

  @ApiProperty({ name: 'tags', example: 'rich and busy' })
  @IsString()
  tags: string;

  @ApiProperty({
    name: 'description',
    example: 'I am boy with lots of money haha.',
  })
  @IsString()
  description: string;

  @ApiProperty({ name: 'status', example: 'Wanna take a ride with me' })
  @IsString()
  status: string;

  @ApiProperty({ name: 'relationship_status', example: 'single' })
  @IsString()
  @IsNotEmpty()
  relationship_status: string;

  @ApiProperty({ name: 'contact', example: '9865125462' })
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty({ name: 'date_of_birth', example: '01/12/2024' })
  @IsString()
  @IsNotEmpty()
  date_of_birth: string;

  @ApiProperty({ name: 'password', example: 'john@doe' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ValidateNested()
  @Type(() => CreateHobbyDto)
  @ApiProperty({ type: [CreateHobbyDto] })
  hobbies: CreateHobbyDto[];

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty()
  @Type(() => CreateFeatureImageDto)
  @ApiProperty({ type: [CreateFeatureImageDto] })
  feature_images: CreateFeatureImageDto[];

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty()
  @Type(() => CreateSocialLinkDto)
  @ApiProperty({ type: [CreateSocialLinkDto] })
  social_links: CreateSocialLinkDto[];

  @ValidateNested()
  @Type(() => CreateUserDetailDto)
  @ApiProperty({ type: CreateUserDetailDto })
  user_details: CreateUserDetailDto;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @ApiProperty({ type: CreateAddressDto })
  address: CreateAddressDto;
}

export class FindUserMatchDto {
  @ApiProperty({ name: 'interest', example: 'I am interested in hot chicks' })
  @IsString()
  interest: string;
}
