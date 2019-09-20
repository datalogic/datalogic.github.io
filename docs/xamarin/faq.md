---
id: faq
title: Frequently Asked Questions
---

## How can I receive barcode data in my app?

Register an
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_IReadListener.htm" title="Reference T.Com.Datalogic.Decode.IReadListener"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">IReadListener</span></a>
in your `Activity.OnResume()`
to receive read events on successful barcode reads:

```java
protected override void OnResume()
{
    base.OnResume();

    if (decoder == null)
    {
        decoder = new BarcodeManager();
    }

    try
    {
    decoder.AddReadListener(this);
    }
    catch (DecodeException e)
    {
        Log.Error(LOGTAG, "Error while trying to bind a listener to BarcodeManager", e);
    }
}
```

Unregister the IReadListener in your `Activity.onPause()`:

```java
protected override void OnPause()
{
    base.OnPause();

    if (decoder != null)
    {
        try
        {
            decoder.RemoveReadListener(this);
    }
    catch (Exception e)
    {
            Log.Error(LOGTAG, "Error while trying to remove a listener from BarcodeManager", e);
    }
    }
}
```

The actual barcode scanning is started via any physical scan trigger on the
device. Though to start scanning when a button on the application is pressed,
you need to call
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm" title="Reference M.Com.Datalogic.Decode.BarcodeManager#StartDecode"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BarcodeManager.StartDecode()</span></a>
.

## How can I configure Decoder properties?

To configure the decoder properties, you need to instantiate
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm" title="Reference T.Com.Datalogic.Decode.BarcodeManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">BarcodeManager</span></a>
and get a
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_Configuration_ScannerProperties.htm" title="Reference T.Com.Datalogic.Decode.Configuration.ScannerProperties"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ScannerProperties</span></a>
instance.

```java
BarcodeManager manager = null;
ScannerProperties configuration = null;
...
manager = new BarcodeManager();
...
configuration = ScannerProperties.Edit(manager);
```

Properties are organized hierarchically
Each property has the method `Set` that requires a different
argument depending on the property type (i.e.: int, boolean, String, etc...):

```java
configuration.Code39.EnableChecksum.Set(true);
configuration.Code39.FullAscii.Set(true);
configuration.Code39.Length1.Set(20);
...
configuration.code39.userID.set('x');
...
 if (configuration.QrCode.IsSupported)
{
    configuration.QrCode.Enable.Set(false);
}
```

For the configuration to be actually applied, you must call the ScannerProperties' `Store` method:

```java
configuration.Store(manager, true);
```

## How can I retreive device information?

The Datalogic Android SDK provides many common operations done on an Android device to
gather information.

### Info

The Datalogic Xamarin SDK provides advanced information about the device in the class
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Info_SYSTEM.htm" title="Reference T.Com.Datalogic.Device.Info.SYSTEM"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">SYSTEM</span></a>
, which
exposes Wi-Fi type, keyboard type and others as static members. Example usage:</p>

```java
Com.Datalogic.Device.Info.SYSTEM.SdkVersionInt;
```

### Power

To get information about the battery, Xamarin broadcasts the `Intent`
<a class="man-link" href="https://developer.xamarin.com/api/field/Android.Content.Intent.ActionBatteryChanged/" title="Reference Android.Content.Intent.ActionBatteryChanged"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ActionBatteryChanged</span></a>
which carry information in its extra properties. The intent is fired every time
the status of the battery changes and once when you register a receiver, notice that
this particular behavior happens because the battery intent is a STICKY one
<a class="man-link" href="https://developer.xamarin.com/api/member/Android.Content.Context.SendStickyBroadcast/" title="Reference Android.Content.Context.SendStickyBroadcast"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">SendStickyBroadcast</span></a>
.

```java
Intent currentBatteryStatus = RegisterReceiver(null, new IntentFilter(
    Android.Content.Intent.ActionBatteryChanged));
```

### Location

The standard Android SDK doesn't allow turning on or off the Location providers (GPS, network, etc...),
thus an application must ask to the user to manually do it. Datalogic SDK overcome this limit
by providing the class
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Location_LocationManager.htm" title="Reference T.Com.Datalogic.Device.Location.LocationManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LocationManager</span></a>
. Here's how to use it:</p>

```java
Com.Datalogic.Device.Location.LocationManager loc = null;
try
{
    loc = new Com.Datalogic.Device.Location.LocationManager();
    loc.setLocationMode(enable ? LocationMode.SensorsAndNetwork : LocationMode.Off);
}
catch (DeviceException e)
{
    Log.Error(this.LocalClassName, "Exception while switching location mode ", e);
}
```

### Nfc

Standard Android SDK doesn't allow to turn on or off the NFC adapter,
thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit by
providing the class
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Nfc_NfcManager.htm" title="Reference T.Com.Datalogic.Device.Nfc.NfcManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">NfcManager</span></a>.
Below is an example of how to use it:</p>

```java
NfcManager nfc = new Com.Datalogic.Device.Nfc.NfcManager();
nfc.EnableNfcAdapter(enable);
```

### Notifications

