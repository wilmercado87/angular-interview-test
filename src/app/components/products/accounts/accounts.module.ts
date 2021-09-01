import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountComponent } from '../account/account.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [AccountsComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialModule
  ]
})
export class AccountsModule { }
