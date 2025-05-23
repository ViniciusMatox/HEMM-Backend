import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateHospitaisDto } from './dto/create-hospitais-dto';
import { UpdateHospitaisDto } from './dto/update-hospitais-dto';
@Injectable()
export class HospitaisService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

    async create(createHospitaisDto : CreateHospitaisDto) {
        return this.prisma.hospitais.create({
            data: {
                nome: createHospitaisDto.nome,
                cnpj : createHospitaisDto.cnpj,
                email : createHospitaisDto.email,
                telefone : createHospitaisDto.telefone
            },
        }
    );
}

  async findAll() {
    return this.prisma.hospitais.findMany();
  }

  async findByID(id : number){
    return this.prisma.hospitais.findUnique({where : {id}})
  }


  async update(id : number,  updateHospitaisDto : UpdateHospitaisDto ) {
    const hospital = await this.prisma.hospitais.findUnique({where:{id}})
    if (!hospital) throw new NotFoundException('Hospital não encontrado');

    return this.prisma.hospitais.update({
      where: { id },
      data: updateHospitaisDto,
    });
  }
  async remove (id : number){
    const hospital = await this.prisma.hospitais.findUnique({where : {id}})
    if (!hospital) throw new NotFoundException('Hospital não encontrado')

        return this.prisma.hospitais.delete({where : {id}})
  }


}
