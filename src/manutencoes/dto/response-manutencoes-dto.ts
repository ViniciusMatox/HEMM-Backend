import { TipoManutencao } from '@prisma/client';

export class ResponseManutencaoDto {
  id: number;
  descricao?: string;
  tipo: TipoManutencao;
  data: Date;
  ordemServicoId: number;
  tecnicoId: number;
}
