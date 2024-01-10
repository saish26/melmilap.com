import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDetailDto {
  @IsString()
  @IsNotEmpty()
  height: string;

  @IsString()
  @IsNotEmpty()
  weight: string;

  @IsString()
  @IsNotEmpty()
  religion: string;

  @IsString()
  @IsNotEmpty()
  cast: string;

  @IsString()
  @IsNotEmpty()
  education: string;

  @IsString()
  @IsNotEmpty()
  income: string;

  @IsString()
  @IsNotEmpty()
  father_name: string;

  @IsString()
  @IsNotEmpty()
  grandfather_name: string;
}
