import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDivinationComponent } from './section-divination.component';

describe('SectionDivinationComponent', () => {
  let component: SectionDivinationComponent;
  let fixture: ComponentFixture<SectionDivinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDivinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDivinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
