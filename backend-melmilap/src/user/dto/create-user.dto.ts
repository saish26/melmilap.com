import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { CreateFeatureImageDto } from 'src/feature_image/dto/create-feature_image.dto';
import { CreateHobbyDto } from 'src/hobby/dto/create-hobby.dto';
import { CreateSocialLinkDto } from 'src/social_link/dto/create-social_link.dto';
import { CreateUserDetailDto } from 'src/user_detail/dto/create-user_detail.dto';

const passwordRegX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]$/;

export class CreateUserDto {
  @IsString()
  // @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  first_name: string;

  @IsString()
  // @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  // @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsString()
  // @IsEnum(['f', 'm'])
  gender: string;

  @IsString()
  // @IsEnum([
  //   'Aries',
  //   'Taurus',
  //   'Gemini',
  //   'Cancer',
  //   'Leo',
  //   'Virgo',
  //   'Libra',
  //   'Scorpio',
  //   'Sagittarius',
  //   'Capricorn',
  //   'Aquarius',
  //   'Pisces',
  // ])
  horoscope: string;

  @IsString()
  @IsNotEmpty()
  relationship_status: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  date_of_birth: string;

  @IsNotEmpty()
  @IsString()
  // @Matches(passwordRegX, {
  //   message: `Password must contain Minimum 8 ,
  //   at least one uppercase letter,
  //   one number and
  //   one special character`,
  // })
  password: string;

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty()
  @Type(() => CreateHobbyDto)
  hobbies: CreateHobbyDto[];

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty()
  @Type(() => CreateFeatureImageDto)
  feature_images: CreateFeatureImageDto[];

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty()
  @Type(() => CreateSocialLinkDto)
  social_links: CreateSocialLinkDto[];

  @IsObject()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateUserDetailDto)
  user_details: CreateUserDetailDto;

  @IsObject()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
