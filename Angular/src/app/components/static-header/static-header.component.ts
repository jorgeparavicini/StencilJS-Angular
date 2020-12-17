import { AfterViewChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'static-header',
  templateUrl: './static-header.component.html',
  styleUrls: ['./static-header.component.scss'],
})
export class StaticHeaderComponent implements AfterViewChecked {
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
