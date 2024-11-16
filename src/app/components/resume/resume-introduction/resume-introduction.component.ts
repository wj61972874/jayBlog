import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { ResumeContextService } from '@app/constants/resume';
import { DomainService } from '@app/services/domain.service';
import { SvgIconComponent } from 'angular-svg-icon';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume-introduction',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './resume-introduction.component.html',
  styleUrl: './resume-introduction.component.less'
})
export class ResumeIntroductionComponent implements OnInit {

  information: any[] = []
  socialAccountsService = inject(ResumeContextService);
  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();

  constructor() {
    afterNextRender(() => {
      AOS.init({
        once: true,
        mirror: true,
      });
    })
  }

  ngOnInit() {
    this.information = this.socialAccountsService.getInformation();
  }

}
