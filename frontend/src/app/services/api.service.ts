import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { updatedUser, users } from '../Interfaces/users.interface';
import { bookings, updatedbooking } from '../Interfaces/bookings.interface';
import { tours, updatedtour } from '../Interfaces/tours.interface';
import { reviews, updatedreview } from '../Interfaces/reviews.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  token = localStorage.getItem('token') as string
  constructor(private http:HttpClient) { }

  createUser(newUser: users) {
    return this.http.post<{ message: string, error: string }>('http://localhost:4100/users', newUser, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

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

  createTour(newTour: tours) {
    return this.http.post<{ message: string, error: string }>('http://localhost:4100/tour', newTour, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    });
  }



  
  gettours(){
    return this.http.get<{tours:tours[], error: string}>('http://localhost:4100/tour', {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
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
    return this.http.get<{tour:tours[]}>(`http://localhost:4100/tour/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatetour(id:string, details:updatedtour){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/tour/update/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  createBooking(newBooking: bookings) {
    return this.http.post<{ message: string, error: string }>('http://localhost:4100/booking', newBooking, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    });
  }

  getallbookings(){
    return this.http.get<{bookings:bookings[], error: string}>('http://localhost:4100/booking', {
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
    return this.http.get<{booking:bookings[]}>(`http://localhost:4100/booking/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatebooking(id:string, details:updatedbooking){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/booking/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  createReview(newReview: reviews) {
    return this.http.post<{ message: string, error: string }>('http://localhost:4100/review', newReview, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    });
  }

  getallreviews(){
    return this.http.get<{reviews:reviews[], error: string}>('http://localhost:4100/review', {
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
    return this.http.get<{review:reviews[]}>(`http://localhost:4100/review/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  updatereview(id:string, details:updatedreview){
    return this.http.put<{message:string, error:string}>(`http://localhost:4100/review/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }
  
}