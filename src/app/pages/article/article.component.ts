import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { afterNextRender, Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  isServer: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      this.route.paramMap.subscribe(params => {
        const articleId = params.get('id');
        // 你可以在这里使用 articleId 进行其他操作，例如从服务中获取文章数据
        console.log("articleId===", articleId);
        // this.apiGetArticleMarkdownById(articleId);
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras?.state) {
          this.markdownSrc = navigation.extras.state['markdownSrc'];
        }
      });
    }

  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.route.paramMap.subscribe(params => {
        const articleId = params.get('id');
        // 你可以在这里使用 articleId 进行其他操作，例如从服务中获取文章数据
        console.log("articleId===", articleId);
        this.apiGetArticleMarkdownById(articleId);
      });
    }

  }

  apiGetArticleMarkdownById(id: string | null) {
    this.articleService.apiGetArticleById(id).subscribe((res: any) => {
      console.log(res);
      this.markdownSrc = res;
    });
  }

}
