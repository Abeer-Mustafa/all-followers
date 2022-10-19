import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
    if (credentials.email === 'mosh@domain.com' && credentials.password === '1234') {
      // token admin
      // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOmZhbHNlfQ.qWKELmsR8hLrEZE8I8-SYzrajQO82ZSliS-7d1xyNfk';
      // token user
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFiZWVyIE11c3RmYSIsImFkbWluIjp0cnVlfQ.pgtGvTbqb_DYY7nHYYFlNBugsBzGSKylbtoCQXc6ax8';
      localStorage.setItem('token', token);
      return true;
    }
    return false;

    // return this.http.post('/api/authenticate',JSON.stringify(credentials))
    //   .pipe(
    //     map(response => {
    //       console.log(response);
    //       if(response && response.token){
    //         localStorage.setItem('token', response.token);
    //         return true;
    //       }
    //       return false;
    //     }),
    //   );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if(!token){
      return false;
    }

    let jwtHelper = new JwtHelperService();
    let decodedToken = jwtHelper.decodeToken(token);
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  currentUser(){
    let token = localStorage.getItem('token');
    if(!token){
      return false;
    }
    let jwtHelper = new JwtHelperService();
    let decodedToken = jwtHelper.decodeToken(token);
    return decodedToken;
  }
}

