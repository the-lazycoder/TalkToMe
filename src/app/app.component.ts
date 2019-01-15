import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  gAnalyticID: any="AIzaSyCp1W6jAsmOsxQGttP2ZiGB9jVwhVtQxPc";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private gAnalytics:GoogleAnalytics) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.googleAnalytics();
    });
  }

  googleAnalytics(){
    this.nav.viewDidEnter.subscribe((data) => {
            this.gAnalytics.startTrackerWithId(this.gAnalyticID,30).then(() => {
              console.log("GA view=",data.instance.constructor.name);
                this.gAnalytics.trackView(data.instance.constructor.name)
            })
        });
    // GoogleAnalytics.startTrackerWithId('UA-91177833-1',30);
  }
}



