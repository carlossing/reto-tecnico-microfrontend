import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'gnx-prototipo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/admin/users']
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-trash',
        command: () => {
          // this.delete();
          console.log('salir');
        }
      }
    ];
  }
}
