import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private baseURL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  addProduct(body: any): Observable<Object> {
    let headers = new HttpHeaders().set(
      'token',
      localStorage.getItem('token') || ''
    );
    return this.http.post(`${this.baseURL}/products/add`, body, { headers });
  }

  listProducts(): Observable<Object> {
    return this.http.get(`${this.baseURL}/products/list`);
  }

  deleteProduct(id: number): Observable<Object> {
    let headers = new HttpHeaders().set(
      'token',
      localStorage.getItem('token') || ''
    );
    return this.http.post(
      `${this.baseURL}/products/delete`,
      { id },
      { headers }
    );
  }
}
