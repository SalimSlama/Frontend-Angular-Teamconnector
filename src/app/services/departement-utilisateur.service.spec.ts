import { TestBed } from '@angular/core/testing';

import { DepartementUtilisateurService } from './departement-utilisateur.service';

describe('DepartementUtilisateurService', () => {
  let service: DepartementUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
