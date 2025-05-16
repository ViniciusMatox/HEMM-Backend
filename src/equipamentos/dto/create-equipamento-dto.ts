import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { identity } from 'rxjs';
import { setores, TipoUsuario } from '@prisma/client';
import { ordens_servico } from '@prisma/client';
import { manutencoes } from '@prisma/client';


//Modelo do dto que consta no prisma:
// model equipamentos {
//   id             Int              @id @default(autoincrement())
//   nome           String
//   descricao      String?
//   numero_serie   String?
//   setor_id       Int?
//   setor          setores?         @relation(fields: [setor_id], references: [id])
//   ordens_servico ordens_servico[]
// }

export class CreateEquipamentoDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  numero_serie : string;

  @IsNumber()
  setor_id : number;

  @IsNotEmpty()
  setor : setores

  @IsNotEmpty()
  ordens_servico : ordens_servico[];

}
