import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Login } from './../../models/login';
import { CONSTANT } from './../../constants/constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgSnackBar: MatSnackBar
  ) {
    this.formLogin = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    const formValue = this.formLogin.value;

    if (
      formValue.userId &&
      formValue.password &&
      formValue.userId == '00100010321' &&
      formValue.password == '1111'
    ) {
      const login: Login = {
        userId: formValue.userId,
        password: formValue.password,
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8ja',
        refresh_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dw8gT8j5mKQbY8dVK453_dRICvBSg2oAQYFfzO1rpoY',
      };

      this.authService.login(login).subscribe((data: Login) => {
        sessionStorage.setItem(CONSTANT.ACCESS_TOKEN, data.access_token);
        console.log(data);
        this.router.navigateByUrl(CONSTANT.ACCOUNTS);
      });
    }else {
      this.msgSnackBar.open('Acceso invalido', 'Error');
    }
  }
}
