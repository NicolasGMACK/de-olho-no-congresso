import { Controller, Get } from '@nestjs/common';
import { DeputadosService } from './deputados.service';

@Controller('deputados')
export class DeputadosController {
    constructor(private readonly deputadosService: DeputadosService){}

    @Get()
    async findAll(){
        return this.deputadosService.findAll();
    };

    @Get('/sincronizar')
    async sincronizar(){
      return this.deputadosService.sincronizarDeputados();  
    }
}
