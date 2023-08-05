import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UsersResponse, UsersService} from "@gnx/client-users";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'gnx-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
})
export class UsersHomeComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [];

  private unsubscribe = new Subject<void>();

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
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAll()
      .pipe(
        takeUntil(this.unsubscribe)
      ).subscribe((response: UsersResponse) => {

      console.log(response);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
