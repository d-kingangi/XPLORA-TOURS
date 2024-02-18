import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title="Join Quix"

  registerForm!: FormGroup

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      profileImage:['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)]]     
    })
  }

  registerUser(){
    console.log();
  }

}
