import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIdentityComponent } from './section-identity.component';

describe('SectionIdentityComponent', () => {
  let component: SectionIdentityComponent;
  let fixture: ComponentFixture<SectionIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionIdentityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
