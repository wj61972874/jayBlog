import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  apiGetArticles(): Observable<any> {

    return this.http.get(`http://localhost:8080/api/jayBlog/articles`);
    // return this.http.get(`http://jaygogo-aigc.top/api/jayBlog/articles`);
  }

  apiGetArticleById(id: string | null): Observable<any> {
    return this.http.get(`http://localhost:8080/api/jayBlog/article/${id}`);
    // return this.http.get(`http://jaygogo-aigc.top/api/jayBlog/article/${id}`);
  }
}
