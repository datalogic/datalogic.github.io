---
id: faq
title: Frequently Asked Questions
---

## How can I receive barcode data in my app?

Register a
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/ReadListener.html" title="Reference com.datalogic.decode.ReadListener"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ReadListener</span></a>
to receive read events on successful barcode reads:

```java
@Override
protected void onResume() {
    super.onResume();
    try {
        if (decoder == null) {
            decoder = new BarcodeManager();
            listener = new ReadListener() {

                @Override
                public void onRead(DecodeResult decodeResult) {
                    mBarcodeText.setText(decodeResult.getText());
                }

            };
            decoder.addReadListener(listener);
        }

    } catch (DecodeException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
}
```

Unregister the ReadListener in your `Activity.onPause()`:

```java
@Override
protected void onPause() {
    super.onPause();
    if (decoder != null) {
        try {
            decoder.removeReadListener(listener);
            decoder = null;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

The actual barcode scanning is started via any physical scan trigger on the
device. Though to start scanning when a button on the application is pressed,
you need to call
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html#startDecode(int)" title="Reference com.datalogic.decode.BarcodeManager#startDecode(int)"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BarcodeManager.startDecode()</span></a>

## How can I configure Decoder properties?

To configure the decoder properties, you need to instantiate

<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html" title="Reference com.datalogic.decode.BarcodeManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BarcodeManager</span></a>
and get a
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html" title="Reference com.datalogic.decode.configuration.ScannerProperties"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ScannerProperties</span></a>

```java
BarcodeManager manager = null;
ScannerProperties configuration = null;

try {
    manager = new BarcodeManager();
} catch (DecodeException e) {
    e.printStackTrace();
}
configuration = ScannerProperties.edit(manager);
```

Properties are organized hierarchically
Each property has the method ```set``` that requires a different
argument depending on the property type (i.e.: int, boolean, String, etc...):

```java
configuration.code39.enable.set(true);
configuration.code39.enableChecksum.set(false);
configuration.code39.fullAscii.set(true);
configuration.code39.Length1.set(20);
configuration.code39.userID.set('x');

if (configuration.qrCode.isSupported()) {
    configuration.qrCode.enable.set(false);
}
```

For the configuration to be actually applied, you must call the method
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html#store" title="Reference com.datalogic.decode.configuration.ScannerProperties#store(com.datalogic.device.configuration.PropertyEditor, boolean)"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ScannerProperties.store()</span></a>

```java
try {
    configuration.store(manager, true);
} catch (ConfigException e) {
    e.printStackTrace();
    return;
}
```

## How can I retreive device information?

The Datalogic Android SDK provides many common operations done on an Android device to
gather information.

### Info

Datalogic SDK provides advanced information about the device in the class

<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html" title="Reference com.datalogic.device.info.System "><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">SYSTEM</span></a>
, which
exposes Wi-Fi type, keyboard type and others as static members. Example usage:

```java
com.datalogic.device.info.SYSTEM.SDK_VERSION_INT;
```

### Power

To get information about the battery, Android broadcasts the `Intent`
<a class="man-link" href="https://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_CHANGED" title="Reference android.content.Intent#ACTION_BATTERY_CHANGED"><i class="fa fa-android"></i>&nbsp;<span class="man-link-name">Intent.ACTION_BATTERY_CHANGED()</span></a>
which carries information in its extra properties. The intent is fired every time
the status of the battery changes. Once  you register a receiver, notice that
this particular behavior happens because the battery intent is a STICKY one
<a class="man-link" href="https://developer.android.com/reference/android/content/Context.html#sendStickyBroadcast" title="Reference android.content.Context#sendStickyBroadcast"><i class="fa fa-android"></i>&nbsp;<span class="man-link-name">Content.sendStickyBroadcast()</span></a>

```java
Intent currentBatteryStatus = registerReceiver(null, new IntentFilter(
    Intent.ACTION_BATTERY_CHANGED));
