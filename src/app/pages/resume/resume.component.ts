import { isPlatformBrowser, NgStyle } from '@angular/common';
import { afterNextRender, AfterViewInit, Component, ElementRef, HostListener, inject, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { SectionComponent } from '@app/component/section/section.component';
import { SectionsContainerComponent } from '@app/component/sections-container/sections-container.component';
import { ResumeArticleComponent } from '@app/components/resume/resume-article/resume-article.component';
import { ResumeExperienceComponent } from '@app/components/resume/resume-experience/resume-experience.component';
import { ResumeIndexComponent } from '@app/components/resume/resume-index/resume-index.component';
import { ResumeIntroductionComponent } from '@app/components/resume/resume-introduction/resume-introduction.component';
import { ResumeProjectComponent } from '@app/components/resume/resume-project/resume-project.component';
import { ResumeSkillComponent } from '@app/components/resume/resume-skill/resume-skill.component';
import { DomainService } from '@app/services/domain.service';
import { throttle } from 'lodash';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    SectionComponent,
    SectionsContainerComponent,
    ResumeIndexComponent,
    ResumeIntroductionComponent,
    ResumeSkillComponent,
    ResumeExperienceComponent,
    ResumeProjectComponent,
    ResumeArticleComponent,
    NzPopoverModule
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent {

  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();
}