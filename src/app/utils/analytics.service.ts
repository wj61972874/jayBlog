import { Injectable } from '@angular/core';
import AnalyticsSDK from 'analytics-sdk-jay';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private analyticsSDK: any;

  constructor() {
    this.analyticsSDK = new AnalyticsSDK();
  }

  init(config: { apiEndpoint: string; userId: string; userRole: string; trackClicks: boolean; trackViews: boolean; trackSearches: boolean; searchButtonId?: string }) {
    this.analyticsSDK.init(config);
  }

  trackClick(event: any) {
    console.log('trackClick', event);
    this.analyticsSDK.trackClick(event);
  }

  trackView(event: any) {
    this.analyticsSDK.trackView(event);
  }

  trackSearch(event: any) {
    this.analyticsSDK.trackSearch(event);
  }
}