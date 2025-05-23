import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { Utils } from './userUtils';
import { HashService } from 'src/utils/hash/hash.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utils : Utils,
    private readonly hash : HashService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await this.hash.hashPassword(createUserDto.senha);
    return this.prisma.usuarios.create({
      data: {
        cpf: createUserDto.cpf,
        nome: createUserDto.nome,
        telefone: createUserDto.telefone,
        email: createUserDto.email,
        senha: hashPassword,
        tipo: createUserDto.tipo,
      },
    });
  }

  async findAll() {
    return this.prisma.usuarios.findMany();
  }

  async findByID(id: number) {
    const user = await this.utils.exists(id);
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.utils.exists(id);
    if (!user) throw new NotFoundException('Usuário não encontrado');

    return this.prisma.usuarios.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
   const user = await this.utils.exists(id);
    if (!user) throw new NotFoundException('Usuário não encontrado');

    return this.prisma.usuarios.delete({ where: { id } });
  }
}
