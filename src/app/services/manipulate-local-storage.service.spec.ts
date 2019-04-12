import { TestBed } from '@angular/core/testing';

import { ManipulateLocalStorageService } from './manipulate-local-storage.service';

describe('ManipulateLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManipulateLocalStorageService = TestBed.get(ManipulateLocalStorageService);
    expect(service).toBeTruthy();
  });
});
