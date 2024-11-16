import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPersonalityComponent } from './section-personality.component';

describe('SectionPersonalityComponent', () => {
  let component: SectionPersonalityComponent;
  let fixture: ComponentFixture<SectionPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPersonalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
