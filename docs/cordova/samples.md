---
id: samples
title: Sample Apps
---

## Ionic Samples

[Ionic](https://ionicframework.com/) sample apps that use the [Datalogic Cordova plugin](https://github.com/datalogic/cordova-plugin-datalogic). Pre-compiled APKs are provided in [releases](https://github.com/datalogic/ionic-samples/releases).

| Name | Description |
|------|-------------|
| [AutoScanTrigger](https://github.com/datalogic/ionic-samples/tree/master/AutoScanTrigger) | Uses [`autoScanTrigger`](https://github.com/datalogic/cordova-plugin-datalogic#autoScanTrigger) functions to toggle available triggers. |
| [DecodeListener](https://github.com/datalogic/ionic-samples/blob/master/DecodeListener) | Uses [`barcodeManager`](https://github.com/datalogic/cordova-plugin-datalogic#barcodeManager) functions to display barcode data on the screen. |
| [LedManager](https://github.com/datalogic/ionic-samples/blob/master/LedManager) | Uses [`ledManager`](https://github.com/datalogic/cordova-plugin-datalogic#ledManager) functions to turn device LEDs on and off. |
| [SetSymbologies](https://github.com/datalogic/ionic-samples/blob/master/SetSymbologies) | Uses [`scannerProperties`](https://github.com/datalogic/cordova-plugin-datalogic#scannerProperties) functions to enable or disable barcode symbologies. |
| [SetTriggers](https://github.com/datalogic/ionic-samples/blob/master/SetTriggers) | Uses [`keyboardManager`](https://github.com/datalogic/cordova-plugin-datalogic#keyboardManager) functions to enable or disable device triggers. |
| [Wedge](https://github.com/datalogic/ionic-samples/blob/master/Wedge) | Uses [`scannerProperties`](https://github.com/datalogic/cordova-plugin-datalogic#scannerProperties) functions to enable or disable barcode keyboard wedge. |

### Build

First, make sure you are set up to build and run on an Android device. See the [requirements here](https://ionicframework.com/docs/intro/deploying/). You can build and run any of the Ionic app samples with a single command:

```bash
ionic cordova run android --device
```

## Phonegap Samples

[Phonegap](https://phonegap.com/) sample apps that use the [Datalogic Cordova plugin](https://github.com/datalogic/cordova-plugin-datalogic). Pre-compiled APKs are provided in [releases](https://github.com/datalogic/phonegap-samples/releases).

| Name | Description |
|------|-------------|
| [BarcodeManager](BarcodeManager/) | Demonstrates using the [`addReadListener`](https://github.com/datalogic/cordova-plugin-datalogic#addreadlistenersuccesscallback-errorcallback-object) ,  [`pressTrigger`](https://github.com/datalogic/cordova-plugin-datalogic#presstriggersuccesscallback-errorcallback-object) and [`releaseTrigger`](https://github.com/datalogic/cordova-plugin-datalogic#releasetriggersuccesscallback-errorcallback-object)functions to simulate scan trigger button press and release in an app. |

### Build

First, make sure you are set up to build and run on an Android device. See the [requirements here](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/). You can build and run any of the PhoneGap app samples with a single command:

```bash
phonegap run android --device
```
