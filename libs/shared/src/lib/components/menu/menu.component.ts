import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'gnx-prototipo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() items: MenuItem[]  = [];

  logoutMenu: MenuItem = {
    label: 'Salir',
    icon: 'pi pi-fw pi-trash',
    command: () => {
      // this.delete();
      console.log('salir');
    }
  };

  ngOnInit() {

    this.items.push(this.logoutMenu);
  }
}
