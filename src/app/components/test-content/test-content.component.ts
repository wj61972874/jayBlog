import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-content',
  standalone: true,
  imports: [],
  templateUrl: './test-content.component.html',
  styleUrl: './test-content.component.less'
})
export class TestContentComponent {

  @Input() id: string = '';
}
