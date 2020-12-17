import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'static-header-component';
import { AppModule } from './app/app.module';
import { startTimer } from './timer';

startTimer();
enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
defineCustomElements();
