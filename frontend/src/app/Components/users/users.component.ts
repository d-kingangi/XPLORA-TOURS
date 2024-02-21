import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ApiService } from '../../services/api.service';
import { users } from '../../Interfaces/users.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavbarComponent, AdminDashboardComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: users[]  = [];

  constructor(private api: ApiService){
    this.fetchUsers()
  }

  fetchUsers(){
    this.api.getUsers().subscribe(res=>{
      console.log(res);


      this.users = res.users
    })
  }

  deleteUser(id:string){
    this.api.deleteUser(id).subscribe(res=>{
      console.log(res);

      this.fetchUsers()
    })
  }
}
