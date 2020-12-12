import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeWrapperComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent, HomeWrapperComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
