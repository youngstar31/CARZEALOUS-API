import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

to = 'alouisjean31@gmail.com';
  constructor(public navCtrl: NavController, public alertController: AlertController, private formBuilder: FormBuilder) {
   }

   email = new FormGroup({
     subject: new FormControl('', Validators.required),
     body: new FormControl('', Validators.required)

   });

  ngOnInit() {
  }
  


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Your Email Was Sent, Thank You!',
      buttons: ['OK']
    });

    await alert.present();
  }
    


  }


