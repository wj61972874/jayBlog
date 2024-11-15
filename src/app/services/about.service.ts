import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AboutService {

    constructor(private http: HttpClient) { }

    apiGetDujitangIndex(): Observable<any> {
        // return this.http.get('http://localhost:3399/api/jayBlog/dujitang/index');
        // return this.http.get('http://localhost:4000/jayBlogApi/dujitang/index');
        return this.http.get('http://47.100.236.149/api/jayBlog/dujitang/index');

    }
}
