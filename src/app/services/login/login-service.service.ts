import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private baseURL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  loginAPI(body: any): Observable<Object> {
    return this.http.post(`${this.baseURL}/login`, body);
  }
}
