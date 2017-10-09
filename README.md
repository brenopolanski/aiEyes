# <img src="./resources/icon.png" width="100" align="left"> aiEyes

> Describes photos using audio for Blind and Visually-Impaired Users.

*aiEyes* is an open source app that helps the Blind and Visually-Impaired Users to **see** the world with the help of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence). Developed with [Ionic framework](https://ionicframework.com/), [Azure Computer Vision API](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) and [Google Translate API](https://github.com/matheuss/google-translate-api) it is able to describe pictures to the user.

Inspired by *@adrielcafe* [BeMyEyesXamarinApp](https://github.com/adrielcafe/BeMyEyesXamarinApp).

![](./screenshots/app_flow.png)

### :heart: Found this project useful?

If you found this project useful, then please consider giving it a :star: on Github and sharing it with your friends via social media.

## Demo Video

[![demo](https://img.youtube.com/vi/k8kd785kfMY/0.jpg)](https://youtu.be/k8kd785kfMY)

## Getting Started

#### Get API Key

Create your Computer Vision API Key here: https://azure.microsoft.com/en-us/try/cognitive-services/

Modify the file `src/utils/keys.ts` with the value of your API Key.

#### Installation

First of all, install the dependencies to run this app:

```
$ npm install -g cordova ionic
```

Install dependencies:

```
$ npm install
```

#### Run the app on your phone

```
$ ionic cordova platform add android
$ ionic cordova run android
```

or

```
$ ionic cordova platform add ios
$ ionic cordova run ios
```

## Technologies

| **Tech** | **Description** |
|----------|-----------------|
| [Ionic framework](https://ionicframework.com/) | Ionic is the beautiful, free and open source mobile SDK for developing native and progressive web apps with ease. |
| [Azure Computer Vision API](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) | Extract rich information from images to categorize and process visual data – and machine-assisted moderation of images to help curate your services. |
| [Google Translate API](https://github.com/matheuss/google-translate-api) | A free and unlimited API for Google Translate :dollar::no_entry_sign: |
| [Server google-translate-api](https://github.com/brenopolanski/server-google-translate-api) | A simple server using a free and unlimited API for Google Translate. |
| [Ionic Native Camera](http://ionicframework.com/docs/native/camera/) | This plugin defines a global `navigator.camera` object, which provides an API for taking pictures and for choosing images from the system's image library. |
| [Ionic Native File and File Transfer](http://ionicframework.com/docs/native/file-transfer/) | This plugin allows you to upload and download files. |
| [Ionic Native Text To Speech](http://ionicframework.com/docs/native/text-to-speech/) | Text to Speech plugin. |
| [Ionic Native Vibration](http://ionicframework.com/docs/native/vibration/) | Vibrates the device. |
| [Ionic Native Screen Orientation](http://ionicframework.com/docs/native/screen-orientation/) | Cordova plugin to set/lock the screen orientation in a common way. |
| [Ionic Native Globalization](http://ionicframework.com/docs/native/globalization/) | This plugin obtains information and performs operations specific to the user's locale, language, and timezone. |
| [Ionic Native Storage](http://ionicframework.com/docs/native/native-storage/) | Native storage of variables in Android and iOS. |
| [NGX-Translate](https://github.com/ngx-translate) | NGX-Translate is an internationalization library for Angular 2+. It lets you define translations for your content in different languages and switch between them easily. |

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/aiEyes/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/aiEyes/releases).

## Credits

- [Iconfinder](https://www.iconfinder.com/icons/2525027/hulk_male_no_eyes_super_hero_icon#size=256)
- [BeMyEyesXamarinApp](https://github.com/adrielcafe/BeMyEyesXamarinApp)

## Donations

Donations would be more than welcome :)

[![donate-paypal](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/btn_donate_paypal.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WNXA4YYGQCJZG)

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
