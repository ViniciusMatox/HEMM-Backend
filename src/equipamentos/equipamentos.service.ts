import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateEquipamentoDto } from './dto/create-equipamento-dto';
import { UpdateEquipamentoDto } from './dto/update-equipamentos-dto';
@Injectable()
export class EquipamentosService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

    async create(createEquipamentoDto: CreateEquipamentoDto) {
        return this.prisma.equipamentos.create({
            data: {
                nome: createEquipamentoDto.nome,
                descricao: createEquipamentoDto.descricao,
                numero_serie: createEquipamentoDto.numero_serie,
                setor_id: createEquipamentoDto.setor_id,
            },
        }
    );
}

  async findAll() {
    return this.prisma.equipamentos.findMany();
  }

  async findByID(id : number){
    return this.prisma.equipamentos.findUnique({where : {id}})
  }


  async update(id : number, updateEquipamentoDto : UpdateEquipamentoDto) {
    const equipamento = await this.prisma.equipamentos.findUnique({where:{id}})
    if (!equipamento) throw new NotFoundException('Equipamento não encontrado');

    return this.prisma.usuarios.update({
      where: { id },
      data: updateEquipamentoDto,
    });
  }
  async remove (id : number){
    const equipamento = await this.prisma.equipamentos.findUnique({where : {id}})
    if (!equipamento) throw new NotFoundException('Equipamento não encontrado')

        return this.prisma.equipamentos.delete({where : {id}})
  }
}
