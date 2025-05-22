import { IsEmail, IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';
import { setores, TipoUsuario } from '@prisma/client';

//Modelo dto:
// model hospitais {
//     id        Int       @id @default(autoincrement())
//     nome      String?
//     cnpj      String?
//     email     String?
//     telefone  String?
//     setores   setores[]
//   }

export class CreateEquipamentoDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MaxLength(14)
  cnpj : string;

  @IsEmail()
  email : string;

  @IsString()
  @MaxLength(9)
  telefone : string;

  @IsNotEmpty()
  setores : setores[];

}

