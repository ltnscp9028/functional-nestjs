import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteUserParam {
    // @IsNumber()
    @IsNotEmpty()
    userId: number;
}
