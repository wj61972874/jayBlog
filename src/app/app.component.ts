import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { AnalyticsService } from './utils/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements AfterViewInit {

  title = 'jayBlog';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private analyticsService: AnalyticsService) {

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      this.analyticsService.init({
        // apiEndpoint: 'http://localhost:8080/api/analytics/event-log',
        apiEndpoint: 'https://jaygogo-aigc.top/api/analytics/event-log',
        userId: localStorage.getItem('user_id') || 'anonymous',
        userRole: localStorage.getItem('user_role') || 'guest',
        trackClicks: false,
        trackViews: true,
        trackSearches: false,
      })
    }
  }
}
