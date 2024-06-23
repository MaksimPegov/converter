import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TextToPdfModule} from "./modules/text-to-pdf/text-to-pdf.module";

@Module({
  imports: [TextToPdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
