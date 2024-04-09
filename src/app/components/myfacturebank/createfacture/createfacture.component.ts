import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Facturebank } from 'src/app/models/facturebank';
import { FacturebankService } from 'src/app/services/facturebank.service';

@Component({
  selector: 'app-createfacture',
  templateUrl: './createfacture.component.html',
  styleUrls: ['./createfacture.component.css']
})
export class CreatefactureComponent implements OnInit{

//  check  if  create facture  +   cournat bank + envoie mail
  facture: Facturebank = {
   
   
    nom: '',
    prenom: '',
    amount: 0,
    factname: '',
    niveau: '',
    photo: ''
  };

  factureForm!: FormGroup;
  factures: Facturebank[]=[];

  constructor(private formBuilder: FormBuilder, private factureService: FacturebankService) {

    
   }

  ngOnInit(): void {

    this.factureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      amount: ['', Validators.required],
      factname: ['', Validators.required],
      niveau: ['', Validators.required],
      photo: ['', Validators.required]
    });

    
  }

  onSubmit(): void {
    if (this.factureForm.valid) {
      const newFacture: Facturebank = this.factureForm.value;
      this.factureService.createFacture(newFacture).subscribe(
        () => {
          console.log('Facture added successfully');
          this.factureForm.reset();
        },
        (error:any) => {
          console.log('Error adding facture: ', error);
        }
      );
    }
  }

}
