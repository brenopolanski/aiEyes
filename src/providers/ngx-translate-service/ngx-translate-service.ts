import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class NgxTranslateService {

  constructor(private translateService: TranslateService) {
  }

  async translateText(text: string, time: number = 1000): Promise<any> {
    const delay = () => new Promise(res => setTimeout(() => res(), time));
    await delay();
    return this.translateService.get(text.toUpperCase());
  }

}
