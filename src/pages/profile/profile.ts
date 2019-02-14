import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Button } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,public alert:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


showalert(){
  let alert = this.alert.create({
    title:'Error',
    subTitle:'this is an alert',
    buttons:['ok']

  });
  alert.present();
}

}
