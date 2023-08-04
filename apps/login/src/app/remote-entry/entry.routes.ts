import {Route} from '@angular/router';
import {RemoteEntryComponent} from './entry.component';

export const remoteRoutes: Route[] = [
  // {path: '', component: RemoteEntryComponent},
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then((m) => m.LoginModule),
  },
];
