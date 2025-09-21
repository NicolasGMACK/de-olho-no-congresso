import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeputadosModule } from './deputados/deputados.module';

@Module({
  imports: [DeputadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
