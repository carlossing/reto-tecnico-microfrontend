import {Route} from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
  },
];
