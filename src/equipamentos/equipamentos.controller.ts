import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EquipamentosService } from './equipamentos.service';
import { CreateEquipamentoDto } from './dto/create-equipamento-dto';
import { UpdateEquipamentoDto } from './dto/update-equipamentos-dto';

@Controller('user')
export class EquipamentosController {
  constructor(private readonly equipamentoService: EquipamentosService) {}

  @Post()
  async create(@Body() createEquipamentoDto : CreateEquipamentoDto) {
    return this.equipamentoService.create(createEquipamentoDto);
  }

  @Get()
  async findAll(){
    return this.equipamentoService.findAll();
  }

  @Get()
  async findOne(@Param('id') id : string){
    return this.equipamentoService.findByID(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateEquipamentoDto: UpdateEquipamentoDto) {
    return this.equipamentoService.update(+id, UpdateEquipamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.equipamentoService.remove(+id);
  }

  
}
