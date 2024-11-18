import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
                    const modifiedBody = event.body?.result;
                    if (modifiedBody) {
                        return event.clone({ body: modifiedBody });
                    } else {
                        // throw new Error('modifiedBody 不能为空');
                        this.handleError()
                    }

                }
                return event;
            }),
            catchError(error => this.handleError(error))
        );
    }
    private handleError(error?: HttpErrorResponse): Observable<never> {
        if (error) {
            const status = error.status;
            console.log('status', status);
            let errMsg = '';
            if (status === 0) {
                errMsg = '网络出现未知的错误，请检查您的网络。';
            }
            if (status >= 300 && status < 400) {
                errMsg = `请求被服务器重定向，状态码为${status}`;
            }
            if (status >= 400 && status < 500) {
                errMsg = `客户端出错，可能是发送的数据有误，状态码为${status}`;
            }
            if (status >= 500) {
                errMsg = `服务器发生错误，状态码为${status}`;
            }
            if (status === 200) {
                errMsg = `服务器发生错误，状态码为${status}`;
            }


            return throwError(() => {
                return {
                    code: status,
                    message: errMsg
                };
            });
        } else {
            return throwError(() => {
                return {
                    code: 0,
                    message: '未知错误'
                };
            });
        }
    }
}