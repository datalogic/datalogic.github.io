---
id: overview
title: Cordova SDK
sidebar_label: Cordova SDK Overview
---


Library that exposes the [Datalogic Android (Java) SDK](https://github.com/datalogic/datalogic-android-sdk) as a [Cordova plugin](https://cordova.apache.org/plugins/?q=cordova-plugin-datalogic). It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: [@datalogic/cordova-plugin-datalogic](https://www.npmjs.com/package/@datalogic/cordova-plugin-datalogic).

## Installation

You can install the plugin from the `npm` registry as follows:

```bash
npm i @datalogic/cordova-plugin-datalogic
```

***...or*** use the following Cordova CLI command:

```bash
cordova plugin add @datalogic/cordova-plugin-datalogic
```

***or,*** if you are using ionic, this ionic command:

```bash
ionic cordova plugin add @datalogic/cordova-plugin-datalogic
```

***or,*** if you are using PhoneGap CLI, this phonegap command:

```bash
phonegap plugin add @datalogic/cordova-plugin-datalogic

## Publish new version

Install and use the [np tool](https://github.com/sindresorhus/np):

``` bash
npm install --global np
np
```

## Sample apps

Several sample applications are provided to demonstrate using the plugin:

* [Ionic samples](https://github.com/datalogic/ionic-samples)
* [Phonegap samples](https://github.com/datalogic/phonegap-samples)
