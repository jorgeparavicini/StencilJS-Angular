import { AfterViewChecked, Component } from '@angular/core';
import { getStartTime } from 'src/timer';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewChecked {
  startTime: number = getStartTime();

  public ngAfterViewChecked(): void {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
}
