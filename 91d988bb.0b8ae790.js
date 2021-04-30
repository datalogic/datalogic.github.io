(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{171:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return l}));var a=n(3),o=n(7),t=(n(0),n(235)),s=(n(282),n(279),n(237),n(238),{id:"android",title:"Scan2Deploy Android",sidebar_label:"Android agent"}),i={unversionedId:"scan2deploy/android",id:"scan2deploy/android",isDocsHomePage:!1,title:"Scan2Deploy Android",description:"Screenshot",source:"@site/docs/scan2deploy/android.md",slug:"/scan2deploy/android",permalink:"/scan2deploy/android",version:"current",sidebar_label:"Android agent",sidebar:"Scan2DeployStudio",previous:{title:"Frequently Asked Questions",permalink:"/scan2deploy/faq"},next:{title:"Scan2Deploy Android Schema",permalink:"/scan2deploy/android-schema"}},c=[{value:"Enabling Scan2Deploy",id:"enabling-scan2deploy",children:[{value:"Scan2Deploy QR code",id:"scan2deploy-qr-code",children:[]},{value:"Android Enterprise QR Code",id:"android-enterprise-qr-code",children:[]}]},{value:"Logging",id:"logging",children:[{value:"In app",id:"in-app",children:[]},{value:"Using adb",id:"using-adb",children:[]}]}],d={rightToc:c};function l(e){var r=e.components,s=Object(o.a)(e,["components"]);return Object(t.b)("wrapper",Object(a.a)({},d,s,{components:r,mdxType:"MDXLayout"}),Object(t.b)("p",null,Object(t.b)("img",{alt:"Screenshot",src:n(277).default})),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," is an application devoted to the initial staging of Android devices by reading a barcode sequence generated by ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/scan2deploy/studio"}),"Scan2Deploy Studio"),". It is resident in all modern Datalogic mobile computers running Android 8.1 or higher. Downloads of all released versions are available in the ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android/releases"}),"Releases")," section on the Scan2Deploy Android Github page. However, the app is usually updated directly via ",Object(t.b)("strong",{parentName:"p"},"Scan2Deploy Studio"),"."),Object(t.b)("h2",{id:"enabling-scan2deploy"},"Enabling Scan2Deploy"),Object(t.b)("p",null,"If your device does not meet the minimum firmware requirements, you will be required to setup Scan2Deploy as the ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/work/dpc/build-dpc"}),"Device Policy Controller (DPC)"),", running in ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/android/work/play/emm-api/prov-devices#modes_of_operation"}),"device owner mode"),' first. This allows Scan2Deploy to configure many protected device settings that would otherwise not be possible. Any DPC app that acts as a device owner must be configured to do so during device setup. By scanning a QR code at the first page of the Android Setup Wizard ("Hi There! page) on a new or factory-reset device, Scan2Deploy is configured as device owner. In never versions of device firmware, Scan2Deploy can be used alongside another EMM app enrolled as the device owner. To verify this is the case with the version of firmware on your device, simply open the Scan2Deploy app. If you see a screen like this you will need to update your device to a newer version of firmware to gain the capability to use Scan2Deploy alongside an EMM app.'),Object(t.b)("p",null,Object(t.b)("img",{alt:"Device Owner Required",src:n(475).default})),Object(t.b)("p",null,"There are two different types of QR codes that can be scanned at the ",Object(t.b)("strong",{parentName:"p"},"Hi There!")," screen to enroll Scan2Deploy as device owner, ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"#scan2deploy-qr-code"}),"Scan2Deploy QR codes")," and ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"#android-enterprise-qr-code"}),"Android Enterprise QR codes"),"."),Object(t.b)("h3",{id:"scan2deploy-qr-code"},"Scan2Deploy QR code"),Object(t.b)("p",null,"The ",Object(t.b)("strong",{parentName:"p"},"simplest way")," to enable Scan2Deploy is to just scan any ",Object(t.b)("strong",{parentName:"p"},"Scan2Deploy QR code")," at the ",Object(t.b)("strong",{parentName:"p"},"Hi There!")," screen."),Object(t.b)("h3",{id:"android-enterprise-qr-code"},"Android Enterprise QR Code"),Object(t.b)("p",null,"The ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/aeqr/"}),"Android Enterprise QR Code Generator")," can be used to install the latest version on Scan2Deploy as well as give you the opportunity to add many other customization options. The basic process is:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Select ",Object(t.b)("inlineCode",{parentName:"li"},"Datalogic Scan2Deploy")," in the ",Object(t.b)("inlineCode",{parentName:"li"},"Select an EMM")," field."),Object(t.b)("li",{parentName:"ol"},"Make any additional settings as desired (for instance, configure a Wi-Fi network)."),Object(t.b)("li",{parentName:"ol"},"Press the ",Object(t.b)("inlineCode",{parentName:"li"},"Generate QR Code")," button at the bottom of the page."),Object(t.b)("li",{parentName:"ol"},"Scan the QR code displayed.")),Object(t.b)("p",null,"By default, ",Object(t.b)("em",{parentName:"p"},"Android Enterprise QR Code Generator")," will point to and install the latest version of Scan2Deploy available online. However, if you prefer to use the ",Object(t.b)("strong",{parentName:"p"},"version of Scan2Deploy already present in the device's firmware"),", simply erase the contents of the ",Object(t.b)("inlineCode",{parentName:"p"},"DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION")," field. By doing so, the version of Scan2Deploy already present in the device's firmware will be used and no internet connection will be required."),Object(t.b)("p",null,Object(t.b)("img",{alt:"AEQR Scan2Deploy no download",src:n(476).default})),Object(t.b)("h2",{id:"logging"},"Logging"),Object(t.b)("p",null,"There are 2 ways to capture log details after scanning Scan2Deploy barcodes on the device; ",Object(t.b)("strong",{parentName:"p"},"In app")," and ",Object(t.b)("strong",{parentName:"p"},"Using ADB"),".  The ",Object(t.b)("strong",{parentName:"p"},"In app")," method is usually easier and doesn't require enabling special features on the device, while the ",Object(t.b)("strong",{parentName:"p"},"adb")," method does require enabling special features but provides more detailed information to aid in debugging."),Object(t.b)("h3",{id:"in-app"},"In app"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Click the ",Object(t.b)("em",{parentName:"p"},"3 dots")," icon on the upper-right hand side of the screen.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Click ",Object(t.b)("strong",{parentName:"p"},"Share..."))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Select the method you would like to use to share the output. For example, ",Object(t.b)("strong",{parentName:"p"},Object(t.b)("em",{parentName:"strong"},"Copy to clipboard")),"."))),Object(t.b)("h3",{id:"using-adb"},"Using adb"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Enable ADB on your device. This can be accomplished by turning ",Object(t.b)("em",{parentName:"p"},"on")," the ",Object(t.b)("strong",{parentName:"p"},"Enable USB debugging")," setting under ",Object(t.b)("em",{parentName:"p"},"System Settings > USB")," on the ",Object(t.b)("em",{parentName:"p"},"Device Settings")," page in ",Object(t.b)("strong",{parentName:"p"},"Scan2Deploy Studio"),". Alternatively, follow ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/studio/command-line/adb#Enabling"}),"Google's directions")," on your device.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Connect your device to your PC over USB.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"While at a command prompt that has access to the ",Object(t.b)("inlineCode",{parentName:"p"},"adb")," command, type:"),Object(t.b)("pre",{parentName:"li"},Object(t.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"adb logcat -d Scan2Deploy:V *:S > s2d.log\n"))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Now, share the ",Object(t.b)("strong",{parentName:"p"},"s2d.log")," file as needed."))))}l.isMDXComponent=!0},277:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/scan2deploy-qr-46887b2a5d16c1b2de86527f02606ed8.png"},279:function(e,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return t}));n(0);var a,o=[{modelName:"Memor 10",firmwareVersion:"2.06.08",releaseDate:"2020-12-02",osVersion:"9.0",securityPatch:"2020-11",sdkAddOnVersion:"1.25.2",scan2DeployVersion:"1.26.5419",dlScannerServiceVersion:"2.1.0.1-r1-104",setupWizardScannerVersion:"1.22.4963",dxuAgentVersion:"1.32.4399",eaInstallerVersion:"2.4.4.08",sureLockVersion:"13.52",sureFoxVersion:"8.43",scan2DeployAlwaysEnabled:!0},{modelName:"Memor 10",firmwareVersion:"2.05.07",releaseDate:"2020-08-13",osVersion:"9.0",securityPatch:"2020-08-05",sdkAddOnVersion:"",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.01-r8"},{modelName:"Memor 10",firmwareVersion:"2.04.05",releaseDate:"2020-06-08",osVersion:"9.0",securityPatch:"2020-05-05",sdkAddOnVersion:"1.22",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.00-r2"},{modelName:"Memor 10",firmwareVersion:"2.03.04",releaseDate:"2020-03-11",osVersion:"9.0",securityPatch:"2020-03-05",sdkAddOnVersion:"1.21.2",scan2DeployVersion:"1.17.3122"},{modelName:"Memor 10",firmwareVersion:"1.10.22",releaseDate:"2020-11-16",osVersion:"8.1",securityPatch:"2020-09-01",scan2DeployVersion:"1.26.5417",dlScannerServiceVersion:"1.3.2.01-r2.1-95"},{modelName:"Memor 10",firmwareVersion:"1.09.18",releaseDate:"2020-06-17",osVersion:"8.1",securityPatch:"2020-06-05",dxuAgentVersion:"1.28.1865",scan2DeployVersion:"1.18.3248",softSpotVersion:"2.1.1802",dlBatteryManager:"1.5.0",dlScannerServiceVersion:"1.3.2.01-r2",sdkAddOnVersion:"1.22.4",enterpriseAgentVersion:"2.3.4.02"},{modelName:"Memor 10",firmwareVersion:"1.07.15",releaseDate:"2019-12-27",osVersion:"8.1",securityPatch:"2020-01-05",dlScannerServiceVersion:"1.2.11.03-r5",dxuAgentVersion:"1.27.1624",sdkAddOnVersion:"1.21",sureLockVersion:"12.41",sureFoxVersion:"7.87",scan2DeployVersion:"1.13.1721",softSpotVersion:"2.0.444",dlBatteryManager:"1.4.5"},{modelName:"Memor 20",firmwareVersion:"1.06.05",releaseDate:"2020-12-11",osVersion:"9.0",securityPatch:"2020-10-01",sdkAddOnVersion:"1.25.1",scan2DeployVersion:"1.24.5026",dlScannerServiceVersion:"v2.1.0.0-r1-102",dxuAgentVersion:"1.32.4399",dockManagerVersion:"1.6.7",setupWizardScannerVersion:"1.22.4963"},{modelName:"Memor 20",firmwareVersion:"1.05.05",releaseDate:"2020-09-03",osVersion:"9.0",securityPatch:"2020-08-05",sdkAddOnVersion:"1.24.2",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.01-r5-97",sureLockVersion:"",dxuAgentVersion:"1.31.4151",softSpotVersion:"2.3.4387",setupWizardScannerVersion:"1.20.4598"},(a={modelName:"Memor 20",firmwareVersion:"1.04.15",releaseDate:"2020-07-30",osVersion:"9.0",securityPatch:"2020-05-05",sdkAddOnVersion:"1.23",scan2DeployVersion:"1.19.3684",dlScannerServiceVersion:"1.3.2.01-r3-95",sureLockVersion:"13.51",dxuAgentVersion:"1.29.3371"},a.scan2DeployVersion="1.19.3684",a.softSpotVersion="2.2.3680",a.batteryManagerVersion="1.5.0",a.dockManagerVersion="1.5.0",a.eaInstallerVersion="2.0.4.02",a),{modelName:"Joya Touch A6",firmwareVersion:"3.03.04",releaseDate:"2020-08-07",osVersion:"8.1",securityPatch:"2020-06-05",sdkAddOnVersion:"1.24",scan2DeployVersion:"1.22.4257",dlScannerServiceVersion:"1.3.2.01-r9-101",sureLockVersion:"13.51",firefoxVersion:"68.8.1"},{modelName:"Joya Touch A6",firmwareVersion:"3.02.02",releaseDate:"2020-06-03",osVersion:"8.1",securityPatch:"2020-03-05",dlCradleManager:"1.2.18",scan2DeployVersion:"1.18.3248"},{modelName:"Joya Touch A6",firmwareVersion:"3.01.01",releaseDate:"2019-12-18",osVersion:"8.1",sdkAddOnVersion:"1.21",firefoxVersion:"63.0.2"},{modelName:"Joya Touch A6",firmwareVersion:"2.25.46",releaseDate:"2020-10-27",osVersion:"7.1"},{modelName:"Joya Touch A6",firmwareVersion:"2.24.44",releaseDate:"2020-07-20",osVersion:"7.1",sureLockVersion:"13.51",firefoxVersion:"68.8.1"},{modelName:"Joya Touch A6",firmwareVersion:"2.23.42",releaseDate:"2020-06-03",osVersion:"7.1",dlCradleManager:"1.2.18"},{modelName:"Joya Touch A6",firmwareVersion:"2.22.41",releaseDate:"2019-12-20",osVersion:"7.1",securityPatch:"2019-10-05",dlStagerVersion:"0.34.0"},{modelName:"Joya Touch A6",firmwareVersion:"2.21.38",releaseDate:"2019-09-17",osVersion:"7.1",securityPatch:"2019-07-05",mobiControlVersion:"13.7.0",dxuAgentVersion:"1.24.390",sdkAddOnVersion:"1.20"},{modelName:"Joya Touch A6",firmwareVersion:"2.20.34",releaseDate:"2019-06-05",osVersion:"7.1",dlScannerServiceVersion:"1.2.3.r14",securityPatch:"2019-04-05",sdkAddOnVersion:"1.18",dlCradleManager:"1.2.17",mobiControlVersion:"13.6.0",sureLockVersion:"11.51",dxuAgentVersion:"1.23.243",softSpotVersion:"1.8.92",enterpriseAgentVersion:"3.66"},{modelName:"Joya Touch A6",firmwareVersion:"2.19.31",releaseDate:"2019-04-30",osVersion:"7.1",securityPatch:"2019-03-05",dlScannerServiceVersion:"1.2.3.r6",sdkAddOnVersion:"1.16",dlCradleManager:"1.2.16"},{modelName:"DL-Axist/X4",firmwareVersion:"2.07.03",releaseDate:"2020-10-01",osVersion:"4.4",dlScannerServiceVersion:"1.2.11.04-r4-90",autoRangeScannerFalconX4:"2.2.0.6",sureLockVersion:"15.55",enterpriseAgentVersion:"4.08"},{modelName:"DL-Axist/X4",firmwareVersion:"2.06.01",releaseDate:"2020-02-26",osVersion:"4.4",dlScannerServiceVersion:"1.2.11.04-r4",autoRangeScannerFalconX4:"2.2.0.2",sdkAddOnVersion:"1.21",sureLockVersion:"12.41",enterpriseAgentVersion:"4.01"},{modelName:"DL-Axist/X4",firmwareVersion:"2.03.02",releaseDate:"2019-06-28",osVersion:"4.4",dlScannerServiceVersion:"1.2.3-r12",autoRangeScannerFalconX4:"1.0.2.1",securityPatch:"2017-10",sdkAddOnVersion:"1.18",sureLockVersion:"11.51",dxuAgentVersion:"1.23.243",softSpotVersion:"1.8.92",enterpriseAgentVersion:"3.66"},{modelName:"Memor1",firmwareVersion:"3.09.13",releaseDate:"2020-10-29",osVersion:"8.1",securityPatch:"2020-09",dlScannerServiceVersion:"1.2.9-r4.1-memor1-75"},{modelName:"Memor1",firmwareVersion:"3.08.11",releaseDate:"2020-06-10",osVersion:"8.1",securityPatch:"2020-04-05",dlCradleManager:"1.2.18",setupWizardScannerVersion:"1.16.2662",dxuAgentVersion:"1.28.1865",softSpotVersion:"2.1.1802",scan2DeployVersion:"1.18.3248"},{modelName:"Memor1",firmwareVersion:"3.07.09",releaseDate:"2019-09-27",osVersion:"8.1",securityPatch:"2019-10-05",dxuAgentVersion:"1.25.840",enterpriseAgentVersion:"3.67"},{modelName:"Memor1",firmwareVersion:"3.06.08",releaseDate:"2019-06-14",osVersion:"8.1",securityPatch:"2019-06-05",dlScannerServiceVersion:"1.2.9-r4-74",setupWizardScannerVersion:"1.9",sdkAddOnVersion:"1.19.1",softSpotVersion:"1.8.92",scan2DeployVersion:"1.9.198",dxuAgentVersion:"1.23.243",sureLockVersion:"11.51"},{modelName:"Memor1",firmwareVersion:"3.04.06",releaseDate:"2019-03-15",osVersion:"8.1",securityPatch:"2019-02-05",dlScannerServiceVersion:"1.2.3-r6",setupWizardScannerVersion:"1.4",scanEngineCameraVersion:"2.0",dlCradleManager:"1.2.16",sdkAddOnVersion:"1.16",dlBatteryManager:"1.4.3",softSpotVersion:"1.6.84",scan2DeployVersion:"1.4.23",dxuAgentVersion:"1.16.51",enterpriseAgentVersion:"3.66",sureLockVersion:"7.97"}],t=[{Header:"Model name",accessor:"modelName",className:"firmware-table",filter:function(e,r,n){return e.filter((function(e){return e.values[r].startsWith(n)}))}},{Header:"Firmware version",accessor:"firmwareVersion",className:"firmware-table left"},{Header:"Release date",accessor:"releaseDate",className:"firmware-table left"},{Header:"OS version",accessor:"osVersion",className:"firmware-table left"},{Header:"SDK add-on version",accessor:"sdkAddOnVersion",className:"firmware-table"}]},282:function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var a=n(0),o=n.n(a),t=n(298),s=(n(74),function(){return{}}),i=function(e){var r=e.columns,n=e.data,a=e.model,i=e.getHeaderProps,c=void 0===i?s:i,d=e.getColumnProps,l=void 0===d?s:d,p=Object(t.useTable)({columns:r,data:n,initialState:{hiddenColumns:["modelName"],filters:[{id:"modelName",value:a}]}},t.useFilters,t.useSortBy),m=p.getTableProps,u=p.getTableBodyProps,b=p.headerGroups,V=p.rows,g=p.prepareRow;return o.a.createElement("table",m(),o.a.createElement("thead",null,b.map((function(e){return o.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return o.a.createElement("th",e.getHeaderProps([{className:e.className},c(e),l(e),e.getSortByToggleProps()]),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),o.a.createElement("tbody",u(),V.map((function(e,r){return g(e),o.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return o.a.createElement("td",e.getCellProps([{className:e.column.className,style:e.column.style},l(e.column)]),e.render("Cell"))})))}))))}},475:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/scan2deploy-device-owner-required-dcf00b3040e4f7fccd691e804ec6ab27.png"},476:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/aeqr_s2d_no_download-e43283cdd16f44f3ac368d08e0701dd6.png"}}]);