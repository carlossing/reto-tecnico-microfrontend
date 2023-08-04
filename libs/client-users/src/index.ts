export * from './lib/client-users.module';
export * from './lib/services/users.service';

import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');
