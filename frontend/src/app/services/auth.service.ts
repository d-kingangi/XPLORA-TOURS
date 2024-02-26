import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDetails } from '../Interfaces/login.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of , pipe} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token') as string

  loginUser(details: loginDetails): Observable<{ message: string, token: string, error: string }> {
    return this.http.post<{ message: string, token: string, error: string }>('http://localhost:4100/auth/login', details)
    .pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    )
  }

  readToken(token:string){
    return this.http.get<{info:{user_id:string, name:string, email: string, role:string}}>('http://localhost:4100/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    })
  }


  logout(): Observable<any> {
    return this.http.post<any>('http://localhost:4100/auth/logout', {});
  }
}
