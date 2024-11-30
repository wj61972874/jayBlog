import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ArticleComponent } from './pages/article/article.component';
import { BrowserOnlyGuard } from './guards/browser-only.guard';
import { DiaryComponent } from './pages/diary/diary.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'diary',
    component: DiaryComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
];
