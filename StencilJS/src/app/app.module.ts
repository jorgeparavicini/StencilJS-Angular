import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryWrapperComponent } from './components/gallery-wrapper/gallery-wrapper.component';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeWrapperComponent },
  { path: 'gallery', component: GalleryWrapperComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent, HomeWrapperComponent, GalleryWrapperComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
