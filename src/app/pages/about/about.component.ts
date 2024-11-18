import { isPlatformBrowser, NgClass } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, Inject, OnInit, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SectionDivinationComponent } from '@app/components/about/section-divination/section-divination.component';
import { SectionGameComponent } from '@app/components/about/section-game/section-game.component';
import { SectionIdentityComponent } from '@app/components/about/section-identity/section-identity.component';
import { SectionIntroductionComponent } from '@app/components/about/section-introduction/section-introduction.component';
import { SectionLocationComponent } from '@app/components/about/section-location/section-location.component';
import { SectionMeComponent } from '@app/components/about/section-me/section-me.component';
import { SectionOccupationComponent } from '@app/components/about/section-occupation/section-occupation.component';
import { SectionPersonalityComponent } from '@app/components/about/section-personality/section-personality.component';
import { SectionPictureComponent } from '@app/components/about/section-picture/section-picture.component';
import { SectionWordComponent } from '@app/components/about/section-word/section-word.component';
import { AboutService } from '@app/services/about.service';
import { DomainService } from '@app/services/domain.service';

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
    // SectionLocationComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent implements OnInit, AfterViewInit {

  blurBanner: boolean = false;
  chickenSoup: string = '';
  domainService = inject(DomainService);
  routePrefix = this.domainService.getDomain();

  @ViewChild('aboutContent') aboutContentEl: ElementRef | undefined;

  private aboutService = inject(AboutService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef, private router: Router) {

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
      console.log("res=========", res);
      this.chickenSoup = res?.content || '他喜欢你素颜，必须是素颜好看。';
    });
  }

  goJayHome() {
    this.router.navigate(['/home']);
  }
}
