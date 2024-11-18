import { Component, inject } from '@angular/core';
import { CustomCarouselComponent } from '@app/component/carousel/carousel.component';
import { ResumeContextService } from '@app/constants/resume';
import { DomainService } from '@app/services/domain.service';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [NzIconModule, NzCarouselModule],
  templateUrl: './resume-experience.component.html',
  styleUrl: './resume-experience.component.less'
})
export class ResumeExperienceComponent {

  experiences: any[] = []
  resumeContextService = inject(ResumeContextService);
  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();


  ngOnInit() {
    this.experiences = this.resumeContextService.getExperiences();
  }
}
