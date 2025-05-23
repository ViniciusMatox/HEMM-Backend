import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitaisDto } from './create-hospitais-dto';

export class UpdateHospitaisDto extends PartialType(CreateHospitaisDto) {}
