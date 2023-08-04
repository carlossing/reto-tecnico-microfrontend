import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'gnx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  isLoading = false;
  validateForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    // private authenticationService: AuthenticationService,
  ) {
    this.initForm();
  }

  initForm() {

    this.validateForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(320)
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ]],
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
    if (this.validateForm.valid) {
      console.log('this.validateForm.valid');
      this.isLoading = true;
      // this.authenticationService.login(
      //   this.validateForm.value.userName,
      //   this.validateForm.value.password,
      // ).pipe(
      //   takeUntil(this.unsubscribe)
      // ).subscribe((data: AuthenticationResponse) => {
      //   this.isLoading = false;
      //   if (this.authenticationService.validateResponse(data)) {
      //     this.router.navigate(['/dashboard/compromisos']);
      //   }
      // });

    } else {

      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });

    }

  }
}
