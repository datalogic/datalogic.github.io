"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[76392],{18557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=i(85893),s=i(11151);const c={id:"sdk-integration",title:"SDK Integration",sidebar_label:"SDK Integration"},a=void 0,r={id:"aladdin/sdk-integration",title:"SDK Integration",description:"Overview",source:"@site/docs/aladdin/sdk-integration.md",sourceDirName:"aladdin",slug:"/aladdin/sdk-integration",permalink:"/aladdin/sdk-integration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"sdk-integration",title:"SDK Integration",sidebar_label:"SDK Integration"},sidebar:"Aladdin",previous:{title:"About",permalink:"/aladdin/about"},next:{title:"Intent Integration",permalink:"/aladdin/intent-integration"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"AlManager",id:"almanager",level:2},{value:"Functions",id:"functions",level:3},{value:"IScannerOutput",id:"iscanneroutput",level:3},{value:"IServiceOutput",id:"iserviceoutput",level:3},{value:"Aladdin Client",id:"aladdin-client",level:2},{value:"Exploring Button Capabilities",id:"exploring-button-capabilities",level:3},{value:"Subscribe To Service Events:",id:"subscribe-to-service-events",level:4},{value:"Connect To Service:",id:"connect-to-service",level:4},{value:"Subscribe To Scans:",id:"subscribe-to-scans",level:4},{value:"Is Connected To Scanner:",id:"is-connected-to-scanner",level:4},{value:"Is Connected To Service:",id:"is-connected-to-service",level:4},{value:"Get Latest Scan Value:",id:"get-latest-scan-value",level:4},{value:"Unsubscribe From Scans:",id:"unsubscribe-from-scans",level:4},{value:"Unsubscribe From Service Events:",id:"unsubscribe-from-service-events",level:4},{value:"Steps to Receive Bar code in Aladdin Client App",id:"steps-to-receive-bar-code-in-aladdin-client-app",level:3}];function l(e){const n={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This section outlines the capabilities of our SDK, which facilitates seamless integration with the Android Aladdin application. The SDK provides a sophisticated subscription model, enabling developers to efficiently receive and manage scanned data. With built-in functionalities for both subscribe and unsubscribe operations, developers gain a professional and adaptable solution for incorporating scanned data into their applications."}),"\n",(0,t.jsx)(n.h2,{id:"almanager",children:"AlManager"}),"\n",(0,t.jsx)(n.p,{children:"Class AlManager"}),"\n",(0,t.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Summary"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ensureConnectionToService (context: Context): Boolean"}),(0,t.jsx)(n.td,{children:"Connect to the Aladdin App, if not connected already. Triggers a Service Binding via (AIDL) IPC to the Aladdin App. Will automatically re-establish the connection if necessary."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isConnectedToScanner: Boolean"}),(0,t.jsx)(n.td,{children:"Information, if this HHS is currently connected to the Aladdin App or not."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isConnectedToService: Boolean"}),(0,t.jsx)(n.td,{children:"Information, if this Service is currently connected to the Aladdin App or not."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subscribeToScans (callback: IScannerOutput)"}),(0,t.jsx)(n.td,{children:"Subscribe to HHS Connection Information and Scanned Barcodes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subscribeToServiceEvents (callback: IServiceOutput)"}),(0,t.jsx)(n.td,{children:"Subscribe to Connection Information of the sdk-service."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"unsubscribeFromScans (callback: IScannerOutput)"}),(0,t.jsx)(n.td,{children:"Unsubscribe from HHS Connection Information and Scanned Barcodes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"unsubscribeFromServiceEvents (callback: IServiceOutput)"}),(0,t.jsx)(n.td,{children:"Unsubscribe Connection Information of the sdk-service."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"iscanneroutput",children:"IScannerOutput"}),"\n",(0,t.jsx)(n.p,{children:"interface IScannerOutput"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Summary"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onBarcodeScanned (barcode: String)"}),(0,t.jsx)(n.td,{children:"Callback Method that is called for each scanned barcode. It will only be called once per Barcode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onScannerConnected"}),(0,t.jsx)(n.td,{children:"Notifier function that is called once an HHS is connected to Aladdin App."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onScannerDisconnected"}),(0,t.jsx)(n.td,{children:"Notifier function that is called once an HHS Scanner is disconnected from Aladdin App."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"iserviceoutput",children:"IServiceOutput"}),"\n",(0,t.jsx)(n.p,{children:"interface IServiceOutput"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Summary"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onServiceConnected"}),(0,t.jsx)(n.td,{children:"Callback for the successful ServiceConnection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onServiceDisconnected"}),(0,t.jsx)(n.td,{children:"Callback for a disconnection from the service."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"aladdin-client",children:"Aladdin Client"}),"\n",(0,t.jsx)(n.p,{children:'"Aladdin Client" is a purposefully crafted sample application designed to showcase the dynamic capabilities of our SDK. This app stands as a practical illustration of how seamlessly our SDK integrates into Android environments. With an array of buttons representing distinct features, developers can interactively explore and understand the SDK\'s functionalities.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Aladdin_Client",src:i(11312).Z+"",width:"227",height:"440"})}),"\n",(0,t.jsx)(n.h3,{id:"exploring-button-capabilities",children:"Exploring Button Capabilities"}),"\n",(0,t.jsx)(n.h4,{id:"subscribe-to-service-events",children:"Subscribe To Service Events:"}),"\n",(0,t.jsx)(n.p,{children:"Subscribe to Connection Information of the sdk-service. You will get notified when you are connected or disconnected from Aladdin application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Subscribe_to_Service",src:i(9587).Z+"",width:"227",height:"406"})}),"\n",(0,t.jsx)(n.h4,{id:"connect-to-service",children:"Connect To Service:"}),"\n",(0,t.jsx)(n.p,{children:"Connect to the Aladdin application. Triggers a Service Binding via (AIDL) IPC to the Aladdin application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connect_to_Service",src:i(38904).Z+"",width:"227",height:"448"})}),"\n",(0,t.jsx)(n.h4,{id:"subscribe-to-scans",children:"Subscribe To Scans:"}),"\n",(0,t.jsx)(n.p,{children:"Subscribe to Connection Information and Scanned Barcodes. You will get notified when you are connected or disconnected from HHS Scanner and Scanned Barcodes data."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Subscribe_to_Scans",src:i(68442).Z+"",width:"227",height:"403"})}),"\n",(0,t.jsx)(n.h4,{id:"is-connected-to-scanner",children:"Is Connected To Scanner:"}),"\n",(0,t.jsx)(n.p,{children:"Will get information related to scanner, whether it is currently connected to the Aladdin application or not."}),"\n",(0,t.jsx)(n.h4,{id:"is-connected-to-service",children:"Is Connected To Service:"}),"\n",(0,t.jsx)(n.p,{children:"Will get information related to service (Client App), whether it is currently connected to the Aladdin application or not."}),"\n",(0,t.jsx)(n.h4,{id:"get-latest-scan-value",children:"Get Latest Scan Value:"}),"\n",(0,t.jsx)(n.p,{children:"Get the last scanned value from the HHS."}),"\n",(0,t.jsx)(n.h4,{id:"unsubscribe-from-scans",children:"Unsubscribe From Scans:"}),"\n",(0,t.jsx)(n.p,{children:"Unsubscribe from Connection Information and Scanned Barcodes. You will not get any information related to scanned barcodes and HHS connections."}),"\n",(0,t.jsx)(n.h4,{id:"unsubscribe-from-service-events",children:"Unsubscribe From Service Events:"}),"\n",(0,t.jsx)(n.p,{children:"Unsubscribe Connection Information of the sdk-service. You will not get any information related to Connection (like connected/disconnected) with Aladdin application."}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-receive-bar-code-in-aladdin-client-app",children:"Steps to Receive Bar code in Aladdin Client App"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install both applications (Aladdin and Client) in the device."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect to Hand Scanner from Aladdin application and ",(0,t.jsx)(n.strong,{children:'select "Integration method" as SDK'}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Integration_Method",src:i(38342).Z+"",width:"227",height:"471"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Once the HHS is connected to the Aladdin application, select "Subscribe" to service events in client application.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Tap "Connect to service" in the client application. Once connection is successful, you will get connection toast message.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Tap "Subscribe to Scan" in client application.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now you can scan the barcode data from HHS device. You will get a toast message with scanned data in Client Application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Toast_Message",src:i(9187).Z+"",width:"227",height:"423"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11312:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/aladdin-client-de9042fa310d652ba03588415b492870.png"},38904:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connect-to-service-647605f9eb2a0eb489b7e807163a6a25.png"},38342:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/integration-method-4450914c80c961721ea5997d79798e94.png"},68442:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/subscribe-to-scans-ffd23ff694b9244a29886f6d63811e5f.png"},9587:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/subscribe-to-service-492bf3d163b26b1c905270c9bcc896e8.png"},9187:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/toast-message-d56eb4f741ec88685def4d5aee9802e5.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(67294);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);