---
id: symbology-settings
title: Symbology Settings
---


## Symbologies

For all symbologies, the restrictions for the symbology will only be changed if the symbology is enabled.

### Australia Post

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

### Aztec Code

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***d***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***3750***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

### Codabar

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***I***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***4***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***20***.

* `Enable checksum`: A boolean to require the use of checksum characters to verify a barcode. The default value is ***false***.

* `Send checksum`: A boolean to include the checksum in the label transmission. `Enable checksum` must be ***true*** to enable send checksum. The default value is ***false***.

* `Send start/stop`: A boolean to enable the transmission of the decoded start and stop characters. The default value is ***false***.

* `Convert to CLSI`: A boolean to restrict the decoding to only read labels that conform to CLSI specifications. The default value is ***false***.

### Code 128

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***K***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***2***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***40***.

    **GS1-128**

    * `Enable`: A boolean to enable the symbology. The default value is ***true***.

    * `User ID`: Specifies the symbology identifier. The default character value is ***o***.

    **ISBT 128**

    * `Enable`: A boolean to enable the symbology. The default value is ***false***.

    * `Mode`: Specifies the allowed ISBT 128 barcode symbologies. Valid values are displayed in a single select list. The default value is ***Single***.

    * `Concatenated list enable`: A boolean to enable the concatenation of commonly concatenated pairs. `Mode` must be ***Concatenated*** or ***Both***. The default value is ***false***.

### Code 39

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***C***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***20***.

* `Enable checksum`: A boolean to require the use of checksum characters to verify a barcode. The default value is ***false***.

* `Send checksum`: A boolean to include the checksum in the label transmission. `Enable checksum` must be ***true*** to enable send checksum. The default value is ***false***.

* `Full ASCII conversion`: A boolean to enable full ASCII conversion. The default value is ***false***.

### Code 32

* `Enable`: A boolean to enable the symbology. `Code 39` must be ***true*** to enable Code 32. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***Y***.

### Tri-Optic

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***X***.

### Code 93

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***L***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***2***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***20***.

### Composite

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***q***.

* `Convert to GS1-128`: A boolean to enable the conversion of the composite label to a sequence of one or more GS1-128 barcodes. The default value is ***false***.

* `UPC/EAN link mode`: Controls UPC/EAN label recognition mode. Valid values are displayed in a single select list. The default value is ***Auto***.

### Data Matrix

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***V***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1500***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

* `Data Matrix operating mode`: Controls the operating mode. Valid values are displayed in a single select list. The default value is ***Fast***.

### Digimarc

The Digimarc symbology is only supported on devices with equipped Datalogic scan engines. Please verify that your device supports Digimarc barcodes.

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

### Discrete 2 of 5

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***F***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***6***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***10***.

### EAN-13

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***M***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***false***.

* `Convert to ISBN`: A boolean to enable the identification of ISBN labels and append the check digit (per ISBN guidelines) to the end of the label. The default value is ***false***.

* `Convert to ISSN`: A boolean to enable the identification of ISSN labels and append the check digit (per ISSN guidelines) to the end of the label. The default value is ***false***.

* `Send system digit`: A boolean to include the system digit in the label transmission, it configures whether the first character should be transmitted. The default value is ***true***.

### EAN-8

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***G***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***false***.

* `Convert to EAN-13`: A boolean to enable the expansion of EAN-8 labels to their EAN-13 equivalents. The default value is ***false***.

### GS1

#### GS1 DataBar Expanded

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***R***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***74***.

* `Convert to GS1-128`: A boolean to enable the conversion of the composite label to a sequence of one or more GS1-128 barcodes. The default value is ***false***.

#### GS1 DataBar Limited

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***Q***.

* `Convert to GS1-128`: A boolean to enable the conversion of the composite label to a sequence of one or more GS1-128 barcodes. The default value is ***false***.

#### GS1 DataBar-14

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***P***.

* `Convert to GS1-128`: A boolean to enable the conversion of the composite label to a sequence of one or more GS1-128 barcodes. The default value is ***false***.

### Interleaved 2 of 5

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***B***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***6***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***10***.

