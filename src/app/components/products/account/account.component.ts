import { Component, Input, OnInit } from '@angular/core';
import { Account } from './../../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: Account;

  constructor() { }

  ngOnInit(): void {
  }

}
