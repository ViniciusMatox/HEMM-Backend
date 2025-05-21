import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdensServicoDto } from './create-ordens-dto';

export class UpdateOrdemServicoDto extends PartialType(CreateOrdensServicoDto) {}
