import { TestBed } from '@angular/core/testing';

import { SectionContextService } from './section-context.service';

describe('SectionContextService', () => {
  let service: SectionContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
