import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CarService } from './services/car.service';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  totalAmountOfCars = 0;
  carList: Car[]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private carService: CarService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.carService.getAllCars().subscribe(
      data => {
        this.carList = data;
      }  
    );   
  }



  totalCars(){
 let allCars = 0;
 for (let i = 0; i < this.carList.length; i++) {
   allCars++
 }
 return allCars;
}

}
