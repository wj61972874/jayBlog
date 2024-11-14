import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-svg',
  standalone: true,
  templateUrl: './dynamic-svg.component.html',
  styleUrls: ['./dynamic-svg.component.less']
})
export class DynamicSvgComponent implements OnInit {
  @Input() svgPath: string = '';
  svgContent: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

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