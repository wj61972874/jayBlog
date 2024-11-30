import { Component } from '@angular/core';
import { TimelineComponent } from '@app/component/timeline/timeline.component';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.less'
})
export class DiaryComponent {

}
