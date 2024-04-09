import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from '../deposit/deposit.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { FundTransferComponent } from '../fund-transfer/fund-transfer.component';
import { AccountPinComponent } from '../account-pin/account-pin.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TransactionhomeComponent } from './transactionhome/transactionhome.component';

const routes: Routes = [
  { path: '', component: TransactionhomeComponent, canActivate: [AuthGuard],


children:[
  { path: 'deposit', component: DepositComponent, canActivate: [AuthGuard] },
  { path: 'withdraw', component: WithdrawComponent, canActivate: [AuthGuard] },
  { path: 'fund-transfer', component: FundTransferComponent, canActivate: [AuthGuard] },
  { path: 'pin', component: AccountPinComponent, canActivate: [AuthGuard] },

]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
