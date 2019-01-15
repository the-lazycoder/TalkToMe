//  ------------------------------------------------------------------------------------------------------
//      Description:    Service to Handle the app.     
//      Author:         Yohann Fernandes 
//      Contact:        yohann.18@live.com
//      Copyright:      ©2018 {thelazycoder}, All Rights Reserved.
// ------------------------------------------------------------------------------------------------------- 

import { Injectable, EventEmitter } from '@angular/core';
import { Alert, AlertController, ActionSheet, ActionSheetController, LoadingController, ToastController, Loading, Platform } from 'ionic-angular';
// import { TextToSpeech } from '@ionic-native/text-to-speech'; 
// import { RestService } from './restService';
// declare var google: any;

@Injectable()
export class AppService {

    public modalEmitter: EventEmitter<Boolean> = new EventEmitter();
    public pushNotifEmitter: EventEmitter<any> = new EventEmitter();       
    public userIdEmitter: EventEmitter<string> = new EventEmitter();  
    public isModal: boolean = false;
    public isKeyboard: boolean = false;
    public appIsInBackground: boolean = false;

    constructor(public loadCtrl: LoadingController, public alertCtrl: AlertController, public platform: Platform,
                public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController){
    }

    isPlatform(plat) {
        return (this.platform.is(plat));
    }

    public isActionSheet: boolean = false;
    public actionSheet: ActionSheet;

    public isAlertOptions: boolean = false;
    public isAlert: boolean = false;
    public promptAlert: Alert;

    public isLoading: boolean = false;
    public loading: Loading;
    public loaderCount: number=0;

    

    

    displayLoading(text):Loading {
        this.isLoading = true;
        if (this.loaderCount==0) {
            this.loading = this.loadCtrl.create({
                content: text+"..."
            });
            this.loading.present();
        }
        this.loaderCount++;
        this.isLoading = (this.loaderCount!=0);
        return this.loading;
    }

    dismissLoading(loading) {
        this.loaderCount--;
        console.log("Dismiss loading",loading);
        if (this.loaderCount<=0) {
            loading.dismiss();
            this.loaderCount=0;
        }
        this.isLoading = (this.loaderCount!=0);
    }

    showToast(message){
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top',
            cssClass: "toastCSSClass"
          });
          toast.present();
    }

    showAlert(options) {
        this.isAlert = true;
        this.promptAlert = this.alertCtrl.create(options);
        this.promptAlert.present();
        this.promptAlert.onDidDismiss(() => {
            this.isAlert = false;
        });
    }

    showActionSheet(options) {
        this.isActionSheet = true;
        this.actionSheet = this.actionsheetCtrl.create(options);
        this.actionSheet.present();
        this.actionSheet.onDidDismiss(() => {
            this.isActionSheet = false;
        });
    }

    
    checkURL(url){
        if (url && (!(url== "undefined" || url == "null" || url == ""))) {
          return url;
        } else {
          return "assets/images/profile_img.jpg";
        }
    } 

    isMobileInvalid(mobileNo){
        var mobile=String(mobileNo);
        if(mobile.length != 10){
          return true;
        }
        if(!(mobile[0] == '9' || mobile[0] == '8' || mobile[0] == '7'|| mobile[0] == '6'))
        {
            return true;
        }
        return false;
      }

     

}