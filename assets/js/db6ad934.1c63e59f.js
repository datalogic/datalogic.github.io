"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[89701],{30179:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(85893),a=n(11151);const l={id:"api",title:"React Native API",sidebar_label:"API"},i=void 0,d={id:"reactnative/api",title:"React Native API",description:"API Reference",source:"@site/docs/reactnative/api.md",sourceDirName:"reactnative",slug:"/reactnative/api",permalink:"/reactnative/api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"api",title:"React Native API",sidebar_label:"API"},sidebar:"AndroidStudioSDK",previous:{title:"Overview",permalink:"/reactnative/overview"},next:{title:"Sample Apps",permalink:"/reactnative/samples"}},t={},o=[{value:"API Reference",id:"api-reference",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"BarcodeManager",id:"barcodemanager",level:3},{value:".addReadListener(<code>promise</code>): number",id:"addreadlistenerpromise-number",level:4},{value:"Response",id:"response",level:5},{value:"Example",id:"example",level:5},{value:".release(<code>promise</code>): number",id:"releasepromise-number",level:4},{value:"Response",id:"response-1",level:5},{value:"Example",id:"example-1",level:5},{value:".pressTrigger(<code>promise</code>): number",id:"presstriggerpromise-number",level:4},{value:"Response",id:"response-2",level:5},{value:"Example",id:"example-2",level:5},{value:".releaseTrigger(<code>promise</code>): number",id:"releasetriggerpromise-number",level:4},{value:"Response",id:"response-3",level:5},{value:"Example",id:"example-3",level:5},{value:"AutoScanTrigger",id:"autoscantrigger",level:3},{value:".isAvailable(<code>promise</code>): boolean",id:"isavailablepromise-boolean",level:4},{value:"Response",id:"response-4",level:5},{value:"Example",id:"example-4",level:5},{value:".getSupportedRanges(<code>promise</code>): Object",id:"getsupportedrangespromise-object",level:4},{value:"Response",id:"response-5",level:5},{value:"Example",id:"example-5",level:5},{value:".getCurrentRange(<code>promise</code>): Object",id:"getcurrentrangepromise-object",level:4},{value:"Response",id:"response-6",level:5},{value:"Example",id:"example-6",level:5},{value:".setCurrentRange(<code>rangeId</code>, <code>promise</code>): boolean",id:"setcurrentrangerangeid-promise-boolean",level:4},{value:"Response",id:"response-7",level:5},{value:"Example",id:"example-7",level:5},{value:"KeyboardManager",id:"keyboardmanager",level:3},{value:".getAllAvailableTriggers (<code>promise</code>): Object",id:"getallavailabletriggers-promise-object",level:4},{value:"Response",id:"response-8",level:5},{value:"Example",id:"example-8",level:5},{value:".setAllAvailableTriggers(<code>enable</code>, <code>promise</code>): boolean",id:"setallavailabletriggersenable-promise-boolean",level:4},{value:"Response",id:"response-9",level:5},{value:"Example",id:"example-9",level:5},{value:".setTriggers(<code>config</code>, <code>promise</code>): boolean",id:"settriggersconfig-promise-boolean",level:4},{value:"Response",id:"response-10",level:5},{value:"Example",id:"example-10",level:5},{value:"LedManager",id:"ledmanager",level:3},{value:".setLed(<code>object</code>, <code>promise</code>): boolean",id:"setledobject-promise-boolean",level:4},{value:"Response",id:"response-11",level:5},{value:"Example",id:"example-11",level:5},{value:"ScannerProperties",id:"scannerproperties",level:3},{value:".edit(<code>promise</code>): Object",id:"editpromise-object",level:4},{value:"Response",id:"response-12",level:5},{value:"Example",id:"example-12",level:5},{value:".store(<code>properties</code>, <code>promise</code>): boolean",id:"storeproperties-promise-boolean",level:4},{value:"Response",id:"response-13",level:5},{value:"Examples",id:"examples",level:5}];function c(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(r.p,{children:["All functions are asynchronous. All functions will, at a minimum, include a ",(0,s.jsx)(r.code,{children:"promise"})," parameter, which will return the success or failure result of the Java/Kotlin function."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"promise"})," will be returned in most cases, and will return the same value as the standard\nJava/Kotlin function would."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Namespace"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#barcodemanager",children:"BarcodeManager"})}),(0,s.jsx)(r.td,{children:"receive barcode data"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#autoscantrigger",children:"AutoScanTrigger"})}),(0,s.jsx)(r.td,{children:"work the autoscan features"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#keyboardmanager",children:"KeyboardManager"})}),(0,s.jsx)(r.td,{children:"set usable device triggers"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#ledmanager",children:"LedManager"})}),(0,s.jsx)(r.td,{children:"control device LEDs"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#scannerproperties",children:"ScannerProperties"})}),(0,s.jsx)(r.td,{children:"define available symbologies"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"barcodemanager",children:"BarcodeManager"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#addreadlistenerpromise-number",children:"addReadListener"})}),(0,s.jsx)(r.td,{children:"Register to receive barcode data on each scan."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#releasepromise-number",children:"release"})}),(0,s.jsx)(r.td,{children:"Call to remove all listeners from BarcodeManager."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#presstriggerpromise-number",children:"pressTrigger"})}),(0,s.jsx)(r.td,{children:"Simulate a trigger button press."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#releasetriggerpromise-number",children:"releaseTrigger"})}),(0,s.jsx)(r.td,{children:"Simulate a trigger button release."})]})]})]}),"\n",(0,s.jsxs)(r.h4,{id:"addreadlistenerpromise-number",children:[".addReadListener(",(0,s.jsx)(r.code,{children:"promise"}),"): number"]}),"\n",(0,s.jsxs)(r.p,{children:["Register to receive barcode data on each scan. The ",(0,s.jsx)(r.code,{children:"callback"})," you send to the NativeEventEmitter (see example below) will be called ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"every time"})})," a barcode is successfully scanned. Therefore, you will typically only need to call ",(0,s.jsx)(r.code,{children:"barcodeManager.addReadListener()"})," ",(0,s.jsx)(r.em,{children:"once"})," in your application."]}),"\n",(0,s.jsx)(r.h5,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"barcodeData"})," : ",(0,s.jsx)(r.code,{children:"string"})," - the barcode data scanned."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"barcodeType"})," : ",(0,s.jsx)(r.code,{children:"string"})," - will be one of the ",(0,s.jsx)(r.code,{children:"BarcodeID"})," values defined in the ",(0,s.jsx)(r.a,{href:"https://github.com/datalogic/datalogic-android-sdk/blob/master/sdk/src/main/java/com/datalogic/decode/BarcodeID.java",children:"BarcodeID class"})," in the ",(0,s.jsx)(r.a,{href:"https://github.com/datalogic/datalogic-android-sdk",children:"Datalogic Android SDK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n   "barcodeData": "EUG2997",\n   "barcodeType": "CODE128"\n}\n'})}),"\n",(0,s.jsx)(r.h5,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { NativeEventEmitter, Alert } from 'react-native';\nimport { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nconst eventEmitter = new NativeEventEmitter(BarcodeManager);\neventEmitter.addListener('successCallback', map => {\n  Alert.alert('Barcode Result', map.barcodeData + '\\n' + map.barcodeType);\n});\nBarcodeManager.addReadListener();\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"releasepromise-number",children:[".release(",(0,s.jsx)(r.code,{children:"promise"}),"): number"]}),"\n",(0,s.jsx)(r.p,{children:"Call to remove all registered listeners to the BarcodeManager."}),"\n",(0,s.jsx)(r.h5,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"number"})," with  SUCCESS (0) in case of success, otherwise a possible error code, matching one of the DecodeException error constants."]}),"\n",(0,s.jsx)(r.h5,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { NativeEventEmitter } from 'react-native';\nimport { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nReact.useEffect(() => {\n    let nativeListenerReturn = null;\n    try {\n      const eventEmitter = new NativeEventEmitter(BarcodeManager);\n      nativeListenerReturn = eventEmitter.addListener(...);\n      BarcodeManager.addReadListener();\n    } catch (e) {\n      console.error(e);\n    }\n\n    return () => {\n      nativeListenerReturn.remove();\n      BarcodeManager.release();\n    };\n  }, []);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"presstriggerpromise-number",children:[".pressTrigger(",(0,s.jsx)(r.code,{children:"promise"}),"): number"]}),"\n",(0,s.jsx)(r.p,{children:"Call this method to simulate a trigger button press. The method does not always immediately start a capture; instead it behaves like pressing a physical scan button."}),"\n",(0,s.jsx)(r.h5,{id:"response-2",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"number"})," with  SUCCESS (0) in case of success, otherwise a possible error code, matching one of the DecodeException error constants."]}),"\n",(0,s.jsx)(r.h5,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nvar triggerReturn = await BarcodeManager.pressTrigger();\nif (triggerReturn === 0) {\n  console.log('Press Trigger Success');\n} else {\n  console.log('Press Trigger Failure: ' + triggerReturn);\n}\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"releasetriggerpromise-number",children:[".releaseTrigger(",(0,s.jsx)(r.code,{children:"promise"}),"): number"]}),"\n",(0,s.jsx)(r.p,{children:"Call this method to simulate a release of a trigger button. The method does not always immediately stop a capture; instead it behaves like releasing a physical scan button."}),"\n",(0,s.jsx)(r.h5,{id:"response-3",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"number"})," with  SUCCESS (0) in case of success, otherwise a possible error code, matching one of the DecodeException error constants."]}),"\n",(0,s.jsx)(r.h5,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nvar triggerReturn = await BarcodeManager.releaseTrigger();\nif (triggerReturn === 0) {\n  console.log('Release Trigger Success');\n} else {\n  console.log('Release Trigger Failure: ' + triggerReturn);\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"autoscantrigger",children:"AutoScanTrigger"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#isavailablepromise-boolean",children:"isAvailable"})}),(0,s.jsx)(r.td,{children:"Determine if the auto scan feature is available on this device."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#getsupportedrangespromise-object",children:"getSupportedRanges"})}),(0,s.jsx)(r.td,{children:"Get the supported ranges of the autoscan feature."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#getcurrentrangepromise-object",children:"getCurrentRange"})}),(0,s.jsx)(r.td,{children:"Get the current range of the autoscan feature."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#setcurrentrangerangeid-promise-boolean",children:"setCurrentRange"})}),(0,s.jsx)(r.td,{children:"Set the current range of the autoscan feature."})]})]})]}),"\n",(0,s.jsxs)(r.h4,{id:"isavailablepromise-boolean",children:[".isAvailable(",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsx)(r.p,{children:"Determine if the auto scan feature is available on this device."}),"\n",(0,s.jsx)(r.h5,{id:"response-4",children:"Response"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"boolean"})," - indicates if autoscan is supported or not on this device."]}),"\n"]}),"\n",(0,s.jsx)(r.h5,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar isAvailableReturn = await AutoScanTrigger.isAvailable();\nconsole.log(isAvailableReturn);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"getsupportedrangespromise-object",children:[".getSupportedRanges(",(0,s.jsx)(r.code,{children:"promise"}),"): Object"]}),"\n",(0,s.jsx)(r.p,{children:"Get the supported ranges of the autoscan feature."}),"\n",(0,s.jsx)(r.h5,{id:"response-5",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"supportedRanges"})," : ",(0,s.jsx)(r.code,{children:"Object"})," - provides array of ranges device supports. The array will be null if device does not support autoscan. Each object in the array contains:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"id"})," : ",(0,s.jsx)(r.code,{children:"number"})," - unique value for a step in the supported ranges"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"name"})," : ",(0,s.jsx)(r.code,{children:"string"})," - descriptive text related to the ",(0,s.jsx)(r.code,{children:"id"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"If AutoScan is not supported by device:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"null\n"})}),"\n",(0,s.jsx)(r.p,{children:"If AutoScan is supported:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "supportedRanges":[\n  {\n    "id":0,\n    "name":"Near"\n  },\n  {\n    "id":1,\n    "name":"Intermediate"\n  },\n  {\n    "id":2,\n    "name":"Far"\n  }\n  ]\n}\n'})}),"\n",(0,s.jsx)(r.h5,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar supportedRangesReturn = await AutoScanTrigger.getSupportedRanges();\nconsole.log(supportedRangesReturn);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"getcurrentrangepromise-object",children:[".getCurrentRange(",(0,s.jsx)(r.code,{children:"promise"}),"): Object"]}),"\n",(0,s.jsx)(r.p,{children:"Get the current range of the autoscan feature."}),"\n",(0,s.jsx)(r.h5,{id:"response-6",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"currentRange"})," : ",(0,s.jsx)(r.code,{children:"object"})," - contains 2 fields:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"id"})," : ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"name"})," : ",(0,s.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"If AutoScan is not supported by device:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"null\n"})}),"\n",(0,s.jsx)(r.p,{children:"If AutoScan is supported:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "currentRange":\n  {\n      "id":1,\n      "name":"Intermediate"\n  }\n}\n'})}),"\n",(0,s.jsx)(r.h5,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar currentRangeReturn = await AutoScanTrigger.getCurrentRange();\nconsole.log(currentRangeReturn);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"setcurrentrangerangeid-promise-boolean",children:[".setCurrentRange(",(0,s.jsx)(r.code,{children:"rangeId"}),", ",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsx)(r.p,{children:"Set the current range of the autoscan feature."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"rangeId"})," : ",(0,s.jsx)(r.code,{children:"number"})," - should match one of the ",(0,s.jsx)(r.code,{children:"id"})," values retrieved by the getSupportedRanges function."]}),"\n",(0,s.jsx)(r.h5,{id:"response-7",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Boolean"})," with true or false depending on success."]}),"\n",(0,s.jsx)(r.h5,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:'Set current range to "Intermediate"'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var setRangeReturn = await AutoScanTrigger.setCurrentRange(0);\nconsole.log(setRangeReturn);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"keyboardmanager",children:"KeyboardManager"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#getallavailabletriggers-promise-object",children:"getAllAvailableTriggers"})}),(0,s.jsx)(r.td,{children:"Get all the available triggers of the device."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#setallavailabletriggersenable-promise-boolean",children:"setAllAvailableTriggers"})}),(0,s.jsx)(r.td,{children:"Set all the devices triggers on or off."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#settriggersconfig-promise-boolean",children:"setTriggers"})}),(0,s.jsx)(r.td,{children:"Set one or more triggers on or off."})]})]})]}),"\n",(0,s.jsxs)(r.h4,{id:"getallavailabletriggers-promise-object",children:[".getAllAvailableTriggers (",(0,s.jsx)(r.code,{children:"promise"}),"): Object"]}),"\n",(0,s.jsx)(r.p,{children:"Get all the available triggers of the device."}),"\n",(0,s.jsx)(r.h5,{id:"response-8",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"triggers"})," : ",(0,s.jsx)(r.code,{children:"Object"})," - each Object in the triggers Object contains:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"enabled"})," : ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"id"})," : ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"name"})," : ",(0,s.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Typical response:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "triggers":[\n    {\n        "enabled":true,\n        "id":0,\n        "name":"Left Trigger"\n    },\n    {\n        "enabled":false,\n        "id":1,\n        "name":"Right Trigger"\n    },\n    {\n        "enabled":false,\n        "id":2,\n        "name":"Pistol Trigger"\n    }\n    ]\n}\n'})}),"\n",(0,s.jsx)(r.h5,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var getTriggersReturn = await KeyboardManager.getAllAvailableTriggers();\nconsole.log(getTriggersReturn);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"setallavailabletriggersenable-promise-boolean",children:[".setAllAvailableTriggers(",(0,s.jsx)(r.code,{children:"enable"}),", ",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsx)(r.p,{children:"Set all the devices triggers on or off."}),"\n",(0,s.jsx)(r.h5,{id:"response-9",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"boolean"})," with true/false based on success"]}),"\n",(0,s.jsx)(r.h5,{id:"example-9",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"Turn all triggers on."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var setTriggersReturn = await KeyboardManager.setAllAvailableTriggers(\n  true\n);\nconsole.log(setTriggersReturn);\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"settriggersconfig-promise-boolean",children:[".setTriggers(",(0,s.jsx)(r.code,{children:"config"}),", ",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsxs)(r.p,{children:["Set one or more triggers on or off. You will likely call ",(0,s.jsx)(r.code,{children:"getAllAvailableTriggers"}),", edit the ",(0,s.jsx)(r.code,{children:"enabled"})," flags of each returned object as desired, and then resubmit by calling ",(0,s.jsx)(r.code,{children:"setTriggers"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"config"})," : ",(0,s.jsx)(r.code,{children:"Object"})," - each object in the array represents an individual trigger. Each object in the array contains:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"id"})," : ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"enabled"})," : ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(r.h5,{id:"response-10",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"boolean"})," with true/false based on success."]}),"\n",(0,s.jsx)(r.h5,{id:"example-10",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var triggersArray = [\n  { enabled: false, id: 0, name: 'Left Trigger' },\n  { enabled: true, id: 1, name: 'Right Trigger' },\n  { enabled: false, id: 2, name: 'Pistol Trigger' },\n];\nvar setTriggersReturn = await KeyboardManager.setTriggers(triggersArray);\nconsole.log(setTriggersReturn);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"ledmanager",children:"LedManager"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#setledobject-promise-boolean",children:"setLed"})}),(0,s.jsx)(r.td,{children:"Set various device LEDs."})]})})]}),"\n",(0,s.jsxs)(r.h4,{id:"setledobject-promise-boolean",children:[".setLed(",(0,s.jsx)(r.code,{children:"object"}),", ",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsxs)(r.p,{children:["Set the various device LEDs. A list of enum values for LEDs can be found ",(0,s.jsx)(r.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/Led.html",children:"here"}),"."]}),"\n",(0,s.jsx)(r.h5,{id:"response-11",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"boolean"})," with true/false based on success."]}),"\n",(0,s.jsx)(r.h5,{id:"example-11",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var ledMap = { led: 'LED_GREEN_SPOT', enable: false };\nvar setLedReturn = await LedManager.setLed(ledMap);\nconsole.log(setLedReturn);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"scannerproperties",children:"ScannerProperties"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#editpromise-object",children:"edit"})}),(0,s.jsx)(r.td,{children:"Get a list of supported properties along with the state of each (enabled or disabled)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#storeproperties-promise-boolean",children:"store"})}),(0,s.jsx)(r.td,{children:"Apply changes to one or more properties with the values supplied."})]})]})]}),"\n",(0,s.jsxs)(r.h4,{id:"editpromise-object",children:[".edit(",(0,s.jsx)(r.code,{children:"promise"}),"): Object"]}),"\n",(0,s.jsx)(r.p,{children:"Get a list of supported scanner properties along with the state of each (enabled or disabled)."}),"\n",(0,s.jsx)(r.h5,{id:"response-12",children:"Response"}),"\n",(0,s.jsx)(r.p,{children:"A single Object containing Objects for each of the available symbologies. Each symbology contains, at a minimum, these fields:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"enable"})," : ",(0,s.jsx)(r.code,{children:"boolean"})," - if scanner is set to detect this barcode type or not"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"supported"})," : ",(0,s.jsx)(r.code,{children:"boolean"})," - if the scanner supports the given barcode type or not"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "keyboardWedge":{"enable":true,"supported":true},\n  "aztec":{"enable":true,"supported":true},\n  "codabar":{"enable":true,"supported":true},\n  "code128":{"enable":true,"supported":true},\n  "code39":{"enable":true,"supported":true},\n  "code93":{"enable":false,"supported":true},\n  "composite":{"enable":false,"supported":true},\n  "datamatrix":{"enable":true,"supported":true},\n  "digimarc":{"enable":false,"supported":false},\n  "discrete25":{"enable":false,"supported":true},\n  "ean13":{"enable":true,"supported":true},\n  "ean8":{"enable":true,"supported":true},\n  "gs1DataBar_14":{"enable":true,"supported":true},\n  "gs1DataBar_Expanded":{"enable":true,"supported":true},\n  "gs1DataBar_Limited":{"enable":true,"supported":true},\n  "interleaved25":{"enable":true,"supported":true},\n  "matrix25":{"enable":false,"supported":true},\n  "maxicode":{"enable":false,"supported":true},\n  "microQr":{"enable":false,"supported":true},\n  "micropdf417":{"enable":false,"supported":true},\n  "msi":{"enable":false,"supported":true},\n  "p4State":{"enable":false,"supported":true},\n  "pAus":{"enable":false,"supported":true},\n  "pJap":{"enable":false,"supported":true},\n  "pKix":{"enable":false,"supported":true},\n  "pPlanet":{"enable":false,"supported":true},\n  "pPostnet":{"enable":false,"supported":true},\n  "pRM":{"enable":false,"supported":true},\n  "pdf417":{"enable":true,"supported":true},\n  "qrCode":{"enable":true,"supported":true},\n  "upcA":{"enable":true,"supported":true},\n  "upcE":{"enable":true,"supported":true}\n}\n'})}),"\n",(0,s.jsx)(r.h5,{id:"example-12",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var editReturn = await ScannerProperties.edit();\nconsole.log(JSON.stringify(editReturn, undefined, 1));\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"storeproperties-promise-boolean",children:[".store(",(0,s.jsx)(r.code,{children:"properties"}),", ",(0,s.jsx)(r.code,{children:"promise"}),"): boolean"]}),"\n",(0,s.jsxs)(r.p,{children:["Apply changes to one or more symbologies with the values supplied in ",(0,s.jsx)(r.code,{children:"properties"}),"."]}),"\n",(0,s.jsx)(r.h5,{id:"response-13",children:"Response"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"boolean"})," with true/false based on success."]}),"\n",(0,s.jsx)(r.h5,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"Disable keyboardWedge symbology, enable aztec symbology."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"var storeMap = {\n  keyboardWedge: { enable: false, supported: true },\n  aztec: { enable: true },\n};\nvar storeReturn = await ScannerProperties.store(storeMap);\nconsole.log(JSON.stringify(storeReturn, undefined, 1));\n"})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var s=n(67294);const a={},l=s.createContext(a);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);