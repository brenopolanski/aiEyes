import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import keys from '../../utils/keys';
import configs from '../../utils/configs';
import 'rxjs/add/operator/map';

@Injectable()
export class CognitiveService {

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
      .then(res => {
        const resParse = JSON.parse(res);

        return resParse.description.captions[0].text;
      }, error => {
        console.error('ANALIZE IMAGE ERROR -> ' + JSON.stringify(error));
      });
  }

  translateText(text) {
    const uriBase = configs.TRANSLATE_URI_BASE;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const data = {
      text,
      from: 'en',
      to: 'pt'
    };

    return this.http.post(uriBase, data, { headers })
      .map(res => res.json());
  }

}
