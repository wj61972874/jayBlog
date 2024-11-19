import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from '@app/interfaces/article.interface';
import { ArticleService } from '@app/services/article.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.less'
})
export class ArticlesComponent {

  articleService = inject(ArticleService);

  articles: IArticle[] = [];

  constructor(private router: Router, private message: NzMessageService) {
    this.fetchArticles();
  }

  fetchArticles() {
    this.articleService.apiGetArticles().subscribe((res: any) => {
      console.log(res);
      this.articles = res;
    });
  }

  goToArticle(article: IArticle) {
    // this.router.navigate(['/article', article.id]);
    this.message.info('正在努力开发中~');
  }

}
