import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeIntroductionComponent } from './resume-introduction.component';

describe('ResumeIntroductionComponent', () => {
  let component: ResumeIntroductionComponent;
  let fixture: ComponentFixture<ResumeIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
