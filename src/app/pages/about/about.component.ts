import { isPlatformBrowser, NgClass } from '@angular/common';
import { afterNextRender, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { SectionDivinationComponent } from '@app/components/section-divination/section-divination.component';
import { SectionGameComponent } from '@app/components/section-game/section-game.component';
import { SectionIdentityComponent } from '@app/components/section-identity/section-identity.component';
import { SectionIntroductionComponent } from '@app/components/section-introduction/section-introduction.component';
import { SectionMeComponent } from '@app/components/section-me/section-me.component';
import { SectionOccupationComponent } from '@app/components/section-occupation/section-occupation.component';
import { SectionPersonalityComponent } from '@app/components/section-personality/section-personality.component';

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
    SectionPersonalityComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent implements OnInit, AfterViewInit {

  blurBanner: boolean = false;

  @ViewChild('aboutContent') aboutContentEl: ElementRef | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

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
}
