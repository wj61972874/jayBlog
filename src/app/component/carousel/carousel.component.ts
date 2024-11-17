import { NgClass } from '@angular/common';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { DomainService } from '@app/services/domain.service';
import { NzCarouselComponent, NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NzIconModule, NzCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less'
})

export class CustomCarouselComponent {
  @Input() isMobile?: boolean = false;
  @Input() className?: string = '';
  @Input() allowArrow?: boolean = true;
  @ViewChild(NzCarouselComponent, { static: false }) carousel!: NzCarouselComponent;

  @Input() experiences: any[] = [];

  effect = 'scrollx';

  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();


  array = [1, 2, 3, 4];

  onClickPrev() {
    console.log('prev carousel===', this.carousel);
    this.carousel.pre();
  }

  onClickNext() {
    console.log('next carousel===', this.carousel);
    this.carousel.next();
  }
}