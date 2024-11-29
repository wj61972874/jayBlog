import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle, ITagCount } from '@app/interfaces/article.interface';
import { ArticleService } from '@app/services/article.service';
import { AnalyticsService } from '@app/utils/analytics.service';
import { NzMessageService } from 'ng-zorro-antd/message';

import { presetColors } from 'ng-zorro-antd/core/color';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NzTagModule, DatePipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.less'
})
export class ArticlesComponent {

  articleService = inject(ArticleService);

  articles: IArticle[] = [];

  tags: ITagCount[] = [];

  readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#55acee', '#ffaa00', '#d4526e', '#f9d900', '#00a8c6', '#7b0051'];

  constructor(private router: Router, private message: NzMessageService, private analyticsService: AnalyticsService) {
    this.fetchArticles();
    this.fetchTags();
  }

  fetchArticles() {
    this.articleService.apiGetArticles().subscribe((res: any) => {
      console.log(res);
      this.articles = res;
    });
  }

  fetchTags() {
    this.articleService.apiGetTagsWithArticleCounts().subscribe((res: any) => {
      console.log("标签列表====：", res);
      this.tags = res;
    });
  }

  goToArticle(article: IArticle) {
    this.analyticsService.trackClick({});
    this.router.navigate(['/article', article.id], {
      state: { markdownSrc: article.markdownSrc }
    });
    // this.message.info('正在努力开发中~');
  }

}
