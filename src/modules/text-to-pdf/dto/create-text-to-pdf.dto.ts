import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateTextToPdfDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    text: string;
}
