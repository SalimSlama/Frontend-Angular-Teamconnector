import { TestBed } from '@angular/core/testing';

import { TerminauxService } from './terminaux.service';

describe('TerminauxService', () => {
  let service: TerminauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
