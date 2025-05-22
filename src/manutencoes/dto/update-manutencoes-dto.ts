import { PartialType } from '@nestjs/mapped-types';
import { CreateManutencaoDto } from './create-manutencoes-dto';

export class UpdateManutencaoDto extends PartialType(CreateManutencaoDto) {}
