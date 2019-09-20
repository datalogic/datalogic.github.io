---
id: overview
title: CE Sync SDK
sidebar_label: CE Sync SDK Overview
---

## Overview

The Datalogic CE Sync SDK allows you to communicate with Datalogic CE devices [over USBLAN connections](usblan). The USBLAN driver must first be installed in order to use the CE Sync SDK.

If you want to see a sample app that uses the CE Sync SDK, take a look at the source code for our [Device Sync command line tool](samples). It's an easy to use command line tool that exercises all the features of the CE Sync SDK. Excecutables are provided as well as source code.

Datalogic uses [NuGet](https://www.nuget.org/) to distribute the CE sync SDK. NuGet is a widely used package manager for .NET development that comes preinstalled in Visual Studio. You can access the package [on Nuget here](https://www.nuget.org/packages/datalogic-ce-sync). The package can be included in your project as described on the Nuget page. The most convenient way to access NuGet is probably to open your project in Visual Studio, and navigate to **Tools > NuGet Package Manager > Manage NuGet Packages for Solution**.

## Features

The CE Sync SDK can be used to perform the following actions on the connected device:

* start processes
* list files and directories
* create directories
* push and pull files
* set file timestamps
* delete files

See the [API documentation](api) for more details.

## Version History

### v1.0.6

* check for both slashes when transferring files

### v1.0.5

* set HttpClient default timeout to infinite to support large file transfers (400MB+)
* remove unused delegate

### v1.0.4

* support larger file transfers
* fixed bug involving the FindFiles() and FindDirectories() methods

### v1.0.3-alpha

* Initial release
