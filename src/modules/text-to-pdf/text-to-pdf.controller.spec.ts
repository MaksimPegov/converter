import { Test, TestingModule } from '@nestjs/testing';
import { TextToPdfController } from './text-to-pdf.controller';
import { TextToPdfService } from './text-to-pdf.service';

describe('TextToPdfController', () => {
  let controller: TextToPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextToPdfController],
      providers: [TextToPdfService],
    }).compile();

    controller = module.get<TextToPdfController>(TextToPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
