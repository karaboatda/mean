import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  //postUserInfo Function
  getUserInfo(){
   this.http.get("/users").subscribe((data)=>{

return console.log(data)
    })
  }
}
