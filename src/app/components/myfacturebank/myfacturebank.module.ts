import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyfacturebankRoutingModule } from './myfacturebank-routing.module';
import { CreatefactureComponent } from './createfacture/createfacture.component';
import { MyfacturebankComponent } from './myfacturebank/myfacturebank.component';
import { MyfacturedetailsComponent } from './myfacturedetails/myfacturedetails.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreatefactureComponent,
    MyfacturebankComponent,
    MyfacturedetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MyfacturebankRoutingModule
  ],
  exports:[
    CreatefactureComponent,
    MyfacturebankComponent,
    MyfacturedetailsComponent
  ]
})
export class MyfacturebankModule { }
