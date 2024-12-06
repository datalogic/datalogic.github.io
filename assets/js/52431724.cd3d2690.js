"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[80370],{39897:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(85893),t=n(11151),o=n(10993);const s={id:"overview",title:"Aladdin for CODiScan",sidebar_label:"Overview"},l=void 0,d={id:"aladdin/overview",title:"Aladdin for CODiScan",description:"The Aladdin application can be installed using Scan2Deploy or directly downloaded from GitHub.",source:"@site/docs/aladdin/overview.mdx",sourceDirName:"aladdin",slug:"/aladdin/overview",permalink:"/aladdin/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Aladdin for CODiScan",sidebar_label:"Overview"},sidebar:"Aladdin",next:{title:"Home Page",permalink:"/aladdin/home-page"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Enable Application Permissions",id:"enabling-in-application-permissions",level:3},{value:"Enable Bluetooth",id:"enable-bluetooth",level:3},{value:"Scan History (Optional)",id:"scan-history-optional",level:3},{value:"Aladdin On-Screen Keyboard (Optional)",id:"aladdin-on-screen-keyboard-optional",level:3},{value:"Pairing with the CODiScan",id:"pairing-with-the-codiscan",level:2}];function p(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.admonition,{title:"Installing the App",type:"tip",children:(0,a.jsxs)(i.p,{children:["The Aladdin application can be installed using ",(0,a.jsx)(i.a,{href:"/scan2deploy/save-and-scan-page#mobility-suite-updates",children:"Scan2Deploy"})," or directly downloaded from ",(0,a.jsx)(i.a,{href:"https://github.com/datalogic/aladdin-v2/releases",children:"GitHub"}),"."]})}),"\n",(0,a.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(i.p,{children:"Aladdin is a mobile application designed to run on android platforms that allows users to pair and access various features and settings of a CODiScan scanner. Aladdin interacts with the CODiScan via BLE protocol. The application uses this communication approach to configure and receive scan data from the CODiScan scanner."}),"\n",(0,a.jsx)(i.h2,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,a.jsx)(i.p,{children:"When the Aladdin app is first run, several dialogs will come up with different purposes.  These dialogs are used to grant application permissions and enable features."}),"\n",(0,a.jsx)(i.h3,{id:"enabling-in-application-permissions",children:"Enable Application Permissions"}),"\n",(0,a.jsx)(i.p,{children:"To connect to a CODiScan scanner, you need to pair your device via BLE. After launching the application, the allowed application permissions are displayed."}),"\n",(0,a.jsx)(i.p,{children:"Some features of the Aladdin application require permissions for Bluetooth, Device Location, Nearby devices.  When you first launch the app it will bring up a dialog describing the permissions the user will need to grant in order to use the application:"}),"\n",(0,a.jsx)(o.f5,{img:"/img/aladdin/app-permission-required.png"}),"\n",(0,a.jsx)(i.p,{children:"The screenshots below show an example of android permission requests. Depending upon the android version and the request, grant permissions by either tapping \u201cAllow\u201d or \u201cWhile using the Application\u201d."}),"\n",(0,a.jsxs)(o.QA,{children:[(0,a.jsx)(o.f5,{img:"/img/aladdin/app-permission-camera.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/app-permission-location.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/app-permission-discover.png"})]}),"\n",(0,a.jsx)(i.p,{children:"If a permission is already granted before launching the application, you will not be asked to grant the permission again when launching the app."}),"\n",(0,a.jsx)(i.h3,{id:"enable-bluetooth",children:"Enable Bluetooth"}),"\n",(0,a.jsx)(i.p,{children:"Bluetooth is required for the Aladdin application to communicate with the CODiScan.  If Bluetooth is disabled in the mobile device, the application will ask you to enable it via the pop-up dialog as seen in the screenshot below."}),"\n",(0,a.jsx)(o.f5,{img:"/img/aladdin/bluetooth-on.png"}),"\n",(0,a.jsx)(i.h3,{id:"scan-history-optional",children:"Scan History (Optional)"}),"\n",(0,a.jsx)(i.p,{children:"To store the history of barcodes scanned by the CODiScan in the application, tap \u201cEnable\u201d as shown in the screenshot below:"}),"\n",(0,a.jsx)(o.f5,{img:"/img/aladdin/track-scan-history.png"}),"\n",(0,a.jsx)(i.h3,{id:"aladdin-on-screen-keyboard-optional",children:"Aladdin On-Screen Keyboard (Optional)"}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["The Aladdin On-Screen keyboard dialog is not shown on Datalogic devices running SDK 1.38 or newer.  On these devices, Native Interface integration should be selected and ",(0,a.jsx)(i.a,{href:"../wedge/overview",children:"Datalogic Wedge"})," should be used instead."]})}),"\n",(0,a.jsx)(i.p,{children:"The Aladdin application also provides a custom on-screen keyboard interface. This allows for the Aladdin app to input barcode data as though it were typed in the on-screen keyboard."}),"\n",(0,a.jsx)(i.p,{children:"Once all the permissions are granted, the application will direct you to the Aladdin keyboard setup process.  Using the Aladdin keyboard is optional.  It should only be enabled if you need barcode data to be entered via keyboard input."}),"\n",(0,a.jsx)(i.p,{children:"The following screenshots show the steps involved in enabling the Aladdin keyboard:"}),"\n",(0,a.jsxs)(o.QA,{children:[(0,a.jsx)(o.f5,{img:"/img/aladdin/keyboard-enable.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/keyboard-settings.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/keyboard-choose.png"})]}),"\n",(0,a.jsx)(i.p,{children:'The first screenshot shows the dialog that initially comes up to ask whether the keyboard should be enabled.   If you click "Enable" in this dialog, you will be directed to the on-screen keyboard settings screen.  This can be seen in the second screenshot.  When on this screen, select "Aladdin" to enable the Aladdin keyboard.  Once you have completed this step tap the back button to go back to the Aladdin application.  Once you are back at the Aladdin application, select "Choose" to enable the keyboard integration method as seen in the last screen shot.'}),"\n",(0,a.jsx)(i.admonition,{type:"caution",children:(0,a.jsx)(i.p,{children:'When enabled, the Aladdin keyboard replaces the default on-screen keyboard (Gboard).  Go to "Android Settings" > "Language & Inputs" > "On-Screen Keyboards" in the Settings app and turn of the "Aladdin" on-screen keyboard.'})}),"\n",(0,a.jsx)(i.h2,{id:"pairing-with-the-codiscan",children:"Pairing with the CODiScan"}),"\n",(0,a.jsx)(i.p,{children:'Once you have completed the initial setup, the next step is to pair your CODiScan with Aladdin app. Tap the "Connect" button.  This will bring up a pairing barcode.'}),"\n",(0,a.jsxs)(o.QA,{columnGap:"50px",children:[(0,a.jsx)(o.f5,{img:"/img/aladdin/device-connect.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/pairing-barcode.png"})]}),"\n",(0,a.jsx)(i.p,{children:"Turn on your Datalogic CODiScan and point it at the barcode that is displayed in the CODiScan app. The device will emit a beeping sound followed by a pulsating blue LED on the CODiScan. The Connecting screen will appear."}),"\n",(0,a.jsx)(o.f5,{img:"/img/aladdin/pairing-process.png"}),"\n",(0,a.jsx)(i.p,{children:'A notification will then come up asking if you wish to pair. Click "Pair & connect" in pairing request notification (first screenshot below). Tap "Pair" on the android pairing pop-up screen (second screenshot below). This will initiate the connection request to the CODiScan. Contacts and call history checkbox is not mandatory. If Connection is successful, the CODiScan will emit a beep sound followed by a connection success screen:'}),"\n",(0,a.jsxs)(o.QA,{children:[(0,a.jsx)(o.f5,{img:"/img/aladdin/pairing-request.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/pairing-grant.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/successful-pair.png"})]}),"\n",(0,a.jsx)(i.p,{children:"Upon successful connection, the Application will automatically direct you to the home screen that shows various application features, battery information, and other information."}),"\n",(0,a.jsx)(o.f5,{img:"/img/aladdin/home.png"}),"\n",(0,a.jsx)(i.p,{children:"Tap \u201cDisconnect\u201d to disconnect from the CODiScan. You will not be unable to use the application unless the CODiScan is paired again."}),"\n",(0,a.jsx)(i.p,{children:"Once the connection is closed, the the first screenshot below will appear. If you try to tap any other buttons, the application will remind you that it is necessary to pair with the CODiScan. Tap the SCAN2PAIR button to display the pairing screen again as shown below."}),"\n",(0,a.jsxs)(o.QA,{columnGap:"50px",children:[(0,a.jsx)(o.f5,{img:"/img/aladdin/home-no-device.png"}),(0,a.jsx)(o.f5,{img:"/img/aladdin/no-device-notification.png"})]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},10993:(e,i,n)=>{n.d(i,{EW:()=>o,QA:()=>d,TS:()=>t,f5:()=>s,sD:()=>r,xo:()=>l});n(67294);var a=n(85893);function t(e){let{img:i,maxWidth:n="fit-content",maxHeight:t="fit-content",shadow:o="none"}=e;return(0,a.jsx)("img",{src:i,style:{width:"auto",height:"auto",maxWidth:n,maxHeight:t,boxShadow:o}})}function o(e){let{img:i,maxWidth:n="fit-content",maxHeight:a="fit-content",shadow:o="0 4px 8px 0 rgba(0, 0, 0, 0.3)"}=e;return t({img:i,maxWidth:n,maxHeight:a,shadow:o})}function s(e){let{img:i,height:n="550px"}=e;return(0,a.jsx)("img",{src:i,style:{maxHeight:n}})}function l(e){let{img:i,height:n="550px",caption:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:i,style:{maxHeight:n}}),(0,a.jsx)("center",{children:(0,a.jsx)("b",{children:t})})]})}function d(e){let{children:i,flexWrap:n="wrap",alignItems:t="center",rowGap:o="15px",columnGap:s="25px"}=e;return(0,a.jsx)("div",{style:{display:"flex",alignItems:t,flexWrap:n,rowGap:o,columnGap:s,marginBottom:"20px"},children:i})}function r(e){let{img:i}=e;return(0,a.jsx)("img",{src:i,style:{border:"2px solid black"}})}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var a=n(67294);const t={},o=a.createContext(t);function s(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);