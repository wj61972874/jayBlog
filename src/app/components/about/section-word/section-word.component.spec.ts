import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWordComponent } from './section-word.component';

describe('SectionWordComponent', () => {
  let component: SectionWordComponent;
  let fixture: ComponentFixture<SectionWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
