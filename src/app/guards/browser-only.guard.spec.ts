import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { browserOnlyGuard } from './browser-only.guard';

describe('browserOnlyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => browserOnlyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
