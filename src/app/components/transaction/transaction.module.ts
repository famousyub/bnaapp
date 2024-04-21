import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionhomeComponent } from './transactionhome/transactionhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserprofilecardComponent } from '../userprofilecard/userprofilecard.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    TransactionhomeComponent,
    //UserprofilecardComponent
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
   
   
    
   
  ],
  exports:[
    TransactionhomeComponent
  ]
})
export class TransactionModule { }
