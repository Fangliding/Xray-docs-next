import{_ as l,r as p,o as r,c as u,a as s,b as e,w as a,F as i,e as n,d as t}from"./app.52f6bc1f.js";const d={},b=s("h1",{id:"vless",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vless","aria-hidden":"true"},"#"),n(" VLESS")],-1),k=s("div",{class:"custom-container danger"},[s("p",{class:"custom-container-title"},"DANGER"),s("p",null,"\u76EE\u524D VLESS \u6CA1\u6709\u81EA\u5E26\u52A0\u5BC6\uFF0C\u8BF7\u7528\u4E8E\u53EF\u9760\u4FE1\u9053\uFF0C\u5982 TLS\u3002 \u76EE\u524D VLESS \u4E0D\u652F\u6301\u5206\u4EAB\u3002")],-1),_=s("p",null,"VLESS \u662F\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u8F7B\u91CF\u4F20\u8F93\u534F\u8BAE\uFF0C\u5B83\u5206\u4E3A\u5165\u7AD9\u548C\u51FA\u7AD9\u4E24\u90E8\u5206\uFF0C\u53EF\u4EE5\u4F5C\u4E3A Xray \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6865\u6881\u3002",-1),q=n("\u4E0E "),m=n("VMess"),h=n(" \u4E0D\u540C\uFF0CVLESS \u4E0D\u4F9D\u8D56\u4E8E\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u8BA4\u8BC1\u65B9\u5F0F\u540C\u6837\u4E3A UUID\uFF0C\u4F46\u4E0D\u9700\u8981 alterId\u3002"),x=t(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>vnext</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4, \u8868\u793A VLESS \u670D\u52A1\u5668\u5217\u8868\uFF0C\u5305\u542B\u4E00\u7EC4\u6307\u5411\u670D\u52A1\u7AEF\u7684\u914D\u7F6E, \u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u670D\u52A1\u5668\u914D\u7F6E\u3002</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>\u670D\u52A1\u7AEF\u5730\u5740\uFF0C\u6307\u5411\u670D\u52A1\u7AEF\uFF0C\u652F\u6301\u57DF\u540D\u3001IPv4\u3001IPv6\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u670D\u52A1\u7AEF\u7AEF\u53E3\uFF0C\u901A\u5E38\u4E0E\u670D\u52A1\u7AEF\u76D1\u542C\u7684\u7AEF\u53E3\u76F8\u540C\u3002</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>\u6570\u7EC4, \u4E00\u7EC4\u670D\u52A1\u7AEF\u8BA4\u53EF\u7684\u7528\u6237\u5217\u8868, \u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u7528\u6237\u914D\u7F6E</p><h3 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>VLESS \u7684\u7528\u6237 ID\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u5C0F\u4E8E 30 \u5B57\u8282\u7684\u5B57\u7B26\u4E32, \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5408\u6CD5\u7684 UUID. \u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u548C\u5176\u6620\u5C04\u7684 UUID \u662F\u7B49\u4EF7\u7684, \u8FD9\u610F\u5473\u7740\u4F60\u5C06\u53EF\u4EE5\u8FD9\u6837\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5199 id \u6765\u6807\u8BC6\u540C\u4E00\u7528\u6237,\u5373</p><ul><li>\u5199 <code>&quot;id&quot;: &quot;\u6211\u7231\u{1F349}\u8001\u5E081314&quot;</code>,</li><li>\u6216\u5199 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (\u6B64 UUID \u662F <code>\u6211\u7231\u{1F349}\u8001\u5E081314</code> \u7684 UUID \u6620\u5C04)</li></ul>`,17),g=n("\u5176\u6620\u5C04\u6807\u51C6\u5728 "),S={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},v=n("VLESS UUID \u6620\u5C04\u6807\u51C6\uFF1A\u5C06\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6620\u5C04\u4E3A\u4E00\u4E2A UUIDv5"),y=t("<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>xray uuid -i &quot;\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32&quot;</code> \u751F\u6210\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6240\u6620\u5C04\u7684\u7684 UUID\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>xray uuid</code> \u751F\u6210\u968F\u673A\u7684 UUID\u3002</p><blockquote><p><code>encryption</code>: &quot;none&quot;</p></blockquote><p>\u9700\u8981\u586B <code>&quot;none&quot;</code>\uFF0C\u4E0D\u80FD\u7559\u7A7A\u3002</p><p>\u8BE5\u8981\u6C42\u662F\u4E3A\u4E86\u63D0\u9192\u4F7F\u7528\u8005\u6CA1\u6709\u52A0\u5BC6\uFF0C\u4E5F\u4E3A\u4E86\u4EE5\u540E\u51FA\u52A0\u5BC6\u65B9\u5F0F\u65F6\uFF0C\u9632\u6B62\u4F7F\u7528\u8005\u586B\u9519\u5C5E\u6027\u540D\u6216\u586B\u9519\u4F4D\u7F6E\u5BFC\u81F4\u88F8\u5954\u3002</p><p>\u82E5\u672A\u6B63\u786E\u8BBE\u7F6E encryption \u7684\u503C\uFF0C\u4F7F\u7528 Xray \u6216 -test \u65F6\u4F1A\u6536\u5230\u9519\u8BEF\u4FE1\u606F\u3002</p><blockquote><p><code>flow</code>: string</p></blockquote><p>\u6D41\u63A7\u6A21\u5F0F\uFF0C\u7528\u4E8E\u9009\u62E9 XTLS \u7684\u7B97\u6CD5\u3002</p><p>\u76EE\u524D\u51FA\u7AD9\u534F\u8BAE\u4E2D\u6709\u4EE5\u4E0B\u6D41\u63A7\u6A21\u5F0F\u53EF\u9009\uFF1A</p><ul><li><code>xtls-rprx-origin</code>\uFF1A\u6700\u521D\u7684\u6D41\u63A7\u6A21\u5F0F\u3002\u8BE5\u6A21\u5F0F\u7EAA\u5FF5\u4EF7\u503C\u5927\u4E8E\u5B9E\u9645\u4F7F\u7528\u4EF7\u503C</li><li><code>xtls-rprx-origin-udp443</code>\uFF1A\u540C <code>xtls-rprx-origin</code>, \u4F46\u653E\u884C\u4E86\u76EE\u6807\u4E3A 443 \u7AEF\u53E3\u7684 UDP \u6D41\u91CF</li><li><code>xtls-rprx-direct</code>\uFF1A\u6240\u6709\u5E73\u53F0\u7686\u53EF\u4F7F\u7528\u7684\u5178\u578B\u6D41\u63A7\u6A21\u5F0F</li><li><code>xtls-rprx-direct-udp443</code>\uFF1A\u540C <code>xtls-rprx-direct</code>, \u4F46\u662F\u653E\u884C\u4E86\u76EE\u6807\u4E3A 443 \u7AEF\u53E3\u7684 UDP \u6D41\u91CF</li><li><code>xtls-rprx-splice</code>\uFF1ALinux \u5E73\u53F0\u4E0B\u6700\u5EFA\u8BAE\u4F7F\u7528\u7684\u6D41\u63A7\u6A21\u5F0F</li><li><code>xtls-rprx-splice-udp443</code>\uFF1A\u540C <code>xtls-rprx-splice</code>, \u4F46\u662F\u653E\u884C\u4E86\u76EE\u6807\u4E3A 443 \u7AEF\u53E3\u7684 UDP \u6D41\u91CF</li></ul>",9),f={class:"custom-container warning"},U=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),L=n("\u5F53 "),j=s("code",null,"flow",-1),T=n(" \u88AB\u6307\u5B9A\u65F6\uFF0C\u8FD8\u9700\u8981\u5C06\u8BE5\u51FA\u7AD9\u534F\u8BAE\u7684 "),I=s("code",null,"streamSettings.security",-1),D=n(" \u4E00\u9879\u6307\u5B9A\u4E3A "),P=s("code",null,"xtls",-1),C=n("\uFF0C"),V=s("code",null,"tlsSettings",-1),E=n(" \u6539\u4E3A "),X=s("code",null,"xtlsSettings",-1),w=n("\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003 "),O=n("streamSettings"),N=n("\u3002"),Q=s("p",null,"\u6B64\u5916\uFF0C\u76EE\u524D XTLS \u4EC5\u652F\u6301 TCP\u3001mKCP\u3001DomainSocket \u8FD9\u4E09\u79CD\u4F20\u8F93\u65B9\u5F0F\u3002",-1),B=t('<div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8E xtls-rprx-*-udp443 \u6D41\u63A7\u6A21\u5F0F</p><p>\u542F\u7528\u4E86 Xray-core \u7684 XTLS \u65F6\uFF0C\u901A\u5F80 UDP 443 \u7AEF\u53E3\u7684\u6D41\u91CF\u9ED8\u8BA4\u4F1A\u88AB\u62E6\u622A\uFF08\u4E00\u822C\u60C5\u51B5\u4E0B\u4E3A QUIC\uFF09\uFF0C\u8FD9\u6837\u5E94\u7528\u5C31\u4E0D\u4F1A\u4F7F\u7528 QUIC \u800C\u4F1A\u4F7F\u7528 TLS\uFF0CXTLS \u624D\u4F1A\u771F\u6B63\u751F\u6548\u3002\u5B9E\u9645\u4E0A\uFF0CQUIC \u672C\u8EAB\u4E5F\u4E0D\u9002\u5408\u88AB\u4EE3\u7406\uFF0C\u56E0\u4E3A QUIC \u81EA\u5E26\u4E86 TCP \u7684\u529F\u80FD\uFF0C\u5B83\u4F5C\u4E3A UDP \u6D41\u91CF\u5728\u901A\u8FC7 VLESS \u534F\u8BAE\u4F20\u8F93\u65F6\uFF0C\u5E95\u5C42\u534F\u8BAE\u4E3A TCP\uFF0C\u5C31\u76F8\u5F53\u4E8E\u4E24\u5C42 TCP \u4E86\u3002</p><p>\u82E5\u4E0D\u9700\u8981\u62E6\u622A\uFF0C\u8BF7\u5728\u5BA2\u6237\u7AEF\u586B\u5199 <code>xtls-rprx-*-udp443</code>\uFF0C\u670D\u52A1\u7AEF\u4E0D\u53D8\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8E Splice \u6A21\u5F0F</p><p>Splice \u662F Linux Kernel \u63D0\u4F9B\u7684\u51FD\u6570\uFF0C\u7CFB\u7EDF\u5185\u6838\u76F4\u63A5\u8F6C\u53D1 TCP\uFF0C\u4E0D\u518D\u7ECF\u8FC7 Xray \u7684\u5185\u5B58\uFF0C\u5927\u5927\u51CF\u5C11\u4E86\u6570\u636E\u62F7\u8D1D\u3001CPU \u4E0A\u4E0B\u6587\u5207\u6362\u7684\u6B21\u6570\u3002</p></div><p>Splice \u6A21\u5F0F\u7684\u7684\u4F7F\u7528\u9650\u5236\uFF1A</p><ul><li>Linux \u73AF\u5883</li><li>\u5165\u7AD9\u534F\u8BAE\u4E3A <code>Dokodemo door</code>\u3001<code>Socks</code>\u3001<code>HTTP</code> \u7B49\u7EAF\u51C0\u7684 TCP \u8FDE\u63A5, \u6216\u5176\u5B83\u4F7F\u7528\u4E86 XTLS \u7684\u5165\u7AD9\u534F\u8BAE</li><li>\u51FA\u7AD9\u534F\u8BAE\u4E3A VLESS + XTLS \u6216 Trojan + XTLS</li></ul><p>\u6B64\u5916\uFF0C\u4F7F\u7528 Splice \u65F6\u7F51\u901F\u663E\u793A\u4F1A\u6EDE\u540E\uFF0C\u8FD9\u662F\u7279\u6027\uFF0C\u4E0D\u662F bug\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528 mKCP \u534F\u8BAE\u65F6\u4E0D\u4F1A\u4F7F\u7528 Splice\uFF08\u662F\u7684\uFF0C\u867D\u7136\u6CA1\u6709\u62A5\u9519\uFF0C\u4F46\u5B9E\u9645\u4E0A\u6839\u672C\u6CA1\u7528\u5230\uFF09\u3002</p><blockquote><p><code>level</code>: number</p></blockquote>',7),K=n("\u7528\u6237\u7B49\u7EA7\uFF0C\u8FDE\u63A5\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7528\u6237\u7B49\u7EA7\u5BF9\u5E94\u7684 "),R=n("\u672C\u5730\u7B56\u7565"),F=n("\u3002"),A=n("level \u7684\u503C, \u5BF9\u5E94 "),G=n("policy"),H=n(" \u4E2D "),M=s("code",null,"level",-1),z=n(" \u7684\u503C\u3002 \u5982\u4E0D\u6307\u5B9A, \u9ED8\u8BA4\u4E3A 0\u3002");function J(W,Y){const o=p("RouterLink"),c=p("ExternalLinkIcon");return r(),u(i,null,[b,k,_,s("p",null,[q,e(o,{to:"/en/config/outbounds/vmess.html"},{default:a(()=>[m]),_:1}),h]),x,s("p",null,[g,s("a",S,[v,e(c)])]),y,s("div",f,[U,s("p",null,[L,j,T,I,D,P,C,V,E,X,w,e(o,{to:"/en/config/transport.html#streamsettingsobject"},{default:a(()=>[O]),_:1}),N]),Q]),B,s("p",null,[K,e(o,{to:"/en/config/policy.html#levelpolicyobject"},{default:a(()=>[R]),_:1}),F]),s("p",null,[A,e(o,{to:"/en/config/policy.html#policyobject"},{default:a(()=>[G]),_:1}),H,M,z])],64)}var $=l(d,[["render",J],["__file","vless.html.vue"]]);export{$ as default};