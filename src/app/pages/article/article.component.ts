import { Component, inject } from '@angular/core';
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


  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  markdownSrc: string = '';

  articleService = inject(ArticleService);

  constructor(private route: ActivatedRoute) { }

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

}
