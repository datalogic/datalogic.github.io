(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(237)),c={title:"Scan2Deploy Android 1.29",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},i={permalink:"/releases/2021/02/12/scan2deploy-android-v1.29",source:"@site/blog/2021-02-12-scan2deploy-android-v1.29.md",description:"Compatibility",date:"2021-02-12T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.29",readingTime:.445,truncated:!1,prevItem:{title:"Scan2Deploy Android 1.30",permalink:"/releases/2021/03/01/scan2deploy-android-v1.30"},nextItem:{title:"DXU Android v1.33",permalink:"/releases/2021/02/04/dxu-android-v1.33"}},l=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],d={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This version of Scan2Deploy supports all schema versions up to and including ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/scan2deploy-android-schema/blob/v1-10-0/schema.json"}),"schema v1.10"),". See schema source changes ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/scan2deploy-android-schema/commit/aaf41f72925b502dbfc1fca2df915f037e9687e0"}),"here"),".")),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolves an issue where Scan2Deploy would often fail to get an IP address before trying to reach the server (122771)"),Object(o.b)("li",{parentName:"ul"},"Fix an issue where Scan2Deploy would crash if the device's locale was changed in a Scan2Deploy profile (134817)"),Object(o.b)("li",{parentName:"ul"},"Delay performing schema validation until after self-updates are performed (133229)"),Object(o.b)("li",{parentName:"ul"},'Fix typo in feedback intent action. Was "com.datalogic.scan2depoly.feedback". Should be "com.datalogic.scan2deploy.FEEDBACK" (133395)')))}p.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,b=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return r?a.a.createElement(b,i(i({ref:t},d),{},{components:r})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);