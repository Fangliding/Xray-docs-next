import{r as n,o as e,c as s,a,b as o,w as t,F as l,e as p,d as c}from"./app.c4cd2a44.js";const r={},i=a("h1",{id:"vless",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vless","aria-hidden":"true"},"#"),p(" VLESS")],-1),u=a("div",{class:"custom-container danger"},[a("p",{class:"custom-container-title"},"Danger"),a("p",null,"Currently, VLESS does not provide built-in encryption. Please use it with a reliable channel, such as TLS.")],-1),d=a("p",null,"VLESS is a stateless lightweight transport protocol that consists of inbound and outbound parts. It can serve as a bridge between Xray clients and servers.",-1),b=p("Unlike "),h=p("VMess"),m=p(", VLESS does not rely on system time. The authentication method is still UUID-based."),k=c('<h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;decryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>An array representing a group of users approved by the server.</p><p>Each item in the array is a user <a href="#clientobject">ClientObject</a>.</p><blockquote><p><code>decryption</code>: &quot;none&quot;</p></blockquote><p>Currently, you need to specify <code>&quot;none&quot;</code>. It cannot be left empty. If the <code>decryption</code> value is not set correctly, you will receive an error message when using Xray or <code>-test</code>.</p><p>Note that <code>decryption</code> is at the same level as <code>clients</code>. The placement of <code>decryption</code> is different from the <code>encryption</code> in the vmess protocol because if there is a layer of agreed encryption, the server needs to decrypt it first to know which user it belongs to.</p>',8),f=a("code",null,"fallbacks",-1),g=p(": [ "),q=p("FallbackObject"),y=p(" ]"),v=p("An array that contains a series of powerful fallback configurations (optional). The specific configuration for "),j=a("code",null,"fallbacks",-1),S=p(" can be found in the "),w=p("FallbackObject"),U=p(" documentation."),x=c('<h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID for VLESS. It can be any string less than 30 bytes or a valid UUID. Custom strings and their corresponding UUIDs are equivalent, which means you can use either of the following in the configuration file to identify the same user:</p><ul><li><code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code></li><li><code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (This UUID is the mapping of the string &quot;我爱 🍉 老师 1314&quot;)</li></ul>',5),I=p("The mapping standard is described in the "),L={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},T=p("VLESS UUID Mapping Standard: Mapping a Custom String to a UUIDv5"),C=p("."),D=a("p",null,[p("You can use the command "),a("code",null,'xray uuid -i "custom string"'),p(" to generate the UUID corresponding to a custom string.")],-1),E=a("blockquote",null,[a("p",null,[p("You can also use the command "),a("code",null,"xray uuid"),p(" to generate a random UUID.")])],-1),O=a("blockquote",null,[a("p",null,[a("code",null,"level"),p(": number")])],-1),V=p("The user level that the connection will use to determine the corresponding "),X=p("Local Policy"),_=p("."),F=p("The value of "),P=a("code",null,"level",-1),A=p(" corresponds to the value of "),M=a("code",null,"level",-1),N=p(" in the "),Y=p("policy"),K=p(". If not specified, the default value is 0."),R=c("<blockquote><p><code>email</code>: string</p></blockquote><p>User email address used to differentiate traffic from different users (reflected in logs and statistics).</p><blockquote><p><code>flow</code>: string</p></blockquote><p>Flow control mode used to select the XTLS algorithm.</p><p>Currently, the following flow control modes are available for inbound protocols:</p><ul><li>No <code>flow</code>, empty string, or <code>none</code>: Use regular TLS proxy.</li><li><code>xtls-rprx-vision</code>: Use the new XTLS mode, including inner-handshake random padding.</li></ul><p>Additionally, XTLS currently only supports TCP, mKCP, and DomainSocket as transport methods.</p>",7);r.render=function(p,c){const r=n("RouterLink"),z=n("OutboundLink");return e(),s(l,null,[i,u,d,a("p",null,[b,o(r,{to:"/en/config/inbounds/vmess.html"},{default:t((()=>[h])),_:1}),m]),k,a("blockquote",null,[a("p",null,[f,g,o(r,{to:"/en/config/features/fallback.html"},{default:t((()=>[q])),_:1}),y])]),a("p",null,[v,j,S,o(r,{to:"/en/config/features/fallback.html#fallbacks-configuration"},{default:t((()=>[w])),_:1}),U]),x,a("p",null,[I,a("a",L,[T,o(z)]),C]),D,E,O,a("p",null,[V,o(r,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[X])),_:1}),_]),a("p",null,[F,P,A,M,N,o(r,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[Y])),_:1}),K]),R],64)};export default r;
