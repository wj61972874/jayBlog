import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeArticleComponent } from './resume-article.component';

describe('ResumeArticleComponent', () => {
  let component: ResumeArticleComponent;
  let fixture: ComponentFixture<ResumeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
