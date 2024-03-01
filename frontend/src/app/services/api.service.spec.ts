import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { users } from '../Interfaces/users.interface';
import { expectedUsers } from './testdata/users';

describe('ApiService', () => {
  let service: ApiService;
  let testingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('gets all users', ()=>{
    service.getUsers().subscribe((users: any) =>{
      expect(users).toBeTruthy()
      expect(users.length).toBe(1)
    })

    const mockReq = testingController.expectOne('http://localhost:4100/users')
    mockReq.flush(Object.values(expectedUsers))
    expect(mockRequest.request.method).toBe('GET')
  })

  it('gets user by Id', ()=>{
    let id = '7822484g-242982482-i4i29209' // pass userId
    service.getOneUserDetails(id).subscribe((user:any)=>{
      expect(user).toBeTruthy()
      expect(user.name).toBeTruthy('Duncan')
    })

    const mockReq = testingController.expectOne(`http:localhost:4100/user/${id}`)
    mockReq.flush(expectedUsers[0])
    expect(mockReq.request.method).toBe('GET')
  })

  it('registers a user', ()=>{
    let mockUser ={
      firstname: "Duncan",
      lastname: "Kingangi",
      email: "kingangiduncan47@gmail.com",
      content: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
      password: "duncan"
    }

    service.createUser(mockUser).subscribe(res=>{
      expect(res.message).toEqual('Account created successfully')
    })

    const mockReq = testingController.expectOne('http://localhost:4100/users')
    expect(mockReq.request.method).toEqual('POST')
    expect(mockReq.request.body).toBe(mockUser)
    mockReq.flush({"message": "Account created successfully"})
  })

  it('deletes a user', ()=>{
    let id = '7822484g-242982482-i4i29209'

    service.deleteUser(id).subscribe((res: any)=>{
      expect(res).toBeTruthy()
      expect(res.message).toBe('Deleted Successfully')
    })

    const mockReq = testingController.expectOne(`http:localhost:4100/user/delete/${id}`)
    expect(mockReq.request.method).toBe('DELETE')
  })
});