import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetUserParam {
    // @IsNumber()
    @IsNotEmpty()
    userId: number;
}
