import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User, UsersService} from "@gnx/client-users";

@Component({
  selector: 'gnx-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {

  id: string;
  user: User;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
  ) {

  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getUser(this.id);
  }

  getUser(id: string) {
    this.userService.getOne(id).subscribe((response: User) => {
      this.user = response;
    });
  }
}
