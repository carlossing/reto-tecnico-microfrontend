import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'gnx-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
})
export class UsersHomeComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit() {

    this.menuItems = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/admin/users']
      },
    ];
  }


}
