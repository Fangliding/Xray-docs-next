import{_ as c,r as a,o as i,c as d,a as n,b as e,d as t,w as l,e as p}from"./app-BOvYEtC3.js";const r={},u=e("h1",{id:"domain-socket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#domain-socket"},[e("span",null,"Domain Socket")])],-1),h={class:"custom-container danger"},m=e("p",{class:"custom-container-title"},"Danger",-1),k=e("code",null,"listen",-1),b=e("p",null,"Note that the DomainSocket option here may be deprecated in the future.",-1),f=p(`<p>Domain Socket uses standard Unix domain sockets to transmit data.</p><p>The advantage of using DomainSocket is that it uses the built-in transport channel of the operating system and does not occupy the network cache. Theoretically, it is slightly faster than local loopback networks.</p><p>Currently, it can only be used on platforms that support Unix domain sockets, such as Linux and macOS. It is not available until Windows 10 Build 17036.</p><p>If DomainSocket is specified as the transport mode, the ports and IP addresses configured in the inbound and outbound proxies will be invalidated, and all transports will be replaced by DomainSocket.</p><h2 id="domainsocketobject" tabindex="-1"><a class="header-anchor" href="#domainsocketobject"><span>DomainSocketObject</span></a></h2><p><code>DomainSocketObject</code> corresponds to the <code>dsSettings</code> item.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/ds/file&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;abstract&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>path</code>: string</p></blockquote><p>A valid file path.</p><div class="custom-container danger"><p class="custom-container-title">Danger</p><p>This file must not exist before running Xray.</p></div><blockquote><p><code>abstract</code>: true | false</p></blockquote><p>Whether it is an abstract domain socket, with a default value of <code>false</code>.</p><blockquote><p><code>padding</code>: true | false</p></blockquote><p>Whether the abstract domain socket has padding, with a default value of <code>false</code>.</p>`,14);function _(v,g){const o=a("I18nTip"),s=a("RouterLink");return i(),d("div",null,[n(o),u,e("div",h,[m,e("p",null,[t("We recommend writing it to the "),k,t(" field in "),n(s,{to:"/en/config/inbound.html"},{default:l(()=>[t("inbounds")]),_:1}),t("and the transport mode can be TCP, WebSocket, or HTTP/2.")]),b]),f])}const x=c(r,[["render",_],["__file","domainsocket.html.vue"]]);export{x as default};
