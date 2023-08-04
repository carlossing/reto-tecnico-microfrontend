import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  // },
];
