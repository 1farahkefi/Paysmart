import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {
  constructor(private router : Router){}
  gotoLogout(){
    this.router.navigate(['/login'])
   }
   gotopaiement() :void {
    this.router.navigate(['/paiement']);
  }
  gotoLogin()  : void{
    this.router.navigate(['/login']);
  }
  
   gotopaysmart(){
    this.router.navigate(['/paysmart']);
  }

  cancelPayment() {
    // Implement cancel payment functionality
    alert("Payment cancelled.");
  }
}