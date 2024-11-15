import { Component, inject, OnInit } from '@angular/core';
import { DomainService } from '@app/services/domain.service';

@Component({
  selector: 'app-section-picture',
  standalone: true,
  imports: [],
  templateUrl: './section-picture.component.html',
  styleUrl: './section-picture.component.less'
})
export class SectionPictureComponent implements OnInit {

  dailyPic: string = '';
  private domainService = inject(DomainService);

  ngOnInit(): void {
    const pictureIndex = (new Date().getDay() % 10);
    this.dailyPic = this.getRoutePrefix() + `/assets/images/dailyPic/pic${pictureIndex}.JPG`;
  }

  getRoutePrefix() {
    return this.domainService.getDomain();
  }

}