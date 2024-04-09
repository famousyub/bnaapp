import { Component, OnInit } from '@angular/core';
import { FacturebankService } from 'src/app/services/facturebank.service';

@Component({
  selector: 'app-myfacturebank',
  templateUrl: './myfacturebank.component.html',
  styleUrls: ['./myfacturebank.component.css']
})
export class MyfacturebankComponent implements OnInit {



   factures:any ;
   facturem: any[] = [];
   displayedColumns: string[] = ['accountNumber', 'amount', 'factname', 'nom', 'prenom', 'Niveau', 'photo'];
 
  constructor( private factureService: FacturebankService) {

    
  }

  ngOnInit(): void {

    this.getAllfacture();
      

  }

  getAllfacture (){
     this.factureService.getAllFacture().subscribe(res=>{

       console.log(res);
       this.factures = res ;

     })
  }

}
