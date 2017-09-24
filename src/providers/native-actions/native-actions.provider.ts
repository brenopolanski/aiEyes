import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';

@Injectable()
export class NativeActionsProvider {

  constructor(
    private translateService: TranslateService,
    private tts: TextToSpeech,
    private vibration: Vibration
  ) {

  }

  playAudio(text, locale = this.translateService.currentLang) {
    const options = {
      text,
      locale
    };

    return this.tts.speak(options);
  }

  vibrate(time = 1000) {
    this.vibration.vibrate(time);
  }

}
