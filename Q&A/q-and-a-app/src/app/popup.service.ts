import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  confirm(msg: string) {
    const userChoice = window.confirm(msg);

    return Observable.create((observer: any) => {
      observer.next(userChoice);
      observer.complete();
    });
  }
}
