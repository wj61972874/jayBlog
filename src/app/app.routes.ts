import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
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
    path: 'article/:id',
    component: ArticleComponent,
  },
  // {
  //   path: 'articles',
  //   // component: ArticlesComponent
  //   children: [
  //     {
  //       path: '',
  //       component: ArticlesComponent
  //     },
  //     {
  //       path: 'detail/:id',
  //       component: ArticleDetailComponent
  //     }
  //   ]
  // },
  {
    path: 'resume',
    component: ResumeComponent
  },
];
