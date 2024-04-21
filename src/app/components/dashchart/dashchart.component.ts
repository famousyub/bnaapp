import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashchart',
  templateUrl: './dashchart.component.html',
  styleUrls: ['./dashchart.component.css']
})
export class DashchartComponent implements OnInit {
  showPINCreationModel: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}


  menuItems = [
    {
      title: 'transaction',
      description: 'Rechargez des cartes prépayées en ligne par vos cartes bancaires',
      imageUrl: 'https://bnapi.cmwh.ovh/admin/medias/userfiles/images/has_62596537bcefe164.jpg',
      link: '/transaction'
    },
    {
      title: 'facture',
      description: 'Souscrivez aux Packs en ligne',
      imageUrl: 'https://bnapi.cmwh.ovh/admin/medias/userfiles/images/has_625965469d217165.jpg',
      link: '/facture'
    },
    {
      title: 'mandat',
      description: 'Demandez votre crédit H24 en ligne',
      imageUrl: 'https://bnapi.cmwh.ovh/admin/medias/userfiles/images/has_625965509d97d206.jpg',
      link: '/mandat'
    },
    {
      title: 'myfacture',
      description: 'Envoyez vos mandats en ligne par carte bancaire',
      imageUrl: 'https://bnapi.cmwh.ovh/admin/medias/userfiles/images/has_625960d30f0a2207.jpg',
      link: '/myfacture'
    }
  ];

  ngOnInit(): void {
    // Check if the user has created a PIN.
    this.checkPINStatus();
  }

  checkPINStatus(): void {
    this.apiService.checkPinCreated().subscribe(
      (response) => {
        if (response && response.hasPIN === false) {
          // Show the PIN creation model.
          this.showPINCreationModel = true;
        }
      },
      (error) => {
        console.error('Error checking PIN status:', error);
      }
    );
  }

  redirectToPINCreationPage(): void {
    // Hide the PIN creation model.
    this.showPINCreationModel = false;
    // Redirect the user to the PIN creation page.
    this.router.navigate(['/account/pin']);
  }

}
