---
id: api
title: Cordova API
sidebar_label: API
---


## API Reference

All functions are asynchronous. All functions will, at a minimum, include `successCallback` and `errorCallback` parameters, both of which are callback functions.

* `successCallback` will be called in normal cases, and will return an appropriate JSON `object`.

* `errorCallback` will be called when there was an error, and will return a single error `string`.

### Namespaces

| Namespace | Description
|-----------|------------
| [barcodeManager](#barcodeManager) | receive barcode data
| [autoScanTrigger](#autoScanTrigger) | work the the autoscan features
| [keyboardManager](#keyboardManager) | set usable device triggers
| [ledManager](#ledManager) | control device LEDs
| [scannerProperties](#scannerProperties) | define availabled symbologies

### barcodeManager

---

| Function | Description
|----------|------------
| [addReadListener](#addreadlistenersuccesscallback-errorcallback-object) | Register to recieve barcode data on each scan.
| [pressTrigger](#presstriggersuccesscallback-errorcallback-object) | Simulate a trigger button press.
| [releaseTrigger](#releasetriggersuccesscallback-errorcallback-object) | Simulate a trigger button release.

#### .addReadListener(`successCallback`, `errorCallback`): Object

Register to recieve barcode data on each scan. `successCallback` will be called ***every time*** a barcode is successfully scanned. Therefore, you will typically only need to call `barcodeManager.addReadListener()` *once* in your application.

##### Response

* `barcodeData` : `string` - the barcode data scanned.
* `barcodeType` : `string` - will be one of the `BarcodeID` values defined in the [BarcodeID class](https://github.com/datalogic/datalogic-android-sdk/blob/master/sdk/src/main/java/com/datalogic/decode/BarcodeID.java) in the [Datalogic Android SDK](https://github.com/datalogic/datalogic-android-sdk).

```json
{
   "barcodeData": "EUG2997",
   "barcodeType": "CODE128"
}
```

##### Example

```js
declare let barcodeManager : any;
...
barcodeManager.addReadListner(
   (data) => {
     parsedData = JSON.parse(data);
     alert(parsedData.barcodeData + ", " + parsedData.barcodeType);
   },
   (err)=>{ alert(err); }
);
```

#### .pressTrigger(`successCallback`, `errorCallback`): Object

Call this method to simulate a trigger button press. The method does not always immediately start a capture; instead it behaves like pressing a physical scan button.

##### Response

`string` with success message

##### Example

```js
barcodeManager.pressTrigger(
  (data) => { alert(data); },
  (err) => { alert(err);}
);
```

#### .releaseTrigger(`successCallback`, `errorCallback`): Object

Call this method to simulate a release of a trigger button. The method does not always immediately stop a capture; instead it behaves like releasing a physical scan button.

##### Response

`string` with success message

##### Example

```js
barcodeManager.releaseTrigger(
  (data) => { alert(data); },
  (err) => { alert(err);}
);
```

### autoScanTrigger

---

| Function | Description
|----------|------------
| [isAvailable](#isavailablesuccesscallback-errorcallback-object) | Determine if the auto scan feature is available on this device.
| [getSupportedRanges](#getsupportedrangessuccesscallback-errorcallback-object) | Get the supported ranges of the autoscan feature.
| [getCurrentRange](#getcurrentrangesuccesscallback-errorcallback-object) | Get the current range of the autoscan feature.
| [setCurrentRange](#setcurrentrangeid-successcallback-errorcallback-object) | Set the current range of the autoscan feature.

#### .isAvailable(`successCallback`, `errorCallback`): Object

Determine if the auto scan feature is available on this device.

##### Response

* `available` : `boolean` - indicates if autoscan is supported or not on this device.

```json
{ "available": true }
```

##### Example

```js
declare let autoScanTrigger : any;
isAvailable : boolean = false;
...
autoScanTrigger.isAvailable(
  (data) => {
    this.isAvailable = JSON.parse(data).available;
    alert(this.isAvailable);
  },
  (err) => { alert(err); }
);
```

#### .getSupportedRanges(`successCallback`, `errorCallback`): Object

Get the supported ranges of the autoscan feature.

##### Response

`supportedRanges` : `array` - provides array of ranges device supports. The array will be empty if device deos not support autoscan. Each object in the array contains:

* `id` : `integer` - unique value for a step in the supported ranges
* `name` : `string` - descriptive text related to the `id`

If AutoScan is not supported by device:

```json
{ "supportedRanges":[] }
```

If AutoScan is supported:

```json
{
  "supportedRanges":[
  {
    "id":0,
    "name":"Near"
  },
  {
    "id":1,
    "name":"Intermediate"
  },
  {
    "id":2,
    "name":"Far"
  }
  ]
}
```

##### Example

```js
declare let autoScanTrigger : any;
autoScanTrigger.getSupportedRanges(
  (data) => {
    alert(JSON.parse(data).supportedRanges);
    if(this.supportedRanges.length == 0)
      alert("Device does not support Auto Scan");
  },
  (err) => { alert(err); }
);
```

#### .getCurrentRange(`successCallback`, `errorCallback`): Object

Get the current range of the autoscan feature.

##### Response

`currentRange` : `object` - contains 2 fields:

* `id` : `integer`
* `name` : `string`

If AutoScan is not supported by device:

```json
{ "currentRange":null }
```

If AutoScan is supported:

```json
{
  "currentRange":
  {
      "id":1,
      "name":"Intermediate"
  }
}
```

##### Example

```js
declare let autoScanTrigger : any;
autoScanTrigger.getCurrentRange(
  (data) => {
    alert(JSON.parse(data).currentRange);
  },
  (err) => { alert(err); }
);
```

#### .setCurrentRange(`id`, `successCallback`, `errorCallback`): Object

Set the current range of the autoscan feature.

`id` : `integer` - should match one of the `id` values retrevied by the getSupportedRanges function.

##### Response

`string` with success message

##### Example

Set current range to "Intermediate"

```js
autoScanTrigger.setCurrentRange(
  0,
  (data) => { alert(data); },
  (err) => { alert(err); }
);
```

### keyboardManager

---

| Function | Description
|----------|------------
| [getAllAvailableTriggers](#getallavailabletriggers-successcallback-errorcallback-object) | Get all the available triggers of the device.
| [setAllAvailableTriggers](#setallavailabletriggersenable-successcallback-errorcallback-object) | Set all the devices triggers on or off.
| [setTriggers](#settriggersconfig-successcallback-errorcallback-object) | Set one or more triggers on or off.

#### .getAllAvailableTriggers (`successCallback`, `errorCallback`): Object

Get all the available triggers of the device.

##### Response

`triggers` : `array` - each object in the array contains:

* `enabled` : `boolean`
* `id` : `integer`
* `name` : `string`

Typical resopsnse:

```json
{
    "triggers":[
    {
        "enabled":true,
        "id":3,
        "name":"Front Trigger"
    },
    {
        "enabled":false,
        "id":4,
        "name":"Auto Scan Trigger"
    },
    {
        "enabled":false,
        "id":5,
        "name":"Motion Trigger"
    }
    ]
}
```

##### Example

```js
keyboardManager.getAllAvailableTriggers(
  (data) => { alert(JSON.parse(data).triggers); },
  (err) => { alert(err); }
);
```

#### .setAllAvailableTriggers(`enable`, `successCallback`, `errorCallback`): Object

Set all the devices triggers on or off.

##### Response

`string` with success message

##### Example

Turn all triggers on.

```js
keyboardManager.setAllAvailableTriggers(
  true,
  (data) => { alert(data); },
  (err) => { alert(err); }
);
```

#### .setTriggers(`config`, `successCallback`, `errorCallback`): Object

Set one or more triggers on or off. You will likely call `getAllAvailableTriggers`, edit the `enabled` flags of each returned object as desired, and then resubmit by calling `setTriggers`.

`config` : `array` - each ojbect in the array represents an individual trigger. Each object in the array contains:

* `id` : `integer`
* `enabled` : `boolean`

##### Response

`string` with success message

##### Example

```js
//an array os supported triggers
triggers:{id: number, name: string, enabled: boolean}[]  = [];
...
keyboardManager.getAllAvailableTriggers(
  (data) => {
    this.triggers = JSON.parse(data).triggers;
    this.triggers[0].enabled = false;

    keyboardManager.setTriggers(
      this.triggers,
      (data) => { alert(data); },
      (err) => { alert(err);}
    );
  },
  (err) => { alert(err); }
);
```

### ledManager

---

| Function | Description
|----------|------------
| [setLed](#setledledconfig-successcallback-errorcallback-object) | Set various device LEDs.

#### .setLed(`ledConfig`, `successCallback`, `errorCallback`): Object

Set the various device LEDs. A list of enum values for LEDs can be found [here]( https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/Led.html).

##### Response

`string` with success message

##### Example

```js
ledManager.setLed({"led": "LED_GOOD_READ", "enable": false}, null, null);
```

### scannerProperties

---

| Function | Description
|----------|------------
| [edit](#editsuccesscallback-errorcallback-object) | Get a list of supported properties along with the state of each (enabled or disabled).
| [store](#storeproperties-successcallback-errorcallback-object) | Apply changes to one or more properties with the values supplied.

#### .edit(`successCallback`, `errorCallback`): Object

Get a list of supported scanner properties along with the state of each (enabled or disabled).

##### Response

A single JSON object containing an object for each of the available symbologies. Each symbology contains, at a minimum, these fields:

* `enable` : `boolean` - if scannner is set to detect this barcode type or not
* `supported` : `boolean` - if the scanner supports the given barcode type or not

```json
{
  "keyboardWedge":{"enable":true,"supported":true},
  "aztec":{"enable":true,"supported":true},
  "codabar":{"enable":true,"supported":true},
  "code128":{"enable":true,"supported":true},
  "code39":{"enable":true,"supported":true},
  "code93":{"enable":false,"supported":true},
  "composite":{"enable":false,"supported":true},
  "datamatrix":{"enable":true,"supported":true},
  "digimarc":{"enable":false,"supported":false},
  "discrete25":{"enable":false,"supported":true},
  "ean13":{"enable":true,"supported":true},
  "ean8":{"enable":true,"supported":true},
  "gs1DataBar_14":{"enable":true,"supported":true},
  "gs1DataBar_Expanded":{"enable":true,"supported":true},
  "gs1DataBar_Limited":{"enable":true,"supported":true},
  "interleaved25":{"enable":true,"supported":true},
  "matrix25":{"enable":false,"supported":true},
  "maxicode":{"enable":false,"supported":true},
  "microQr":{"enable":false,"supported":true},
  "micropdf417":{"enable":false,"supported":true},
  "msi":{"enable":false,"supported":true},
  "p4State":{"enable":false,"supported":true},
  "pAus":{"enable":false,"supported":true},
  "pJap":{"enable":false,"supported":true},
  "pKix":{"enable":false,"supported":true},
  "pPlanet":{"enable":false,"supported":true},
  "pPostnet":{"enable":false,"supported":true},
  "pRM":{"enable":false,"supported":true},
  "pdf417":{"enable":true,"supported":true},
  "qrCode":{"enable":true,"supported":true},
  "upcA":{"enable":true,"supported":true},
  "upcE":{"enable":true,"supported":true}
}
```

##### Example

```js
properties : any = {};
...
scannerProperties.edit(
  (data) => {
    this.properties =  JSON.parse(data);
    this.aztec = false;
    this.codabar = false;
    this.code128 = true;
    this.keyboardWedge = false;
  },
  (err) => { alert(err); }
);
```

#### .store(`properties`, `successCallback`, `errorCallback`): Object

Apply changes to one or more symbologies with the values supplied in `properties`.

##### Response

`string` with success message

##### Examples

Enable UPC-E symbology

```js
scannerProperties.store({"upcE":{"enable":true,"supported":true}}, null, null);
```

Disable keyboard wedge feature

```js
scannerProperties.store({"keyboardWedge":{"enable":false}}, null, null);
```
