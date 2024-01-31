import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent,FormsModule]
})
export class AppComponent implements OnInit {
  addhelpForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addhelpForm = this.fb.group({
      content: ['', [Validators.required]],
    });
  }

  Addhelp() {
    // Your form submission logic here
    console.log(this.addhelpForm.value);
  }
}
