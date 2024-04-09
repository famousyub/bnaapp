import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionhomeComponent } from './transactionhome/transactionhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    TransactionhomeComponent,
    // DepositComponent,
    // WithdrawComponent,
    // FundTransferComponent,
    // AccountdetailcardComponent,
    // AccountPinComponent,
    // UserprofilecardComponent,
 
   
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    
   
  ]
})
export class TransactionModule { }
