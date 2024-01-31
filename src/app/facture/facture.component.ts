import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facture',
  styleUrls: ['./facture.component.css'], // Use styleUrls instead of styleUrl
  templateUrl: './facture.component.html',
})

export class FactureComponent {
    constructor(private el: ElementRef, private router: Router) {}
  navigateTo() : void{
    const targetElement = document.getElementById('mes-informations');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  gotopaiement() :void {
    this.router.navigate(['/paiement']);
  }
  gotoLogin()  : void{
    this.router.navigate(['/login']);
  }
  gotopaysmart(){
    this.router.navigate(['/paysmart']);
  }}

