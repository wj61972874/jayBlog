import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements AfterViewInit {

  title = 'jayBlog';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
