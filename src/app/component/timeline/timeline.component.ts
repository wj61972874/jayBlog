import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgIf, NgClass, DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.less'
})
export class TimelineComponent {

  diaryEntries = [
    {
      "createTime": "2021-07-01T00:00:00.000Z",
      "title": "日记第四天",
      "content": "今天天气不错",
      "coverImage": "https://www.baidu.com/img/flexible/logo/pc/result.png"
    },

    {
      "createTime": "2021-06-01T00:00:00.000Z",
      "title": "日记第三天",
      "content": "今天天气不错"
    },

    {
      "createTime": "2021-05-01T00:00:00.000Z",
      "title": "日记第二天",
      "content": "今天天气不错",
      "coverImage": "https://www.baidu.com/img/flexible/logo/pc/result.png"
    },

    {
      "createTime": "2021-04-01T00:00:00.000Z",
      "title": "日记第一天",
      "content": "今天天气不错"
    },
    {
      "createTime": "2021-04-01T00:00:00.000Z",
      "title": "日记第一天",
      "content": "今天天气不错"
    },

    {
      "createTime": "2021-06-01T00:00:00.000Z",
      "title": "日记第三天",
      "content": "今天天气不错"
    },

    {
      "createTime": "2021-05-01T00:00:00.000Z",
      "title": "日记第二天",
      "content": "今天天气不错",
      "coverImage": "https://www.baidu.com/img/flexible/logo/pc/result.png"
    },

    {
      "createTime": "2021-04-01T00:00:00.000Z",
      "title": "日记第一天",
      "content": "今天天气不错"
    }
  ]

}
