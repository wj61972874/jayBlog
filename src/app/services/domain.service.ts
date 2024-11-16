import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
// import { environment } from '../../environments/environment';
import { environment, domain as devDomain } from '@env/environments';
import { domain } from '@env/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DomainService {


  domain: string = ''

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.domain = this.getDomain();
  }

  getDomain(): string {
    if (isPlatformBrowser(this.platformId)) {
      // 客户端环境
      return window.location.origin;
    } else {
      // 服务端环境
      return environment.production ? domain : devDomain;
    }
  }
}