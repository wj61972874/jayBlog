import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SectionContextData {
  verticalAlign: boolean;
  sectionClassName: string;
  sectionPaddingTop: string | number;
  sectionPaddingBottom: string | number;
  prefixCls: string;
}

@Injectable({
  providedIn: 'root',
})
export class SectionContextService {
  private contextData = new BehaviorSubject<SectionContextData>({
    verticalAlign: false,
    sectionClassName: 'Section',
    sectionPaddingTop: '0',
    sectionPaddingBottom: '0',
    prefixCls: '',
  });

  contextData$ = this.contextData.asObservable();

  setContextData(data: SectionContextData) {
    this.contextData.next(data);
  }
}