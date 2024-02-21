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

  constructor(private fb:FormBuilder, private apiService: ApiService ){
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
          this.success(res.message);
        } else if (res.error) {
          console.log('It exists', res.error);
        }
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
  }

  private success(message: string) {
    console.log('Registration successful:', message);
    this.registerForm.reset()
  }

  // navigateToLogin(){
  //   this.router.navigate()
  // }

}
