import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersHomeComponent} from "./components/users-home/users-home.component";
import {UsersDetailComponent} from "./components/users-detail/users-detail.component";

const routes: Routes = [
  {
    path: '',
    component: UsersHomeComponent,
    children: [
      {
        path: 'detail/:id',
        component: UsersDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
