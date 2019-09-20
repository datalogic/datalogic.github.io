---
id: scanner-settings
title: Scanner Settings
---

Describes the available settings to configure the device scanner.

## Settings

### Notification

* `Good read duration`: Duration of each notification on a successful read (in msec). A valid value is an integer in the inclusive range of 20 to 500. The default value is ***70*** msec.

* `Good read interval`: Delay between notifications on a successful read (in msec) A valid value is an integer in the inclusive range of 20 to 500. The default value is ***20*** msec.

* `Good read number`: The number of notifications produced on a successful read. A valid value is an integer in the inclusive range of 1 to 4. The default value is ***1***.

* `Enable display notification`: A boolean indicating if a toast message should be displayed on a successful read. The default value is ***false***.

* `Good read audio mode`: The scanner audio notification mode. Valid values are displayed in a single select list. The default value is ***Beep tone***.

* `Good read audio file`: The path to the file used for the audio notification on a successful read. In order to change the audio file path, the `Good read audio mode` must be set to ***Audio file***. The default audio file is ***/system/media/audio/notifications/Scan_new.ogg***.

* `Good read audio volume`: The volume of the audio notification on a successful read as a percentage. The `Good read audio mode` must be ***Beep tone*** or ***Audio file*** to change the audio volume. A valid value is an integer in the inclusive range of 0 to 100. The default value is ***75***%.

### Good Read

* `Enable good read`: A boolean to enable automatic good read notification when a scan is successful. The default value is ***true***.

* `Enable Green Spot`: A boolean to enable Green Spot notification when a scan is successful. The default value is ***true***.

* `Enable good read LED`: A boolean to enable LED notification when a scan is successful. The default value is ***true***.

* `Enable vibrator`: A boolean to enable vibration notification when a scan is successful. The default value is ***false***.

### Formatting

* `Label prefix`: A string of Unicode characters sent immediately before the symbology identifier. The label prefix may contain printable and non-printable characters. Use the ASCII character symbol surrounded by square brackets to represent non-printable characters.

    E.g. ***[ESC]$*** is a sequence containing the ASCII character symbol representing the ESCAPE non-printable followed by a printable character.

    The default value is ***None***. An ASCII table may be found [here](http://www.asciitable.com/).

* `Label suffix`: A string of Unicode characters sent after the final character in the scanned data. The label suffix may contain printable and non-printable characters. Use the ASCII character symbol surrounded by square brackets to represent non-printable characters.

    E.g. ***[LF]*** is the ASCII character symbol representing the LINE FEED non-printable.

    The default value is ***[LF]*** . An ASCII table may be found [here](http://www.asciitable.com/).

* `Group separator replacement`: A string of Unicode characters that replaces each occurrence of GS in the scanned data. The group separator replacement string may contain printable and non-printable characters. Use the ASCII character symbol surrounded by square brackets to represent non-printable characters.

    E.g. ***[BS][TAB]*** is a group separator sequence consisting of two non-printable characters.

    The default value is ***[GS]*** . An ASCII table may be found [here](http://www.asciitable.com/).

* `Remove non-printable characters`: A boolean indicating if all non-printable characters should be removed from the scanned data. The length check for each symbology is evaluated before any characters are removed. Characters in the code ID, prefix, suffix, and separator won't be removed. The default value is ***false***.

* `Send code ID`: The symbology identifier to be transmitted along with the scanned data. Valid values are displayed in a single select list. The default value is ***None***.

### Scanner Options & Multi Scan

#### Scanner Options

* `Enable picklist`: A boolean to limit reading to targeted selection. The default value is ***false***.

* `Enable illumination`: A boolean to enable barcode illumination when capturing frames. default value is ***true***.

* `Enable aim`: A boolean to enable aim projection when capturing frames. The default value is ***true***.

* `Display mode`: A boolean to enable barcode illumination management when capturing frames from displays or reflective surfaces.

    If enabled, the illuminator adjusts according to the reflection in the previously acquired frames.

    If disabled, the illuminator is always enabled and does not adjust.

    The default value is ***false***.

* `Target mode`: The scanner target beam mode. Valid values are displayed in a single select list. The default value is ***No delay***.

* `Target timeout`: The time (in seconds) that the target beam is on before the scanner attempts to read. Valid values are displayed in a single select list. The `Target mode` must be ***Spot Timeout*** to change the target timeout. The default value is ***1 second***.

* `Release scan timeout`: The maximum time (in seconds) that the scanner is on after trigger release. Valid values are displayed in a single select list. The `Target mode` must be ***Release Scan*** to change the release scan timeout. The default value is ***2 seconds***.

* `Decode timeout`: The maximum time (in seconds) that the scanner remains on without reading a barcode. Valid values are displayed in a single select list. The `Target mode` must be ***No delay*** or ***Spot timeout*** to change the decode timeout. The default value is ***5.0 seconds***.

#### Multi Scan

* `Enable multi scan`: A boolean enabling the ability to capture multiple labels sequentially. The default value is ***false***.

* `Number of required labels`: The number of required labels to be read before automatically ending a good read transaction. The decoding session is ended successfully and all the collected labels are returned together, only if the label count is reached. `Enable multi scan` must be ***true*** to change the number of required labels. A valid value is an integer in the inclusive range of 2 to 10. The default value is ***2***.

* `Enable single notification`: A boolean to enable a notification on each successfully read label during a Multi Scan operation. `Enable multi scan` must be ***true*** to enable single notification. The default value is ***false***.

### Wedge

#### Keyboard Wedge

* `Enable keyboard wedge`: A boolean to enable the captured data to be sent to the foreground application in the form of key events. The default value is ***true***.

* `Enable keyboard wedge only on focus`: A boolean to enable captured data to be sent as key events to the current text area with active keyboard input. `Enable keyboard wedge` must be ***true*** to enable keyboard wedge only on focus. The default value is ***false***.

* `Keyboard wedge input mode`: The input mode for keyboard wedge. Valid values are displayed in a single select list. `Enable keyboard wedge` must be ***true*** to change the keyboard wedge input mode. The default value is ***Text injection***.

#### Intent Wedge

* `Enable intent wedge`: A boolean to enable the captured data to be sent to an application in the form of an implicit intent. The default value is ***false***.

* `Intent delivery mode`: The delivery mode for intent wedge. `Enable intent wedge` must be ***true*** to change the intent delivery mode. Valid values are displayed in a single select list. The default value is ***Broadcast intent***.

* `Intent action`: The general action to be performed. `Enable intent wedge` must be ***true*** to set an intent action. The default string value is ***com.datalogic.decodewedge.decode_action***.

* `Intent category`: The intent category gives additional information about the action to execute.  `Enable intent wedge` must be ***true*** to set an intent category. The default string value is ***com.datalogic.decodewedge.decode_category***.

* `Intent extra barcode string`: The key that corresponds to the intent extra data. `Enable intent wedge` must be ***true*** to set an extra barcode string. The default string value is ***com.datalogic.decode.intentwedge.barcode_string***.

* `Intent extra barcode type`: Specifies an explicit MIME data type. Typically, the type is inferred from the data. By setting the type, you force a specific type and disable evaluation of the data. `Enable intent wedge` must be ***true*** to set a barcode type. The default string value is ***com.datalogic.decode.intentwedge.barcode_type***.

* `Intent extra barcode data`: The extra data.  `Enable intent wedge` must be ***true*** to set the extra barcode data. The default string value is ***com.datalogic.decode.intentwedge.barcode_data***.

#### Web Wedge

* `Enable web wedge`: A boolean enabling the captured data to be sent to the Internet browsing application, in the form of a valid URL. The default value is ***false***.
