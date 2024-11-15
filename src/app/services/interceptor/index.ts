import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';

const interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
];

export default interceptors;