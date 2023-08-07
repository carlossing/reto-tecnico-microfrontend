import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'gnx-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent implements OnInit, OnDestroy {


  menuItems: MenuItem[] = [];


  ngOnInit() {

    this.menuItems = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/admin/users']
      },
    ];
  }


  ngOnDestroy() {
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}
