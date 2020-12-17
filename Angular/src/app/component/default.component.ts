import { AfterViewChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'default-component',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements AfterViewChecked {
  @Input() startTime: number = 0;
  private isFirstCheck = true;

  public ngAfterViewChecked(): void {
    if (this.isFirstCheck) {
      this.isFirstCheck = false;
    } else {
      console.log(`Render Time ${performance.now() - this.startTime}`);
    }
  }
}
