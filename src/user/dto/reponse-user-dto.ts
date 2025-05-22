import { manutencoes, ordens_servico, TipoManutencao, TipoUsuario } from '@prisma/client';

export class ResponseUserDto {

    nome : string;
    tipo : TipoUsuario;
    ordens_servico : ordens_servico[];
    manutencoes : manutencoes[];
}

