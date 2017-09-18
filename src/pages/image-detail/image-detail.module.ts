import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ImageDetailPage } from './image-detail';

@NgModule({
  declarations: [
    ImageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageDetailPage),
    TranslateModule.forChild()
  ],
})
export class ImageDetailPageModule {}
