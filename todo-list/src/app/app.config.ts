import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Module } from 'vm';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
