import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {User, UsersCollectionResponse, UsersService} from "@gnx/client-users";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'gnx-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
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


}
