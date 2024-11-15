import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AboutService {

    constructor(private http: HttpClient) { }

    apiGetDujitangIndex(): Observable<any> {
        return this.http.get('http://localhost:4000/api/dujitang/index');
    }
}
