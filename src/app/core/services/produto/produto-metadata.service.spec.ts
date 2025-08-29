import { TestBed } from '@angular/core/testing';

import { ProdutoMetadataService } from './produto-metadata.service';

describe('ProdutoMetadataService', () => {
  let service: ProdutoMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
