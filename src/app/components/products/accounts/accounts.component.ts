import { Component, OnInit } from '@angular/core';
import { Account } from './../../../models/account';
import { Observable } from 'rxjs';
import { AccountService } from './../../../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  accounts!: Observable<Account[]>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accounts = this.accountService.getAccounts();
  }
}
