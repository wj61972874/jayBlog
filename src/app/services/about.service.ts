import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainService } from './domain.service';

@Injectable({
    providedIn: 'root'
})
export class AboutService {
    domainService = inject(DomainService);
    routePrefix = this.domainService.getDomain();

    constructor(private http: HttpClient) { }

    apiGetDujitangIndex(): Observable<any> {
        // return this.http.get('http://localhost:3399/api/jayBlog/dujitang/index');
        // return this.http.get('http://localhost:4000/jayBlogApi/dujitang/index');
        // return this.http.get(`${this.routePrefix}/api/jayBlog/dujitang/index`);
        return this.http.get(`https://jaygogo-aigc.top/api/jayBlog/dujitang/index`);

    }
}
