"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[41689],{29863:(e,n,t)=>{t.r(n),t.d(n,{Img:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(85893),s=t(11151);t(74866),t(85162);const a={id:"tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",sidebar_label:"C# Barcode Reader Tutorial"},i=void 0,o={id:"opos/develop/tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",description:"Introduction",source:"@site/docs/opos/develop/tutorialcsharpscanner.mdx",sourceDirName:"opos/develop",slug:"/opos/develop/tutorialcsharpscanner",permalink:"/opos/develop/tutorialcsharpscanner",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",sidebar_label:"C# Barcode Reader Tutorial"},sidebar:"OPOS",previous:{title:"C++ Live Weight Reader Tutorial",permalink:"/opos/develop/tutorialcppscale"},next:{title:"C# Live Weight Reader Tutorial",permalink:"/opos/develop/tutorialcsharpscale"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Exposing OPOS control objects",id:"exposing-opos-control-objects",level:2},{value:"Creating the OPOS scanner object",id:"creating-the-opos-scanner-object",level:2},{value:"Accessing the OPOS Scanner interface",id:"accessing-the-opos-scanner-interface",level:2},{value:"Implementing event functions",id:"implementing-event-functions",level:3},{value:"Tying it all together",id:"tying-it-all-together",level:2}],d=({src:e})=>{const n={img:"img",...(0,s.a)()};return(0,r.jsx)(n.img,{src:e,style:{maxWidth:"750px",maxHeight:"750px"}})};function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we will be creating a simple console application in C# that opens, claims and enables a scanner device and provides a mechanism to see what labels were scanned with that device. This tutorial only covers a very basic aspect of development using OPOS with C#, but should suffice as a starting point for any application that looks to read labels from a Datalogic scanning device."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Developing an application for a Datalogic scanning device requires you to first have Datalogic's OPOS installed. The OPOS installer ensures the required ActiveX Controls are registered and any supporting files are present."}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-project",children:"Creating a project"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using Visual Studio 2019, navigate to ",(0,r.jsx)(n.strong,{children:"File > New > Project ..."})]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/filenewproject.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Create a new project"})," dialog, set the filter to ",(0,r.jsx)(n.strong,{children:"C#"}),", select ",(0,r.jsx)(n.strong,{children:"Console App"})," and select ",(0,r.jsx)(n.strong,{children:"Next"})]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/createnewproject.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Configure your new project"})," dialog, declare your ",(0,r.jsx)(n.strong,{children:"Project name"}),", ",(0,r.jsx)(n.strong,{children:"Location"})," and ",(0,r.jsx)(n.strong,{children:"Solution name"})," as desired and then select ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/configurenewproject.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Additional information"})," dialog, make sure the Target Framework is set to ",(0,r.jsx)(n.em,{children:".NET 5.0"})," and then select ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/additionalinfo.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After the project has initialized, you ",(0,r.jsx)(n.strong,{children:"must create and use an x86 configuration"}),"; failure to do this will result in the unhandled exception ",(0,r.jsx)(n.em,{children:"80040154 Class not registered (0x80040154 (REGDB_E_CLASSNOTREG))"})," when you run the application. The Configuration Manager can be accessed by navigating to ",(0,r.jsx)(n.strong,{children:"Build > Configuration Manager..."}),"."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/newsolutionplatform.png"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exposing-opos-control-objects",children:"Exposing OPOS control objects"}),"\n",(0,r.jsxs)(n.p,{children:["The very first step is to reference the scanner ActiveX Control as a ",(0,r.jsx)(n.code,{children:"dependency"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using the Visual Studio 2019 ",(0,r.jsx)(n.strong,{children:"Solution Explorer"}),", right mouse click ",(0,r.jsx)(n.strong,{children:"Dependencies"})," and select ",(0,r.jsx)(n.strong,{children:"Add COM Reference"})," from the context menu."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/addcomreference.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.strong,{children:"Reference Manager"})," dialog appears, filter on the keyword ",(0,r.jsx)(n.strong,{children:"OPOS"}),", select the ",(0,r.jsx)(n.em,{children:"OPOS Scanner Control"})," and then select OK."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/addcomref.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["At this point, expanding the ",(0,r.jsx)(n.strong,{children:"Dependencies"})," node of the ",(0,r.jsx)(n.strong,{children:"Solution Explorer"}),", you will see  ",(0,r.jsx)(n.code,{children:"Interop.OposScanner_CCO"}),"."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/dependencies.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Near the top of your source file, add the statement ",(0,r.jsx)(n.code,{children:"using OposScanner_CCO;"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing OPOSCONSTANTSLib;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n        }\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-opos-scanner-object",children:"Creating the OPOS scanner object"}),"\n",(0,r.jsxs)(n.p,{children:["Creating the scanner object requires you to simply declare and instantiate it. However, if you attempt to build the application at this point you will encounter ",(0,r.jsx)(n.em,{children:"error CS1752: Interop type 'OPOSScannerClass' cannot be embedded. Use the applicable interface instead."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This issue is easily resolved by the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Expand the ",(0,r.jsx)(n.strong,{children:"Dependencies"})," and ",(0,r.jsx)(n.strong,{children:"COM"})," nodes in the ",(0,r.jsx)(n.strong,{children:"Solution Explorer"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Right mouse click on ",(0,r.jsx)(n.code,{children:"Interop.OposScanner_CCO"})," and select ",(0,r.jsx)(n.strong,{children:"Properties"})," from the context menu."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"Embed Interop Types"})," to ",(0,r.jsx)(n.strong,{children:"No"}),"."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/embededproperty.png"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-opos-scanner-interface",children:"Accessing the OPOS Scanner interface"}),"\n",(0,r.jsxs)(n.p,{children:["At this point, you are ready to use the ",(0,r.jsx)(n.code,{children:"scanner"})," object."]}),"\n",(0,r.jsx)(n.p,{children:"The OPOS standard defines a general sequence to access a device:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"open"}),": open a context to the device"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"claim"}),": claim control over the device"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"enable"}),": enable the device's operation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"disable"}),": disable the device's  operation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"release"}),": release control over the device"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"close"}),": close the context to the device"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Opening a scanner context requires you to reference a ",(0,r.jsx)(n.em,{children:"device profile"})," (a device profile simply being a name representing a set of parameters relevant to the device). When OPOS is installed, scanner profiles are seen as the subkey names installed under the UPOS-specified registry key ",(0,r.jsx)(n.code,{children:"HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\OLEforRetail\\ServiceOPOS\\SCANNER"}),". It is your choice whether you want to programmatically obtain the profile names from the registry or to simply hard-code them in your application."]}),"\n",(0,r.jsx)(n.p,{children:"If the scanner context is successfully opened, you can then claim the device, gaining exclusive access to it. And if the device is successfully claimed, you can then enable it to perform subsequent operations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using System;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n\n            // Open a context with the scanner (e.g. "USBScanner").\n            string profileName = "<your selected profile>";\n            scanner.Open(profileName);\n\n            // Claim control of the scanner using a 1000 millisecond timeout.\n            scanner.ClaimDevice(1000);\n            if (scanner.Claimed)\n            {\n                // Enable the scanner and decoding events.\n                scanner.DeviceEnabled = true;\n                scanner.DataEventEnabled = true;\n                scanner.DecodeData = true;\n\n                //\n                // more to come .... \n                //\n\n                // Disable and release the scanner.\n                scanner.DataEventEnabled = false;\n                scanner.ReleaseDevice();\n            }\n\n            // Finally, close the scanner context.\n            scanner.Close();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"implementing-event-functions",children:"Implementing event functions"}),"\n",(0,r.jsxs)(n.p,{children:["At this point, the scanner object can act as a ",(0,r.jsx)(n.em,{children:"sink"})," (an object that receives input from the device). However, to make the application useful you must connect the scanner object to a ",(0,r.jsx)(n.code,{children:"DataEvent()"})," method, allowing the application to retrieve the label data obtained by the scanner object."]}),"\n",(0,r.jsxs)(n.p,{children:["To see the event methods of the associated interface class ",(0,r.jsx)(n.code,{children:"_IOPOSScannerEvents_Event"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Right mouse click on ",(0,r.jsx)(n.code,{children:"OPOSScannerClass"})," in your source code and then select ",(0,r.jsx)(n.strong,{children:"Peek Definition"})," from the context menu."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/peekdefinition_a.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Scrolling to the bottom of the displayed window you see four event methods."}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/peekdefinition_b.png"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Placing your cursor over ",(0,r.jsx)(n.code,{children:"_IOPOSScannerEvents_DataEventEventHandler"})," you will see the method signature."]}),"\n",(0,r.jsx)(d,{src:"/img/opos/develop/csharp/scanner/peekdefinition_c.png"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For our purposes, we need to provide a simple DataEvent() method."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  static private void DataEvent(int value)\n  {\n      Console.WriteLine("Data: " + scanner.ScanDataLabel);\n      scanner.DataEventEnabled = true;\n  }\n'})}),"\n",(0,r.jsx)(n.h2,{id:"tying-it-all-together",children:"Tying it all together"}),"\n",(0,r.jsxs)(n.p,{children:["All that remains to be done is to connect the scanner object to the delegate method ",(0,r.jsx)(n.code,{children:"DataEvent()"})," and to write some simple thread management code."]}),"\n",(0,r.jsxs)(n.p,{children:["Connecting the scanner object to the delegate method is done by simply adding the statement ",(0,r.jsx)(n.code,{children:"scanner.DataEvent += DataEvent;"})," to your code."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, a more complete example can be found in the ",(0,r.jsx)(n.a,{href:"./datalogicoposexamples",children:"Datalogic OPOS Examples"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using System;\nusing System.Threading;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Setup the console program to exit gracefully.\n            var exitEvent = new ManualResetEvent(false);\n            Console.CancelKeyPress += (sender, eventArgs) =>\n            {\n                eventArgs.Cancel = true;\n                exitEvent.Set();\n            };\n\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n\n            // Open a context with the scanner (e.g. "USBScanner").\n            string profileName = "<your selected profile>";\n            scanner.Open(profileName);\n\n            // Claim control of the scanner using a 1000 millisecond timeout.\n            scanner.ClaimDevice(1000);\n            if (scanner.Claimed)\n            {\n                // Subscribe to the delegate.\n                scanner.DataEvent += DataEvent;\n\n                // Enable the scanner and decoding events.\n                scanner.DeviceEnabled = true;\n                scanner.DataEventEnabled = true;\n                scanner.DecodeData = true;\n\n                // Wait for exit event (meanwhile handling scanner events).\n                exitEvent.WaitOne();\n\n                // Unsubscribe from the delegate.\n                scanner.DataEvent -= DataEvent;\n\n                // Disable and release the scanner.\n                scanner.DataEventEnabled = false;\n                scanner.ReleaseDevice();\n            }\n\n            // Finally, close the scanner context.\n            scanner.Close();\n        }\n\n        static private void DataEvent(int value)\n        {\n            Console.WriteLine("Data: " + scanner.ScanDataLabel);\n            scanner.DataEventEnabled = true;\n        }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),s=t(36905),a=t(12466),i=t(16550),o=t(20469),c=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[l,u]=g({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=null!=l?l:m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function f(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(l(n),i(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function S(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(S,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);