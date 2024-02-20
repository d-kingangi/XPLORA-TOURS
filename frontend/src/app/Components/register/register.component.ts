import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, HttpClient],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  title="Join Quix"

  registerForm!: FormGroup

  constructor(private fb:FormBuilder, private http: HttpClient){
    this.registerForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      profileImage:['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)]]     
    })
  }

  registerUser(details: newuser){
    console.log(details);

    this.authservice.signupUser(details).subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.success(res.success)
      }
    })

  }

}
