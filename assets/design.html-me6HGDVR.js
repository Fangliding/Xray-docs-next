import{_ as s,r,o as l,c as i,a as e,b as o,d as t,w as d,e as c}from"./app-kDZ-w46R.js";const p="/Xray-docs-next/assets/framework-fWbTmHWQ.png",h={},u=c('<h1 id="design-objectives" tabindex="-1"><a class="header-anchor" href="#design-objectives"><span>Design Objectives</span></a></h1><ul><li>Xray Kernel provides a platform that supports essential network proxy functions and can be developed upon to provide a better user experience.</li><li>Cross-platform is the primary principle to reduce the cost of secondary development.</li></ul><h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h2><p><img src="'+p+'" alt="Architecture"></p><p>The kernel is divided into three layers: the application layer, the proxy layer, and the transport layer.</p><p>Each layer contains several modules, which are independent of each other. Modules of the same type can be seamlessly replaced.</p><h3 id="application-layer" tabindex="-1"><a class="header-anchor" href="#application-layer"><span>Application Layer</span></a></h3><p>The application layer contains some commonly used functions in proxy layers, which are abstracted for reuse in different proxy modules.</p><p>The modules at the application layer should be implemented purely in software and should not be dependent on hardware or platform-related technologies.</p><p>List of Important Modules:</p>',10),y=e("li",null,"Dispatcher: Used to transfer data received by the inbound agent to the outbound agent;",-1),_=e("li",null,"DNS: Built-in DNS server module;",-1),x=e("li",null,"Proxy Manager: Proxy manager;",-1),f=e("h3",{id:"proxy-layer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#proxy-layer"},[e("span",null,"Proxy Layer")])],-1),m=e("p",null,"The proxy layer is divided into two parts: Inbound Proxy and Outbound Proxy.",-1),b=e("p",null,"The two parts are independent of each other, where the inbound proxy does not rely on a specific outbound proxy, and vice versa.",-1),g=e("h4",{id:"inbound-proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inbound-proxy"},[e("span",null,"Inbound Proxy")])],-1),v={href:"https://github.com/xtls/Xray-core/blob/main/proxy/proxy.go",target:"_blank",rel:"noopener noreferrer"},k=e("h4",{id:"outbound-proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#outbound-proxy"},[e("span",null,"Outbound Proxy")])],-1),w={href:"https://github.com/xtls/Xray-core/blob/main/proxy/proxy.go",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"transport-layer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transport-layer"},[e("span",null,"Transport Layer")])],-1),I=e("p",null,"The transport layer provides a set of tools and modules related to network data transmission.",-1);function L(P,N){const a=r("RouterLink"),n=r("ExternalLinkIcon");return l(),i("div",null,[u,e("ul",null,[y,e("li",null,[o("Router: Routing module, see "),t(a,{to:"/en/config/routing.html"},{default:d(()=>[o("Routing Configuration")]),_:1}),o(" for details;")]),_,x]),f,m,b,g,e("ul",null,[e("li",null,[o("Implement the "),e("a",v,[o("proxy.Inbound"),t(n)]),o(" interface;")])]),k,e("ul",null,[e("li",null,[o("Implement the "),e("a",w,[o("proxy.Outbound"),t(n)]),o(" interface;")])]),T,I])}const B=s(h,[["render",L],["__file","design.html.vue"]]);export{B as default};
