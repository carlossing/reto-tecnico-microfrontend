export * from './lib/authentication.module';
export * from './lib/services/authentication.service';
export * from './lib/guards/authentication.guard';
export * from './lib/models/authentication.model';
import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');
