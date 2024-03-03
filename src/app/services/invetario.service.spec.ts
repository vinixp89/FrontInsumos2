import { TestBed } from '@angular/core/testing';

import { InvetarioService } from './invetario.service';

describe('InvetarioService', () => {
  let service: InvetarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvetarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
