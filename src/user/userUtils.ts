//classe para metodos auxiliares e que podem ser usados em outras partes do codigo.

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class Utils {
    constructor(private readonly prisma: PrismaService) {}

    // Verifica se user existe no banco
    async exists(id: number) : Promise<boolean> {
        const exist  = await this.prisma.usuarios.findUnique({ where: { id } });
        return !!exist;
    }
    //

    
}
