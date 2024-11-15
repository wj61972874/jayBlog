import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPictureComponent } from './section-picture.component';

describe('SectionPictureComponent', () => {
  let component: SectionPictureComponent;
  let fixture: ComponentFixture<SectionPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
