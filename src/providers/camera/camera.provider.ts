import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(private camera: Camera) {
  }

  getPictureFromCamera(): any {
    return this.getImage(this.camera.PictureSourceType.CAMERA);
  }

  private getImage(pictureSourceType, quality = 50, saveToPhotoAlbum = false) {
    const options: CameraOptions = {
      quality,
      saveToPhotoAlbum,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    };

    return this.camera.getPicture(options).then(imageData => {
      return imageData;
    }, error => {
      console.error('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }

}
