import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User, UsersService} from "@gnx/client-users";
import {MessageService} from "primeng/api";
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'gnx-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
  providers: [MessageService]
})
export class UsersDetailComponent implements OnInit {

  id: string;
  user: User;
  isLoading = false;
  isEdit = false;
  editForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
  ) {

  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.formInit();
    this.getUser(this.id);
  }

  formInit() {
    this.editForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(320)
        ]
      ],
      first_name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ]],
      last_name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ]],

      // captcha: ['', [
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(6)
      // ]],
    });
  }

  getUser(id: string) {
    this.userService.getOne(id).subscribe((response: User) => {
      this.user = response;
    });
  }

  approve(uuid: string) {

    this.isLoading = true;

    // this.compromisosService.approve(uuid).subscribe((response) => {
    //   this.isLoading = false;
    //   console.log(response);
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Successful',
    //     detail: 'Aprobado correctamente',
    //     life: 3000
    //   });
    // });

  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}
