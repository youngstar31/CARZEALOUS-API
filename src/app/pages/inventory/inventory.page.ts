import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  cars: Car[]
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCars().subscribe(
      data => {
        this.cars = data;
      }  
    );    
  }



}
