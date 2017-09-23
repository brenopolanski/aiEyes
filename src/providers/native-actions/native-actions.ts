import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';

@Injectable()
export class NativeActionsProvider {

  constructor(
    private tts: TextToSpeech,
    private vibration: Vibration
  ) {

  }

  playAudio(text, locale = 'pt-BR') {
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
