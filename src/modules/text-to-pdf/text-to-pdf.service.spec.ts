import { Test, TestingModule } from '@nestjs/testing';
import { TextToPdfService } from './text-to-pdf.service';

describe('TextToPdfService', () => {
  let service: TextToPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextToPdfService],
    }).compile();

    service = module.get<TextToPdfService>(TextToPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
