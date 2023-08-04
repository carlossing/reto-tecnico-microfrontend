import {Component, OnInit} from '@angular/core';

// import {MenuItem} from 'primeng/api';

@Component({
  selector: 'gnx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  // items: MenuItem[] | undefined;
  //
  ngOnInit() {
    console.log('ngOnInit')
    //   this.items = [
    //     {
    //       label: 'Usuario',
    //       icon: 'pi pi-fw pi-plus',
    //       routerLink: ['/admin/users']
    //     },
    //     {
    //       label: 'Salir',
    //       icon: 'pi pi-fw pi-trash',
    //       command: () => {
    //         // this.delete();
    //         console.log('salir');
    //       }
    //     }
    //   ];
  }
}
