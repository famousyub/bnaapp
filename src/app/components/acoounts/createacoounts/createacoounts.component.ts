import { Component, OnInit } from '@angular/core';
import { MyacountService } from '../../services/myacount.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-createacoounts',
  templateUrl: './createacoounts.component.html',
  styleUrls: ['./createacoounts.component.css']
})
export class CreateacoountsComponent implements OnInit {

  accounts: any[] = [];
  newAccount: any = {};

  constructor(private accountService: MyacountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(
      response => {
        this.accounts = response;
      },
      error => {
        console.error('Error fetching accounts:', error);
      }
    );
  }

  createAccount() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Created!', 'Account created successfully.', 'success');


        this.accountService.createAccount(this.newAccount).subscribe(
          response => {
            console.log('Account created successfully:', response);
            this.getAccounts(); // Refresh accounts after creation
            this.newAccount = {}; // Reset the form
          },
          error => {
            console.error('Error creating account:', error);
          }
        );


      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'account  still in our database.)', 'error');
      }
    });
  }


    
  

}
