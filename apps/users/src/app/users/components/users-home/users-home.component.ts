import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UsersResponse, UsersService} from "@gnx/client-users";

@Component({
  selector: 'gnx-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
})
export class UsersHomeComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(
    private userService: UsersService
  ) {
  }

  ngOnInit() {

    this.menuItems = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/admin/users']
      },
    ];
    this.userService.getAll().subscribe((response: UsersResponse) => {

      console.log(response);
    })
  }


}
