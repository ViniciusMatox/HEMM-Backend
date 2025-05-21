import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSetoresDto {

  @IsOptional()
  @IsString()
  nome?: string;

  @IsNotEmpty()
  @IsInt()
  hospital_id: number;
}
