import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserBody {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}
