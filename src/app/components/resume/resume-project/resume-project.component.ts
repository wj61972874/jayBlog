import { NgFor, NgIf, NgStyle } from '@angular/common';
import { afterNextRender, AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ResumeContextService } from '@app/constants/resume';
import { DomainService } from '@app/services/domain.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { register } from 'swiper/element/bundle';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
register();


@Component({
  selector: 'app-resume-project',
  standalone: true,
  imports: [NgStyle, NzIconModule, NzModalModule, NzButtonModule],
  templateUrl: './resume-project.component.html',
  styleUrl: './resume-project.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResumeProjectComponent {


  @ViewChild('swiper') swiperEl!: ElementRef;

  swiperParams = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 60,
    slideActiveClass: 'swiper-slide-active',
    scrollbar: false,
    navigation: true,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [
      ':host .swiper-button-next , :host .swiper-button-prev { color: rgb(255 255 255 / 70%); }',
      ':host .swiper-button-next , :host .swiper-button-prev :hover { color: rgb(255 255 255 / 100%); }',
      ':host .swiper-button-prev {  transform: translateX(-60px);left: calc((100vw - 750px) / 2); }',
      ':host .swiper-button-next {  transform: translateX(60px);right: calc((100vw - 750px) / 2); }'
    ],
  };

  projects: any[] = []
  resumeContextService = inject(ResumeContextService);
  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();

  summaryModalVisable: boolean = false;
  summaryContent: string = '';

  constructor() {
    afterNextRender(() => {
      Object.assign(this.swiperEl.nativeElement, this.swiperParams);
      this.swiperEl.nativeElement.initialize();
    })
  }

  ngOnInit() {
    this.projects = this.resumeContextService.getProjects();
  }

  onLinkClick(event: Event, link: string | null): void {
    if (!link) {
      event.preventDefault();
    }
  }

  onOpenVisibleSummary(value: string) {
    this.summaryModalVisable = true;
    this.summaryContent = value;
  }

  onCloseVisibleSummary() {
    this.summaryModalVisable = false
    this.summaryContent = '';
  }
}
