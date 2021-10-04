import { TestBed } from '@angular/core/testing';

import { DadosPagamentoService } from './dados-pagamento.service';

describe('DadosPagamentoService', () => {
  let service: DadosPagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosPagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
