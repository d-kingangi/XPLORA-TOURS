import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { updatedUser, users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  token = localStorage.getItem('token') as string
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<{users:users[], error: string}>('http://localhost:4100/users', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  deleteUser(id:string){
    return this.http.delete(`http://localhost:4100/users/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getOneUserDetails(id:string){
    return this.http.get<{user:users[]}>(`http://localhost:4100/users/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }


  updateUserDetails(id:string, details:updatedUser){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/users/update/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }


  gettours(){
    return this.http.get<{users:users[], error: string}>('http://localhost:4100/tour', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  deletetour(id:string){
    return this.http.delete(`http://localhost:4100/tour/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getonetour(id:string){
    return this.http.get<{user:users[]}>(`http://localhost:4100/tour/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatetour(id:string, details:updatedUser){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/tour/update/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getallbookings(){
    return this.http.get<{users:users[], error: string}>('http://localhost:4100/booking', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  deletebooking(id:string){
    return this.http.delete(`http://localhost:4100/booking/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getonebooking(id:string){
    return this.http.get<{user:users[]}>(`http://localhost:4100/booking/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatebooking(id:string, details:updatedUser){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/booking/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getallreviews(){
    return this.http.get<{users:users[], error: string}>('http://localhost:4100/review', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  deletereview(id:string){
    return this.http.delete(`http://localhost:4100/review/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getonereview(id:string){
    return this.http.get<{user:users[]}>(`http://localhost:4100/review/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatereview(id:string, details:updatedUser){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/review/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }
  
}