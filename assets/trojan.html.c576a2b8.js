import{r as n,o as s,c as a,a as e,b as o,w as t,F as p,e as r,d as l}from"./app.c4cd2a44.js";const c={},u=e("h1",{id:"trojan",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),r(" Trojan")],-1),i={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},d=r("Trojan"),b=r(" protocol"),k=l('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Trojan is designed to work with correctly configured encrypted TLS tunnels.</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array representing a list of servers, where each item is a <a href="#serverobject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>The server address, which can be an IPv4, IPv6, or domain name. Required.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The server port, usually the same port that the server is listening on.</p><blockquote><p><code>password</code>: string</p></blockquote><p>The password for authentication. Required. It can be any string.</p><blockquote><p><code>email</code>: string</p></blockquote><p>The email address, optional, used to identify the user.</p><blockquote><p><code>level</code>: number</p></blockquote>',16),q=r("The user level. Connections will use the corresponding "),h=r("local policy"),m=r(" associated with this user level."),v=r("The "),g=e("code",null,"level",-1),j=r(" value corresponds to the "),f=e("code",null,"level",-1),y=r(" value in the "),w=r("policy"),T=r(". If not specified, the default value is 0.");c.render=function(r,l){const c=n("OutboundLink"),x=n("RouterLink");return s(),a(p,null,[u,e("p",null,[e("a",i,[d,o(c)]),b]),k,e("p",null,[q,o(x,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[h])),_:1}),m]),e("p",null,[v,g,j,f,y,o(x,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[w])),_:1}),T])],64)};export default c;
