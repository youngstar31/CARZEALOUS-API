import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.page.html',
  styleUrls: ['./car-view.page.scss'],
})
export class CarViewPage implements OnInit {
car = new Car();
 id = this.activatedRoute.snapshot.params[`id`];
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const idOfCar = this.activatedRoute.snapshot.params[`id`];
    this.carService.getCarById(idOfCar).subscribe(
      data => {
        this.car = data;
      }
    );
  }

  goToCarDetails(id: number) {
    this.router.navigate(['car-details', this.id]);
  }

}
