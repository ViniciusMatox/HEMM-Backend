import { Module } from '@nestjs/common';
import { EquipamentosController } from './equipamentos/equipamentos.controller';
import { EquipamentosService } from './equipamentos/equipamentos.service';
import { EquipamentosService } from './equipamentos/equipamentos.service';

@Module({
  controllers: [EquipamentosController],
  providers: [EquipamentosService]
})
export class EquipamentosModule {}
