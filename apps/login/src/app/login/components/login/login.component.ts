import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "@gnx/authentication";
import {Subject, takeUntil} from "rxjs";
import {AuthenticationResponse} from "../../../../../../../libs/authentication/src/lib/models/authentication.model";

@Component({
  selector: 'gnx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  isLoading = false;
  validateForm!: UntypedFormGroup;

  private unsubscribe = new Subject<void>();
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    // private authenticationService: AuthenticationService,
    private authenticationService: AuthenticationService,
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
      this.authenticationService.create(
        this.validateForm.value.userName,
        this.validateForm.value.password,
      ).pipe(
        takeUntil(this.unsubscribe)
      ).subscribe((authenticationResponse: AuthenticationResponse) => {
        this.isLoading = false;
        console.log(authenticationResponse);
        if (this.authenticationService.validateResponse(authenticationResponse)) {
          console.log('Login OK!!!');
          this.router.navigate(['/admin']);
        }
      });

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
