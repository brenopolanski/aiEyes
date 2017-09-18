import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public screenOrientation: ScreenOrientation,
    private globalization: Globalization,
    public translate: TranslateService
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: SettingsPage },
      { title: 'About', component: AboutPage }
    ];
  }

  initializeApp() {
    // this.translate.setDefaultLang('en');

    // this.globalization.getPreferredLanguage()
    //   .then(res => {
    //     this.translate.setDefaultLang(res.value);
    //   })
    //   .catch(e => console.log(e));

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

      this.globalization.getPreferredLanguage()
        .then(res => {
          this.translate.setDefaultLang(res.value);
        })
        .catch(e => console.log(e));

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
