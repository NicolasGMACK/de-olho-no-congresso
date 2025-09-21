import { Module } from '@nestjs/common';
import { HttpModule} from '@nestjs/axios';
import { DeputadosController } from './deputados.controller';
import { DeputadosService } from './deputados.service';

@Module({
  imports: [HttpModule],
  controllers: [DeputadosController],
  providers: [DeputadosService]
})
export class DeputadosModule {}
