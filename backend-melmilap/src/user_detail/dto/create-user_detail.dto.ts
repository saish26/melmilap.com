import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDetailDto {
  @ApiProperty({ name: 'height', example: '4f5i' })
  @IsString()
  @IsNotEmpty()
  height: string;

  @ApiProperty({ name: 'weight', example: '50kg' })
  @IsString()
  @IsOptional()
  weight: string;

  @ApiProperty({ name: 'religion', example: 'hindu' })
  @IsString()
  @IsNotEmpty()
  religion: string;

  @ApiProperty({ name: 'cast', example: 'newar' })
  @IsString()
  @IsNotEmpty()
  cast: string;

  @ApiProperty({ name: 'education', example: 'B.SC.CSIT' })
  @IsString()
  @IsNotEmpty()
  education: string;

  @ApiProperty({ name: 'income', example: '300000 per/month' })
  @IsString()
  @IsNotEmpty()
  income: string;

  @ApiProperty({ name: 'father_name', example: 'ram bahadur' })
  @IsString()
  @IsNotEmpty()
  father_name: string;

  @ApiProperty({ name: 'grandfather_name', example: 'krishna bahadur' })
  @IsString()
  @IsNotEmpty()
  grandfather_name: string;
}
