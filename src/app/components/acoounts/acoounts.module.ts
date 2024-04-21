import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateacoountsComponent } from './createacoounts/createacoounts.component';
import { MyaccountsComponent } from './myaccounts/myaccounts.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppModule } from 'src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateacoountsComponent,
    MyaccountsComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AcoountsModule { }
