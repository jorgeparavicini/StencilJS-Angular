import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { getStartTime } from 'src/timer';
import { GalleryService } from './gallery.service';
import { GalleryEntry } from './models/gallery-entry.interface';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, AfterViewChecked {
  gallery?: GalleryEntry[];
  renderCount: number = 0;

  constructor(private galleryService: GalleryService) {}

  public ngOnInit(): void {
    this.galleryService
      .getGalleryEntries()
      .subscribe((entries: GalleryEntry[]) => (this.gallery = entries));
  }

  public ngAfterViewChecked(): void {
    if (this.gallery) {
      this.renderCount += 1;
      if (this.renderCount === 3) {
        console.log(`Render Time: ${performance.now() - getStartTime()}`);
      }
    }
  }
}
