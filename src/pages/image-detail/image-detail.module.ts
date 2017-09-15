import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageDetailPage } from './image-detail';

@NgModule({
  declarations: [
    ImageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageDetailPage),
  ],
})
export class ImageDetailPageModule {}
