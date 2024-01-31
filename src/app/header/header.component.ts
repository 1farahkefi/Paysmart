import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  constructor(private router : Router){}
  ngOnInit(): void {
  }
  
  gotoLogin(){
   this.router.navigate(["/login"])
  }
  gotoSignUp(){
   this.router.navigate(["/signup"])
}
navigateTo(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}