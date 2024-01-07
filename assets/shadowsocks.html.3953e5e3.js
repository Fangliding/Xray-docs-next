import{r as s,o as n,c as e,a,b as o,w as t,F as p,e as r,d as l}from"./app.c4cd2a44.js";const c={},i=a("h1",{id:"shadowsocks",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),r(" Shadowsocks")],-1),u={href:"https://en.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},d=r("Shadowsocks"),b=r(" protocol is compatible with most other implementations."),h=l("<p>Here are the features and compatibility of Shadowsocks:</p><ul><li>It supports TCP and UDP packet forwarding, with the option to disable UDP.</li><li>Recommended encryption methods: <ul><li>2022-blake3-aes-128-gcm</li><li>2022-blake3-aes-256-gcm</li><li>2022-blake3-chacha20-poly1305</li></ul></li><li>Other encryption methods: <ul><li>aes-256-gcm</li><li>aes-128-gcm</li><li>chacha20-poly1305 (also known as chacha20-ietf-poly1305)</li><li>none or plain</li></ul></li></ul><p>The new protocol format of Shadowsocks 2022 improves performance and includes full replay protection, addressing security issues present in the old protocol:</p>",3),k={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},m=r("Serious vulnerabilities in Shadowsocks AEAD encryption methods that compromise the integrity of communications"),q=a("li",null,"Increasing false-positive rate of TCP replay filters over time",-1),g=a("li",null,"Lack of replay protection for UDP",-1),y=a("li",null,"TCP behaviors that can be used for active probing",-1),f=l('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Using the &quot;none&quot; encryption method will transmit traffic in plaintext. It is not recommended to use &quot;none&quot; encryption on public networks to ensure security.</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;encryption method&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;uot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p><code>servers</code>: [<a href="#serverobject">ServerObject</a>]</p></blockquote><p>An array representing a group of Shadowsocks server settings, where each item is a <a href="#serverobject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;encryption method&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;uot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p><code>email</code>: string</p></blockquote><p>Email address (optional) used to identify the user.</p><blockquote><p><code>address</code>: address</p></blockquote><p>The address of the Shadowsocks server, supporting IPv4, IPv6, and domain names. Required.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The port of the Shadowsocks server. Required.</p><blockquote><p><code>method</code>: string</p></blockquote><p>Encryption method. Required.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Password. Required.</p><blockquote><p><code>uot</code>: bool</p></blockquote><p>When enabled, UDP over TCP (UOT) will be used.</p><ul><li>Shadowsocks 2022</li></ul><p>Use a pre-shared key (PSK) similar to WireGuard as the password.</p><p>To generate a compatible key with shadowsocks-rust, use <code>openssl rand -base64 &lt;length&gt;</code>, where the length depends on the encryption method used.</p><table><thead><tr><th>Encryption Method</th><th style="text-align:right;">Key Length</th></tr></thead><tbody><tr><td>2022-blake3-aes-128-gcm</td><td style="text-align:right;">16</td></tr><tr><td>2022-blake3-aes-256-gcm</td><td style="text-align:right;">32</td></tr><tr><td>2022-blake3-chacha20-poly1305</td><td style="text-align:right;">32</td></tr></tbody></table><p>In the Go implementation, a 32-byte key always works.</p><ul><li>Other encryption methods</li></ul><p>Any string can be used as a password. There is no limit on the password length, but shorter passwords are more susceptible to cracking. It is recommended to use a password of 16 characters or longer.</p><blockquote><p><code>level</code>: number</p></blockquote>',27),v=r("User level. Connections will use the corresponding "),w=r("local policy"),j=r(" associated with this user level."),S=r("The "),x=a("code",null,"level",-1),P=r(" value corresponds to the "),T=a("code",null,"level",-1),O=r(" value in the "),I=r("policy"),U=r(". If not specified, the default value is 0.");c.render=function(r,l){const c=s("OutboundLink"),C=s("RouterLink");return n(),e(p,null,[i,a("p",null,[a("a",u,[d,o(c)]),b]),h,a("ul",null,[a("li",null,[a("a",k,[m,o(c)])]),q,g,y]),f,a("p",null,[v,o(C,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[w])),_:1}),j]),a("p",null,[S,x,P,T,O,o(C,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[I])),_:1}),U])],64)};export default c;
