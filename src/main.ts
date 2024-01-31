import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './app/environments/environment';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule);
