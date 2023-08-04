import {Route} from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
  },
];
