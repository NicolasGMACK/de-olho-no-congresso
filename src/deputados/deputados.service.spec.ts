import { Test, TestingModule } from '@nestjs/testing';
import { DeputadosService } from './deputados.service';

describe('DeputadosService', () => {
  let service: DeputadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeputadosService],
    }).compile();

    service = module.get<DeputadosService>(DeputadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
