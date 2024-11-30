import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  apiGetDiaries(): Observable<any> {

    // return this.http.get(`http://localhost:8080/api/jayBlog/diaries`);
    return this.http.get(`https://jaygogo-aigc.top/api/jayBlog/diaries`);
  }

}
