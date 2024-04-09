import { Component } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  factures = [
    { title: 'Invoice #001', amount: 100, dueDate: '2024-04-15' },
    { title: 'Invoice #002', amount: 150, dueDate: '2024-04-20' },
    { title: 'Invoice #003', amount: 200, dueDate: '2024-04-25' },
    { title: 'Invoice #004', amount: 250, dueDate: '2024-04-30' }
  ];

}
