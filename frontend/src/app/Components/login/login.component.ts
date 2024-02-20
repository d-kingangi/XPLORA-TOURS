import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../services/auth.service';
import { loginDetails } from '../../interfaces/login.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, NavbarComponent, HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
    title = 'Login'
    link = ''
    errorMsg!:string
    successMsg!: string

    visible = false
    visible2 = false
    isAdmin!:Boolean
    isLoggedIn!:Boolean

    loginForm!: FormGroup

    constructor(private fb:FormBuilder, private router: Router, private authservice:AuthService){}

    login(details:loginDetails){
      console.log(details)
    }

    login(details:loginDetails){
      console.log(details);

      this.authservice.loginUser(details).subscribe(res=>{
        console.log(res);
        
        if(res.error){
          this.visible = true
          this.errorMsg = res.error

          setTimeout(() => {
            this.visible = false
          }, 3000);
        }else if(res.message){
          this.visible2 = true
          this.successMsg = res.message

          localStorage.setItem('token', res.token)

          this.authservice.readToken(res.token).subscribe(res=>{
            console.log(res);

            setTimeout(() => {
              this.visible2 = false
            }, 2000);
          })

          
        }
      })



      // localStorage.setItem('loggedIn', 'true')
      
      // this.router.navigate(['admin'])
    }
}
