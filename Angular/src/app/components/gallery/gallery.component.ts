import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { GalleryEntry } from './models/gallery-entry.interface';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallery?: GalleryEntry[];

  constructor(private galleryService: GalleryService) {}

  public ngOnInit(): void {
    this.galleryService
      .getGalleryEntries()
      .subscribe((entries: GalleryEntry[]) => (this.gallery = entries));
  }
}
