import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { CreateTextToPdfDto } from './dto/create-text-to-pdf.dto';
import puppeteer, {Browser} from "puppeteer";
import os from "os";

@Injectable()
export class TextToPdfService  implements OnModuleInit, OnModuleDestroy {
  private _browser: Browser;

  public async onModuleInit(): Promise<void> {
    this._browser = await puppeteer.launch();
  }

  public async onModuleDestroy(): Promise<void> {
    await this._browser.close();
  }
  async convertTextToPdf(content: string): Promise<{buffer: Buffer, fileName: string}> {
    const page = await this._browser.newPage();
    await page.setContent(`<html><body>${content}</body></html>`, { waitUntil: 'networkidle0' });

    const bufferFile = await page.pdf({ format: 'a4', });
    return { buffer: bufferFile, fileName: new Date().toISOString() };
  }
}
