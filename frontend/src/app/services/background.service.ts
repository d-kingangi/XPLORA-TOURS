
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private backgroundImageSource = new BehaviorSubject<string>('');
  currentBackgroundImage = this.backgroundImageSource.asObservable();

  changeBackgroundImage(imageUrl: string) {
    this.backgroundImageSource.next(imageUrl);
  }
}
