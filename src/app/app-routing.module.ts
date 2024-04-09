// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { AccountPinComponent } from './components/account-pin/account-pin.component';
import { AccountdetailcardComponent } from './components/accountdetailcard/accountdetailcard.component';
import { UserprofilecardComponent } from './components/userprofilecard/userprofilecard.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OtpComponent } from './components/otp/otp.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FactureComponent } from './components/facture/facture.component';
import { MondatComponent } from './components/mondat/mondat.component';
import { TransactionhomeComponent } from './components/transaction/transactionhome/transactionhome.component';
import { FacturebankComponent } from './components/facturebank/facturebank.component';
import { BankactionModule } from './components/bankaction/bankaction.module';
import { BankfactureComponent } from './components/bankfacture/bankfacture.component';
import { MyfacturebankComponent } from './components/myfacturebank/myfacturebank/myfacturebank.component';
import { CreatefactureComponent } from './components/myfacturebank/createfacture/createfacture.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Root route (HomeComponent) without AuthGuard
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'facture', component: FactureComponent , canActivate: [AuthGuard]},

  { path: 'facturebank', component: BankfactureComponent , canActivate: [AuthGuard]},

  { path: 'mandat', component: MondatComponent , canActivate: [AuthGuard]},

  { path: 'myfacture', component: MyfacturebankComponent , canActivate: [AuthGuard]},
  { path: 'myfacture/create', component: CreatefactureComponent , canActivate: [AuthGuard]},

  { path: 'transaction/deposit', component: DepositComponent, canActivate: [AuthGuard] },
  { path: 'transaction/withdraw', component: WithdrawComponent, canActivate: [AuthGuard] },
  { path: 'transaction/fund-transfer', component: FundTransferComponent, canActivate: [AuthGuard] },
  
  { path: 'transaction/pin', component: AccountPinComponent, canActivate: [AuthGuard] },
  

  {
    path:'transactions',
    loadChildren:()=> import('./components/transaction/transaction.module').then(m=> m.TransactionModule)
  },

  { path: 'transaction', component: TransactionhomeComponent, canActivate: [AuthGuard] },
  
  { path: 'account', component: AccountdetailcardComponent, canActivate: [AuthGuard] },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'account/transaction-history', component: TransactionHistoryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/otp', component: OtpComponent },
  { path: '**', component: NotfoundpageComponent }, // Handle 404 - Page Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
