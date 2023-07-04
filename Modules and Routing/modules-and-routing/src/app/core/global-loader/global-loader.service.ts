import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  isHidden: boolean = true;

  showLoader() {
    this.isHidden = false;
  }

  hideLoader() {
    this.isHidden = true;
  }
}
