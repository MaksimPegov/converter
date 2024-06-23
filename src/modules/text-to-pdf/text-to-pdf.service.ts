import { Injectable } from '@nestjs/common';
import { CreateTextToPdfDto } from './dto/create-text-to-pdf.dto';
import { UpdateTextToPdfDto } from './dto/update-text-to-pdf.dto';

@Injectable()
export class TextToPdfService {
  convertTextToPdf(dto: CreateTextToPdfDto) {
    return `Converting text to PDF: ${dto.text}`;
  }
}
