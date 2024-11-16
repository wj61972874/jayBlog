import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.less']
})
export class TypewriterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() text: string = '你好，我是汪杰。欢迎来到我的简历页面！';
  @Input() typeSpeed: number = 100; // 默认打印速度为100ms
  @Input() backSpeed: number = 50; // 默认清空速度为50ms
  @Input() loop: boolean = false; // 默认不循环
  displayText: string = '';
  index: number = 0;
  isDeleting: boolean = false;
  lastTime: number = 0;
  timeoutId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.typeWriter();
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  typeWriter(timestamp?: number): void {
    if (!timestamp) {
      requestAnimationFrame(this.typeWriter.bind(this));
      return;
    }

    const fullText = this.text;
    const speed = this.isDeleting ? this.backSpeed : this.typeSpeed;

    if (timestamp - this.lastTime < speed) {
      requestAnimationFrame(this.typeWriter.bind(this));
      return;
    }

    this.lastTime = timestamp;

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    }

    if (!this.isDeleting && this.displayText === fullText) {
      if (this.loop) {
        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          requestAnimationFrame(this.typeWriter.bind(this));
        }, 1000); // 停留1秒后开始删除
      } else {
        return;
      }
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.index = 0;
      if (!this.loop) {
        return;
      }
    }

    requestAnimationFrame(this.typeWriter.bind(this));
  }
}