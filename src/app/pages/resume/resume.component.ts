import { isPlatformBrowser, NgStyle } from '@angular/common';
import { afterNextRender, AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { SectionComponent } from '@app/component/section/section.component';
import { SectionsContainerComponent } from '@app/component/sections-container/sections-container.component';
import { ResumeExperienceComponent } from '@app/components/resume/resume-experience/resume-experience.component';
import { ResumeIndexComponent } from '@app/components/resume/resume-index/resume-index.component';
import { ResumeIntroductionComponent } from '@app/components/resume/resume-introduction/resume-introduction.component';
import { ResumeSkillComponent } from '@app/components/resume/resume-skill/resume-skill.component';
import { throttle } from 'lodash';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    SectionComponent,
    SectionsContainerComponent,
    ResumeIndexComponent,
    ResumeIntroductionComponent,
    ResumeSkillComponent,
    ResumeExperienceComponent
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent {

  items = [
    {
      id: 'education',
      title: 'Education',
      content: 'B.S. in Computer Science, University of California, Riverside, 2016'
    },
    {
      id: 'experience',
      title: 'Experience',
      content: 'Software Engineer, Google, 2016 - Present'
    },
    {
      id: 'skills',
      title: 'Skills',
      content: 'JavaScript, Angular, React, Node.js, MongoDB, SQL'
    },
  ];

}