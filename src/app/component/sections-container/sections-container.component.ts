import { isPlatformBrowser, NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, ElementRef, Renderer2, Inject, PLATFORM_ID, afterRender, ViewChild, AfterViewInit, afterNextRender, HostListener } from '@angular/core';
import { SectionContextService } from '@app/services/sectionContext/section-context.service';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import throttle from 'lodash/throttle';
import { SectionComponent } from '../section/section.component';


interface TOnScrolledParams {
  activeSection: number;
  scrollingStarted: boolean;
  sectionScrolledPosition: number;
}

@Component({
  standalone: true,
  selector: 'app-sections-container',
  templateUrl: './sections-container.component.html',
  styleUrls: ['./sections-container.component.less'],
  imports: [NgStyle, NgClass]
})

export class SectionsContainerComponent implements AfterViewInit {
  @Input() delay: number = 1000;
  @Input() verticalAlign: boolean = true;
  @Input() scrollBar: boolean = false;
  @Input() dots: boolean = true;
  @Input() prefixCls: string = 'hlui-fullpage';
  @Input() className?: string;
  @Input() sectionClassName: string = 'hlui-fullpage-section';
  @Input() dotsClass?: string;
  @Input() dotsAnchorClass?: string;
  @Input() activeClass: string = 'active';
  @Input() sectionPaddingTop: string | number = '0';
  @Input() sectionPaddingBottom: string | number = '0';
  @Input() shortcutKey: boolean = true;
  @Input() activeSection: number = 0;
  @Input() touchable: boolean = true;
  @Input() anchors: string[] = [];

  containerStyle = {
    height: '100%',
    width: '100%',
    position: 'relative',
    transform: '',
    transition: `all 1000ms ease`,
  };


  stateActiveSectionRef = 0;

  sectionScrolledPositionRef = 0;

  // 滚轮正在滚动标识
  scrollingStartedRef = false;

  // 重制滚动标识(scrollingStartedRef)的定时器
  resetScrollTimer: any = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sectionContextService: SectionContextService
  ) {
    afterNextRender(() => {

      this.sectionContextService.setContextData({
        verticalAlign: this.verticalAlign,
        sectionClassName: this.sectionClassName,
        sectionPaddingTop: this.sectionPaddingTop,
        sectionPaddingBottom: this.sectionPaddingBottom,
        prefixCls: this.prefixCls,
      });


      this.clearResetScrollTimer();
      this.removeOverflowFromBody();
      this.handleResize();
      if (!this.scrollBar) {
        this.addOverflowToBody();
        // 初始化时，监听 hash 的值
        this.handleHashChange();

        // 支持快捷键
        if (this.shortcutKey) {
          window.addEventListener('keydown', this.handleShortcutKeys);
        }

        // 支持touch事件
        // if (this.touchable) {
        //   this.handleTouchNav();
        // }
      }

    })
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('keydown', this.handleShortcutKeys);
    }

  }

  ngAfterViewInit() {

  }

  @HostListener('window:resize', [])
  onResizeEvent() {
    this.handleResize();
  }

  @HostListener('window:wheel', ['$event'])
  onWheelEvent(event: WheelEvent) {
    this.throttledOnWheelEvent(event);
  }

  @HostListener('window:hashchange', ['$event'])
  onHashChange(event: HashChangeEvent) {
    console.log('Hash changed:', event);
    this.handleHashChange();
  }

  // 使用 lodash 的 throttle 函数对 onWheelEvent 方法进行节流
  throttledOnWheelEvent = throttle((event: WheelEvent) => {
    console.log('throttledOnWheelEvent===进来了:');
    this.checkSectionPosition(event);
  }, 1000); // 1秒节流时间


  checkSectionPosition(event: any) {
    console.log('event===:', event, this.stateActiveSectionRef);
    const e = window.event || event;
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    const activeSection = this.stateActiveSectionRef - delta;
    console.log('activeSection===:', activeSection, this.stateActiveSectionRef, delta);
    if (this.scrollingStartedRef || activeSection < 0 || activeSection === this.anchors.length) {
      return;
    }
    this.setAnchorAndSectionTransition(activeSection);

  }


  setAnchorAndSectionTransition(index: number) {
    if (this.anchors.length === 0 || index === -1 || index >= this.anchors.length) {
      return;
    }
    const hash = this.anchors[index]
    const nextHash = '#' + hash;
    if (window.location.hash !== nextHash) {
      window.location.hash = '#' + hash;
    }

    // 设置translate偏移量和当前选中的Section
    const position = 0 - index * window.innerHeight;
    this.scrollingStartedRef = true;
    this.stateActiveSectionRef = index;
    this.sectionScrolledPositionRef = position;
    this.containerStyle.transform = `translate3d(0px, ${position}px, 0px)`;
    this.resetScroll();
  }

  resetScroll() {
    this.clearResetScrollTimer();
    // 重制滚动标识(scrollingStartedRef)的定时器
    this.resetScrollTimer = setTimeout(() => {
      this.scrollingStartedRef = false;
      // 在动画之后，再延迟300ms
    }, 1000 + 300)
  }

  // 清除重制滚动标识(scrollingStartedRef)的定时器
  clearResetScrollTimer() {
    if (this.resetScrollTimer) {
      clearTimeout(this.resetScrollTimer);
    }
  }

  // 禁止页面滚动
  addOverflowToBody() {
    document.querySelector('body')!.style.overflow = 'hidden';
  }
  // 解除禁止页面滚动
  removeOverflowFromBody() {
    document.querySelector('body')!.style.overflow = 'initial';
  }

  // hash发生改变时，修改当前显示的 Section 索引，设置Section需要偏移的距离
  handleHashChange() {
    console.log('handleHashChange===:', window.location.hash);
    const hash = window.location.hash.slice(1);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const activeSection = this.anchors.indexOf(hash);
    if (this.stateActiveSectionRef !== activeSection) {
      this.setAnchorAndSectionTransition(activeSection);
    }
  }

  handleShortcutKeys(e: any) {
    const event = window.event || e;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const activeSection =
      event.keyCode === 38 || event.keyCode === 37
        ? this.stateActiveSectionRef - 1
        : event.keyCode === 40 || event.keyCode === 39
          ? this.stateActiveSectionRef + 1
          : -1;

    if (
      this.scrollingStartedRef ||
      activeSection < 0 ||
      this.anchors.length === activeSection
    ) {
      return;
    }

    this.setAnchorAndSectionTransition(activeSection);
  }

  // handleTouchNav() {
  //   throw new Error('Method not implemented.');
  // }

  // 窗口大小改变时，修改当前显示的 Section 索引，修改URL中的hash值，设置Section需要偏移的距离
  handleResize() {
    const position = 0 - this.stateActiveSectionRef * window.innerHeight;
    this.scrollingStartedRef = true;
    this.sectionScrolledPositionRef = position;
    this.resetScroll();
  }

}