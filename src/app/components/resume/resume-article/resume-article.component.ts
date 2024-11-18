import { Component, inject } from '@angular/core';
import { TypewriterComponent } from '@app/component/typewriter/typewriter.component';
import { ResumeContextService } from '@app/constants/resume';

@Component({
  selector: 'app-resume-article',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './resume-article.component.html',
  styleUrl: './resume-article.component.less'
})
export class ResumeArticleComponent {

  blogLink: string = '';
  resumeContextService = inject(ResumeContextService);

  ngOnInit() {
    this.blogLink = this.resumeContextService.getBlogLink();
  }
}
