import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth-service';
import axios from 'axios';
import { NgForm } from '@angular/forms';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})

export class HelpsComponent implements OnInit {
  helps = [];

  constructor(private router:Router) {}

  ngOnInit(): void {
    // this.Addhelp();
  }
  
  
  Addhelp(addhelp: NgForm) {
    //console.log(addhelp.value);
    const data = addhelp.value;  // Use 'addhelp' instead of 'addhelpForm'
    
    axios.post('http://127.0.0.1:3000/help/ajouter', data).then(
      res => {
        console.log(res);
        this.router.navigate(['/paysmart']);
       
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }
}
