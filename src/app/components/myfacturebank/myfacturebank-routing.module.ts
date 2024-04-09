import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfacturebankComponent } from './myfacturebank/myfacturebank.component';
import { CreatefactureComponent } from './createfacture/createfacture.component';

const routes: Routes = [{
  path:'' , component: MyfacturebankComponent
},
  {
    path:'myfacture/create' , component : CreatefactureComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyfacturebankRoutingModule { }
