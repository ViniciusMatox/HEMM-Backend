import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { TipoUsuario } from '@prisma/client';
import { ordens_servico } from '@prisma/client';
import { manutencoes } from '@prisma/client';

export class CreateUserDto {

  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  tipo : TipoUsuario;

//   id             Int              @id @default(autoincrement())
//   nome           String?
//   cpf            String?
//   email          String?
//   senha          String?
//   telefone       String?
//   tipo           TipoUsuario
//   ordens_servico ordens_servico[]
//   manutencoes    manutencoes[]   @relation("Tecnico")

}
