import { Component } from '@angular/core';
import { getStartTime } from 'src/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public getStartTime() {
    return getStartTime();
  }
}
