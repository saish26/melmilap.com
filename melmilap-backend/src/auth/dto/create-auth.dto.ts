import { IsAlphanumeric, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, MinLength, } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    
    @IsNotEmpty()
    @IsString()
    password:string
}
export class SignupDto extends LoginDto {
@IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  @IsAlphanumeric(null, {
    message: 'Username does not allow other than alpha numeric chars.',
  })
  username: string;


  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm'])
  gender: string;


}
