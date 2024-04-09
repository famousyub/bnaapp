import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Facturebank } from '../models/facturebank';

@Injectable({
  providedIn: 'root'
})
export class FacturebankService {

  private baseUrl = environment.apiUrl; // Replace with your actual API base URL
  private authtokenName = environment.tokenName

  constructor(private http: HttpClient, private router: Router) { }

    

  createFacture(facture : Facturebank){
    return this.http.post(this.baseUrl +"/facture/create",facture);
  }

  getAllFacture(){
     return this.http.get(this.baseUrl+"/facture");
  }

  deleteFacture(id:Number){
     return this.http.delete(this.baseUrl+ "/facture/" + id);
  }
}
