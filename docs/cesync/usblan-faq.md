---
id: usblan-faq
title: Frequently Asked Questions
sidebar_label: USBLAN FAQ
---

## Can USBLAN be used as an ActiveSync replacement?

Probably. It is not as full-featured as ActiveSync, but you can do the following:

- Communicate over USBLAN using standard TCP/IP or UDP/IP communicaiton
- Deploy and debug apps in Visual Studio 2008. See "How can I use a USBLAN connection for Visual Studio debugging?" below.
- Use Datalogic's [device-sync](samples) command line tool in place of ActiveSync tools like `CECopy` and `RAPI Start`
- Use Datalogic [DXU](/dxu/) for Remote Desktop functionality

## How can I use a USBLAN connection for Visual Studio debugging?

Follow the directions below. This is useful if you can't or don't want to use ActiveSync to debug your app in Visual Studio 2008.  You can debug over USBLAN, Ethernet dock, and a Wi-Fi connection to your WEC7 device (Skorpio X4 or Falcon X4) instead. The following steps assuming you will be using a USBLAN connection and the `device-sync` command line tool. The `device-sync` tool is not strictly necessary, as you could copy the files over and start the processes another way, but it makes the whole process much easier. These steps were adapted from [this article](https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008).

### On your PC

- Follow the [steps here](https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008#Prepare_Visual_Studio_2008_VS2008) to configure Visual Studio 2008 (one time setup).
- If you have a SD card, you could copy the files there. In that case, skip to the [Device Steps](#device-steps) section
- Download the latest version of the [device-sync](samples) tool
- Open a command prompt in the unzipped folder and run these commands. (You could put all these in a .bat file if desired):
  
  ```shell
  device-sync mkdir debug
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\clientshutdown.exe" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\CMAccept.exe" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\ConmanClient2.exe" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\DeviceAgentTransport.dll" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\DeviceDMA.dll" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\eDbgTL.dll" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\emulatorstub.exe" /debug/
  device-sync push "C:\Program Files (x86)\Common Files\microsoft shared\CoreCon\1.0\Target\wce400\armv4i\TcpConnectionA.dll" /debug/
  device-sync push "C:\Program Files (x86)\Microsoft.NET\SDK\CompactFramework\v3.5\WindowsCE\Diagnostics\NETCFv35.Messages.EN.cab" /debug/
  device-sync start \debug\conmanclient2
  device-sync start \debug\cmaccept
  ```

### Device steps

***Note:*** these steps are only necessary if you are not using the device-sync tool. Otherwise, you just started these processes :)

- Open a command prompt on the device, cd into debug and run:

```shell
conmanclient2
```

- Open a 2nd command prompt on the device, cd into debug and run:

```shell
cmaccept
```

### Install required cab file for VS 2008 debugging

This is somewhat unrelated, but usually required to properly use Visual Studio 2008 debugging mode for DotNet apps, even over ActiveSync

- Open Explorer, navigate to /debug, and double click on NETCFv35.Messages.EN.cab. Say yes
- Start your app in Visual Studio 2008 as normal.

## What Datalogic devices (and firmware versions) include the driver?

Device | Firmware version required
-------|--------------------------
Falcon X3 | 2.30
Falcon X3+ | 2.30
Skorpio X3 | 2.30
Falcon X4 WEC7 | 1.20
Skorpio X4 WEC7 | 1.20

## What should happen when I plug in the device?

After reboot, with the device connected, the device should connect and use the driver you installed in Step 1. The device will show up in Windows Device Manager as "Datalogic USBLAN Adapter #1" or similar.
If you do an 'ipconfig' on your Windows 7/8 box from a command prompt, you will a new adapter similar to this:

```shell
 Ethernet adapter Local Area Connection 15:

    Connection-specific DNS Suffix  . :
    Link-local IPv6 Address . . . . . : fe80::b900:ee93:f400:5ee2%51
    IPv4 Address. . . . . . . . . . . : 169.254.1.1
    Subnet Mask . . . . . . . . . . . : 255.255.255.248
    Default Gateway . . . . . . . . . :
```

You should be able to ping the device from a cmd prompt (`ping 169.254.1.2`)
You can connect to the device using DXU by connecting to IP address `169.254.1.2`.

### Can my CE device access the Internet over USBLAN?

You can install an app that acts as a proxy, for example, [Titanium Web Proxy](https://github.com/justcoding121/Titanium-Web-Proxy).

### Are there any configurable settings?

Yes, take a look at [the manual](https://doc-00-1o-docs.googleusercontent.com/docs/securesc/ckfsqjp2lcml0t8qpr5m0cpbb9tmd4qr/9luj1jja9n6pr69ljjk67p4e8ooamp15/1558036800000/09964571699406653893/04841345876767909660/0BxfiY9AWawDDLTRIRHB2blp3T1E?e=file&nonce=6jiql9klht9q8&user=04841345876767909660&hash=ob4ft0dbjia0i9gpi0r6ifgjvh84gojo) for descriptions of specific registry values.

The path to the *production* USBLAN driver registry settings is:

```shell
\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DatalogicUSBLAN\
```

### How do I remove the driver from my PC?

If the [basic uninstallation steps](#Uninstallation) don't work for you, repeat the following steps with every hardware ID (i.e. each specific device) you've used so far.

- Run Device Manager and look for your device. If you find it, right click and select "uninstall" and check the "Remove Driver Software" checkbox.
- Unplug the device and connect it again. You may find a previous edition of USBLAN matches.
- Repeat the above until the device manager reports "unknown device"
- Repeat the preceding steps for other HID's. (Cody's note: I really don't understand what this means)
- We're still not finished: connect your device to other USB ports on the PC -- make sure you get "unknown device" reported.
- Under Windows 10, there is a version on Windows Update. When the removal of local versions is complete, Windows Update will supply a new version. This can be prevented by temporarily suppressing internet access.
- For completeness, technically, the DatalogicUSBLAN folder in the registry should be removed (\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DatalogicUSBLAN\). After this the machine will need to be rebooted.

### What IP addresses do devices get?

Device connected | Windows NDIS IP address  | Device IP address
--|--|--
1st device | 169.254.1.1 | 169.254.1.2
2nd device | 169.254.1.9 | 169.254.1.10
3rd device | 169.254.1.17 | 169.254.1.18
4th device | 169.254.1.25 | 169.254.1.26
5th device | 169.254.1.33 | 169.254.1.34
6th device | 169.254.1.41 | 169.254.1.42
7th device | 169.254.1.49 | 169.254.1.50
8th device | 169.254.1.57 | 169.254.1.58
