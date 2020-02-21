import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternService {


  constructor(private http: HttpClient) { }

  getAllProfiles() : any {
    return this.http.get('http://localhost:5000/profiles');
  }

  getProfile() : any {
    return this.http.get('http://localhost:5000/profiles');
  }

  userLogin(user:any):any{
    return this.http.post('http://localhost:5000/auth',user);
  }


}
