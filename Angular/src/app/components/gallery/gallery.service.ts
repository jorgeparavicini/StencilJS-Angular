import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryEntry } from './models/gallery-entry.interface';

const URL = "";

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  public getGalleryEntries(): Observable<GalleryEntry[]> {
      return this.http.get<GalleryEntry[]>(URL);
  }
}
