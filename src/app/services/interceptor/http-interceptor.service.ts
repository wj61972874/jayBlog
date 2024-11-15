import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                    // 在这里对响应结果进行统一处理

                    // 你可以在这里对响应数据进行修改或处理
                    const modifiedBody = event.body.result;
                    return event.clone({ body: modifiedBody });
                }
                return event;
            })
        );
    }
}