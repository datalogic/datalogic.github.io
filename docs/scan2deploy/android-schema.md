---
id: android-schema
title: Scan2Deploy Android Schema
sidebar_label: Android Schema
---

This repo stores the JSON schema used by [Scan2Deploy Android](https://github.com/datalogic/scan2deploy-android). The latest "stable" version of the schema is also available at [schemastore.org](http://json.schemastore.org/datalogic-scan2deploy-android).

## Schema Versioning

The schema follows the conventions of [SchemaVer](https://github.com/snowplow/iglu/wiki/SchemaVer), provided here for convenience:

SchemaVer is defined as follows: MODEL-REVISION-ADDITION

* MODEL when you make a breaking schema change which will prevent interaction with any historical data
* REVISION when you introduce a schema change which may prevent interaction with some historical data
* ADDITION when you make a schema change that is compatible with all historical data

The [schema.json](schema.json) file doesn't contain any indication of it's version on it's own. Instead, we use Github's [releases](releases) to version the schema.

## Schema documentation

Each section is *optional* in nature. Sections `padlock`, `settings`, `network`, `deployment`, and `blobs` are skipped when missing. Also, for the `settings` section, the configuration parameters are *optional* and when not provided the current setting is kept.

### Layout

The `layout` section is used to format the output file. The available parameters are the following

* `description`: (optional) Free-form description field (350 max characters). Description will be displayed in header of output file. The default description is `none`.
* `enroll`: (optional) Boolean flag instructing DL-Config to generate Scan2Deploy Device Owner Enrollment QR code in output file. The default value is `false`.

### Padlock

The `padlock` section is used to configure the staging locking feature. The available parameters are:

* `valid-until`: (optional) Specifies the expiration date of the barcode sequence. In order for this to properly work the device date should be synchronized or at least configured. The default value is `20991231235959`, that is a non-expiring barcode sequence.
* `key`: (optional) Defines the padlock key to be used. If the values doesn't match the device one the barcode is rejected. The default value is the empty string (meaning, no key).
* `state`: (optional) Configures the padlock state. Can be either `locked` indicating that the provided key is possibly set, or `unlocked` in the case device padlock need to be disabled.
* `hide-from-launcher`: (optional) Boolean value that enables the `Scan2Deploy` to be disabled for good once the staging is complete. Please note that once disabled the application can't be re-enabled unless a factory-reset is performed. The default value is `false`.

### Global

* `action`: (optional) Specifies the final action performed by the application at the very end of the staging process. This can be `none`, `close`, `enterprise-reset`, `factory-reset`, `reset`, or an `intent:`/`android-app://` URI. The default value is `none`.
* `backup-to-enterprise`: (optional) Boolean flag that activates the enterprise backup persistence for the staging data. That means that both the staging script and archive are copied in the enterprise partition. Upon enterprise reset, the application will re-stage the device with such information. The default value is `false`.
* `target-path`: (optional) This is the base destination folder where any archive/fill will be inflated/written. The default value points to the device internal SD-card root.
* `install-path`: (optional) Folder where the application expects auto-installed/auto-updated APKs are to be found. The default value point to the value specified for the `target-path` parameter.
* `update-path`: (optional) Folder where the application expects auto-updated OTA packages are to be found. The default value point to the value specified for the `target-path` parameter.
* `purge-target-path`: (optional) Boolean value that drives the application behaviour with regards to the target path, that is whether a pre-existing target need to be *purged* (i.e. *deleted*) prior inflation of the deployment archive. The default value is `true` in order to ensure a cleanest-as-possibile deployment.
* `auto-scan`: (optional) Boolean value that enables/disables the auto-installation and auto-update of APKs and OTA packages. The default value is `false`.
* `downgrade-preinstalled`: (optional) Boolean value used to force the downgrade even of (system) pre-installed application, if required. The default value is `false`.
* `script`: (optional) Can be either a string specifying the absolute/relative path of a file, or a JSON array of strings describing the file content line-by-line. The script file will be interpreted and run at the very end of the staging process, after any setting/network/deployment has been completed. The default value is the empty string (i.e. `""`), disabling the script interpretation. The language structure is a simple one-statement-per-line sequence, executed in order. The supported commands are documented [below](#scripting).

### Settings section

The `settings` sections can be used to controls some inner device settings, that typically need to be changed from the default (Android) setting. The available parameters are the following

* `date-time`: (optional) String representation, in RFC-1123 format, of the date to be set. The default value is `null`, which leave the current device date untouched.
* `auto-time`: (optional) Boolean value controlling the *Date & Time* automatic date-time adjustment setting. The default (Android) value is `true`.
* `auto-time-zone`: (optional) Boolean value controlling the *Date & Time* automatic time-zone adjustment setting. The default (Android) value is `true`.
* `auto-time-server`: (optional) Address of the NTP server to be used for date-time synchronization. Please note that the timezone won't possibly be synched due to lack of a GPS unit in the device. If the server is set a device reboot is suggested for the new setting to be spread system-wide.  The default value is `null`, which leave the default NTP is used (i.e. `asia.pool.ntp.org`).
* `debug-bridge`: (optional) Boolean value controlling the state of *Android Debug Bridge*. The default (Android) value is `true`.
* `lock-screen`: (optional) Boolean value controlling the state of Android's lock-screen, requiring the user to swipe the display to unlock the device. The default (Android) value is `true`.
* `status-bar`: (optional) Boolean value controlling the (top) display status-bar. By hiding the status-bar notifications will disappear, too. The default (Android) value is `true`.
* `navigation-bar`: (optional) Boolean value controlling the (bottom) display navigation-bar. The default (Android) value is `true`.
* `charge-threshold`: (optional) Integer value in the range `0` to `100` indicating the charge threshold a battery exhausted device need to reach to automatically boot when recharging. The default value is `5`.
* `usb-profile`: (optional) USB communication profile in use. Available values are `NONE`, `BOTH`, `DATA`, and `CHARGE`. The default (Android) value is `BOTH`.
* `usb-function`: (optional) USB communication function in use. Available values are `MTP`, `PTP`, and `CHARGING`. The default (Android) value is `CHARGING`.

### Network

The `network` sections is used to configure the device Wi-Fi network. The available parameters are the following

* `essid`: (optional) The wireless network ESSID. The default value is `tsunami`.
* `hidden`: (optional) Boolean value indicating whether the wireless network is using a hidden ESSID. The default value is `false`.
* `mode`: (optional) The wireless connection mode. Supported values are `open`, `wep-40`, `wep-104`, `wpa-psk`, `wpa2-psk`, `wpa-eap`, and `wpa2-eap`. The default value is `open`.
* `mode-key`: (optional) The wireless network key, if needed. The default value is the empty string (i.e. `""`).
* `mode-key-encrypted`: (optional) Boolean value reporting if the `mode-key` is written in plain-text or encrypted (with a custom encryption algorithm). The default value is `false`.
* `eap-method`: (optional) Configures the EAP authentication method. Supported values are `none`, `peap`, `tls`, `ttls`, `pwd`, `sim`, `aka`, and `aka-prime`. The default value is `none`.
* `eap-phase2`: (optional) Configures the EAP phase 2 authentication method. Supported values are `none`, `pap`, `mschap`, `mschapv2`, and `gtc`.The default value is `none`.
* `eap-identity`: (optional) Indicates the EAP identity. The default value is the empty string (i.e. `""`).
* `eap-anonymous-identity`: (optional) Indicates the EAP anonymous identity, used as the unencrypted identity with certain EAP types. The default value is the empty string (i.e. `""`).
* `eap-password`: (optional) Sets the EAP password, if needed. The default value is the empty string (i.e. `""`).
* `eap-password-encrypted`: (optional) Boolean value reporting if the `eap-password` is written in plain-text or encrypted (with a custom encryption algorithm). The default value is `false`.
* `eap-certificate`: (optional) Base64 representation of the EAP certificate to use. The default value is the empty string (i.e. `""`).
* `proxy-host`: (optional) Server name or IP address of the proxy to be user for HTTP/HTTPS communications. The default value is the empty string (i.e. `""`).
* `proxy-port`: (optional) Server IP port of the proxy for HTTP/HTTPS communications. The default value is `0`.
* `purge`: (optional) Boolean value telling if any currently configured wireless network is to be removed. This can be useful in order to avoid profile roaming. The default value is `true`.
* `reconfigure`: (optional) When the `purge` parameter is set to `false` the wireless network the application is going to set-up could already be existing. This boolean parameter controls the application behavior, that will re-configure any existing and matching network (`true`) or skip it and leave it untouched (`false`).
* `sleep-policy`: (optional) Wireless sleep policy, as for Android's [Settings.Global](https://developer.android.com/reference/android/provider/Settings.Global.html) parameter. Available values are `0` (`WIFI_SLEEP_POLICY_DEFAULT`), `1` (`WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED`), and `2` (`WIFI_SLEEP_POLICY_NEVER`). The default value is `2` (i.e. `WIFI_SLEEP_POLICY_NEVER`).
* `frequency-band`: (optional) Controls the frequency bands supported by the device. Supported value are `auto`, `5ghz`, and `2ghz`. The default value is the current device setting (typically `"auto"`).
* `ephemeral`: (optional) If set to `true` the wireless connection profile will be solely used during the staging process, and deleted once complete. When `false` the profile will still be present after the staging process. The default value is `false`.
* `save-to-file`: (optional) Absolute path of the file where the current network configuration will be saved. The default value is the empty string (`""`), indicating that the network configuration will not be serialized to file.
* `wait-for-connection`: (optional) Tells whether a valid Wi-Fi connection has to be waited once the network configuration is complete. Can be useful when the device need to be configured *but* a valid Wi-Fi connection is not ready, yet. The default value is `true`.

### Deployment

The `deployment` section can be used to download a ZIP archive from a server and inflate it to the `target-path` folder. The available parameters are the following

* `scheme`: (optional) The deployment download scheme to use. Can be either `http` or `https`. The default value is `http`.
* `host`: (mandatory) The host-name or internet-protocol address of the server from which the resource is to be fetched.
* `port`: (optional) TCP/IP port to be used to contact the server. The default value is `80`.
* `path`: (optional) Path to the server resource to download, complete with query-string if needed. The default value is the empty string (`""`).
* `check-timeout`: (optional) The default value is `1000`.
* `fetch-timeout`: (optional) The default value is `60000`.
* `skip-inflation`: (optional) Boolean value instructing the application *not* to inflate the deployment archive once downloaded. This can be useful to speed the OTA update process up. The default value is `false`.
* `working-archive`: (optional) String representation of the local archive path-file name, once downloaded. The default value is `/mnt/sdcard/scan2deploy.archive`.

### Blobs

The `blobs` (optional) section is a JSON-array of objects. Each object *must* contain the following two attributes

* `file`, the path of the file to be created, and
* `content`, the base64 representation of the actual file content.

The `file` attribute can be either absolute or relative (in this latter case, relative to the `global/target-path` parameter value). During the files de-serialization any required (parent) path is automatically created.

In order to generate the base64 representation of a give binary file any suitable tool can be used (e.g. `base64` command-line program, or online services such as [HexEd.it](https://hexed.it) or [CyberChef](https://gchq.github.io/CyberChef/)).

## Scripting

Description of commands supported by the `script` key in the `Global` section.

### DELETE

  ```bash
  DELETE <path> [pattern] [include]
  ```

  Recursively deletes files/folders starting from `path`, only if the name matches the `pattern` regular-expression. If folder `path` is empty at the end of the process it will be deleted, as well.
  
* `pattern` - Optional regular expression to match. Often, this would just be the name of the file to be deleted. Default value: `"^.+$"` (i.e. delete all files with names one or more characters long).

  * `include` - Optional value. If `include` is `true`, the matching entries will be deleted. If `include` is false, the non-matching entries will be deleted. Default value: `true`.

### DISABLE_APP

  ```bash
  DISABLE_APP <package-name>
  ```

  Disables the app with the specified `package-name`. There is no longer any way an user could launch the app.

### ENABLE_APP

  ```bash
  ENABLE_APP <package-name>
  ```

  Enable the app with the specified `package-name`. The app becomes user-launchable.

### GRANT

  ```bash
  GRANT [-p permission] [-s grant|deny|default] <package-name>
  ```

  Grants or revokes permissions on the specified package. The `-p` and `-s` parameters are optional.

* `[-p]` If a permission is provided using the `-p` parameter, only that single permission will be affected. If no `-p` is specified, all the permissions declared in the manifest for the given `package-name` package will be affected.
* `[-s]` The `-s` paramter can be used to specify that the permission be granted (`grant`), denied (`deny`), or user-configurable (`default`). In the caes of `grant` and `deny`, the permission set is no longer user-configurable; if you view the permission in the Settings app on the device, you will see that it can't be modified. The default behavior is to `grant` permission(s).

### INFLATE

  ```bash
  INFLATE <archive-path> <target-path>
  ```

  Inflates the ZIP archive found at `archive-path` to `target-path` folder.

### INSTALL

  ```bash
  INSTALL <apk-path>
  ```

  Installs an application given the path to the containing APK.

### LAUNCH

  ```bash
  LAUNCH <package-name>
  ```

  Starts the launching intent given an application `package-name`.

### SHELL

  ```bash
  SHELL am [broadcast|start]
  ```

  Runs a small subset of commands available over `adb`. Currently, this includes the `am` subcommands `broadcast` and `start`. The official adb documentation for `am` commands is [available here](https://developer.android.com/studio/command-line/adb#am).

### UNINSTALL

  ```bash
  UNINSTALL <package-name>
  ```

  Uninstalls a previously installed application given its `package-name`.

### UPDATE

  ```bash
  UPDATE <ota-path> [none|factory|enterprise] [none|true]
  ```

  Installs a firmware update from an OTA package that has already been extracted to the device. There are 2 optional parameters:

  1. Reset type to be performed after update. Valid values are `none`, `factory`, and `enterprise`.

  2. Determines in an update should be "forced" or not. Valid values are `none` and `true`.

### WAIT

  ```bash
  WAIT <milliseconds>
  ```

  Suspend the script execution for `milliseconds` milliseconds.
