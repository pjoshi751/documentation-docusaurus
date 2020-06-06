(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return m}));var n=i(2),a=i(9),o=(i(0),i(166)),r={},s={id:"Automated-Biometric-Identification-System-ABIS",title:"Automated-Biometric-Identification-System-ABIS",description:"Overview",source:"@site/docs/Automated-Biometric-Identification-System-ABIS.md",permalink:"/documentation/docs/Automated-Biometric-Identification-System-ABIS",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Automated-Biometric-Identification-System-ABIS.md",sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/documentation/docs/Architecture"}},c=[{value:"Overview",id:"overview",children:[]},{value:"ABIS middleware",id:"abis-middleware",children:[]},{value:"MOSIP-ABIS interface",id:"mosip-abis-interface",children:[]},{value:"ABIS deployment",id:"abis-deployment",children:[]}],d={rightToc:c};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Providing unique identity for a resident is one of key features of any identity platform. To achieve this, MOSIP interfaces with an ",Object(o.b)("strong",{parentName:"p"},"Automated Biometric Identification System (ABIS)")," to perform de-duplication of a resident's biometric data. "),Object(o.b)("p",null,"MOSIP is designed to integrate with multiple ABISs to leverage expertise of different ABIS providers. A country may use one ABIS for fingerprint and another for Iris or use multiple ABISs for the same biometric data and evaluate the best ABIS based on de-duplication quality. "),Object(o.b)("p",null,"The ABIS system never comes to know about resident's identity. Any Personally Idenfiable Information (PII) such as demographic details or RID (Request ID for Registration) is not shared with the ABIS system. Internally, MOSIP maintains a mapping between the ABIS specific referenceID and RID of the resident."),Object(o.b)("p",null,'{% hint style="info" %}\n{% hint style="info" %} ABIS is used for 1:N deduplication. For 1:1 authentication ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Biometric-SDK.md"}),"Biometric SDK")," is used. MOSIP does not recommend using an ABIS for 1:1 authentication.{% endhint %}\n{% endhint %}"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"_images/biometrics/abis_middleware.png",alt:null}))),Object(o.b)("h2",{id:"abis-middleware"},"ABIS middleware"),Object(o.b)("p",null,"MOSIP's ABIS middleware has the following components"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MOSIP ABIS request handler "),Object(o.b)("li",{parentName:"ul"},"Request router (based on routing policy, an ABIS request is routed to the correct ABIS system)"),Object(o.b)("li",{parentName:"ul"},"ABIS response handler")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"_images/biometrics/abis_middleware-process_flow.png",alt:"MOSIP ABIS Middleware Process Flow"}))),Object(o.b)("h2",{id:"mosip-abis-interface"},"MOSIP-ABIS interface"),Object(o.b)("p",null,"MOSIP interacts with ABIS only via message queues. JSON format is used for all control messages in the queue. MOSIP ABIS middleware sends requests to inbound queue address and receives responses from outbound queue address.\nFor details refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"ABIS-APIs.md"}),"ABIS API Specifications"),"."),Object(o.b)("p",null,"ABIS must support the following types of biometric images:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Individual fingerprint images (segmented)"),Object(o.b)("li",{parentName:"ul"},"Iris images (left, right)"),Object(o.b)("li",{parentName:"ul"},"Face image")),Object(o.b)("p",null,"Biometrics data in MOSIP is exchanged as per formats defined in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Biometric-Data-Specification.md"}),"Biometric Data Specification"),". "),Object(o.b)("h2",{id:"abis-deployment"},"ABIS deployment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ABIS must comply to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"ABIS-APIs.md"}),"ABIS API Specifications"),"."),Object(o.b)("li",{parentName:"ul"},"The queques can be configured in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mosip/mosip-config/blob/master/config-templates/RegistrationProcessorAbis-env.json"}),"RegistrationProcessorAbis-env.json")," file.\nABIS system connects to the queues using a pre-defined user id and password. "),Object(o.b)("li",{parentName:"ul"},"It is recommended that ABIS is deployed in the same secure zone (military zone) where the registration processor is deployed. "),Object(o.b)("li",{parentName:"ul"},"ABIS system is not recommended to connect to any external network.")))}m.isMDXComponent=!0}}]);