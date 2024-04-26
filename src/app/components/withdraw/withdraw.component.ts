import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { ApiService } from 'src/app/services/api.service';
import { LoadermodelService } from 'src/app/services/loadermodel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private _toastService: ToastService,
    private router: Router,
    private loader: LoadermodelService // Inject the LoaderService here
  ) { }

  ngOnInit(): void {
    this.initWithDrawForm();
  }

  initWithDrawForm() {
    this.withdrawForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  onSubmit(): void {


    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        if (this.withdrawForm.valid) {
          const amount = this.withdrawForm.get('amount')?.value;
          const pin = this.withdrawForm.get('pin')?.value;
    
          this.loader.show('Withdrawing...'); // Show the loader before making the API call
          this.apiService.withdraw(amount, pin).subscribe(
            (response) => {
              this.loader.hide(); // Hide the loader on successful withdrawal
              this._toastService.success(response.msg);
              this.withdrawForm.reset()
              console.log('Withdrawal successful!', response);
              Swal.fire('Withdrawal !', 'Withdrawal successful!.', 'success');
            },
            (error) => {
              this.loader.hide(); // Hide the loader on withdrawal request failure
              this._toastService.error(error.error);
              console.error('Withdrawal failed:', error);
            }
          );
        }
        this.initWithDrawForm();
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Withdrawal failed:.)', 'error');
      }
    });








  
  }
}
