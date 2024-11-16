import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dynamic-svg',
  standalone: true,
  templateUrl: './dynamic-svg.component.html',
  styleUrls: ['./dynamic-svg.component.less'],
  imports: [NgClass]
})
export class DynamicSvgComponent implements OnInit {
  @Input() svgPath: string = '';
  @Input() className?: string = '';
  svgContent: SafeHtml = '';

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loadSvg();
  }

  loadSvg(): void {
    this.http.get(this.svgPath, { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      error => {
        console.error('Error loading SVG:', error);
      }
    );
  }
}