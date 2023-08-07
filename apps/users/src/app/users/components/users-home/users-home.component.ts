import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserEntityResponse, UsersCollectionResponse, UsersService} from "@gnx/client-users";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'gnx-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class UsersHomeComponent implements OnInit, OnDestroy {


  users: User[] = [];
  private unsubscribe = new Subject<void>();

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAll()
      .pipe(
        takeUntil(this.unsubscribe)
      ).subscribe((response: UsersCollectionResponse) => {
      this.users = response.items;
    });
  }

  openEditModal(user: User) {
    this.redirectToTestForm(user);
  }

  redirectToTestForm(user: User) {
    this.router.navigate(['/admin/users/detail/' + user.id]);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  confirm1(id: string) {

    Swal.fire({
      title: 'Alerta',
      text: "¿Estas seguro de eliminar este usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id)
          .pipe(
            takeUntil(this.unsubscribe)
          )
          .subscribe((response: UserEntityResponse) => {

            Swal.fire({
              title: 'Genial!',
              text: 'Archivado correcto',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then((result) => {
              if (result.isConfirmed) {
                this.getAllUsers();
              }
            });
          });
      }
      if (result.isDismissed) {
      }
    });
  }

}
