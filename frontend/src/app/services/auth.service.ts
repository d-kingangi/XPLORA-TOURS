// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { loginDetails } from '../Interfaces/login.interface';
// import { map, tap } from 'rxjs/operators';
// import { Observable, of , pipe} from 'rxjs'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient) { }

//   token = localStorage.getItem('token') as string

//   loginUser(details: loginDetails): Observable<{ message: string, token: string, error: string }> {
//     return this.http.post<{ message: string, token: string, error: string }>('http://localhost:4100/auth/login', details)
//     .pipe(
//       tap(response => {
//         if (response.token) {
//           localStorage.setItem('token', response.token);
//         }
//       })
//     )
//   }

//   readToken(token:string){
//     return this.http.get<{info:{user_id:string, name:string, email: string, role:string}}>('http://localhost:4100/auth/checkdetails', {
//       headers: new HttpHeaders({
//         'Content-type': 'application/json',
//         'token': token
//       })
//     })
//   }


//   logout(): Observable<any> {
//     return this.http.post<any>('http://localhost:4100/auth/logout', {});
//   }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDetails } from '../Interfaces/login.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(details: loginDetails): Observable<{ message: string, token: string, error: string }> {
    return this.http.post<{ message: string, token: string, error: string }>('http://localhost:4100/auth/login', details);
  }

  readToken(token: string = ''): Observable<{ info: { userId: string, firstname: string, lastname: string, email: string, content: string, password: string, isAdmin: any } }> {
    console.log('Token:', token);

    return this.http.get<{ info: { userId: string, firstname: string, lastname: string, email: string, content: string, password: string, isAdmin: any } }>('http://localhost:4100/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    }).pipe(
      tap(response => console.log('Response:', response))
    );
  }

  getUserDetails(token?: string): Observable<{ userId: string, firstname: string, lastname: string, email: string, isAdmin: any }> {
    if (!token) {
      return of({ userId: '', firstname: '', lastname: '', email: '', isAdmin: true});
    }

    return this.readToken(token).pipe(
      map(res => ({
        userId: res.info.userId,
        firstname: res.info.firstname,
        lastname: res.info.lastname,
        email: res.info.email,
        isAdmin: res.info.isAdmin === 'true'
      }))
    );
  }

  isAdmin(): Observable<boolean> {
    return this.getUserDetails().pipe(
      map(userDetails => userDetails.isAdmin === true) 
    );
  }

  logout(): Observable<any> {
    return this.http.post<any>('http://localhost:4100/auth/logout', {});
  }
}