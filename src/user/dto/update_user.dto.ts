import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserParam {
    // @IsNumber()
    @IsNotEmpty()
    userId: number;
}

export class UpdateUserBody {
    @IsString()
    @IsNotEmpty()
    name: string;
}
