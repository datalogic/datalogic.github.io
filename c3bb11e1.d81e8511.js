(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"TableImg",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(277)),o={id:"overview",title:"Datalogic WiFi Guard",sidebar_label:"Overview"},c={unversionedId:"wifiguard/overview",id:"wifiguard/overview",isDocsHomePage:!1,title:"Datalogic WiFi Guard",description:"Overview",source:"@site/docs/wifiguard/overview.md",slug:"/wifiguard/overview",permalink:"/wifiguard/overview",version:"current",sidebar_label:"Overview",sidebar:"WiFiGuard",next:{title:"Ping Tab",permalink:"/wifiguard/ping"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Required Permissions",id:"required-permissions",children:[]},{value:"Graphing Behavior",id:"graphing-behavior",children:[]}],s=function(e){var t=e.img;return Object(i.b)("img",{src:t,style:{backgroundColor:"#002596",verticalAlign:"bottom"}})},b={rightToc:l,TableImg:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Datalogic WiFi Guard is an Android application designed to collect information on a Wi-Fi network.  It also contains tools to assist in improving network performance and diagnosing connection problems."),Object(i.b)("p",null,"Here is a list of the devices supported by Datalogic WiFi Guard and the required minimum firmware version:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Device"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Minimum firmware version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skorpio X5"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.08.044")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Memor 20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.07.01")))),Object(i.b)("p",null,"The application is divided into two sections, which are represented by tabs in the title bar at the top of the display.  The icons and the tabs they represent are listed here:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tab"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wifiguard/ping"}),Object(i.b)(s,{img:"/img/wifiguard/pingIcon.svg",mdxType:"TableImg"})," ",Object(i.b)("strong",{parentName:"a"},"Ping"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Performs a continuous ping to a network address.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/wifiguard/stat"}),Object(i.b)(s,{img:"/img/wifiguard/statIcon.svg",mdxType:"TableImg"})," ",Object(i.b)("strong",{parentName:"a"},"Statistics"))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Collects and displays live information on visible access points.")))),Object(i.b)("p",null,"The tab currently displayed is indicated by a small underline beneath the icon, and its name is displayed in the left half of the title bar.  The tab can be changed by tapping on one of these icons, or by making a swiping gesture left or right across the screen.  When swiping, the gesture will not be recognized if it is made over a graph, or when a tab is actively graphing new data."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"required-permissions"},"Required Permissions"),Object(i.b)("p",null,"The first time the application is launched, it will request permission from the user to access the location information of the device.  The user must allow this access in order to provide Wi-Fi information to the user."),Object(i.b)("h2",{id:"graphing-behavior"},"Graphing Behavior"),Object(i.b)("p",null,"The Ping and Statistics tabs contain graphs representing collected data.  When viewing these graphs, you may pan and zoom its contents using standard gestures (similar to the Pictures application).  Panning is limited to the range of the collected data.  Zooming is limited to an area as wide as the data range and as narrow as the precision of the data.  Zooming operates independently in the horizontal and vertical directions."),Object(i.b)("p",null,"As data is collected, the graph automatically adjusts the scale and panning position so that the most recent data remains visible.  If you pan/zoom during this process such that the most recent data is off screen, then the graph will not automatically adjust.  If you later move the most recent data into view, the graph will resume automatically adjusting itself to keep the latest data visible."),Object(i.b)("p",null,"The process of collecting graphing data will continue if you change screen orientation.  If, however, you change tabs or apps during this process, the graphing will stop.  The data will still be available for review if you go back to the tab with the graph."))}p.isMDXComponent=!0},277:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,g=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(g,c(c({ref:t},s),{},{components:a})):r.a.createElement(g,c({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);