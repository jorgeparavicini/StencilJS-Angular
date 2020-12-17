import { getStartTime } from 'src/timer';
import { Component } from '@angular/core';

@Component({
  selector: 'gallery-wrapper',
  template: '<gallery-component [startTime]="getStartTime()"></gallery-component>',
})
export class GalleryWrapperComponent {
  public getStartTime(): number {
    return getStartTime();
  }
}
