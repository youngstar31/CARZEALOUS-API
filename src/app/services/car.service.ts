import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/cars`);
  }

  getCarById(id: number): Observable<any> {
    return this.http.get<any>(this.url+ `/cars/${id}`)
  }
}
