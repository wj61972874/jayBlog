import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSkillComponent } from './resume-skill.component';

describe('ResumeSkillComponent', () => {
  let component: ResumeSkillComponent;
  let fixture: ComponentFixture<ResumeSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
