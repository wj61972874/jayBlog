import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMeComponent } from './section-me.component';

describe('SectionMeComponent', () => {
  let component: SectionMeComponent;
  let fixture: ComponentFixture<SectionMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
