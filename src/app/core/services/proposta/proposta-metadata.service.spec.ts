import { TestBed } from '@angular/core/testing';

import { PropostaMetadataService } from './proposta-metadata.service';

describe('PropostaMetadataService', () => {
  let service: PropostaMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropostaMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
