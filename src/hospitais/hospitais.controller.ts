import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HospitaisService } from './hospitais.service';
import { CreateHospitaisDto } from './dto/create-hospitais-dto';
import { UpdateHospitaisDto } from './dto/update-hospitais-dto';

@Controller('user')
export class HospitaisController {
  constructor(private readonly hospitaisService: HospitaisService) {}

  @Post()
  async create(@Body() createHospitaisDto : CreateHospitaisDto) {
    return this.hospitaisService.create(createHospitaisDto);
  }

  @Get()
  async findAll(){
    return this.hospitaisService.findAll();
  }

  @Get()
  async findOne(@Param('id') id : string){
    return this.hospitaisService.findByID(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHospitaisDto: UpdateHospitaisDto) {
    return this.hospitaisService.update(+id, updateHospitaisDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.hospitaisService.remove(+id);
  }

  
}
