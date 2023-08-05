import {Component} from '@angular/core';
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

import {AuthenticationResponse, AuthenticationService} from "@gnx/shared";
import {APP_CONFIG} from "@gnx/app-config";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'gnx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers:[
  //   {
  //     provide: APP_CONFIG,
  //     useValue: environment
  //   },
  // ]
})
export class LoginComponent {

  isLoading = false;
  loginForm!: UntypedFormGroup;

  private unsubscribe = new Subject<void>();
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.initForm();
  }

  initForm() {

    this.loginForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(320)
        ]
      ],
      password: new FormControl(),
      // password: ['', [
      //   Validators.required,
      //   Validators.minLength(1),
      //   Validators.maxLength(200)
      // ]],

      // captcha: ['', [
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(6)
      // ]],
      remember: [true]
    });
  }

  submitForm(): void {
    console.log('submitForm');
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('this.validateForm.valid');

      console.log(this.loginForm.value);
      this.isLoading = true;
      // this.authenticationService.create(
      //   this.loginForm.value.userName,
      //   this.loginForm.value.password,
      // ).pipe(
      //   takeUntil(this.unsubscribe)
      // ).subscribe((authenticationResponse: AuthenticationResponse) => {
      //   this.isLoading = false;
      //   console.log(authenticationResponse);
      //   // if (this.authenticationService.validateResponse(authenticationResponse)) {
      //     console.log('Login OK!!!');
      //   //   this.router.navigate(['/admin/users']);
      //   // }
      // });

    } else {

      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });

    }

  }
}
