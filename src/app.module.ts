import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeputadosModule } from './deputados/deputados.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DeputadosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
