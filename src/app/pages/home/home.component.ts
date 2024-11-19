import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ArticlesComponent } from '@app/components/articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
