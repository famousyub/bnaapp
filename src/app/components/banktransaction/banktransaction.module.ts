import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanktransactionRoutingModule } from './banktransaction-routing.module';
import { FacturebankComponent } from '../facturebank/facturebank.component';
import { MandatbankComponent } from '../mandatbank/mandatbank.component';


@NgModule({
  declarations: [
    FacturebankComponent,
    MandatbankComponent
  ],
  imports: [
    CommonModule,
    BanktransactionRoutingModule
  ]
})
export class BanktransactionModule { }
