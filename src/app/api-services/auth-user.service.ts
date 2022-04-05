import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(
    public http: HttpClient
  ) { }

  getUserLogin(data: any) {
    // return this.http.post(`https://fakestoreapi.com/auth/login`, data);
    return this.http.post(APIURL.GET_USER_LOGIN, data);
  }
}
