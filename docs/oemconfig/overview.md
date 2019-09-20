---
id: overview
title: OEMConfig
sidebar_label: OEMConfig Overview
---

This document is a guide for installing and using OEMConfig to configure Datalogic devices.

## Installing Datalogic OEMConfig

The Datalogic OEMConfig application is available in [Managed Google Play](https://play.google.com/store/apps/details?id=com.datalogic.oemconfig). The application is compatible with Datalogic devices running Android 8 and above. The Datalogic OEMConfig application is published to your device by your Enterprise Mobility Solution (EMM) provider through the EMM administrator console. Please refer to your EMM's instructions on how to add and deploy OEMConfig to your devices.

The following links provide more information about Android Enterprise and OEMConfig.

* Datalogic OEMConfig [on the Play Store](https://play.google.com/store/apps/details?id=com.datalogic.oemconfig)
* Learn more about [Managed Google Play Setup](https://support.google.com/work/android/answer/6174030?hl=en&ref_topic=6174026)
* Learn more about [Android Enterprise](https://developers.google.com/android/work/)
* See list of [Android Enterprise Recommended EMMs](https://androidenterprisepartners.withgoogle.com/emm/)
* Learn more about [OEMConfig](https://www.blog.google/products/android-enterprise/oemconfig-supports-enterprise-device-features/)

## Applying Managed Configurations

The managed configuration contains the device settings exposed by OEMConfig. Your EMM administrator console provides an interface to view and make changes to the managed configuration. Once configured, the EMM will publish the customized configuration to the device to be applied by the Datalogic OEMConfig application. Refer to your EMM's instructions on how to edit and send the managed configuration to your devices.

Once the EMM has published the custom configuration, the OEMConfig application will be notified and will automatically begin applying the custom configuration to the device. In most cases, the configuration should be applied in less than one minute.

Updates to the managed configuration and Datalogic OEMConfig app will be uploaded to Managed Google Play. The EMM will sync with the latest version of Datalogic OEMConfig. Therefore, the latest updates and features will always be available for use.

## Managed Configuration Restrictions

Each customizable setting in the managed configuration is a restriction type.

The following sections contain:

* A description of each restriction in the managed configuration
* Any dependencies on other restrictions
* Valid value ranges and data types
* The restriction's default value

A brief description of each restriction should also be presented in the EMM administrator console.
