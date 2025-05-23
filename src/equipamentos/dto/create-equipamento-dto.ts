import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateEquipamentoDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  numero_serie: string;

  @IsNumber()
  setor_id: number;
}