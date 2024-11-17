import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResumeContextService } from '@app/constants/resume';
import { DomainService } from '@app/services/domain.service';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressFormatter, NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-resume-skill',
  standalone: true,
  imports: [NgClass, NgStyle, NzPopoverModule, NzProgressModule],
  templateUrl: './resume-skill.component.html',
  styleUrl: './resume-skill.component.less'
})
export class ResumeSkillComponent implements OnInit {

  skills: any[] = []
  resumeContextService = inject(ResumeContextService);
  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();


  ngOnInit() {
    this.skills = this.resumeContextService.getSkills();
  }


  getFormat: NzProgressFormatter = (percent: number) => {
    return `熟练度\r\n${percent}%`;
  }
}
