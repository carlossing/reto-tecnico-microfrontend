import {Route} from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then((m) => m.LoginModule),
  },
];
