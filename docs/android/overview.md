---
id: overview
title: Android SDK
sidebar_label: Android SDK Overview
---

## Overview

The Datalogic Android SDK allows developers to write Android apps using both `Java` and `Kotlin` languages to access features available on Datalogic Android devices. The Datalogic Android SDK is distributed as 2 separate APIs, the standard APIs, and the self-shopping APIs.

### Standard APIs

Provides essential APIs related to the device scanner and device itself.

* [Standard API documentation](https://datalogic.github.io/android-sdk-docs/reference/packages.html)

### Self-shopping APIs

Provides APIs related to the locking cradle available for use with `Joya Touch Android` and `Memor 1` devices.

* [Self-shopping API documentation](https://datalogic.github.io/android-sdk-extension-selfshopping-docs/reference/packages.html)

## Using the SDK

Datalogic maintains two ways to use the Datalogic Android SDK in your project:

* [Maven dependency](#maven-dependency) **(Reccommended)**
* [SDK add-on component](#sdk-add-on)

### Maven Dependency

The SDK is available as a Maven repository, that can easily be referenced by `gradle`.

#### Add jitpack.io repository

Add a reference to jitpack.io to the `build.gradle` file at your project's base/root directory:

```gradle
            allprojects {
             repositories {
                jcenter()
                maven { url "https://jitpack.io" }
             }
            }
```

#### Add a dependency on the SDK

Add a reference to the specific version of the SDK you would like to use to your `app/build.gradle` file. In this example, we are using version `1.12`. You can see a list of all released versions [here](https://github.com/datalogic/datalogic-android-sdk/releases).

```gradle
        dependencies {
            implementation 'com.github.datalogic:datalogic-android-sdk:1.12'
        }
```

#### Add a dependency on self-shopping SDK

Add a reference to the specific version of the self-shopping SDK you would like to use to your `app/build.gradle` file. In this example, we are using version `v1.8b`. You can see a list of all released versions [here](https://github.com/datalogic/datalogic-android-sdk/releases). Look for references to the Selfshopping extension.

```gradle
dependencies {
    implementation 'com.github.datalogic:datalogic-android-sdk-selfshopping:v1.8b'
}
```

### SDK Add-on

#### Install Android Studio

Download Android Studio from the [official website](http://developer.android.com/sdk/index.html)
and follow the [installation instructions](http://developer.android.com/sdk/installing/index.html?pkg=studio).
After installing Android Studio, install the Android SDK through the Android SDK Manager or provide a correct path to one already installed.
Since developers are encouraged to target the most recent and updated Android SDK release while developing an application,
choose the most new API level released and download the associated platform.

#### Install Datalogic SDK Add-on

From Android Studio launch window, click on ***Configure*** &gt; ***SDK Manager***
to open Android SDK Manager.  

![Install SDK As](/img/android-quick-start/install-sdk-as.png)  

![Install SDK As Menu](/img/android-quick-start/install-sdk-as-menu.png)

Select the tab ***SDK Update Sites*** and click the *+*
(plus) icon on the right-side toolbar.

![Install SDK As SDK Manager](/img/android-quick-start/install-sdk-as-sdk-manager.png)

In the new window insert the following URL, optionally a name and then press ***OK***

```html
https://datalogic.github.io/android-sdk-addon/addon.xml
```  

![Install SDK as site URL](/img/android-quick-start/install-sdk-as-site-url.png)

Now select the tab ***SDK Platforms*** in the Android SDK settings panel and check the checkbox on the
bottom right ***Show Package Details***.  

![SDK Manager](/img/android-quick-start/install-sdk-as-checkbox.png)  

Under each displayed section, corresponding to the Android releases available, **Datalogic SDK v1**
Add-on should appear.
Choose and install the development kit in accordance with your Android platform of choice.  
To install it, check Datalogic SDK v1 checkbox and a small icon on the left should appear.
<p class="info-box">&#9432; Please notice that you must also install the Android API
platform matching the Android version in use for development in your environment (i.e. API 23 is required
to compile apps supported up to Android 6.0). See 
<a href="https://developer.android.com/guide/practices/compatibility.html#Versions">
<span>Platform version</span>
</a> for further details'</p>

<img src="/img/android-quick-start/install-sdk-as-before-install.png" class="reasonable"/>

Click on the button ***Apply*** to install the selected packages and confirm the choice in the next dialog.

![SDK confirm](/img/android-quick-start/install-sdk-as-selected-confirm.png)

Now, read and understand the corresponding End-User License Agreement (EULA) available in the next window.
Accept it, in order to install Datalogic Android SDK.

<img src="/img/android-quick-start/install-sdk-as-selected-confirm-eula.png" style="max-height: 550px"/>

<img src="/img/android-quick-start/install-sdk-as-selected-confirm-eula-installed.png" class="reasonable"/>

Once the installation is complete, the *Status* of the Datalogic SDK v1 Add-on changes from
*Not installed* to *Installed*. You are now ready to start developing applications compatible with Datalogic devices.

<img src="/img/android-quick-start/install-sdk-as-selected-confirm-installed.png" class="reasonable" />

#### Create new applications

When creating a new project choose ***Start a new Android Studio project*** from the Android Studio Welcome screen.
<img src="/img/android-quick-start/start-as-new-project.png" class="reasonable" />

<p class="info-box"> &#9432; Please notice that you must select the *Minimum SDK* level in accordance with the installed Android firmware version on your Datalogic device. For example, a device running Android Jelly Bean, can support applications built with Minimum SDK level selected up to 16. Greater values will produce an incompatible Android app'%}
When creating a new project choose the most correct Minimum SDK API level and press <strong><em>Next</em></strong>.</p>

<img src="/img/android-quick-start/start-as-new-project-wizard-minimum-sdk.png" class="reasonable" />

The wizard will guide through the creation of a new application.
<img src="/img/android-quick-start/start-as-new-project-wizard.png" class="reasonable" />

With a choice of basic layout and Activity styles.
<img src="/img/android-quick-start/start-as-new-project-activity.png" class="reasonable" />

Complete the guided wizard and let the IDE settle down. A generic Android application, runnable on all Android devices, is now ready for development.

#### Compile projects

With the previous steps, you have simply prepared a basic environment for a generic Android application. Through the next steps, instead, your basic application will leverage on custom Datalogic SDK functionalities and will be compiled to be compatible with a Datalogic device.

In order to gain access to the SDK functionalities, applications need to be compiled with the right Datalogic SDK environment.
To do so, right click on *app* folder under the Android project module, then select ***Open Module Settings***.

![Start as compile](/img/android-quick-start/start-as-right-compile.png)

In the following window point to *Project Structure* &gt; *Modules app* tab *Properties* and change the ***Compile Sdk Version*** accordingly, matching the right Datalogic SDK with the API level in use. In the showed example we are compiling apps with the latest Android 6.0 API level, meaning we need to select a corresponding Datalogic SDK matching the same level (rember to download and install the matching Datalogic Add-on). Confirm the choice by pressing ***OK***.

<p class="info-box">&#9432; The following step is mandatory in order to prepare the enviroment correctly</p>

![Start as compile with SDK](/img/android-quick-start/start-as-right-compile-with-sdk.png)

Android Studio will now switch to the Datalogic SDK v1, allowing you to develop and extend your app to the Datalogic Android APIs. Take a look at the <a href="https://datalogic.github.io/android-sdk-docs">API reference</a> and available <a href="../tutorials">examples</a>.

#### Gradle scripts

Compiling an application with the Datalogic SDK it is a matter of matching and using the most correct configuration of the *build.gradle* file associated to the application.

In the following example we are matching the *targetSdkVersion* with a corresponding level of Datalogic SDK Add-on (the trailing number is exactly *23*):

```groovy
apply plugin: 'com.android.application'

android {
    compileSdkVersion 'Datalogic:Datalogic SDK v1:23'
    buildToolsVersion "23.0.3"

    defaultConfig {
        applicationId "com.example.generic.myapplication"
        minSdkVersion 16
        targetSdkVersion 23
    }
}
```

If you are pointing to a different target version, install the matching Datalogic SDK v1 Add-on through the Android SDK Manager.

#### Android application manifest

Android applications must have generally an <a href="https://developer.android.com/guide/topics/manifest/manifest-intro.html">*App Manifest* (AndroidManifest.xml)</a>, where all information about the application itself are exposed. Datalogic device compatible apps, relying on Datalogic SDK, require a mandatory change to the Android application manifest in order to work. It is strictly necessary the right usage of <a href="https://developer.android.com/guide/topics/manifest/uses-library-element.html">*&lt;uses-library&gt;*</a> tag, to protect the developed applications against misuse and installation on incompatible devices. In addition the <a href="https://developer.android.com/guide/topics/manifest/uses-library-element.html">*&lt;uses-library&gt;*</a> links your application against the Datalogic SDK or possible Datalogic SDK Extension whenever is launched.  
<p class="info-box">&#9432; Please notice that this step is <strong><em>mandatory</em></strong> to make your application fully compatible with the Datalogic SDK installed on the device. Don not forget to include all the libraries that you rely on or use, inside the AndroidManifest.xml. </p>

The inclusion of the following tag (within the <a href="https://developer.android.com/guide/topics/manifest/application-element.html">*&lt;application&gt;*</a> element) in **all** Android applications built with the Datalogic SDK is necessary:

```xml
<application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@android:style/Theme.DeviceDefault" >

    <uses-library
        android:name="com.datalogic.device"
        android:required="true" />

</application>
```

While, in case of use of a further Datalogic SDK Extension, the following change is mandatory (e.g. Selfshopping Extension):

```xml

    <uses-library
        android:name="com.datalogic.extension.selfshopping"
        android:required="true" />

```

Pay attention while changing the required libraries inside your application's AndroidManifest. If you strictly rely on certain extension, do not forget to emphasize it with ***android:required*** tag. Thanks to it, you will protect your application from installation on incompatible devices.
