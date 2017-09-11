import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import keys from '../../utils/keys';
import configs from '../../utils/configs';
import 'rxjs/add/operator/map';

@Injectable()
export class ComputerVisionService {

  private fileTransfer: FileTransferObject;

  constructor(
    private http: Http, 
    private transfer: FileTransfer
  ) {
    this.fileTransfer = this.transfer.create();
  }

  analyzeImage(imageFilePath) {
    const uriBase = configs.VISION_URI_BASE;
    const headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    headers.append('Ocp-Apim-Subscription-Key', keys.VISION_API_KEY);

    const options: FileUploadOptions = {
      fileKey: 'file',
      httpMethod: 'POST',
      mimeType: 'image/jpeg',
      headers
    };

    return this.fileTransfer.upload(imageFilePath, uriBase, options)
    .then(data => data.response)
    .then(x => {
      // return this.translateText('I speak English');
      // return 'I speak English';      
      //return x['description'].captions[0].text;
      // return JSON.stringify(x);

      let y = JSON.parse(x);

      // return this.translateText(y.description.captions[0].text).subscribe(translatedText => {
      //   return translatedText.text;
      // });

      return y.description.captions[0].text;
    }, error => {
      console.error('ANALIZE IMAGE ERROR -> ' + JSON.stringify(error));
    });
  }

  translateText(text: string) {
    const uriBase = configs.TRANSLATE_URI_BASE;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const data = {
      text: text,
      from: 'en',
      to: 'pt'
    };

    return this.http.post(uriBase, data, { headers })
      .map(res => res.json())
  }

}