```

### Location

The standard Android SDK does not allow toggling of the Location services (GPS, network, etc...)
thus an application must ask the user to do it manually. Datalogic SDK overcomes this limitation by
providing the class
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/location/LocationManager.html" title="Reference com.datalogic.device.location.LocationManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LocationManager</span></a>
, which there is an example of below:

```java
com.datalogic.device.location.LocationManager loc = null;
try {
    loc = new com.datalogic.device.location.LocationManager();
    loc.setLocationMode(enable ? LocationMode.NETWORK : LocationMode.OFF);
} catch (DeviceException e) {
    e.printStackTrace();
}
```

### NFC

Standard Android SDK doesn't allow to turn on or off the NFC adapter,
thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit
providing the class
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/nfc/NfcManager.html" title="Reference com.datalogic.device.nfc.NfcManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">NfcManager</span></a>
an example of which is below:

```java
NfcManager nfc = new com.datalogic.device.nfc.NfcManager();
nfc.enableNfcAdapter(enable);
```

### Notifications

Datalogic SDK allows one to control LEDs on the device*.
The standard Android APIs for controlling the notification LED via the
notifications system still works, though you are limited to 1 LED.
Datalogic devices may have more LEDs, and it is easier to control them using the Datalogic
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/LedManager.html" title="Reference com.datalogic.device.notification.LedManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LedManager</span></a>
than the standard API.

```java
LedManager led = new LedManager();
led.blinkLed(Led.LED_GREEN_SPOT, 1, 500, 500);
```

Please notice that not all LEDs on a device can be freely controlled by
a user application, as some are reserved to the system.

### Touch

 The class
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/TouchManager.html" title="Reference com.datalogic.device.input.TouchManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">TouchManager</span></a>
can be used to lock the touchscreen.

```java
TouchManager tm = new TouchManager();
tm.lockInput(true);
Thread.sleep(2000);
tm.lockInput(false);
```

### Sleep and Wakeup

Datalogic <a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html" title="Reference com.datalogic.device.power.PowerManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager</span></a>
allows to configure the screen off timeout and the wakeup sources of the device.

The
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/SuspendTimeout.html" title="Reference com.datalogic.device.power.SuspendTimeout"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">SuspendTimeout</span></a>
can be set
with a condition: the device running on battery or the device plugged to a power source, the function
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html#setSuspendTimeout(com.datalogic.device.power.SuspendTimeout,%20boolean)" title="Reference com.datalogic.device.power.PowerManager#setSuspendTimeout(com.datalogic.device.power.SuspendTimeout,%20boolean)"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager.setSuspendTimeout()</span></a>
has a boolean argument for it.

```java
PowerManager pm = new PowerManager();

pm.setSuspendTimeout(SuspendTimeout.MINUTES_5, false); // battery
pm.setSuspendTimeout(SuspendTimeout.NEVER, true); // ext power
```

Please notice that not all the
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/WakeupSource.html" title="Reference com.datalogic.device.power.WakeupSource"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">WakeupSource</span></a> s
available in the SDK are supported by a device, thus is better to check for
the support before enabling/disabling them.

```java
if (pm.isWakeupSupported(WakeupSource.TRIG_LEFT) &&
        !pm.isWakeupActive(WakeupSource.TRIG_LEFT)) {
    pm.activateWakeup(WakeupSource.TRIG_LEFT);
}
```

### Reset

With the class
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html" title="Reference com.datalogic.device.power.PowerManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager</span></a>
is possible
to perform several type of resets and reboot of the device.
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#ENTERPRISE_RESET" title="Reference com.datalogic.device.BootType#ENTERPRISE_RESET"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BootType.ENTERPRISE_RESET()</span></a>
and
<a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#FACTORY_RESET" title="Reference com.datalogic.device.BootType#FACTORY_RESET"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BootType.FACTORY_RESET()</span></a>
reset types
clear the configuration of the device setting it to a custom one or to the out-of-the-box one
respectively, while <a class="man-link" href="https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#RESET" title="Reference com.datalogic.device.BootType#RESET"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BootType.RESET()</span></a> is
a software reboot of the device.
