"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[18058],{75194:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var n=i(85893),a=i(11151);const o={id:"integration",title:"Advanced Integration",sidebar_label:"Advanced Integration"},l=void 0,d={id:"quickboard/integration",title:"Advanced Integration",description:"Overview",source:"@site/docs/quickboard/integration.md",sourceDirName:"quickboard",slug:"/quickboard/integration",permalink:"/quickboard/integration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"integration",title:"Advanced Integration",sidebar_label:"Advanced Integration"},sidebar:"QuickBoard",previous:{title:"QuickBoard Settings",permalink:"/quickboard/config"}},s={},r=[{value:"Overview",id:"overview",level:2},{value:"Sample Keyboard Layout",id:"sample-keyboard-layout",level:2},{value:"Example Layout File Usage",id:"example-layout-file-usage",level:2},{value:"Standard Input Field",id:"standard-input-field",level:3},{value:"Display Scanner Layout",id:"display-scanner-layout",level:3},{value:"Display Custom Layout",id:"display-custom-layout",level:3},{value:"Display Custom Layout with Scanner",id:"display-custom-layout-with-scanner",level:3},{value:"Example Web Page Usage",id:"example-web-page-usage",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"QuickBoard can be used with existing applications without requiring any modifications. If desired, an application can be customized to take greater control over what keyboard layout is displayed for a given input field. This page describes how the XML layout file of an application can be modified to control how QuickBoard displays the keyboard layout for an input field."}),"\n",(0,n.jsx)(t.h2,{id:"sample-keyboard-layout",children:"Sample Keyboard Layout"}),"\n",(0,n.jsx)(t.p,{children:'In the following examples, it is assumed that the device has a custom keyboard layout file. This custom layout is the same as the built-in layout, but includes an additional layout named "wizard".'}),"\n",(0,n.jsx)(t.h2,{id:"example-layout-file-usage",children:"Example Layout File Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The following examples show the declaration of an ",(0,n.jsx)(t.code,{children:"EditText"})," control which would exist as part of a more complete application XML layout file."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The XML EditText tags do not include attributes such as alignment and hint which would normally exist in production code. Only the relevant fields for describing the given layout are shown."})}),"\n",(0,n.jsx)(t.h3,{id:"standard-input-field",children:"Standard Input Field"}),"\n",(0,n.jsx)(t.p,{children:'A typical input field might look similar to the following, which creates a field that expects numeric input. The layout associated with the "number" layout will be displayed. All standard input field types (and subtypes) are supported. See Android Developer documentation for a complete list.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<EditText android:id="@+id/inputField"\n    ...\n    android:inputType="number" />\n'})}),"\n",(0,n.jsx)(t.h3,{id:"display-scanner-layout",children:"Display Scanner Layout"}),"\n",(0,n.jsxs)(t.p,{children:['If you want to start with the "Scan" layout displayed, include the ',(0,n.jsx)(t.code,{children:"privateImeOptions"}),' attribute and set it to "scan".']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<EditText android:id="@+id/inputField"\n    ...\n    android:inputType="number"\n    android:privateImeOptions="scan" />\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:'Use of the "scan" custom layout will not prevent the user from toggling back to the normal layout (number in this example) for manual typing. It only determines the initial layout that is displayed.'})}),"\n",(0,n.jsx)(t.h3,{id:"display-custom-layout",children:"Display Custom Layout"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use a custom layout for an input field, set the ",(0,n.jsx)(t.code,{children:"privateImeOptions"}),' attribute to the name of the custom layout (in the layout file). This example displays the "wizard" layout.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<EditText android:id="@+id/inputField"\n    ...\n    android:privateImeOptions="wizard" />\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If the custom layout does not exist, the keyboard layout will be chosen based on the value of the ",(0,n.jsx)(t.code,{children:"inputType"})," attribute."]})}),"\n",(0,n.jsx)(t.h3,{id:"display-custom-layout-with-scanner",children:"Display Custom Layout with Scanner"}),"\n",(0,n.jsxs)(t.p,{children:['If you want to use a custom layout but start with the "Scan" layout, the value of the ',(0,n.jsx)(t.code,{children:"privateImeOptions"}),' attribute may be combined with a vertical bar separator. The order of the combined values is not significant. This example initially displays the "Scan" layout, but displays the "wizard" layout when the "Scan" toggle button in the toolbar is tapped.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<EditText android:id="@+id/inputField"\n    ...\n    android:privateImeOptions="scan|wizard" />\n'})}),"\n",(0,n.jsx)(t.h2,{id:"example-web-page-usage",children:"Example Web Page Usage"}),"\n",(0,n.jsx)(t.p,{children:"The following example shows how to include an edit field in a web page and use it to control which layout is displayed in the IME."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The HTML input field tags do not include style attributes such as size or maxLength which would normally exist in a production page. Only the relevant atributes for describing the given layout are shown."})}),"\n",(0,n.jsx)(t.p,{children:'A typical input field might look similar to the following, which creates a field that expects numeric input. The layout associated with the "number" layout will be displayed.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<form>\n  <label for="quantity">Item quantity:</label>\n  <input type="number" id="quantity" name="quantity">\n</form>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"<input>"})," element includes a ",(0,n.jsx)(t.code,{children:"type"})," attribute which specifies the type of input to expect from the user.  This attribute controls how the web browser will display the input field.  See the HTML input element documentation ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",children:"here"})," for a complete list of attributes, including input types."]}),"\n",(0,n.jsx)(t.p,{children:"For some input types, such as button or checkbox, a completely different UI element is displayed.  For others, the IME will appear, using a layout appropriate to the specified type.  The IME will respond to the following input types: number, password, text, url."})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>l});var n=i(67294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);