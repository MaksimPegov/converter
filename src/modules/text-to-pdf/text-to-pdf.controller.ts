import {Controller, Get, Post, Body, Patch, Param, Delete, StreamableFile, Header, Res} from '@nestjs/common';
import {TextToPdfService} from './text-to-pdf.service';
import {CreateTextToPdfDto} from './dto/create-text-to-pdf.dto';
import {ApiTags} from "@nestjs/swagger";
import { Response } from 'express';

@ApiTags('Text To PDF controller')
@Controller('text-to-pdf')
export class TextToPdfController {
    constructor(private readonly textToPdfService: TextToPdfService) {
    }

    @Post()
    @Header('Access-Control-Expose-Headers', '*')
    @Header('Content-Type', 'application/pdf')
    async create(
        @Body() createTextToPdfDto: CreateTextToPdfDto,
        @Res({ passthrough: true }) res: Response
    ): Promise<StreamableFile> {
        const { buffer, fileName } = await this.textToPdfService.convertTextToPdf(createTextToPdfDto.text);
        res.set({'Content-Disposition': `attachment; filename="${fileName}".pdf`});
        return new StreamableFile(buffer);
    }
}
