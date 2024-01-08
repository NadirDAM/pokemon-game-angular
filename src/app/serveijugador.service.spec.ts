import { TestBed } from '@angular/core/testing';

import { ServeijugadorService } from './serveijugador.service';

describe('ServeijugadorService', () => {
  let service: ServeijugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeijugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
