import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public appVersion: string = '0';

  constructor(public navCtrl: NavController, private appVer:AppVersion) {

  }

  ionViewDidLoad() {
    var self=this;
    console.log('Hello AboutPage');
    this.appVer.getVersionNumber().then(function (version) {
      console.log("version=" + version);
      self.appVersion = version;
    });
  }

}
