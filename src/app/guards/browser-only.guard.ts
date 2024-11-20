import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BrowserOnlyGuard implements CanActivate {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (isPlatformBrowser(this.platformId)) {
      return true;
    } else {
      console.log("杰哥测试=====路由守卫进来了")
      // 在服务器端渲染时跳过特定路由
      return this.router.parseUrl('/');
    }
  }
}