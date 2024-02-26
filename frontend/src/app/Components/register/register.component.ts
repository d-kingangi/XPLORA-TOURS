import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { users } from '../../Interfaces/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule , NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  title="Join Quix"

  registerForm!: FormGroup
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb:FormBuilder, private apiService: ApiService, private router: Router ){
    this.registerForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      content:['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)]]     
    })
  }

  registerUser() {
    const details: users = this.registerForm.value;
    console.log(details);

    this.apiService.createUser(details).subscribe(
      (res) => {
        console.log(res);
        if (res.message) {
          this.successMessage = res.message; 
          this.errorMessage = ''; 
        } else if (res.error) {
          this.errorMessage = res.error; 
          this.successMessage = ''; 
        }
      },
      (error) => {
        console.error('Registration error:', error);
        this.errorMessage = 'Registration failed. Please try again.'; 
        this.successMessage = ''; 
      }
    );

    setTimeout(() => {
      this.navigateToLogin();
    }, 1500);

  }

  private success(message: string) {
    console.log('Registration successful:', message);
    this.registerForm.reset()
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
    
  }

}
