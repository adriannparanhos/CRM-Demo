import { TestBed } from '@angular/core/testing';

import { ClienteMetadataService } from './cliente-metadata.service';

describe('ClienteMetadataService', () => {
  let service: ClienteMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
