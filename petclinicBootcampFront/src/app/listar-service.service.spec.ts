import { TestBed } from '@angular/core/testing';

import { ListarServiceService } from './listar-service.service';

describe('ListarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarServiceService = TestBed.get(ListarServiceService);
    expect(service).toBeTruthy();
  });
});
