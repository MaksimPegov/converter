import { Module } from '@nestjs/common';
import { TextToPdfService } from './text-to-pdf.service';
import { TextToPdfController } from './text-to-pdf.controller';

@Module({
  controllers: [TextToPdfController],
  providers: [TextToPdfService],
})
export class TextToPdfModule {}
