import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGameComponent } from './section-game.component';

describe('SectionGameComponent', () => {
  let component: SectionGameComponent;
  let fixture: ComponentFixture<SectionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
