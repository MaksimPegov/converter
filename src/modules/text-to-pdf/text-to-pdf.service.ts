import { Injectable } from '@nestjs/common';
import { CreateTextToPdfDto } from './dto/create-text-to-pdf.dto';
import { UpdateTextToPdfDto } from './dto/update-text-to-pdf.dto';

@Injectable()
export class TextToPdfService {
  create(createTextToPdfDto: CreateTextToPdfDto) {
    return 'This action adds a new textToPdf';
  }

  findAll() {
    return `This action returns all textToPdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textToPdf`;
  }

  update(id: number, updateTextToPdfDto: UpdateTextToPdfDto) {
    return `This action updates a #${id} textToPdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} textToPdf`;
  }
}
