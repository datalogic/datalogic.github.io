"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[85447],{69195:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var i=s(85893),l=s(11151);const t={id:"system-settings",title:"System Settings"},d=void 0,r={id:"oemconfig/system-settings",title:"System Settings",description:"Date and Time",source:"@site/docs/oemconfig/system-settings.md",sourceDirName:"oemconfig",slug:"/oemconfig/system-settings",permalink:"/oemconfig/system-settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"system-settings",title:"System Settings"},sidebar:"OEMConfig",previous:{title:"Network Settings",permalink:"/oemconfig/network-settings"},next:{title:"Launch Activities",permalink:"/oemconfig/launch-intents"}},c={},o=[{value:"Date and Time",id:"date-and-time",level:2},{value:"NTP",id:"ntp",level:3},{value:"Display",id:"display",level:2},{value:"Second Display",id:"second-display",level:3},{value:"Language",id:"language",level:2},{value:"Location",id:"location",level:2},{value:"Sound",id:"sound",level:2},{value:"Volume",id:"volume",level:3},{value:"Sound/Feedback types",id:"soundfeedback-types",level:3},{value:"Touch Mode",id:"touch-mode",level:2},{value:"USB",id:"usb",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"date-and-time",children:"Date and Time"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable auto time"}),": Enables both time and date to be automatically fetched from the network. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable auto time zone"}),": Enables the time zone to be automatically fetched from the cellular network. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Only applies to cellular enabled devices."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Select time zone"}),": The timezone to use for the device. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"No change"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(n.p,{children:["If device is connected to a cellular network ",(0,i.jsx)(n.em,{children:"and"})," auto time zone is enabled, this setting will be overwritten."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable 24-hour format"}),": Enables the 24-hour time format for the clock. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ntp",children:"NTP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NTP server"}),": The server address to use for NTP time syncing. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"an empty string"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Secondary NTP server"}),": The secondary NTP server address that will be used if the primary ",(0,i.jsx)(n.code,{children:"NTP server"})," is not available. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"an empty string"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsx)(n.p,{children:"A manual reboot will be required on the device before time will be synced."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Leave blank for no change to the server address."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NTP server connection timeout"}),": Sets the NTP server connection timeout. Valid values are displayed in a single select list. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"10 seconds"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"display",children:"Display"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Screen brightness"}),": Sets the screen backlight brightness. A valid value is an integer in the inclusive range of 0 to 100. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"70"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Will be automatically scaled to nearest discrete, predefined Android value."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Adaptive brightness"}),": Enables the automatic optimization of brightness level for available light. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Auto-rotate"}),": Enables the automatic rotation mode based on device orientation. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Font size"}),": The size of the text that appears on screen. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Default"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Disable touch screen"}),": Disables input from the touchscreen when set to true. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsx)(n.p,{children:"This setting will restrict the user to only using physical buttons when interacting with the device."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"second-display",children:"Second Display"}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsx)(n.p,{children:"Settings only apply to Memor 20 devices."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Second display enable"}),": Enables the second display feature on a Memor 20. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Add packages"}),": Comma delimited list of package names to enable second display notifications for. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"an empty string"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Example package list",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"com.google.android.calendar,com.google.android.gm"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Remove packages"}),": Comma delimited list of package names to disable second display notifications for. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"an empty string"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Brightness"}),": Sets the brightness (%) of the second display. A valid value is an integer in the inclusive range of 0 to 100. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"100"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Will be automatically scaled to nearest discrete, predefined Android value."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Sleep"}),": Sets the sleep timeout for the second display. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Never"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Rotation enable"}),": Enables the text content to be rotated by 180 degrees. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Rotation speed"}),": Sets the rotation speed of the second display. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Slow"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable new app notifications"}),": Enables notifications on second display for all new apps. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Select locale"}),": The locale to apply to the device system. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"No change"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"location",children:"Location"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Location mode"}),": Used to enable or disable location services (GPS). The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"GPS on"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sound",children:"Sound"}),"\n",(0,i.jsx)(n.h3,{id:"volume",children:"Volume"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Sound source"}),": The sound category to adjust. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"None"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Volume level"}),": Sets the volume level for the selected sound source. A valid value is an integer in the inclusive range of 0 to 100. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"50"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Will be automatically scaled to nearest discrete, predefined Android value."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"soundfeedback-types",children:"Sound/Feedback types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable dial pad tones"}),": Enables the dial pad tones when using the phone application. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable charging sounds"}),": Enables sounds to be played during charging events. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable touch sounds"}),": Enables sounds effects such as key clicks, lid open, etc. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable touch vibration (haptic)"}),": Enables haptic feedback when interacting with the device. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"touch-mode",children:"Touch Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Screen sensitivity"}),": Selects the touch screen sensitivity. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Fingers and stylus"})})," for the Memor 20 and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Fingers mode"})})," for the Skorpio X5."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usb",children:"USB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Default USB function"}),": The default USB Transfer Protocol setup every time a USB is connected to the device. Valid values are displayed in a single select list. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"None"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Current USB function"}),": The USB Transfer Protocol of the current USB transfer. This value may be different from the ",(0,i.jsx)(n.code,{children:"Default USB function"}),". Valid values are displayed in a single select list. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"None"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable USB debugging"}),": Enables the Android Debug Bridge (ADB) over USB. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var i=s(67294);const l={},t=i.createContext(l);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);