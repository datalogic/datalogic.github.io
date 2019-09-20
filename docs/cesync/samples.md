---
id: samples
title: Device Sync sample app
sidebar_label: Sample Apps
---


A simple command line tool that makes use of the [datalogic-ce-sync](/cesync/overview) library.
Also uses the nice [CommandLineParser](https://www.nuget.org/packages/CommandLineParser/) library.

## Run

* Compiled versions are stored in the [releases](https://github.com/datalogic/device-sync/releases) folder.
* ```device-sync.exe``` will be located inside the **device-sync** folder in a given ZIP file.
* Start a **Command Prompt** and **cd** in to the **device-sync** folder.
* Run ```device-sync.exe``` at a Command Prompt.  Yes, you must have all those .dll files in the same directory as the executable.

## Commands

    C:\publish\device-sync --help
    device-sync 1.0.0
    Copyright (C) 2018 device-sync
    
      push       Push files to a device
    
      pull       Pull files from a device
    
      start      Start a process on the device
    
      find       Search a directory on the device for directories and files whose names satisfy the mask.
    
      mkdir      Create a new directory on the device.
    
      touch      Sets the last modified time of a file on the device
    
      delete     Delete a specified file from the device
    
      help       Display more information on a specific command.
    
      version    Display version information.

## Known issues

* Commands are finicky with slash direction (backslash vs. forward-slash). Try both, but most use forward-slash.

## Examples

* Use ```device-sync --help``` to get usage details.
* Get command specific help, for example: ```device-sync push --help```
  
## To compile

You will need DotNet Core 2.0 installed on your machine, which is available as part of Visual Studio 2017.

cd into the root project directory. Now run the following command:

    dotnet publish -c release -r win10-x64 --self-contained

This will generate a folder containing device-sync.exe along with all necessary dll's, such that you can just drop the folder onto any Windows 7/8/10 PC and run the executable.  The folder is generated at:

    bin/release/netcoreapp2.0/win10-x64/publish
