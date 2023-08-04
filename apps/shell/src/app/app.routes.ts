import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  {
    path: 'auth',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'users',
    loadChildren: () => import('users/Module').then((m) => m.RemoteEntryModule),
  },
];
