import { Component } from '@angular/core';
import { DynamicSvgComponent } from '@app/component/dynamic-svg/dynamic-svg.component';

@Component({
  selector: 'app-section-game',
  standalone: true,
  imports: [DynamicSvgComponent],
  templateUrl: './section-game.component.html',
  styleUrl: './section-game.component.less'
})
export class SectionGameComponent {

}
