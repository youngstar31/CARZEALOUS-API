import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;
  private searchedCar: any
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
   this.AllCars()
  }

  AllCars() {
    this.carService.getAllCars().subscribe(
      data => {
        this.cars = data;
      }
    )
  }

  FilterCars(ev: any){
   
   const val = ev.target.value;
   if (val && val.trim() != '') {
     this.cars = this.cars.filter((car) => {
       return (car.model.toLowerCase().indexOf(val.toLowerCase())> -1);
     })
   }
   else {
     this.AllCars();
   }
  }



}
