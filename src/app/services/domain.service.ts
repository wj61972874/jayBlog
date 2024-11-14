import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }

  getDomain(): string {
    return window.location.origin;
  }
}
