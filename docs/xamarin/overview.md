---
id: overview
title: Xamarin SDK
sidebar_label: Xamarin SDK Overview
---
## Overview

The Datalogic Xamarin SDK allows developers to write Android apps using the `C#`  language to access features available on Datalogic Android devices. The Datalogic Xamarin SDK is distributed as 2 separate APIs, the standard API, and the self-shopping API.

### Standard API

Provides essential APIs related to the device scanner and device itself.

* [Standard API documentation](https://datalogic.github.io/xamarin/xamarin-sdk-docs/html/R_Project_Documentation.htm)

### Self-shopping API

Provides APIs related to the locking cradle available for use with `Joya Touch Android` and `Memor 1` devices.

* [Self-shopping API documentation](https://datalogic.github.io/xamarin/xamarin-sdk-selfshopping/html/R_Project_Documentation.htm)

## Using the SDK

### Install Visual Studio

Xamarin Development requires either using Visual Studio on Microsoft Windows or Xamarin Studio on MacOS.
This tutorial will only cover using the Datalogic Xamarin SDK in Visual Studio, but setup in Xamarin Studio
should be possible and follow similar steps.
This guide assumes you are using Visual Studio 2015. Using Visual Studio 2013 or 2017 should also be possible,
but not covered below.
If you do not already have a copy of Visual Studio (2013 or newer), you can download the free
<a href="https://www.visualstudio.com/downloads/">Community Edition from Microsoft</a>.
Next, follow Microsoft's <a href="https://msdn.microsoft.com/en-us/library/mt613162.aspx">
Setup and install directions for Xamarin and Visual Studio 2015</a>.

### Create a Xamarin Project

Open Visual Studio and select ***New Project...***

<img src="/img/xamarin/visual-studio-new.png" class="reasonable">

In the New Project window, navigate to ***Installed &gt; Templates &gt; Visual C# &gt; Cross-Platform***.
Select ***Blank App (Android)***(or another of the Blank App types, depending on your use case).

<img src="/img/xamarin/visual-studio-new-project.png" class="reasonable">

If you get a Xamarin Mac Agent prompt, click ***Close***.
Your new project should now be created. In ***Solution Explorer***, find and open ***MainActivity.cs***.
Your window should now look similar to this:

<img src="/img/xamarin/visual-studio-MainActivity.png" class="reasonable">

**Note**: If you would rather just start with an example Xamarin project that is already configured
to use the Datalogic Xamarin SDK, check out the
[DecodeListener](/xamarin/samples)
sample project.

### NuGet

[NuGet](https://www.nuget.org/) is a widely used package manager for .NET development that comes
preinstalled in Visual Studio. Datalogic uses NuGet to distribute the Datalogic Xamarin SDK.
First, open NuGet by navigating to ***Tools &gt; NuGet Package Manager &gt; Manage NuGet Packages for Solution***.

<img src="/img/xamarin/visual-studio-nuget-open.png" class="reasonable">

In the 'NuGet - Solution' tab, Click ***Browse***. Type ***datalogic*** in the search box.
Select the result titled ***datalogic-xamarin-sdk***.

<img src="/img/xamarin/visual-studio-nuget-browse.png" class="reasonable">

Next, select the ***MyXamarinApp.Droid*** Project and click ***Install***.

<img src="/img/xamarin/visual-studio-nuget-install.png" class="reasonable">

Click Installed at the top of the window. You will now see 'datalogic-xamarin-sdk'
listed as an installed package.

<img src="/img/xamarin/visual-studio-nuget-installed.png" class="reasonable">

You can now close the NuGet tab.

### Android manifest

You will need to make a small change to the Android manifest file to use the
 Datalogic Xamarin SDK. In the ***Solution Explorer*** window, navigate to
 ***MyXamarinApp.Droid &gt; Properties***, and double click on ***AndroidManifest.xml***.

Add the following line to file, as a child node inside the applicaiton node.
In other words, before the closing &lt;/application&gt; tag:

```xml
<uses-library android:name="com.datalogic.device"> android:required="true"/>;
```

<img src="/img/xamarin/visual-studio-android-manifest.png" class="reasonable">

Alternatively, you can add the following line to your project's ***AssemblyInfo.cs***:

```cs
[assembly: UsesLibrary("com.datalogic.device", true)]
```

**Note**: If you are using the Selfshopping extension SDK, you will need to add the following line as well:

Alternatively, you can add the following line to your project's ***AssemblyInfo.cs***:

```cs
[assembly: UsesLibrary("com.datalogic.extension.selfshopping", true)]
```

### Use the SDK

You can now start using the SDK in your code. For example, open ***MainActivity.cs*** inside the ***MyXamarinApp.Droid*** Project.
Add this line in your code:

You should see that Intellisense is working for the Datalogic Xamarin SDK as you type.
At this point, you could go over to the [DecodeListener](/xamarin/samples)
sample project to understand what is necessary to receive barcode data in your application.

You can use the Object Browser to list the available constants, classes, interfaces and methods,
along with documentation for each. To open the Object browser, double click on ***datalogic-xamarin-sdk***
under ***MyXamarinApp.Droid &gt; References*** in the ***Solution Explorer*** window.
Now, in the ***Object Browser*** window, expand the ***datalogic-xamarin-sdk***
Assembly and find the item you are interested in researching.

<img src="/img/xamarin/visual-studio-object-browser.png" class="reasonable">

### Compile and Run

Connect your Datalogic mobile computer running Android to your computer via USB cable and click the ***Run button***.

<img src="/img/xamarin/visual-studio-run.png">

Congratulations, you are all set up! Head over to the [Samples apps](/xamarin/samples)
 to learn how to use various parts of the Datalogic Xamarin SDK.
