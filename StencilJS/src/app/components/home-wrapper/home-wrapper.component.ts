import { getStartTime } from 'src/timer';
import { Component } from '@angular/core';

@Component({
  selector: 'home-wrapper',
  template: '<home-component [startTime]="getStartTime()"></home-component>',
})
export class HomeWrapperComponent {
  public getStartTime() {
    return getStartTime();
  }
}