Datalogic SDK allows to control LEDs on the device (*).
The standard Android APIs for controlling the notification LED via the
notifications system still works, though you are limited to 1 LED, while
Datalogic devices may have more LEDs, and it is easier to control them using the Datalogic
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Notification_LedManager.htm" title="Reference T.Com.Datalogic.Device.Notification.LedManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LedManager</span></a>
than the standard API.

```java
LedManager led = new LedManager();
led.blinkLed(Led.LedGreenSpot, 1, 500, 500);
```

Please notice that not all LEDs on a device can be freely controlled by
a user application, as some are reserved to the system.

### Touch

The class
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Input_TouchManager.htm" title="Reference T.Com.Datalogic.Device.Input.TouchManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">TouchManager</span></a>
can be used to lock the touchscreen.

```java
TouchManager tm = new TouchManager();
tm.lockInput(true);
Thread.sleep(2000);
tm.lockInput(false);
```

### Sleep and Wakeup

Datalogic
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm" title="Reference T.Com.Datalogic.Device.Power.PowerManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager</span></a>
allows one to configure screen timeout and wakeup sources for the device.
The
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_SuspendTimeout.htm" title="Reference T.Com.Datalogic.Device.Power.SuspendTimeout"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">SuspendTimeout</span></a>
 can be set
with a condition: the device running on battery or the device plugged to a power source, the function
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/M_Com_Datalogic_Device_Power_PowerManager_SetSuspendTimeout.htm" title="Reference M.Com.Datalogic.Device.Power.PowerManager#SetSuspendTimeout"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager.SetSuspendTimeout()</span></a>
has a boolean argument for it.

```java
PowerManager pm = new PowerManager();

pm.setSuspendTimeout(SuspendTimeout.Minutes5, false); // battery

pm.setSuspendTimeout(SuspendTimeout.Never, true); // ext power
```

Please note that not all the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_WakeupSource.htm" title="Reference T.Com.Datalogic.Device.Power.WakeupSource"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">WakeupSource</span></a>
s
available in the SDK are supported by a device, thus it is better to check
if they are supported before enabling/disabling them.

```java
if (pm.isWakeupSupported(WakeupSource.TrigLeft) &&
        !pm.isWakeupActive(WakeupSource.TrigLeft)) {
    pm.activateWakeup(WakeupSource.TrigLeft);
}
```

### Reset

With the class
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm" title="Reference T.Com.Datalogic.Device.Power.PowerManager"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">PowerManager</span></a>
 it is possible
to perform several types of resets and reboots of the device.
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_EnterpriseReset.htm" title="Reference P.Com.Datalogic.Device.BootType.EnterpriseReset"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">EnterpriseReset</span></a>
 and
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_FactoryReset.htm" title="Reference P.Com.Datalogic.Device.BootType.FactoryReset"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">FactoryReset</span></a>
 reset types
clear device configuration settings to a custom one or to the out-of-the-box one
respectively, while
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_Reset.htm" title="Reference P.Com.Datalogic.Device.BootType.Reset"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">Reset</span></a>
is a software reboot of the device.

## How can I access the self-shopping cradle?

### Cradle State

Access details such as whether or not the device is in a cradle, the cradle's version, device insertion count, slot index, and whether or not fast charging is supported. These details are stored in the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_StateInfo.htm" title="Reference T.Com.Datalogic.Extension.Selfshopping.Cradle.Joyatouch.StateInfo"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">StateInfo</span></a>
 class. Example usage:

```java
ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;

StateInfo state = new StateInfo();
if (jtCradle.GetCradleState(state))
  string insCount = "Insertion count: " + state.InsertionCount;
```

### Cradle LEDs

Change the state of the LEDs on the cradle by using the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LedAction.htm" title="Reference T.Com.Datalogic.Extension.Selfshopping.Cradle.Joyatouch.LedAction"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LedAction</span></a>
 class. Example usage:

```java
ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;
jtCradle.ControlLed(LedAction.BlinkSlow);
```

### Cradle Lock

Change the state of the cradle lock using the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LockAction.htm" title="Reference T.Com.Datalogic.Extension.Selfshopping.Cradle.Joyatouch.LockAction"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">LockAction</span></a>
 class. Example usage:

```java
ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;
jtCradle.ControlLock(Action.UnlockWithLedOn);
```

### Cradle Config Area

Use the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_ConfigArea.htm" title="Reference T.Com.Datalogic.Extension.Selfshopping.Cradle.Joyatouch.ConfigArea"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">ConfigArea</span></a>
 class to access the current cradle slot's configuration area, consisting of an array of bytes. Also, an exposed method allows to get or set the fast charge value contained in one of the bytes of the configuration area.

```java
ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;
ConfigArea config = new ConfigArea();
byte[] configValues;
if (jtCradle.ReadConfigArea(config))
{
  configValues = config.GetContent();
}
```

### Cradle Custom Area

Use the
<a class="man-link" href="https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_CustomArea.htm" title="Reference T.Com.Datalogic.Extension.Selfshopping.Cradle.Joyatouch.CustomArea"><i class="fa fa-book"></i>&nbsp;<span class="man-link-name">CustomArea</span></a>
 class to access the custom data area of the cradle slot being occupied.

```java
    ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;
CustomArea custom = new CustomArea();
byte[] customValues;
if (jtCradle.ReadCustomArea(custom, custom.Size))
{
  customValues = custom.GetContent();
}
```
