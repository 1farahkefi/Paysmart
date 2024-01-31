import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'], // Use styleUrls instead of styleUrl
  templateUrl: './login.component.html',
})
export class LoginComponent  implements OnInit{
   
   loginForm!: FormGroup;
   constructor(private router:Router) {}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    });
  }

  

  onSubmit(){

  }
  gotoSignUp() {
    this.router.navigate(['/signUp']);
  }
  gotofacture(){
    this.router.navigate(['/facture']);
    
}}
