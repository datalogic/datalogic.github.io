"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[45408],{63957:(e,a,t)=>{t.r(a),t.d(a,{Img:()=>h,assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=t(85893),r=t(11151),n=t(74866),o=t(85162);const i={id:"hellodatalogicjavapos",title:"HelloDatalogicJavaPOS",sidebar_label:"HelloDatalogicJavaPOS"},s=void 0,c={id:"javapos/develop/hellodatalogicjavapos",title:"HelloDatalogicJavaPOS",description:"Hello World program for Datalogic JavaPOS",source:"@site/docs/javapos/develop/hellodatalogicjavapos.mdx",sourceDirName:"javapos/develop",slug:"/javapos/develop/hellodatalogicjavapos",permalink:"/javapos/develop/hellodatalogicjavapos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hellodatalogicjavapos",title:"HelloDatalogicJavaPOS",sidebar_label:"HelloDatalogicJavaPOS"},sidebar:"JavaPOS",previous:{title:"Label Reader Tutorial",permalink:"/javapos/develop/tutorial"},next:{title:"Barcode Reader Example",permalink:"/javapos/develop/barcodereaderexample"}},u={},d=[{value:"Hello World program for Datalogic JavaPOS",id:"hello-world-program-for-datalogic-javapos",level:2}],h=({src:e})=>{const a={img:"img",...(0,r.a)()};return(0,l.jsx)(a.img,{src:e,style:{maxWidth:"750px",maxHeight:"750px"}})};function p(e){const a={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{id:"hello-world-program-for-datalogic-javapos",children:"Hello World program for Datalogic JavaPOS"}),"\n",(0,l.jsxs)(a.p,{children:["HelloDatalogicJavaPOS initiates a scanner beep with Datalogic JavaPOS.\r\nThe latest release of JavaPOS can be downloaded from the\r\nDatalogic website ",(0,l.jsx)(a.a,{href:"https://www.datalogic.com/eng/Download/Form/21984",children:"here"}),"."]}),"\n",(0,l.jsxs)(a.p,{children:["The ",(0,l.jsx)(a.a,{href:"https://github.com/datalogic/HelloDatalogicJavaPOS",children:"HelloDatalogicJavaPOS repository"})," contains the HelloDatalogicJavaPOS.java source and shell scripts to run the HelloDatalogicJavaPOS.jar you build. The repository also has a NetBeans IDE (Integrated Development Environment) project to perform the build. Other IDEs can be used."]}),"\n",(0,l.jsx)(a.p,{children:"Steps to build and run HelloDatalogicJavaPOS.jar:"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Install Datalogic JavaPOS. This install includes the JavaPOSTest program."}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Make sure Datalogic JavaPOS runs with your scanner. With your scanner\r\nand JavaPOSTest do an ",(0,l.jsx)(a.strong,{children:"Open"}),", ",(0,l.jsx)(a.strong,{children:"Claim"}),", and ",(0,l.jsx)(a.strong,{children:"Execute Direct I/O Beep"}),". Not\r\nall interfaces support Direct I/O beep. In that case skip the beep."]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Clone or download the ",(0,l.jsx)(a.a,{href:"https://github.com/datalogic/HelloDatalogicJavaPOS",children:"HelloDatalogicJavaPOS repository"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"Build HelloDatalogicJavaPOS.jar. This was originally done with the\r\nfollowing. Variations near these should work."}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Apache NetBeans 11.0"}),"\n",(0,l.jsx)(a.li,{children:"Java jdk1.8.0_231"}),"\n",(0,l.jsxs)(a.li,{children:["The HelloDatalogicJavaPOS project in NetBeans is a Java with Ant,\r\nJava Application project. The build uses a library of the JavaPOS's\r\n.jar files. These .jar files are in the JavaPOS install's root\r\ndirectory where it has its JavaPOS.jar and its SupportJars\r\ndirectory. Create this library via ",(0,l.jsx)(a.strong,{children:"NetBeans -> Tools -> Libraries"}),". Add\r\nthe library to the HelloDatalogicJavaPOS NetBeans project via its\r\n",(0,l.jsx)(a.strong,{children:"Properties -> Libraries -> Classpath + -> Add Library..."})]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"Another variation here builds HelloDatalogicJavaPOS.jar without\r\nrequiring the Apache NetBeans 11.0 Integrated Development Environment\r\n(IDE). It instead builds with the included script\r\nBuildHelloDatalogicJavaPOS.cmd or BuildHelloDatalogicJavaPOS.sh. These\r\nscripts explicitly use the Java JDK's javac and jar programs and\r\nrequire no intermediary IDE. Related \"inside\" scripts show\r\nwhat is inside HelloDatalogicJavaPOS.jar and Datalogic's JavaPOS."}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["Update the jpos.xml of your installed JavaPOS to include a\r\n",(0,l.jsx)(a.code,{children:'<JposEntry logicalName="DatalogicJavaPOSDevice">'})," entry for your scanner and\r\ninterface. This entry is a copy of the entry you used with\r\nJavaPOSTest above. The only difference is the logicalName is changed\r\nto ",(0,l.jsx)(a.code,{children:"DatalogicJavaPOSDevice"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["With HelloDatalogicJavaPOS.jar make your scanner beep. Use the\r\nappropriate HelloDatalogicJavaPOS script:\r\n",(0,l.jsxs)(n.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,l.jsxs)(o.Z,{value:"win",children:[".cmd ",(0,l.jsx)("br",{}),(0,l.jsx)(h,{src:"/img/javapos/develop/HelloDatalogicJavaPOS/Command_Prompt_showing_run_of_HelloDatalogicJavaPOS.cmd.png"})]}),(0,l.jsxs)(o.Z,{value:"linux",children:[".sh ",(0,l.jsx)("br",{}),(0,l.jsx)(h,{src:"/img/javapos/develop/HelloDatalogicJavaPOS/Terminal_showing_run_of_HelloDatalogicJavaPOS.sh.png"})]})]})]}),"\n"]}),"\n"]})]})}function v(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>o});t(67294);var l=t(36905);const r={tabItem:"tabItem_Ymn6"};var n=t(85893);function o(e){let{children:a,hidden:t,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>D});var l=t(67294),r=t(36905),n=t(12466),o=t(16550),i=t(20469),s=t(91980),c=t(67392),u=t(50012);function d(e){var a,t;return null!=(a=null==(t=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}function h(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=null!=a?a:function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:l,default:r}}=e;return{value:a,label:t,attributes:l,default:r}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.k6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,s._X)(n),(0,l.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(r.location.search);a.set(n,e),r.replace({...r.location,search:a.toString()})}),[n,r])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,n=h(e),[o,s]=(0,l.useState)((()=>function(e){var a;let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(a=l.find((e=>e.default)))?a:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[c,d]=v({queryString:t,groupId:r}),[g,m]=function(e){let{groupId:a}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(a),[r,n]=(0,u.Nk)(t);return[r,(0,l.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),b=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),m(e)}),[d,m,n]),tabValues:n}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function j(e){let{className:a,block:t,selectedValue:l,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.o5)(),u=e=>{const a=e.currentTarget,t=s.indexOf(a),r=i[t].value;r!==l&&(c(a),o(r))},d=e=>{var a;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var l;const a=s.indexOf(e.currentTarget)+1;t=null!=(l=s[a])?l:s[0];break}case"ArrowLeft":{var r;const a=s.indexOf(e.currentTarget)-1;t=null!=(r=s[a])?r:s[s.length-1];break}}null==(a=t)||a.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>s.push(e),onKeyDown:d,onClick:u,...n,className:(0,r.Z)("tabs__item",b.tabItem,null==n?void 0:n.className,{"tabs__item--active":l===a}),children:null!=t?t:a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:r}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function S(e){const a=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...e,...a}),(0,f.jsx)(x,{...e,...a})]})}function D(e){const a=(0,m.Z)();return(0,f.jsx)(S,{...e,children:d(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var l=t(67294);const r={},n=l.createContext(r);function o(e){const a=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(n.Provider,{value:a},e.children)}}}]);