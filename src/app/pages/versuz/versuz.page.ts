import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Engine } from 'src/app/models/engine';
import { Transmission } from 'src/app/models/transmission';
import { CarService } from 'src/app/services/car.service';
import { EngineService } from 'src/app/services/engine.service';
import { TransmissionService } from 'src/app/services/transmission.service';

@Component({
  selector: 'app-versuz',
  templateUrl: './versuz.page.html',
  styleUrls: ['./versuz.page.scss'],
})
export class VersuzPage implements OnInit {
cars: Car[];
selectedCar1 = new Car();
selectedCar2 = new Car();
car1Engine = new Engine();
car1Transmission = new Transmission();

car2Engine = new Engine();
car2Transmission = new Transmission();

// carId = this.selectedCar1.id;
contentLoaded = false
  constructor(private carService: CarService, private engineService: EngineService, private transmissionService: TransmissionService) {

   }

  ngOnInit() {
    this.carService.getAllCars().subscribe(
      data => {
        this.cars = data
      });
 
   }

  compareWith(o1: Car, o2: Car) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  getCar1Details() {

    this.engineService.getEngineCarByCarId(this.selectedCar1.id).subscribe(
      data2 =>{ 
      this.car1Engine = data2
    });
    this.transmissionService.getTransmissionByCarId(this.selectedCar1.id).subscribe(
      data3 => {
        this.car1Transmission = data3
      });
  }
 
  
  getCar2Details() {
    this.engineService.getEngineCarByCarId(this.selectedCar2.id).subscribe(
      data2 =>{ 
      this.car2Engine = data2
    });
    this.transmissionService.getTransmissionByCarId(this.selectedCar2.id).subscribe(
      data4 => {
        this.car2Transmission = data4
      });
  }


  // onChange(carId: number) {
  //   this.engineService.
  // }

}
