import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AboutService {

    constructor(private http: HttpClient) { }

    apiGetDujitangIndex(): Observable<any> {
        return this.http.get('http://47.100.236.149/jayBlogApi/dujitang/index');
    }
}
