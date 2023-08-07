import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserEntityResponse, UsersService } from '@gnx/client-users';
import { MessageService } from 'primeng/api';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'gnx-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
  providers: [MessageService],
})
export class UsersDetailComponent implements OnInit {
  id: string;
  user: User;
  isLoading = false;
  isSaving = false;
  isEdit = false;
  editForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (!this.id) {
      this.isEdit = true;
    }
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
          Validators.maxLength(320),
        ],
      ],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      password: [
        '',
        [
          // Validators.required ?? this.user,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],

      // captcha: ['', [
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(6)
      // ]],
    });
  }

  getUser(id: string) {
    this.isLoading = true;
    this.userService.getOne(id).subscribe((response: User) => {
      this.user = response;
      this.setUserForm(this.user);
      this.isLoading = false;
    });
  }

  approve(uuid: string) {
    this.isSaving = true;

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

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  setUserForm(user: User) {
    this.editForm.controls['username'].setValue(user.username);
    this.editForm.controls['first_name'].setValue(user.first_name);
    this.editForm.controls['last_name'].setValue(user.last_name);
  }

  submit() {
    if (this.editForm.valid) {
      this.isSaving = true;
      const payload: User = {
        username: this.editForm.value.username,
        first_name: this.editForm.value.first_name,
        last_name: this.editForm.value.last_name,
        password: this.editForm.value.password,
      };
      if (!this.id) {
        this.userService
          .create(payload)
          .subscribe((response: UserEntityResponse) => {
            this.isSaving = false;
            if (response.ok) {
              Swal.fire({
                title: 'Genial!',
                text: 'Registro correcto',
                icon: 'success',
                confirmButtonText: 'Aceptar',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/admin/users']);
                }
              });
            } else {
              Swal.fire({
                title: 'Oh no!',
                text:
                  'Ocurrio un error (' +
                  response.message +
                  '), por favor revise la información e intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar',
              });
            }
          });
      }
      if (this.id) {
        this.userService
          .update(this.id, payload)
          .subscribe((response: UserEntityResponse) => {
            this.isSaving = false;

            if (response.ok) {
              Swal.fire({
                title: 'Genial!',
                text: 'Registro correcto',
                icon: 'success',
                confirmButtonText: 'Aceptar',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/admin/users']);
                }
              });
            } else {
              Swal.fire({
                title: 'Oh no!',
                text:
                  'Ocurrio un error' +
                  response.message +
                  ', por favor revise la información e intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar',
              });
            }
          });
      }
    } else {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
