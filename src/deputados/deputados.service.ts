import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DeputadosService {
    constructor(
        private readonly httpService: HttpService,
        private readonly prisma: PrismaService,
    ){}

    async buscarTodosDeputadosDaAPI() {
        const url = 'https://dadosabertos.camara.leg.br/api/v2/deputados';
        const { data } = await firstValueFrom(this.httpService.get(url));

        return data.dados;
    }

    async sincronizarDeputados() {
        const deputadosDaAPI = await this.buscarTodosDeputadosDaAPI();

        for (const deputado of deputadosDaAPI){
            await this.prisma.deputado.upsert({
                where: {id: deputado.id},
                update: {
                    nome: deputado.nome,
                    siglaPartido: deputado.siglaPartido,
                    siglaUf: deputado.siglaUf,
                    urlFoto: deputado.urlFoto,
                    email: deputado.email
                },
                create: {
                    id: deputado.id,
                    nome: deputado.nome,
                    siglaPartido: deputado.siglaPartido,
                    siglaUf: deputado.siglaUf,
                    urlFoto: deputado.urlFoto,
                    email: deputado.email
                },
            });
        }
        return {message: 'Deputados sincronizados com sucesso!' };
    }

    async findAll() {
        return this.prisma.deputado.findMany();
    }
}
