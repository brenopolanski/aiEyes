import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  picture: string = 'assets/img/img-icon.png';
  isSpeak: boolean = false;

  constructor(
    private cameraProvider: CameraProvider,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {

  }

  async takePicture(): Promise<any> {
    const loading = this.loadingCtrl.create();

    loading.present();

    try {
      await this.cameraProvider.getPictureFromCamera().then(picture => {
        if (picture) {
          this.picture = picture;
          this.isSpeak = true;
        }
        
        loading.dismiss();
      }, error => {
        console.error(error);
      });
    } 
    catch (error) {
      console.error(error);
    }
  }

}
