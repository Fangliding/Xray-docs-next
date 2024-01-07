import{r as n,o as s,c as a,a as e,b as p,F as t,e as o,d as r}from"./app.c4cd2a44.js";const l={},c=e("h1",{id:"enhancing-proxy-security-with-cloudflare-warp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enhancing-proxy-security-with-cloudflare-warp","aria-hidden":"true"},"#"),o(" Enhancing Proxy Security with Cloudflare Warp")],-1),u=e("p",null,"Xray (1.6.5+) has added outbound WireGuard support. Although the added code and dependencies will increase the core size, we believe that this is a necessary new feature for three reasons:",-1),i=o("Through recent discussions and "),b={href:"https://github.com/net4people/bbs/issues/129#issuecomment-1308102504",target:"_blank",rel:"noopener noreferrer"},k=o("experiments"),d=o(", we know that proxying the traffic back to China is not safe. One way to deal with this is to route the back-to-China traffic to a black hole, but the downside is that due to the delay in geosite and geoip updates or the lack of knowledge on how to properly split the traffic on the client side, the traffic ends up going to the black hole, affecting the user experience. In this case, we only need to import the back-to-China traffic into Cloudflare Warp, which can achieve the same level of security without affecting the user experience."),m=e("li",null,"As we all know, most airports will log the domain names visited by users, and some airports will even audit and block some user traffic. One way to protect user privacy is to use chain proxies on the client side. The WireGuard lightweight VPN protocol used by Warp adds an extra layer of encryption within the proxy layer. For airports, the target of all user traffic is Warp, thereby maximizing privacy protection.",-1),q=e("li",null,"It is easy to use, and only one core is needed to complete the split, Wireguard Tun, and chain proxy settings.",-1),g=e("h2",{id:"applying-for-a-warp-account",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#applying-for-a-warp-account","aria-hidden":"true"},"#"),o(" Applying for a Warp Account")],-1),h=e("li",null,"Thank you Cloudflare for promoting a free internet. Now you can use the Warp service for free, and the nearest server will be automatically selected based on the exit.",-1),y=o("Use a VPS and download "),f={href:"https://github.com/ViRb3/wgcf/releases",target:"_blank",rel:"noopener noreferrer"},w=o("wgcf"),v=o("."),x=e("li",null,[o("Run "),e("code",null,"wgcf register"),o(" to generate "),e("code",null,"wgcf-account.toml"),o(".")],-1),W=e("li",null,[o("Run "),e("code",null,"wgcf generate"),o(" to generate "),e("code",null,"wgcf-profile.conf"),o(". Copy the following content:")],-1),P=r('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Interface]\nPrivateKey = my private key\nAddress = 172.16.0.2/32\nAddress = 2606:4700:110:8949:fed8:2642:a640:c8e1/128\nDNS = 1.1.1.1\nMTU = 1280\n[Peer]\nPublicKey = Warp public key\nAllowedIPs = 0.0.0.0/0\nAllowedIPs = ::/0\nEndpoint = engage.cloudflareclient.com:2408\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="diverting-inbound-traffic-to-warp-on-the-server-side" tabindex="-1"><a class="header-anchor" href="#diverting-inbound-traffic-to-warp-on-the-server-side" aria-hidden="true">#</a> Diverting inbound traffic to warp on the server side</h2><p>Add a new WireGuard outbound in the existing ones.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wireguard&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;secretKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My private key&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;172.16.0.2/32&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2606:4700:110:8949:fed8:2642:a640:c8e1/128&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;peers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warp public key&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;engage.cloudflareclient.com:2408&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wireguard-1&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Recommended routing strategy is <code>IPIfNonMatch</code>.</p><p>Add the following to the existing router:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>            <span class="token punctuation">{</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;geosite:cn&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wireguard-1&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;geoip:cn&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wireguard-1&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="using-warp-chain-proxy-on-the-client-side" tabindex="-1"><a class="header-anchor" href="#using-warp-chain-proxy-on-the-client-side" aria-hidden="true">#</a> Using Warp Chain Proxy on the Client Side</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n         <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;wireguard&quot;</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token property">&quot;secretKey&quot;</span><span class="token operator">:</span><span class="token string">&quot;My private key&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;peers&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n               <span class="token punctuation">{</span>\n                  <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span><span class="token string">&quot;Warp public key&quot;</span><span class="token punctuation">,</span>\n                  <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;engage.cloudflareclient.com:2408&quot;</span>\n               <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n         <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token property">&quot;sockopt&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n               <span class="token property">&quot;dialerProxy&quot;</span><span class="token operator">:</span><span class="token string">&quot;proxy&quot;</span>\n            <span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;wireguard-1&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n         <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;proxy&quot;</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n               <span class="token punctuation">{</span>\n                  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;My IP&quot;</span><span class="token punctuation">,</span>\n                  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span>My port<span class="token punctuation">,</span>\n                  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                     <span class="token punctuation">{</span>\n                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;My UUID&quot;</span><span class="token punctuation">,</span>\n                        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span>\n                     <span class="token punctuation">}</span>\n                  <span class="token punctuation">]</span>\n               <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n         <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token property">&quot;network&quot;</span><span class="token operator">:</span><span class="token string">&quot;tcp&quot;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>',9);l.render=function(o,r){const l=n("OutboundLink");return s(),a(t,null,[c,u,e("ol",null,[e("li",null,[i,e("a",b,[k,p(l)]),d]),m,q]),g,e("ol",null,[h,e("li",null,[y,e("a",f,[w,p(l)]),v]),x,W]),P],64)};export default l;
