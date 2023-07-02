import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseURL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  registerAPI(body: any): Observable<Object> {
    return this.http.post(`${this.baseURL}/user/add`, body);
  }

  changePassword(body: any): Observable<Object> {
    return this.http.put
    (`${this.baseURL}/user/changepassword`, body);
  }
}
