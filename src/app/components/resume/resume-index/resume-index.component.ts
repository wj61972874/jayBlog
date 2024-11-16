import { afterNextRender, AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DynamicSvgComponent } from '@app/component/dynamic-svg/dynamic-svg.component';
import { TypewriterComponent } from '@app/component/typewriter/typewriter.component';
import { ResumeContextService } from '@app/constants/resume';
import { SvgIconComponent } from 'angular-svg-icon';
// import { SocialAccounts } from '@app/constants/resume';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume-index',
  standalone: true,
  imports: [TypewriterComponent, SvgIconComponent],
  templateUrl: './resume-index.component.html',
  styleUrl: './resume-index.component.less'
})
export class ResumeIndexComponent implements OnInit {

  socialAccounts: any[] = [];

  socialAccountsService = inject(ResumeContextService);

  constructor() {
    afterNextRender(() => {
      AOS.init({
        once: true,
        mirror: true,
      });
    })
  }

  ngOnInit() {
    this.socialAccounts = this.socialAccountsService.getSocialAccounts();
  }

}
