import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextToPdfService } from './text-to-pdf.service';
import { CreateTextToPdfDto } from './dto/create-text-to-pdf.dto';
import { UpdateTextToPdfDto } from './dto/update-text-to-pdf.dto';

@Controller('text-to-pdf')
export class TextToPdfController {
  constructor(private readonly textToPdfService: TextToPdfService) {}

  @Post()
  create(@Body() createTextToPdfDto: CreateTextToPdfDto) {
    return this.textToPdfService.create(createTextToPdfDto);
  }

  @Get()
  findAll() {
    return this.textToPdfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textToPdfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextToPdfDto: UpdateTextToPdfDto) {
    return this.textToPdfService.update(+id, updateTextToPdfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textToPdfService.remove(+id);
  }
}
