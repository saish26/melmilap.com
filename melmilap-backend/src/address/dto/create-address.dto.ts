import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
@IsString()
 @IsNotEmpty()
contact: string;
    
@IsString()
 @IsNotEmpty()
province: string;
    
@IsString()
 @IsNotEmpty()
district: string;
    
@IsString()
 @IsNotEmpty()
city: string;
    
@IsString()
 @IsNotEmpty()
street: string;
    
@IsString()
 @IsNotEmpty()
municipality: string;
    
@IsString()
 @IsOptional()
latitude: string;
    
@IsString()
 @IsOptional()
  longitude: string;

}
