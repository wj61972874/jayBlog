import { isPlatformBrowser, NgClass } from '@angular/common';
import { afterNextRender, AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, Inject, OnInit, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { SectionDivinationComponent } from '@app/components/section-divination/section-divination.component';
import { SectionGameComponent } from '@app/components/section-game/section-game.component';
import { SectionIdentityComponent } from '@app/components/section-identity/section-identity.component';
import { SectionIntroductionComponent } from '@app/components/section-introduction/section-introduction.component';
import { SectionLocationComponent } from '@app/components/section-location/section-location.component';
import { SectionMeComponent } from '@app/components/section-me/section-me.component';
import { SectionOccupationComponent } from '@app/components/section-occupation/section-occupation.component';
import { SectionPersonalityComponent } from '@app/components/section-personality/section-personality.component';
import { SectionPictureComponent } from '@app/components/section-picture/section-picture.component';
import { SectionWordComponent } from '@app/components/section-word/section-word.component';
import { AboutService } from '@app/services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgClass,
    SectionMeComponent,
    SectionDivinationComponent,
    SectionIdentityComponent,
    SectionOccupationComponent,
    SectionGameComponent,
    SectionIntroductionComponent,
    SectionPersonalityComponent,
    SectionWordComponent,
    SectionPictureComponent,
    SectionLocationComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent implements OnInit, AfterViewInit {

  blurBanner: boolean = false;
  chickenSoup: string = '';

  @ViewChild('aboutContent') aboutContentEl: ElementRef | undefined;

  private aboutService = inject(AboutService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.fetchChickenSoup();
  }

  ngAfterViewInit(): void {
    if (this.aboutContentEl && isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element is visible');
            // 在这里添加逻辑，例如加载数据或触发动画
            this.blurBanner = true;
          } else {
            console.log('Element is not visible');
            this.blurBanner = false
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      });

      observer.observe(this.aboutContentEl?.nativeElement);
      console.log('ngAfterViewInit executed');
      this.cdr.detectChanges(); // 手动触发变更检测
    }
  }

  fetchChickenSoup() {
    // 在这里调用服务获取数据
    this.aboutService.apiGetDujitangIndex().subscribe((res) => {
      this.chickenSoup = res?.content || '';
    });

  }
}
