import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDiaryInfo } from '@app/interfaces/diary.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass, DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.less'
})
export class TimelineComponent {

  @Input() diaries: IDiaryInfo[] = [];

  ngOnChanges() {
    console.log("diaries===", this.diaries);
  }

}
