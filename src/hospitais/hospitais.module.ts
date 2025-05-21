import { Module } from '@nestjs/common';
import { HospitaisController } from './hospitais.controller';
import { HospitaisService } from './hospitais.service';

@Module({
  controllers: [HospitaisController],
  providers: [HospitaisService]
})
export class HospitaisModule {}
