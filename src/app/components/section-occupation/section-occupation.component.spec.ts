import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOccupationComponent } from './section-occupation.component';

describe('SectionOccupationComponent', () => {
  let component: SectionOccupationComponent;
  let fixture: ComponentFixture<SectionOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionOccupationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
