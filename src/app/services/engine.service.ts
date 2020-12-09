import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private http: HttpClient) { }

  getEngineCarByCarId(cardId: number):Observable <any> {
    return this.http.get<any> (`http://localhost:8080/cars/engine/${cardId}`)
  }


}
