"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[64195],{85162:(e,a,i)=>{i.d(a,{Z:()=>l});i(67294);var t=i(36905);const o={tabItem:"tabItem_Ymn6"};var n=i(85893);function l(e){let{children:a,hidden:i,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,l),hidden:i,children:a})}},74866:(e,a,i)=>{i.d(a,{Z:()=>U});var t=i(67294),o=i(36905),n=i(12466),l=i(16550),r=i(20469),s=i(91980),d=i(67392),c=i(50012);function g(e){var a,i;return null!=(a=null==(i=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?a:[]}function m(e){const{values:a,children:i}=e;return(0,t.useMemo)((()=>{const e=null!=a?a:function(e){return g(e).map((e=>{let{props:{value:a,label:i,attributes:t,default:o}}=e;return{value:a,label:i,attributes:t,default:o}}))}(i);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,i])}function u(e){let{value:a,tabValues:i}=e;return i.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:i}=e;const o=(0,l.k6)(),n=function(e){let{queryString:a=!1,groupId:i}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:a,groupId:i});return[(0,s._X)(n),(0,t.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(o.location.search);a.set(n,e),o.replace({...o.location,search:a.toString()})}),[n,o])]}function h(e){const{defaultValue:a,queryString:i=!1,groupId:o}=e,n=m(e),[l,s]=(0,t.useState)((()=>function(e){var a;let{defaultValue:i,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}const o=null!=(a=t.find((e=>e.default)))?a:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:n}))),[d,g]=p({queryString:i,groupId:o}),[h,w]=function(e){let{groupId:a}=e;const i=function(e){return e?"docusaurus.tab."+e:null}(a),[o,n]=(0,c.Nk)(i);return[o,(0,t.useCallback)((e=>{i&&n.set(e)}),[i,n])]}({groupId:o}),b=(()=>{const e=null!=d?d:h;return u({value:e,tabValues:n})?e:null})();(0,r.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error("Can't select invalid tab value="+e);s(e),g(e),w(e)}),[g,w,n]),tabValues:n}}var w=i(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(85893);function v(e){let{className:a,block:i,selectedValue:t,selectValue:l,tabValues:r}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.o5)(),c=e=>{const a=e.currentTarget,i=s.indexOf(a),o=r[i].value;o!==t&&(d(a),l(o))},g=e=>{var a;let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var t;const a=s.indexOf(e.currentTarget)+1;i=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{var o;const a=s.indexOf(e.currentTarget)-1;i=null!=(o=s[a])?o:s[s.length-1];break}}null==(a=i)||a.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},a),children:r.map((e=>{let{value:a,label:i,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>s.push(e),onKeyDown:g,onClick:c,...n,className:(0,o.Z)("tabs__item",b.tabItem,null==n?void 0:n.className,{"tabs__item--active":t===a}),children:null!=i?i:a},a)}))})}function x(e){let{lazy:a,children:i,selectedValue:o}=e;const n=(Array.isArray(i)?i:[i]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==o})))})}function j(e){const a=h(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...a,...e}),(0,f.jsx)(x,{...a,...e})]})}function U(e){const a=(0,w.Z)();return(0,f.jsx)(j,{...e,children:g(e.children)},String(a))}},54338:(e,a,i)=>{i.r(a),i.d(a,{default:()=>J});i(67294);function t(e){var a,i,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(i=t(e[a]))&&(o&&(o+=" "),o+=i);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}const o=function(){for(var e,a,i=0,o="";i<arguments.length;)(e=arguments[i++])&&(a=t(e))&&(o&&(o+=" "),o+=a);return o};var n=i(7372),l=i(52263),r=i(44996);const s={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featuresOdd:"featuresOdd_MAkx",featureImage:"featureImage_yA8i",dlBlue:"dlBlue_Q7_O"};var d=i(74866),c=i(85162),g=i(85893);const m={title:"Shield",imageUrl:"img/homepage/home-shield.png",imageLink:"https://www.datalogic.com/eng/mobile-computers/datalogic-shield-pd-846.html",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{display:"block",height:"20px",marginBottom:"8px"}}),"Android security patches/updates for Datalogic mobile computers."]})},u={title:"Launcher",imageUrl:"img/homepage/home-launcher.svg",imageLink:"/launcher/overview",webTitle:"Play Store",webURL:"https://play.google.com/store/apps/details?id=com.datalogic.launcher",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/launcher-s2d-v2/releases",description:(0,g.jsx)("span",{children:"Android application that locks down the device to launch only allowed applications."})},p={title:"Enterprise Browser",imageUrl:"img/homepage/home-browser.svg",imageLink:"/browser/overview",webTitle:"Play Store",webURL:"https://play.google.com/store/apps/details?id=com.datalogic.browser",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/browser-s2d/releases",description:(0,g.jsx)("span",{children:"Android application for web browsing to only allowed sites and to expose JavaScript access to the scanner."})},h={title:"Scan2Deploy Studio",imageUrl:"img/homepage/home-scan2deploy.svg",imageLink:"/scan2deploy/studio",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/scan2deploy-studio/releases/latest",description:(0,g.jsx)("span",{children:"Software for configuring Android devices using barcodes."})},w={title:"Android Enterprise QR Generator",imageUrl:"img/homepage/home-aeqr.png",imageLink:"/aeqrdoc/overview",webTitle:"Website",webURL:"https://datalogic.github.io/aeqr/",downloadTitle:"",downloadURL:"",description:(0,g.jsx)("span",{children:"Create standard and encrypted Android Enterprise Enrollment QR codes."})},b={title:"OEMConfig",imageUrl:"img/homepage/home-oemconfig.svg",imageLink:"/oemconfig/overview",webTitle:"Play Store",webURL:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/oemconfig-s2d-v2/releases",description:(0,g.jsx)("span",{children:"Software for configuring Datalogic specific settings on Android devices. Used by 3rd party EMMs."})},f={title:"Wi-Fi QR Generator",imageUrl:"img/homepage/home-wifiqr.png",imageLink:"/wifiqrdoc/overview",webTitle:"Website",webURL:"https://datalogic.github.io/wifiqr/",downloadTitle:"",downloadURL:"",description:(0,g.jsx)("span",{children:"Create standard and encrypted Wi-Fi QR codes."})},v={title:"Android SDKs",imageUrl:"img/homepage/home-android-sdk.png",imageLink:"/android/overview",urlTitle:"",toolURL:"",description:(0,g.jsxs)("span",{children:["App development SDKs supporting various languages including:",(0,g.jsx)("br",{}),(0,g.jsx)("img",{src:"/img/homepage/home-kotlin.svg",width:"18"})," ",(0,g.jsx)("a",{href:"/android/overview",children:"Kotlin"}),", ",(0,g.jsx)("img",{src:"/img/homepage/home-java.svg",width:"18"})," ",(0,g.jsx)("a",{href:"/android/overview",children:"Java"}),", ",(0,g.jsx)("img",{src:"/img/homepage/home-javascript.svg",width:"18"})," ",(0,g.jsx)("a",{href:"/javascript/overview",children:"Javascript"}),", and ",(0,g.jsx)("img",{src:"/img/homepage/home-maui.png",width:"18"})," ",(0,g.jsx)("a",{href:"/xamarin/overview",children:".NET MAUI."})]})},x={title:"Visual Formatter",imageUrl:"img/homepage/home-format.png",imageLink:"/scan2deploy/visual-formatter-basic-concepts",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsx)("span",{children:"Allows users to create formatting rules to manipulate the barcode data received from the scanner."})},j={title:"Wedge",imageUrl:"img/homepage/home-wedge.png",imageLink:"/wedge/overview",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsx)("span",{children:"Simplified barcode scanning via Keyboard Wedge, Intent Wedge, and Web Wedge."})},U={title:"SoftSpot",imageUrl:"img/homepage/home-softspot.svg",imageLink:"/softspot/overview",webTitle:"Play Store",webURL:"https://play.google.com/store/apps/details?id=com.datalogic.softspot",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/softspot/releases",description:(0,g.jsx)("span",{children:"Android application that allows for easy access to the barcode scanner and other frequently used actions."})},y={title:"Logger",imageUrl:"img/homepage/home-logger.svg",imageLink:"/logger/overview",webTitle:"Play Store",webURL:"https://play.google.com/store/apps/details?id=com.datalogic.logger",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/logger/releases",description:(0,g.jsx)("span",{children:"Android application that collects device logs for further analysis."})},L={title:"Integrity Kit",imageUrl:"img/homepage/home-integrity.png",imageLink:"/integritykit/overview",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsx)("span",{children:"Features on Datalogic Android-based devices that reduce the risk of hardware tampering."})},k={title:"WiFi Guard",imageUrl:"img/homepage/home-wifiguard.svg",imageLink:"/wifiguard/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/wifiguard/releases",description:(0,g.jsx)("span",{children:"Android application that assists in improving Wi\u2011Fi network performance and diagnosing connection problems."})},T={title:"Battery Manager",imageUrl:"img/homepage/home-battery.svg",imageLink:"/battery-manager/overview",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{display:"block",height:"20px",marginBottom:"8px"}}),"Android application that present battery usage information and help optimize power consumption."]})},R={title:"QuickBoard",imageUrl:"img/homepage/home-quickboard.svg",imageLink:"/quickboard/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/quickboard/releases",description:(0,g.jsx)("span",{children:"Customizable on-screen virtual keyboard."})},D={title:"RIDA\u2122 DBT6400 Core SDK",imageUrl:"img/homepage/home-handheld.png",imageLink:"/hhs/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/hhs-android-core-sdk-demoapp",description:(0,g.jsx)("span",{children:"Programming interface that allows Android apps to manage a connected RIDA\u2122 DBT6400 cordless imager."})},S={title:"Aladdin for CODiScan",imageUrl:"img/homepage/home-aladdin-icon.png",imageLink:"/aladdin/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/aladdin-v2/releases",description:(0,g.jsx)("span",{children:"Android application that provides seamless integration of the Datalogic CODiScan with Android devices."})},A={title:"Memor Ethernet Adapter Service Utility",imageUrl:"img/homepage/home-ethernet.png",imageLink:"/m10ethcradle/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://developer.datalogic.com/mobile-computers/tools/M10EA",description:(0,g.jsx)("span",{children:"Android application that manages the Memor 10 or Memor 11 connection to the Ethernet cradle."})},N={title:"Scan2Deploy CE",imageUrl:"img/homepage/home-scan2deploy.svg",imageLink:"/scan2deploy-ce/overview",webTitle:"",webURL:"",downloadTitle:"",downloadURL:"",description:(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{display:"block",height:"20px",marginBottom:"8px"}}),"Software for configuring WEC7 devices using barcodes."]})},E={title:"DXU",imageUrl:"img/homepage/home-dxu-desktop.svg",imageLink:"/dxu/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/dxu/releases",description:(0,g.jsx)("span",{children:"Windows desktop software for configuring Android and WEC7."})},C=[m,u,p,L],I=[h,w,b,f],q=[v,x,j],B=[U,y,k,T,R],_=[S,E],O=[D],V=[A],W=[N,E],P=[{title:"Windows CE SDK",imageUrl:"img/homepage/home-ce-sdk.png",imageLink:"/ce/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/wince-sdk/releases",description:(0,g.jsx)("span",{children:"Datalogic SDK for Windows CE and Windows Mobile devices."})},{title:"CE Sync SDK",imageUrl:"img/homepage/home-ce-sync.svg",imageLink:"/cesync/overview",downloadTitle:"",downloadURL:"",description:(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{style:{display:"block",height:"20px",marginBottom:"8px"}}),"A simple command line tool that makes use of the datalogic-ce-sync library."]})}],Z=[{title:"USBLAN",imageUrl:"img/homepage/home-usblan.png",imageLink:"/usblan/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://github.com/datalogic/usblan/releases",description:(0,g.jsx)("span",{children:"Driver for TCP/IP communication over USB connections."})}],K=[{title:"JavaPOS",imageUrl:"img/homepage/home-java.svg",imageLink:"/javapos/overview",downloadTitle:"Download",downloadURL:"https://www.datalogic.com/eng/Download/Form/36031",description:(0,g.jsx)("span",{children:"Java implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices."})},{title:"OPOS",imageUrl:"img/homepage/home-opos.png",imageLink:"/opos/overview",webTitle:"",webURL:"",downloadTitle:"Download",downloadURL:"https://www.datalogic.com/eng/Download/Form/35971",description:(0,g.jsx)("span",{children:"Windows implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices."})}];function M(e){let{imageUrl:a,title:i,imageLink:t,description:n,className:l,webTitle:d,webURL:c,downloadTitle:m,downloadURL:u}=e;const p=(0,r.Z)(a);return(0,g.jsxs)("div",{className:o("col col--4",l),children:[p&&(0,g.jsx)("div",{className:"text--center",children:(0,g.jsx)("a",{href:t,children:(0,g.jsx)("img",{className:s.featureImage,style:{borderRadius:"25px"},src:p,alt:i})})}),(0,g.jsx)("h3",{className:"text--center",style:{marginBlockEnd:"8px"},children:i}),(0,g.jsxs)("h4",{className:"text--center",style:{marginBlockEnd:"8px"},children:[(0,g.jsxs)("a",{href:c,target:"_blank",children:[d&&(0,g.jsx)("img",{src:"/img/homepage/open-in-new.svg",width:"20",style:{marginBottom:"-5px"}})," ",d]}),d&&m&&(0,g.jsx)("span",{style:{paddingLeft:"16px"}}),(0,g.jsxs)("a",{href:u,target:"_blank",children:[m&&(0,g.jsx)("img",{src:"/img/shared/download.svg",width:"20",style:{marginBottom:"-5px"}})," ",m]})]}),(0,g.jsx)("center",{children:(0,g.jsx)("p",{children:n})})]})}function F(e){let{feature:a,title:i,className:t}=e;return a&&a.length>0&&(0,g.jsx)("section",{className:t,children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h1",{children:i}),(0,g.jsx)("br",{}),(0,g.jsx)("div",{className:"row",style:{justifyContent:"center"},children:a.map(((e,a)=>(0,g.jsx)(M,{...e,className:!0},a)))})]})})}const J=function(){const e=(0,l.Z)(),{siteConfig:a={}}=e;return(0,g.jsx)(n.Z,{title:""+a.title,description:"Datalogic technical documentation site",children:(0,g.jsx)("main",{children:(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(c.Z,{value:"suite",label:"Mobility Suite",default:!0,children:[(0,g.jsx)(F,{feature:C,title:"Protect",className:s.features}),(0,g.jsx)(F,{feature:I,title:"Configure",className:s.featuresOdd}),(0,g.jsx)(F,{feature:q,title:"Develop",className:s.features}),(0,g.jsx)(F,{feature:B,title:"Optimize",className:s.featuresOdd})]}),(0,g.jsxs)(c.Z,{value:"android",label:"Android",children:[(0,g.jsx)(F,{feature:_,title:"Configuration",className:s.features}),(0,g.jsx)(F,{feature:O,title:"SDK",className:s.featuresOdd}),(0,g.jsx)(F,{feature:V,title:"Utilities",className:s.features})]}),(0,g.jsx)(c.Z,{value:"pos",label:"POS",children:(0,g.jsx)(F,{feature:K,title:"SDKs",className:s.features})}),(0,g.jsxs)(c.Z,{value:"win",label:"Windows CE",children:[(0,g.jsx)(F,{feature:W,title:"Configuration",className:s.features}),(0,g.jsx)(F,{feature:P,title:"SDKs",className:s.featuresOdd}),(0,g.jsx)(F,{feature:Z,title:"Utilities",className:s.features})]})]})})})}}}]);