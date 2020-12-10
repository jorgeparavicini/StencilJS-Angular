import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryEntry } from './models/gallery-entry.interface';

const URL = "https://raw.githubusercontent.com/jorgeparavicini/StencilJS-Angular/GalleryComponent/Angular/src/assets/gallery_db.json";

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  public getGalleryEntries(): Observable<GalleryEntry[]> {
      return this.http.get<GalleryEntry[]>(URL);
  }
}
