import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarService } from 'src/app/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Engine } from 'src/app/models/engine';
import { Transmission } from 'src/app/models/transmission';
import { EngineService } from 'src/app/services/engine.service';
import { TransmissionService } from 'src/app/services/transmission.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  car = new Car();
  engine = new Engine();
  transmission = new Transmission()
  
  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private engineService: EngineService, private transmissionService: TransmissionService) { }
  carId = this.activatedRoute.snapshot.params[`id`];

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.carService.getCarById(id).subscribe(
      data => {
        this.car = data;
      }
    );  
    this.engineService.getEngineCarByCarId(this.carId).subscribe(
      data2 => {
        this.engine = data2;
      }
    );
    this.transmissionService.getTransmissionByCarId(this.carId).subscribe(
      data3 => {
        this.transmission = data3;
      }
    );
  }


}
