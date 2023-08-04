import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('users/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: 'welcome',
  //   component: NxWelcomeComponent,
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
];
