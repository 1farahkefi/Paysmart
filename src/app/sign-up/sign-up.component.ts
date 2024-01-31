import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth-service';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private router: Router,/* private authService: AuthService*/) {}

  ngOnInit(): void {
    // Création du formulaire avec FormGroup et FormControl
    /*this.signupForm = new FormGroup({
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'email': new FormControl(''),
      'phoneNumber': new FormControl(''),
      'password': new FormControl(''),
    });*/
  }
  Addsignup(addsignup: NgForm) {
    //console.log(addhelp.value);
    const data = addsignup.value;  // Use 'addhelp' instead of 'addhelpForm'
    
    axios.post('http://127.0.0.1:3000/signup/ajouter', data).then(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
       
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }
  
  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
