import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:29215/api/WS_IT/Usuario/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) { }
  login(model: any){
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((reponse: any) =>{
        const user = reponse;
        if(user){
          localStorage.setItem('token', user.token);
          localStorage.setItem('UserId', user.userId);
          localStorage.setItem('NombreCompleto', user.nombreCompleto);
          this.decodedToken = user;
          console.log(user)
        }
      })
    )
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
