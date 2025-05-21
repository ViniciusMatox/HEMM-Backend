import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteModule } from './teste/teste.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';

@Module({
  imports: [TesteModule, EquipamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
