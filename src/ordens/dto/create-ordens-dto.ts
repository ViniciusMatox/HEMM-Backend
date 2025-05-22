import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateOrdensServicoDto {

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsNotEmpty()
  @IsInt()
  equipamento_id: number;

  @IsNotEmpty()
  @IsInt()
  usuario_id: number;

  @IsOptional()
  @IsDateString()
  data_abertura?: Date; 

  @IsOptional()
  @IsDateString()
  data_conclusao?: Date;
}
