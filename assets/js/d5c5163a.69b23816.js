"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[81002],{22597:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),t=n(11151);const a={title:"Xamarin SDK 1.22.4648",author:"Xamarin SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/xamarin/overview",tags:["xamarin"]},d=void 0,o={permalink:"/releases/2020/07/28/xamarin-sdk-v1.22",source:"@site/blog/2020-07-28-xamarin-sdk-v1.22.md",title:"Xamarin SDK 1.22.4648",description:"Xamarin SDK 1.22.4648 is now ready to download. You can access the documentation here. The online API documentation is available here. And you can see the package on NuGet here.  We did release version 1.21-3280-alpha earlier this year, but as far as official release builds, the last release was version 1.5.88 back in January 2018, so this update is long overdue!",date:"2020-07-28T00:00:00.000Z",formattedDate:"July 28, 2020",tags:[{label:"xamarin",permalink:"/releases/tags/xamarin"}],readingTime:3.03,hasTruncateMarker:!0,authors:[{name:"Xamarin SDK",url:"/xamarin/overview",imageURL:"/img/homepage/home-android-sdk.png"}],frontMatter:{title:"Xamarin SDK 1.22.4648",author:"Xamarin SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/xamarin/overview",tags:["xamarin"]},unlisted:!1,prevItem:{title:"OEMConfig 1.7.1",permalink:"/releases/2020/08/04/oemconfig-v1.7.1"},nextItem:{title:"OEMConfig 1.7.0",permalink:"/releases/2020/07/17/oemconfig-v1.7.0"}},s={authorsImageUrls:[void 0]},l=[];function c(e){const i={a:"a",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Xamarin SDK 1.22.4648 is now ready to download. You can access the ",(0,r.jsx)(i.a,{href:"/xamarin/overview",children:"documentation here"}),". The online API documentation is ",(0,r.jsx)(i.a,{href:"https://datalogic.github.io/xamarin-sdk-docs",children:"available here"}),". And you can see the package ",(0,r.jsx)(i.a,{href:"https://www.nuget.org/packages/datalogic-xamarin-sdk/1.22.4648",children:"on NuGet here"}),".  We did release version 1.21-3280-alpha earlier this year, but as far as official release builds, the last release was version 1.5.88 back in January 2018, so this update is long overdue!"]}),"\n",(0,r.jsxs)(i.p,{children:["The MAJOR and MINOR version numbers of the Datalogic Xamarin SDK track the version numbers of the ",(0,r.jsx)(i.a,{href:"/android/overview",children:"Datalogic Android SDK"}),", i.e. Xamarin SDK v1.22.x contains all of the features available in Android SDK ",(0,r.jsx)(i.a,{href:"https://github.com/datalogic/datalogic-android-sdk/releases/tag/v1.22",children:"v1.22"}),". Therefore, this update includes all the new features introduced in the Datalogic Android SDK from version 1.6 all the way up through version 1.22."]}),"\n",(0,r.jsx)(i.p,{children:"Those features are as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Added 2nd Display configuration to allow packages to display Android notifications"}),"\n",(0,r.jsx)(i.li,{children:"Added Advanced Keyboard SDK"}),"\n",(0,r.jsx)(i.li,{children:"Added support to MSI short quiet zones"}),"\n",(0,r.jsx)(i.li,{children:"Added FrameCapture feature"}),"\n",(0,r.jsx)(i.li,{children:"Added Battery Swap Begin and End Events"}),"\n",(0,r.jsx)(i.li,{children:"Added ISBT 128 user ID"}),"\n",(0,r.jsx)(i.li,{children:"Added support for checking availability and enabling and disabling Second Display feature"}),"\n",(0,r.jsx)(i.li,{children:"Added Code 128 and MSI aggressiveness"}),"\n",(0,r.jsx)(i.li,{children:"Added Code 128 Short Margin"}),"\n",(0,r.jsx)(i.li,{children:"Added configurability for Illumination type (Colour)"}),"\n",(0,r.jsx)(i.li,{children:"Added configurability for Custom Image Capture Profile"}),"\n",(0,r.jsx)(i.li,{children:"Added Commit Text mode to the KeyWedgeMode Options"}),"\n",(0,r.jsx)(i.li,{children:"Added Battery Product Number to the Manufacturer Info"}),"\n",(0,r.jsx)(i.li,{children:"Added support to Image Capture Profile on Scanner Options"}),"\n",(0,r.jsx)(i.li,{children:"Added operating mode property for Data Matrix"}),"\n",(0,r.jsx)(i.li,{children:"Added ISBT 128 symbology with concatenation option"}),"\n",(0,r.jsx)(i.li,{children:"Added Inverse 1D and 2D barcodes support"}),"\n",(0,r.jsx)(i.li,{children:"Removed deprecated device.info.BatteryInfo object and SYSTEM.getBatteryInfo() method"}),"\n",(0,r.jsx)(i.li,{children:"Added cradle package with interfaces for retrieving the device insertion status e the available power source level"}),"\n",(0,r.jsx)(i.li,{children:"Added enabling/disabling property for WiFi QR Code scanning"}),"\n",(0,r.jsx)(i.li,{children:"Added APIs to the SoftSpot package in order to set working area and custom images"}),"\n",(0,r.jsx)(i.li,{children:"Introduced new Listeners (InitListener and DeinitListener), in order to be informed about Scanner Service initialization and reset;"}),"\n",(0,r.jsx)(i.li,{children:"Added the method isInitialized() to the BarcodeManager, in order to obtain the current status of Scanner Service (initialized or not);"}),"\n",(0,r.jsx)(i.li,{children:"Added registration/unregistration methods to the BarcodeManager, in order to register/unregister as Listener of related events;"}),"\n",(0,r.jsx)(i.li,{children:"Added the LISTENER_ERROR DecodeException;"}),"\n",(0,r.jsx)(i.li,{children:"Fixed WiFiType bug"}),"\n",(0,r.jsx)(i.li,{children:"Added explicit intent used for SoftSpot, instead of Implicit Intents no more available from Android Oreo 8"}),"\n",(0,r.jsx)(i.li,{children:"Triggers have been extended with methods for retrieving the default properties values;"}),"\n",(0,r.jsx)(i.li,{children:"PowerManager has been extended with the getRebootReason() method, in order to retrieve information about last device power-off reason;"}),"\n",(0,r.jsx)(i.li,{children:"Added Battery interface under device package;"}),"\n",(0,r.jsx)(i.li,{children:"Trigger class has been extended with the isAvailable() method, in order to retrieve information about supported Triggers by the device."}),"\n",(0,r.jsx)(i.li,{children:"Added Property to enable the External Formatting feature"}),"\n",(0,r.jsx)(i.li,{children:"UPC-E1 support"}),"\n",(0,r.jsxs)(i.li,{children:["Added support for motion trigger, which causes a scan to be initiated after a shake is detected","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"the shake sensitivity can be customized between 3 values (sensitive, intermediate, dull)"}),"\n",(0,r.jsx)(i.li,{children:"a vibration (that can be inhibited) will start when a shake motion is detected. The scan will start when the device is returned in a stationary position."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Dotcode support"}),"\n",(0,r.jsx)(i.li,{children:"Exposed Display Mode option"}),"\n",(0,r.jsx)(i.li,{children:"Added support for Code 39 with short margins"}),"\n",(0,r.jsx)(i.li,{children:"Added Multi Scan"}),"\n",(0,r.jsxs)(i.li,{children:["Added Character set support for certain 2D symbologies:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aztec"}),"\n",(0,r.jsx)(i.li,{children:"Data Matrix"}),"\n",(0,r.jsx)(i.li,{children:"Micro PDF417"}),"\n",(0,r.jsx)(i.li,{children:"Micro QR code"}),"\n",(0,r.jsx)(i.li,{children:"PDF417"}),"\n",(0,r.jsx)(i.li,{children:"QR code"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Added Composite symbology support"}),"\n",(0,r.jsx)(i.li,{children:"Added Web Wedge functionality"}),"\n",(0,r.jsx)(i.li,{children:"Added GS1 DataBar conversion to GS1-128"}),"\n",(0,r.jsx)(i.li,{children:"Added Linear quiet zone configuration, only EAN/UPC for now"}),"\n",(0,r.jsx)(i.li,{children:"Added EAN-13 send system digit configuration"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>d});var r=n(67294);const t={},a=r.createContext(t);function d(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);