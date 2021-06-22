(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[774],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5846:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:5},s={unversionedId:"commands/Logging",id:"version-1.6.0/commands/Logging",isDocsHomePage:!1,title:"Logging",description:"Sometimes it is useful for debugging to see http traffic between monaco and the dynatrace api. This is possible by specifying a log file via the MONACOREQUESTLOG and MONACORESPONSELOG env variables.",source:"@site/versioned_docs/version-1.6.0/commands/Logging.md",sourceDirName:"commands",slug:"/commands/Logging",permalink:"/dynatrace-monitoring-as-code/commands/Logging",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.6.0/commands/Logging.md",version:"1.6.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.6.0/tutorialSidebar",previous:{title:"Downloading Configuration",permalink:"/dynatrace-monitoring-as-code/commands/downloading-configuration"},next:{title:"Deploying Configuration to Dynatrace",permalink:"/dynatrace-monitoring-as-code/configuration/deploy_configuration"}},l=[],u={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes it is useful for debugging to see http traffic between monaco and the dynatrace api. This is possible by specifying a log file via the ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_REQUEST_LOG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_RESPONSE_LOG")," env variables."),(0,i.kt)("p",null,"The specified file can either be relative, then it will be located relative form the current working dir, or absolute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": If the file already exists, it will get ",(0,i.kt)("strong",{parentName:"p"},"truncated!")),(0,i.kt)("p",null,"Simply set the environment variable and monaco will start writing all send requests to the file like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n$ MONACO_REQUEST_LOG=request.log MONACO_RESPONSE_LOG=response.log monaco -e environment project\n\n")),(0,i.kt)("p",null,"As of right now, the content of multipart post requests is not logged. This is a known limitation."))}p.isMDXComponent=!0}}]);