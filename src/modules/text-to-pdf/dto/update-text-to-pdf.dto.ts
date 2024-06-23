import { PartialType } from '@nestjs/mapped-types';
import { CreateTextToPdfDto } from './create-text-to-pdf.dto';

export class UpdateTextToPdfDto extends PartialType(CreateTextToPdfDto) {}
