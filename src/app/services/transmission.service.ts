import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  constructor(private http: HttpClient) { }


  getTransmissionByCarId(carId: number): Observable<any> {
    return this.http.get<any> (`http://localhost:8080/cars/transmission/${carId}`)
  }
}
