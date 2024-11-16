import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-word',
  standalone: true,
  imports: [],
  templateUrl: './section-word.component.html',
  styleUrl: './section-word.component.less'
})
export class SectionWordComponent {

  @Input() chickenSoup: string = '';
}
