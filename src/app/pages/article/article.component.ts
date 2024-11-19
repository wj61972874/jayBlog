import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '@app/services/article.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.less'
})
export class ArticleComponent {

  markdownSrc: string = '';

  articleService = inject(ArticleService);

  isBrowser: boolean = false;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {
    afterNextRender(() => {
      // this.isBrowser = isPlatformBrowser(this.platformId);
      this.isBrowser = isPlatformBrowser(this.platformId);
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleId = params.get('id');
      // 你可以在这里使用 articleId 进行其他操作，例如从服务中获取文章数据
      console.log("articleId===", articleId);
      this.apiGetArticleMarkdownById(articleId);
    });
  }

  apiGetArticleMarkdownById(id: string | null) {
    this.articleService.apiGetArticleById(id).subscribe((res: any) => {
      console.log(res);
      this.markdownSrc = res;
    });
  }

  // isBrowser(): boolean {
  //   const isBrowser = isPlatformBrowser(this.platformId);
  //   console.log('isBrowser======', isBrowser);
  //   return isBrowser;
  // }
}
