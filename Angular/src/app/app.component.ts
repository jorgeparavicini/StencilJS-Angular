import { getStartTime } from 'src/timer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public getStartTime(): number {
    return getStartTime();
  }
}
