import{r as s,o as n,c as a,a as o,b as e,w as t,F as p,d as c,e as u}from"./app.c4cd2a44.js";const l={},r=c('<h1 id="内置-dns-服务器" tabindex="-1"><a class="header-anchor" href="#内置-dns-服务器" aria-hidden="true">#</a> 内置 DNS 服务器</h1><h2 id="dns-服务器" tabindex="-1"><a class="header-anchor" href="#dns-服务器" aria-hidden="true">#</a> DNS 服务器</h2><p>Xray 内置的 DNS 模块，主要有两大用途：</p><ul><li><p>在路由阶段, 解析域名为 IP, 并且根据域名解析得到的 IP 进行规则匹配以分流. 是否解析域名及分流和路由配置模块中 <code>domainStrategy</code> 的值有关, 只有在设置以下两种值时,才会使用内置 DNS 服务器进行 DNS 查询:</p><ul><li>&quot;IPIfNonMatch&quot;, 请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名使用内置 DNS 服务器进行 DNS 查询，并且使用查询返回的 IP 地址再重新进行 IP 路由匹配。</li><li>&quot;IPOnDemand&quot;, 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。</li></ul></li><li><p>解析目标地址进行连接。</p><ul><li>如 在 <code>freedom</code> 出站中，将 <code>domainStrategy</code> 设置为 <code>UseIP</code>, 由此出站发出的请求, 会先将域名通过内置服务器解析成 IP, 然后进行连接。</li><li>如 在 <code>sockopt</code> 中，将 <code>domainStrategy</code> 设置为 <code>UseIP</code>, 此出站发起的系统连接，将先由内置服务器解析为 IP, 然后进行连接。</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP 1</p><p>内置 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>只支持最基本的 IP 查询（A 和 AAAA 记录），CNAME 记录将会重复查询直至返回 A/AAAA 记录为止。其他查询不会进入内置 DNS 服务器。</p></div><h2 id="dns-处理流程" tabindex="-1"><a class="header-anchor" href="#dns-处理流程" aria-hidden="true">#</a> DNS 处理流程</h2><p>若当前要查询的域名：</p><ul><li>命中了 <code>hosts</code> 中的「域名 - IP」、「域名 - IP 数组」映射，则将该 IP 或 IP 数组作为 DNS 解析结果返回。</li><li>命中了 <code>hosts</code> 中的「域名 - 域名」映射，则该映射的值（另一个域名）将作为当前要查询的域名，进入 DNS 处理流程，直到解析出 IP 后返回，或返回空解析。</li><li>没有命中 <code>hosts</code>，但命中了某（几）个 DNS 服务器中的 <code>domains</code> 域名列表，则按照命中的规则的优先级，依次使用该规则对应的 DNS 服务器进行查询。若命中的 DNS 服务器查询失败或 <code>expectIPs</code> 不匹配，则使用下一个命中的 DNS 服务器进行查询；否则返回解析得到的 IP。若所有命中的 DNS 服务器均查询失败或 <code>expectIPs</code> 不匹配，此时 DNS 组件： <ul><li>默认会进行 「DNS 回退（fallback）查询」：使用「上一轮失败查询中未被使用的、且 <code>skipFallback</code> 为默认值 <code>false</code> 的 DNS 服务器」依次查询。若查询失败或 <code>expectIPs</code> 不匹配，返回空解析；否则返回解析得到的 IP。</li><li>若 <code>disableFallback</code> 设置为 <code>true</code>，则不会进行「DNS 回退（fallback）查询」。</li></ul></li><li>既没有命中 <code>hosts</code>，又没有命中 DNS 服务器中的 <code>domains</code> 域名列表，则： <ul><li>默认使用「<code>skipFallback</code> 为默认值 <code>false</code> 的 DNS 服务器」依次查询。若第一个被选中的 DNS 服务器查询失败或 <code>expectIPs</code> 不匹配，则使用下一个被选中的 DNS 服务器进行查询；否则返回解析得到的 IP。若所有被选中的 DNS 服务器均查询失败或 <code>expectIPs</code> 不匹配，返回空解析。</li><li>若「<code>skipFallback</code> 为默认值 <code>false</code> 的 DNS 服务器」数量为 0 或 <code>disableFallback</code> 设置为 <code>true</code>，则使用 DNS 配置中的第一个 DNS 服务器进行查询。查询失败或 <code>expectIPs</code> 不匹配，返回空解析；否则返回解析得到的 IP。</li></ul></li></ul><h2 id="dnsobject" tabindex="-1"><a class="header-anchor" href="#dnsobject" aria-hidden="true">#</a> DnsObject</h2><p><code>DnsObject</code> 对应配置文件的 <code>dns</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;baidu.com&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;dns.google&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8.8.4.4&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;8.8.4.4&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5353</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;domain:xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;clientIP&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://8.8.8.8/dns-query&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token string">&quot;geosite:netflix&quot;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv4&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token string">&quot;geosite:openai&quot;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv6&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;localhost&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;clientIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIP&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;disableCache&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;disableFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;disableFallbackIfMatch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns_inbound&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><blockquote><p><code>hosts</code>: map{string: address} | map{string: [address]}</p></blockquote><p>静态 IP 列表，其值为一系列的 &quot;域名&quot;: &quot;地址&quot; 或 &quot;域名&quot;: [&quot;地址 1&quot;,&quot;地址 2&quot;]。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项:</p><ul><li>当该项的地址为 IP 时，则解析结果为该项的 IP</li><li>当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。</li><li>当地址中同时设置了多个 IP 和域名，则只会返回第一个域名，其余 IP 和域名均被忽略。</li></ul><p>域名的格式有以下几种形式：</p>',16),d=o("li",null,'纯字符串：当此字符串完整匹配目标域名时，该规则生效。例如 "xray.com" 匹配 "xray.com"，但不匹配 "www.xray.com"。',-1),i=o("li",null,[u("正则表达式：由 "),o("code",null,'"regexp:"'),u(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')],-1),q=o("li",null,[u("子域名 (推荐)：由 "),o("code",null,'"domain:"'),u(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com" 与 "xray.com"，但不匹配 "wxray.com"。')],-1),k=o("li",null,[u("子串：由 "),o("code",null,'"keyword:"'),u(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')],-1),b=u("预定义域名列表：由 "),m=o("code",null,'"geosite:"',-1),y=u(" 开头，余下部分是一个名称，如 "),g=o("code",null,"geosite:google",-1),S=u(" 或者 "),D=o("code",null,"geosite:cn",-1),P=u("。名称及域名列表参考 "),I=u("预定义域名列表"),h=u("。"),v=c('<blockquote><p><code>servers</code>: [string | <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 <a href="#serverobject">ServerObject</a> 。</p><p>当值为 <code>&quot;localhost&quot;</code> 时，表示使用本机预设的 DNS 配置。</p><p>当它的值是一个 DNS <code>&quot;IP:Port&quot;</code> 地址时，如 <code>&quot;8.8.8.8:53&quot;</code>，Xray 会使用此地址的指定 UDP 端口进行 DNS 查询。该查询遵循路由规则。不指定端口时，默认使用 53 端口。</p><p>当值是 <code>&quot;tcp://host:port&quot;</code> 的形式，如 <code>&quot;tcp://8.8.8.8:53&quot;</code>，Xray 会使用 <code>DNS over TCP</code> 进行查询。该查询遵循路由规则。不指定端口时，默认使用 53 端口。</p><p>当值是 <code>&quot;tcp+local://host:port&quot;</code> 的形式，如 <code>&quot;tcp+local://8.8.8.8:53&quot;</code>，Xray 会使用 <code>TCP 本地模式 (TCPL)</code> 进行查询。即 DNS 请求不会经过路由组件，直接通过 Freedom outbound 对外请求，以降低耗时。不指定端口时，默认使用 53 端口。</p><p>当值是 <code>&quot;https://host:port/dns-query&quot;</code> 的形式，如 <code>&quot;https://dns.google/dns-query&quot;</code>，Xray 会使用 <code>DNS over HTTPS</code> (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 <code>https://1.1.1.1/dns-query</code>。也可使用非标准端口和路径，如 <code>&quot;https://a.b.c.d:8443/my-dns-query&quot;</code></p><p>当值是 <code>&quot;https+local://host:port/dns-query&quot;</code> 的形式，如 <code>&quot;https+local://dns.google/dns-query&quot;</code>，Xray 会使用 <code>DOH 本地模式 (DOHL)</code> 进行查询，即 DOH 请求不会经过路由组件，直接通过 Freedom outbound 对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。</p><p>当值是 <code>&quot;quic+local://host&quot;</code> 的形式，如 <code>&quot;quic+local://dns.adguard.com&quot;</code>，Xray 会使用 <code>DNS over QUIC 本地模式 (DOQL)</code> 进行查询，即 DNS 请求不会经过路由组件，直接通过 Freedom outbound 对外请求。该方式需要 DNS 服务器支持 DNS over QUIC。默认使用 784 端口进行查询，可以使用非标端口。</p><p>当值是 <code>fakedns</code> 时，将使用 FakeDNS 功能进行查询。</p><div class="custom-container tip"><p class="custom-container-title">TIP 1</p><p>当使用 <code>localhost</code> 时，本机的 DNS 请求不受 Xray 控制，需要额外的配置才可以使 DNS 请求由 Xray 转发。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>不同规则初始化得到的 DNS 客户端会在 Xray 启动日志中以 <code>info</code> 级别体现，比如 <code>local DOH</code>、<code>remote DOH</code> 和 <code>udp</code> 等模式。</p></div>',12),N={class:"custom-container tip"},f=o("p",{class:"custom-container-title"},"TIP 3",-1),x=u("(v1.4.0+) 可以在 "),A=u("日志"),j=u(" 中打开 DNS 查询日志。"),U=c('<blockquote><p><code>clientIp</code>: string</p></blockquote><p>用于 DNS 查询时通知服务器以指定 IP 位置。不能是私有地址。</p><div class="custom-container tip"><p class="custom-container-title">TIP 1</p><p>需要 DNS 服务器支持 EDNS Client Subnet。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>可以在 <a href="#dnsobject">DnsObject</a> 为所有 DNS 服务器指定 clientIp, 也可在每个 DNS 服务器配置的 <a href="#serverobject">ServerObject</a> 为此 DNS 服务器指定 clientIp （优先级高于 <a href="#dnsobject">DnsObject</a> 的配置）。</p></div><blockquote><p><code>queryStrategy</code>: &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>默认值 <code>UseIP</code> 同时查询 A 和 AAAA 记录。<code>UseIPv4</code> 只查询 A 记录；<code>UseIPv6</code> 只查询 AAAA 记录。</p><p>Xray-core v1.8.6 新增功能：<code>queryStrategy</code> 可以在每一项 <code>DNS</code> 服务器中分别设置。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://8.8.8.8/dns-query&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;geosite:netflix&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv4&quot;</span> <span class="token comment">// netflix 的域名查询 A 记录</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;geosite:openai&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv6&quot;</span> <span class="token comment">// openai 的域名查询 AAAA 记录</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIP&quot;</span> <span class="token comment">// 全局同时查询 A 和 AAAA 记录</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP 1</p><p>全局 <code>&quot;queryStrategy&quot;</code> 值优先，当子项中的 <code>&quot;queryStrategy&quot;</code> 值与全局 <code>&quot;queryStrategy&quot;</code> 值冲突时，子项的查询将空响应。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>当子项中不写 <code>&quot;queryStrategy&quot;</code> 参数时，使用全局 <code>&quot;queryStrategy&quot;</code> 参数值。与 Xray-core v1.8.6 以前版本行为相同。</p></div><p>例如：<br> 全局 <code>&quot;queryStrategy&quot;: &quot;UseIPv6&quot;</code> 与 子项 <code>&quot;queryStrategy&quot;: &quot;UseIPv4&quot;</code> 冲突。<br> 全局 <code>&quot;queryStrategy&quot;: &quot;UseIPv4&quot;</code> 与 子项 <code>&quot;queryStrategy&quot;: &quot;UseIPv6&quot;</code> 冲突。<br> 全局 <code>&quot;queryStrategy&quot;: &quot;UseIP&quot;</code> 与 子项 <code>&quot;queryStrategy&quot;: &quot;UseIPv6&quot;</code> 不冲突。<br> 全局 <code>&quot;queryStrategy&quot;: &quot;UseIP&quot;</code> 与 子项 <code>&quot;queryStrategy&quot;: &quot;UseIPv4&quot;</code> 不冲突。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://8.8.8.8/dns-query&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;geosite:netflix&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv6&quot;</span> <span class="token comment">// 全局 &quot;UseIPv4&quot; 与 子项 &quot;UseIPv6&quot; 冲突</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv4&quot;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>子项 netflix 的域名查询由于 <code>&quot;queryStrategy&quot;</code> 值冲突，得到空响应。netflix 的域名由 <code>https://1.1.1.1/dns-query</code> 查询，得到 A 记录。</p><blockquote><p><code>disableCache</code>: true | false</p></blockquote><p><code>true</code> 禁用 DNS 缓存，默认为 <code>false</code>，即不禁用。</p><blockquote><p><code>disableFallback</code>: true | false</p></blockquote><p><code>true</code> 禁用 DNS 的 fallback 查询，默认为 <code>false</code>，即不禁用。</p><blockquote><p><code>disableFallbackIfMatch</code>: true | false</p></blockquote><p><code>true</code> 当 DNS 服务器的优先匹配域名列表命中时，禁用 fallback 查询，默认为 <code>false</code>，即不禁用。</p><blockquote><p><code>tag</code>: string</p></blockquote><p>由内置 DNS 发出的查询流量，除 <code>localhost</code>、<code>fakedns</code>、<code>TCPL</code>、<code>DOHL</code> 和 <code>DOQL</code> 模式外，都可以用此标识在路由使用 <code>inboundTag</code> 进行匹配。</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5353</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;domain:xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;clientIP&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 ServerObject 。</p><p>当值为 <code>&quot;localhost&quot;</code> 时，表示使用本机预设的 DNS 配置。</p><p>当它的值是一个 DNS <code>&quot;IP&quot;</code> 地址时，如 <code>&quot;8.8.8.8&quot;</code>，Xray 会使用此地址的指定 UDP 端口进行 DNS 查询。该查询遵循路由规则。默认使用 53 端口。</p><p>当值是 <code>&quot;tcp://host&quot;</code> 的形式，如 <code>&quot;tcp://8.8.8.8&quot;</code>，Xray 会使用 <code>DNS over TCP</code> 进行查询。该查询遵循路由规则。默认使用 53 端口。</p><p>当值是 <code>&quot;tcp+local://host&quot;</code> 的形式，如 <code>&quot;tcp+local://8.8.8.8&quot;</code>，Xray 会使用 <code>TCP 本地模式 (TCPL)</code> 进行查询。即 DNS 请求不会经过路由组件，直接通过 Freedom outbound 对外请求，以降低耗时。不指定端口时，默认使用 53 端口。</p><p>当值是 <code>&quot;https://host:port/dns-query&quot;</code> 的形式，如 <code>&quot;https://dns.google/dns-query&quot;</code>，Xray 会使用 <code>DNS over HTTPS</code> (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 <code>https://1.1.1.1/dns-query</code>。也可使用非标准端口和路径，如 <code>&quot;https://a.b.c.d:8443/my-dns-query&quot;</code></p><p>当值是 <code>&quot;https+local://host:port/dns-query&quot;</code> 的形式，如 <code>&quot;https+local://dns.google/dns-query&quot;</code>，Xray 会使用 <code>DOH 本地模式 (DOHL)</code> 进行查询，即 DOH 请求不会经过路由组件，直接通过 Freedom outbound 对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。</p><p>当值是 <code>&quot;quic+local://host:port&quot;</code> 的形式，如 <code>&quot;quic+local://dns.adguard.com&quot;</code>，Xray 会使用 <code>DOQ 本地模式 (DOQL)</code> 进行查询，即 DNS 请求不会经过路由组件，直接通过 Freedom outbound 对外请求。该方式需要 DNS 服务器支持 DNS over QUIC。默认使用 784 端口进行查询，可以使用非标端口。</p><p>当值是 <code>fakedns</code> 时，将使用 FakeDNS 功能进行查询。</p><blockquote><p><code>port</code>: number</p></blockquote><p>DNS 服务器端口，如 <code>53</code>。此项缺省时默认为 <code>53</code>。当使用 DOH、DOHL、DOQL 模式时该项无效，非标端口应在 URL 中指定。</p><blockquote><p><code>domains</code>: [string]</p></blockquote>',36),F=u("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),O=u("路由配置"),T=u(" 中相同。"),X=o("blockquote",null,[o("p",null,[o("code",null,"expectIPs"),u(":[string]")])],-1),w=u("一个 IP 范围列表，格式和 "),C=u("路由配置"),H=u(" 中相同。"),L=o("p",null,"当配置此项时，Xray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。",-1),E=o("p",null,"如果未配置此项，会原样返回 IP 地址。",-1),Q=o("blockquote",null,[o("p",null,[o("code",null,"skipFallback"),u(": true | false")])],-1),_=o("p",null,[o("code",null,"true"),u("，在进行 DNS fallback 查询时将跳过此服务器, 默认为 "),o("code",null,"false"),u("，即不跳过。")],-1);l.render=function(c,u){const l=s("RouterLink");return n(),a(p,null,[r,o("ul",null,[d,i,q,k,o("li",null,[b,m,y,g,S,D,P,e(l,{to:"/config/routing.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"},{default:t((()=>[I])),_:1}),h])]),v,o("div",N,[f,o("p",null,[x,e(l,{to:"/config/log.html"},{default:t((()=>[A])),_:1}),j])]),U,o("p",null,[F,e(l,{to:"/config/routing.html#ruleobject"},{default:t((()=>[O])),_:1}),T]),X,o("p",null,[w,e(l,{to:"/config/routing.html#ruleobject"},{default:t((()=>[C])),_:1}),H]),L,E,Q,_],64)};export default l;
