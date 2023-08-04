export * from './lib/authentication.module';
export * from './lib/services/authentication.service';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');
