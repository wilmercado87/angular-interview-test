import { CONSTANT } from './../constants/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, shareReplay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Login } from './../models/login';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) {}

  login(loginModel: Login): Observable<Login> {
    return this.http
      .put<Login>(CONSTANT.API_URL + CONSTANT.AUTH_LOGIN, loginModel)
      .pipe(catchError(this.utilityService.handleError<any>('error login')));
  }

  public logout() {
    localStorage.removeItem(CONSTANT.ACCESS_TOKEN);
  }
}
