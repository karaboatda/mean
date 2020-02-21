import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  register(user: any): any {
    return this.http.post('http://localhost:5000/users', user).subscribe(
      data => {
        this.loggedIn.next(true);
      }
    );
  }

  userLogin(user: any): any {
    return this.http.post('http://localhost:5000/auth', user);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token')
  }

}
