import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StaticHeaderComponent } from './components/static-header/static-header.component';

@NgModule({
  declarations: [AppComponent, StaticHeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
