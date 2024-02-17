import { Component} from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  currentroute = (this.route.snapshot.routeConfig?.path)
  token = localStorage.getItem('token') as string
  constructor(private router:Router, private route:ActivatedRoute){

    if(this.currentroute == 'login'){
      if(this.token){
        this.router.navigate([''])
      }
    }
  }

  isLoggedIn = localStorage.getItem('token')

  today = new Date()

  navigatetoLogin(){
    this.router.navigate(['login'])
  }

  navigatetoRegister(){
    this.router.navigate(['register'])
  }

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
