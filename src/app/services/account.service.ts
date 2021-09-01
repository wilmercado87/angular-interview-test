import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './utility.service';
import { Account } from './../models/account';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CONSTANT } from './../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) {}

  getAccounts(): Observable<Account[]> {
    return this.http
      .get<Account[]>(CONSTANT.API_URL + CONSTANT.ACCOUNTS)
      .pipe(catchError(this.utilityService.handleError<any>('error getAccounts')));
  }
}
