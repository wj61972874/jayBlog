import { Component, inject } from '@angular/core';
import { TimelineComponent } from '@app/component/timeline/timeline.component';
import { IDiaryInfo } from '@app/interfaces/diary.interface';
import { DiaryService } from '@app/services/diary.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.less'
})
export class DiaryComponent {

  diaries: IDiaryInfo[] = [];

  diaryService = inject(DiaryService);

  constructor() {
    this.fetchDiaries();
  }

  fetchDiaries() {
    // fetch diaries
    this.diaryService.apiGetDiaries().subscribe((res: any) => {
      console.log(res);
      this.diaries = res;
    });

  }
}
