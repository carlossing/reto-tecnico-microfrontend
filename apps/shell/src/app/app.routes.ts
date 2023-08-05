import {Route} from '@angular/router';
import {AuthenticationGuard} from "@gnx/shared";
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  {
    path: 'auth',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],

    children: [
      {
        path: '',
        loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'users',
        loadChildren: () => import('users/Module').then((m) => m.RemoteEntryModule),
      },

    ]
  },
  // {
  //   path: 'users',
  //   loadChildren: () => import('users/Module').then((m) => m.RemoteEntryModule),
  // },
];