* `Enable checksum`: A boolean to require the use of checksum characters to verify a barcode. The default value is ***false***.

* `Send checksum`: A boolean to include the checksum in the label transmission. `Enable checksum` must be ***true*** to enable send checksum. The default value is ***false***.

### Japan Post

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

### Matrix 2 of 5

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***D***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***6***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***10***.

### MaxiCode

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***W***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***138***.

### Micro PDF417

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***a***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***366***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

### Micro QR Code

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***c***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***35***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

### MSI

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***H***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***4***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 99. The default value is ***10***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***false***.

* `Require second checksum`: A boolean to require that a label contain two check digits. The default value is ***false***.

* `Second checksum mod 11`: A boolean to allow the second check digit to be interpreted as module 11 instead of module 10. `Require second checksum` must be ***true*** to interpret as module 11. The default value is ***false***.

### PDF417

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***S***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***2710***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

### PostNL KIX-code

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

### QR Code

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***c***.

* `Length control`: The length control mode for the label. Valid values are displayed in a single select list. The default value is ***Range***.

* `L1 length`: One of two configurable label lengths. `Length control` must be ***One fixed***, ***Two fixed***, or ***Range*** to set the L1 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***1***.

* `L2 length`: One of two configurable label lengths. `Length control` must be ***Two fixed*** or ***Range*** to set the L2 length. A valid value is an integer in the inclusive range of 1 to 9999. The default value is ***3500***.

* `Enable Wi-Fi Configuration Format`: A boolean to enable the QR code Wi-Fi configuration format. The default value is ***true***.

* `Character set mode`: Controls the character set in use for the decoded label. Valid values are displayed in a single select list. The default value is ***Windows-1252 Latin 1***.

### UK Royal Mail

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***true***.

### UPC

#### UPC/EAN Extensions

* `Enable 2-digit extensions`: A boolean to require a 2-digit extension to be verified for a successful decode of a label. The default value is ***true***.

* `Enable 5-digit extensions`: A boolean to require a 5-digit extension to be verified for a successful decode of a label. The default value is ***true***.

* `Require extensions`: A boolean to enable the reading of only barcodes with a supplemental label. Either `Enable 2-digit extensions` or `Enable 5-digit extensions` must be ***true*** to require extensions. The default value is ***false***.

#### UPC-A

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***A***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***false***.

* `Send system digit`: A boolean to include the system digit in the label transmission, it configures whether the first character should be transmitted. The default value is ***true***.

* `Convert to EAN-13`: A boolean to enable the expansion of EAN-8 labels to their EAN-13 equivalents. The default value is ***false***.

#### UPC-E

* `Enable`: A boolean to enable the symbology. The default value is ***true***.

* `User ID`: Specifies the symbology identifier. The default character value is ***E***.

* `Send checksum`: A boolean to include the checksum in the label transmission. The default value is ***false***.

* `Send system digit`: A boolean to include the system digit in the label transmission, it configures whether the first character should be transmitted. The default value is ***true***.

* `Convert to UPC-A`: A boolean to enable the expansion of UPC-E labels to their UPC-A equivalents. The default value is ***false***.

* `Enable UPC-E1`: A boolean to enable the decoding of the UPC-E1 symbology variation of the UPC-E code. The default value is ***false***.

### USPS

#### USPS Intelligent Mail

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

#### USPS PLANET

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

#### USPS POSTNET

* `Enable`: A boolean to enable the symbology. The default value is ***false***.

* `User ID`: Specifies the symbology identifier. The default character value is ***f***.

### Advanced Barcode Options

#### Linear Quiet Zones

* `Enable UPC/EAN reduced`: A boolean to enable the decoding of UPC/EAN labels with short margins. The default value is ***false***.

* `Enable Code 39 reduced`: A boolean to enable the decoding of Code 39 labels with short margins. The default value is ***false***.

#### Inverted Decoding

* `1D inverted`: The inverse mode for linear barcode symbologies. Valid values are displayed in a single select list. The default value is ***Regular***.

* `2D inverted`: The inverse mode for 2D barcode symbologies. Valid values are displayed in a single select list. The default value is ***Both***.
