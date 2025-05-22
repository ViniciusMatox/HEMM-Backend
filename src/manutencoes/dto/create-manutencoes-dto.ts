import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TipoManutencao } from '@prisma/client';

export class CreateManutencaoDto {
  
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNotEmpty()
  @IsEnum(TipoManutencao)
  tipo: TipoManutencao;

  @IsOptional()
  @IsDateString()
  data?: Date;  // O Prisma tem default(now()), mas no DTO deixa opcional se quiser sobrescrever

  @IsNotEmpty()
  @IsInt()
  ordemServicoId: number;

  @IsNotEmpty()
  @IsInt()
  tecnicoId: number;
}
