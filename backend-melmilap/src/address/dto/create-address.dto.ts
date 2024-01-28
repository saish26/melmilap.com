import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @ApiProperty({ name: 'province', example: 'bagmati' })
  @IsNotEmpty()
  province: string;

  @IsString()
  @ApiProperty({ name: 'district', example: 'kathmandu' })
  @IsNotEmpty()
  district: string;

  @IsString()
  @ApiProperty({ name: 'city', example: 'kathmandu' })
  @IsNotEmpty()
  city: string;

  @IsString()
  @ApiProperty({ name: 'street', example: 'kalanki-road' })
  @IsNotEmpty()
  street: string;

  @IsString()
  @ApiProperty({ name: 'municipality', example: 'chandragiri' })
  @IsNotEmpty()
  municipality: string;

  @IsString()
  @ApiProperty({ name: 'latitude', example: '27.32' })
  @IsOptional()
  latitude: string;

  @IsString()
  @ApiProperty({ name: 'longitude', example: '83.32' })
  @IsOptional()
  longitude: string;
}
