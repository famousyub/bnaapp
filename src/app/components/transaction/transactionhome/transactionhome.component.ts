import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transactionhome',
  templateUrl: './transactionhome.component.html',
  styleUrls: ['./transactionhome.component.css']
})
export class TransactionhomeComponent implements OnInit {


  showPINCreationModel: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

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

  

  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }

}
