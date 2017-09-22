import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';

@Injectable()
export class NativeActionsProvider {

  preferredLanguage: string = 'en';

  constructor(
    private globalization: Globalization,
    private tts: TextToSpeech,
    private vibration: Vibration
  ) {
    this.globalization.getPreferredLanguage()
      .then(res => this.preferredLanguage = res.value)
      .catch(error => console.log(error));
  }

  playAudio(text, locale = this.preferredLanguage) {
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
