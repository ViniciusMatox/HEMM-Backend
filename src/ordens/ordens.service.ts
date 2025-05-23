import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-dto';
import { UpdateOrdemServicoDto } from './dto/update-ordens-dto';
@Injectable()
export class OrdesnServicoService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

    async create(createOrdensServicoDto : CreateOrdensServicoDto) {
        return this.prisma.ordens_servico.create({
            data: {
                descricao : createOrdensServicoDto.descricao,
                status : createOrdensServicoDto.status,
                equipamento_id : createOrdensServicoDto.equipamento_id,
                usuario_id : createOrdensServicoDto.usuario_id,
                data_abertura : createOrdensServicoDto.data_abertura,
                data_conclusao : createOrdensServicoDto.data_conclusao
            },
        }
    );
}

  async findAll() {
    return this.prisma.ordens_servico.findMany();
  }

  async findByID(id : number){
    return this.prisma.ordens_servico.findUnique({where : {id}})
  }


  async update(id : number,  UpdateOrdemServicoDto : UpdateOrdemServicoDto ) {
    const ordens_servico = await this.prisma.ordens_servico.findUnique({where:{id}})
    if (!ordens_servico) throw new NotFoundException('Ordens de servico não encontrado');

    return this.prisma.ordens_servico.update({
      where: { id },
      data: UpdateOrdemServicoDto,
    });
  }
  async remove (id : number){
    const ordens_servico = await this.prisma.ordens_servico.findUnique({where : {id}})
    if (!ordens_servico) throw new NotFoundException('Ordens de servico não encontrado')
        return this.prisma.ordens_servico.delete({where : {id}})
    }
  
}
