import {ApiProperty} from "@nestjs/swagger";

export class CreateTextToPdfDto {

    @ApiProperty()
    text: string;
}
