import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, ElementRef, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { SectionContextService } from '@app/services/sectionContext/section-context.service';


@Component({
  standalone: true,
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less'],
  imports: [NgStyle]
})
export class SectionComponent implements OnInit, OnDestroy {
  @Input() color?: string = '';
  @Input() className?: string = '';
  @Input() id?: string = '';
  @Input() verticalAlign?: boolean = false;
  @Input() children?: any;

  windowHeight: number = 0;
  sectionContext: any;

  sectionStyle: { [key: string]: string | number } = {
    width: '100%',
    display: '',
    height: '',
    'max-height': '',
    overflow: 'auto',
    'background-color': this.color || '', // 确保 backgroundColor 是 string 类型
    "padding-top": '',
    'padding-bottom': '',
  };

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sectionContextService: SectionContextService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.sectionContextService.contextData$.subscribe(context => {
        this.sectionContext = context;
        this.updateSectionStyle();
      });

      this.handleResize();
      window.addEventListener('resize', this.handleResize.bind(this));
    }

  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }

  }

  handleResize() {
    this.windowHeight = window.innerHeight;
    this.updateSectionStyle();
  }

  renderVerticalAlign() {
    const verticalAlignStyle = {
      display: 'table-cell',
      verticalAlign: 'middle',
      width: '100%',
    };
    // return `<div style="${this.convertStyleToString(verticalAlignStyle)}">${this.children}</div>`;
  }

  updateSectionStyle() {
    const alignVertical = this.verticalAlign || this.sectionContext.verticalAlign;

    this.sectionStyle['display'] = alignVertical ? 'block' : 'table',
      this.sectionStyle['height'] = `${this.windowHeight}px`,
      this.sectionStyle['max-height'] = `${this.windowHeight}px`,
      this.sectionStyle['padding-top'] = this.sectionContext.sectionPaddingTop,
      this.sectionStyle['padding-bottom'] = this.sectionContext.sectionPaddingBottom;



    // this.renderer.setAttribute(this.el.nativeElement, 'style', this.convertStyleToString(this.sectionStyle));
  }

  convertStyleToString(style: { [key: string]: string | number }): string {
    return Object.entries(style).map(([key, value]) => `${key}: ${value}`).join('; ');
  }
}