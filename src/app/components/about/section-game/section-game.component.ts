import { Component } from '@angular/core';
import { DynamicSvgComponent } from '@app/component/dynamic-svg/dynamic-svg.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-section-game',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './section-game.component.html',
  styleUrl: './section-game.component.less'
})
export class SectionGameComponent {

}
