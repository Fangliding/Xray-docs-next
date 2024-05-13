import{_ as c,r as t,o as d,c as p,a as o,b as e,d as s,w as i,e as n}from"./app-etJTFzvi.js";const l={},h=n(`<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h1><p>Uses standard WebSocket for data transmission.</p><p>WebSocket connections can be proxied by other web servers (like NGINX) or by VLESS fallback paths.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>WebSocket inbounds will parse the <code>X-Forwarded-For</code> header received, overriding the source address with a higher priority than the source address got from PROXY protocol.</p></div><h2 id="websocketobject" tabindex="-1"><a class="header-anchor" href="#websocketobject"><span>WebSocketObject</span></a></h2><p><code>WebSocketObject</code> corresponds to the <code>wsSettings</code> property of the transport configs.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acceptProxyProtocol&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>acceptProxyProtocol</code>: true | false</p></blockquote><p>Only used by inbounds. Indicates whether to accept the PROXY protocol.</p>`,9),u={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},b=o("strong",null,"If you are not familiar with this, leave it alone.",-1),k=n('<p>Commonplace reverse proxy software solutions (like HAProxy and NGINX) can be configured to have source IPs and ports sent with PROXY protocol. Same goes to VLESS fallbacks <code>xver</code>.</p><p>When <code>true</code>, after the underlying TCP connection is established, the downstream must first send the source IPs and ports in PROXY protocol v1 or v2, or the connection will be terminated.</p><blockquote><p><code>path</code>: string</p></blockquote><p>The HTTP path used by the WebSocket connection. Defaults to <code>&quot;/&quot;</code>.</p><p>If <code>path</code> contains the <code>ed</code> query parameter, <code>early data</code> will be activated for latency reduction, and its value will be the length threshold of the first packet. If the length of the first packet exceeds this value, <code>early data</code> won&#39;t be activated. The recommended value is 2560, with a maximum of 8192. Compatibility problems can occur when the value is set too high. Try lowering the threshold when encountering such problems.</p><blockquote><p><code>host</code>: string</p></blockquote><p>The <code>Host</code> header sent in HTTP requests. Defaults to an empty string. Servers will not validate the <code>Host</code> header sent by clients when left blank.</p><p>If the <code>Host</code> header has been defined on the server in any way, the server will validate if the <code>Host</code> header matches.</p><p>The current priority of the <code>Host</code> header sent by clients: <code>host</code> &gt; <code>headers</code> &gt; <code>address</code></p><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>Customized HTTP headers defined in key-value pairs. Defaults to empty.</p><h2 id="browser-dialer" tabindex="-1"><a class="header-anchor" href="#browser-dialer"><span>Browser Dialer</span></a></h2>',12);function m(f,v){const a=t("ExternalLinkIcon"),r=t("RouterLink");return d(),p("div",null,[h,o("p",null,[e("The "),o("a",u,[e("PROXY protocol"),s(a)]),e(" is used to transmit the real source IP and port of connections. "),b]),k,o("p",null,[e("Use the browser to handle TLS, see "),s(r,{to:"/en/config/features/browser_dialer.html"},{default:i(()=>[e("Browser Dialer")]),_:1})])])}const y=c(l,[["render",m],["__file","websocket.html.vue"]]);export{y as default};
