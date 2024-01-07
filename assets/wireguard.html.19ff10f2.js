import{r as e,o as n,c as s,a as t,b as a,w as o,F as r,d as p,e as l}from"./app.c4cd2a44.js";const u={},c=p('<h1 id="wireguard" tabindex="-1"><a class="header-anchor" href="#wireguard" aria-hidden="true">#</a> Wireguard</h1><p>Wireguard is a standard implementation of the Wireguard protocol.</p><div class="custom-container danger"><p class="custom-container-title">Danger</p><p><strong>The Wireguard protocol is not specifically designed for circumvention purposes. If used as the outer layer for circumvention, its characteristics may lead to server blocking.</strong></p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;secretKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PRIVATE_KEY&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// optional, default [&quot;10.0.0.1&quot;, &quot;fd59:7153:2388:b5fd:0000:0000:0000:0001&quot;]</span>\n    <span class="token string">&quot;IPv4_CIDR&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;IPv6_CIDR&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;and more...&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;peers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ENDPOINT_ADDR&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PUBLIC_KEY&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;mtu&quot;</span><span class="token operator">:</span> <span class="token number">1420</span><span class="token punctuation">,</span> <span class="token comment">// optional, default 1420</span>\n  <span class="token property">&quot;reserved&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// optional, default runtime.NumCPU()</span>\n  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ForceIP&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Currently, the Wireguard protocol outbound does not support setting <code>streamSettings</code>.</p></div><blockquote><p><code>secretKey</code>: string</p></blockquote><p>The user&#39;s private key. Required.</p><blockquote><p><code>address</code>: string array</p></blockquote><p>Wireguard will create a virtual network interface <code>tun</code> locally. Use one or more IP addresses, including IPv6.</p><blockquote><p><code>mtu</code>: int</p></blockquote><p>The fragment size of the underlying <code>tun</code> device in Wireguard.</p><blockquote><p><code>reserved</code> [ number ]</p></blockquote><p>Wireguard Reserved Bytes.</p>',14),i=l("Xray-core v1.8.0 New parameter."),d=t("br",null,null,-1),b=l(" When connecting to warp via wireguard, due to cloudflare limitations, some IPs in Hong Kong and Los Angeles need to have a "),q=t("code",null,"reserved",-1),g=l(" value in order to connect successfully."),m=t("br",null,null,-1),k=l(" The value of "),y=t("code",null,"reserved",-1),h=l(" can be obtained using third-party tools such as "),v={href:"https://github.com/badafans/warp-reg",target:"_blank",rel:"noopener noreferrer"},f=l("warp-reg"),I=l(", "),P={href:"https://github.com/chise0713/warp-reg.sh",target:"_blank",rel:"noopener noreferrer"},w=l("warp-reg.sh"),x=l(".。"),S=p('<blockquote><p><code>workers</code>: int</p></blockquote><p>The number of threads used by Wireguard.</p><blockquote><p><code>peers</code>: [ <a href="#peers">Peers</a> ]</p></blockquote><p>A list of Wireguard servers, where each item is a server configuration.</p><blockquote><p><code>domainStrategy</code>: &quot;ForceIPv6v4&quot; | &quot;ForceIPv6&quot; | &quot;ForceIPv4v6&quot; | &quot;ForceIPv4&quot; | &quot;ForceIP&quot;</p></blockquote>',5),A=l("Xray-core v1.8.6 New parameter."),F=t("br",null,null,-1),T=l(" If you do not write this parameter, or leave it blank, the default value is "),D=t("code",null,'"ForceIP"',-1),N=l("."),W=t("br",null,null,-1),j=l(" When the destination address is a domain name, use the Xray-core "),R=l("built-in DNS server"),K=l(" to get an IP (if no "),_=t("code",null,'"dns"',-1),U=l(" configuration is written, system DNS is used), and send a connection to this IP via wireguard."),E=t("br",null,null,-1),C=p('<table><thead><tr><th style="text-align:left;">domainStrategy</th><th style="text-align:center;">test-ipv6.com</th><th style="text-align:center;">bgp.he.net</th><th style="text-align:center;">chat.openai.com</th></tr></thead><tbody><tr><td style="text-align:left;">ForceIPv6v4</td><td style="text-align:center;">IPv6v4</td><td style="text-align:center;">IPv6</td><td style="text-align:center;">IPv6</td></tr><tr><td style="text-align:left;">ForceIPv6</td><td style="text-align:center;">The website won&#39;t open.</td><td style="text-align:center;">IPv6</td><td style="text-align:center;">IPv6</td></tr><tr><td style="text-align:left;">ForceIPv4v6</td><td style="text-align:center;">IPv6v4 <strong>1</strong></td><td style="text-align:center;">IPv4</td><td style="text-align:center;">IPv4</td></tr><tr><td style="text-align:left;">ForceIPv4</td><td style="text-align:center;">IPv4</td><td style="text-align:center;">IPv4</td><td style="text-align:center;">IPv4</td></tr><tr><td style="text-align:left;">ForceIP</td><td style="text-align:center;">IPv6v4 <strong>2</strong></td><td style="text-align:center;">IPv6</td><td style="text-align:center;">IPv6</td></tr></tbody></table><p><strong>1：</strong> Tip <code>You already have an IPv6 address, but your browser is less inclined to use it, which is more worrying. </code><br><strong>2：</strong> The chances of prompting <code>You already have an IPv6 address, but your browser is less inclined to use it, which is more worrisome. </code></p><p><strong>Note 1</strong>：</p><ul><li>Conflicts with <code>&quot;queryStrategy&quot;</code> may cause the site to fail to open.</li><li>For example when <code>domainStrategy: &quot;ForceIPv4&quot;</code> is used, geosite:openai&#39;s site with <code>&quot;queryStrategy&quot;: &quot;UseIPv6&quot;</code> will fail to open.</li></ul><div class="language-jsonc ext-jsonc line-numbers-mode"><pre class="language-jsonc"><code>    &quot;dns&quot;: {\n        &quot;servers&quot;: [\n            &quot;https://1.1.1.1/dns-query&quot;,\n            {\n                &quot;address&quot;: &quot;https://1.1.1.1/dns-query&quot;,\n                &quot;domains&quot;: [\n                    &quot;geosite:openai&quot;\n                ],\n                &quot;skipFallback&quot;: true,\n                &quot;queryStrategy&quot;: &quot;UseIPv6&quot; // Query only AAAA records.\n            }\n        ],\n        &quot;queryStrategy&quot;: &quot;UseIP&quot; // If this parameter is not written, the default value is UseIP, i.e. both A and AAAA records are queried, optional values are UseIPv4 and UseIPv6, other record types are queried by the system DNS.\n    },\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>Note 2</strong>：</p><ul><li>Xray-core v1.8.0 - v1.8.4 without <code>&quot;domainStrategy&quot;</code>.</li><li>When the destination address is a domain name, use the Xray-core built-in DNS server query to obtain the IP, using the value of <code>&quot;queryStrategy&quot;</code> in the <code>&quot;dns&quot;</code> configuration to control the IPv4 or IPv6 priority.</li><li>If the <code>&quot;dns&quot;</code> configuration is not written, the system DNS query is used to obtain IP, and the IPv4 or IPv6 priority is controlled by the system.</li></ul><h3 id="peers" tabindex="-1"><a class="header-anchor" href="#peers" aria-hidden="true">#</a> Peers</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ENDPOINT_ADDR&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PUBLIC_KEY&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;preSharedKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PRE_SHARED_KEY&quot;</span><span class="token punctuation">,</span> <span class="token comment">// optional, default &quot;0000000000000000000000000000000000000000000000000000000000000000&quot;</span>\n  <span class="token property">&quot;keepAlive&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// optional, default 0</span>\n  <span class="token property">&quot;allowedIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/0&quot;</span><span class="token punctuation">]</span> <span class="token comment">// optional, default [&quot;0.0.0.0/0&quot;, &quot;::/0&quot;]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>endpoint</code>: address</p></blockquote><p>The server address. Required.</p><p>URL:port format, e.g. <code>engage.cloudflareclient.com:2408</code>.<br> IP:port format, e.g. <code>162.159.192.1:2408</code> or <code>[2606:4700:d0::a29f:c001]:2408</code>.</p><blockquote><p><code>publicKey</code>: string</p></blockquote><p>The server&#39;s public key used for verification. Required.</p><blockquote><p><code>preSharedKey</code>: string</p></blockquote><p>An additional symmetric encryption key.</p><blockquote><p><code>keepAlive</code>: int</p></blockquote><p>The interval of keep-alive packets in seconds. The default is 0, which means no keep-alive.</p><blockquote><p><code>allowedIPs</code>: string array</p></blockquote><p>Only allow traffic from specific source IP addresses in Wireguard.</p>',20);u.render=function(p,l){const u=e("OutboundLink"),L=e("RouterLink");return n(),s(r,null,[c,t("p",null,[i,d,b,q,g,m,k,y,h,t("a",v,[f,a(u)]),I,t("a",P,[w,a(u)]),x]),S,t("p",null,[A,F,T,D,N,W,j,a(L,{to:"/en/config/outbounds/dns.html"},{default:o((()=>[R])),_:1}),K,_,U,E]),C],64)};export default u;
