import{r as n,o as s,c as a,a as e,b as o,w as t,F as p,e as l,d as c}from"./app.c4cd2a44.js";const u={},r=e("h1",{id:"vmess",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),l(" VMess")],-1),i=l("VMess"),d=l(" 是一个加密传输协议，通常作为 Xray 客户端和服务器之间的桥梁。"),b=c('<div class="custom-container danger"><p class="custom-container-title">警告</p><p>VMess 依赖于系统时间，请确保使用 Xray 的系统 UTC 时间误差在 120 秒之内，时区无关。在 Linux 系统中可以安装<code>ntp</code>服务来自动同步系统时间。</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;detour&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户<a href="#clientobject">ClientObject</a>。</p><p>当此配置用作动态端口时，Xray 会自动创建用户。</p><blockquote><p><code>detour</code>: <a href="#detourobject">DetourObject</a></p></blockquote><p>指示对应的出站协议使用另一个服务器。</p><blockquote><p><code>default</code>: <a href="#defaultobject">DefaultObject</a></p></blockquote><p>可选，clients 的默认配置。仅在配合<code>detour</code>时有效。</p><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>Vmess 的用户 ID，可以是任意小于 30 字节的字符串, 也可以是一个合法的 UUID.</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>自定义字符串和其映射的 UUID 是等价的, 这意味着你将可以这样在配置文件中写 id 来标识同一用户,即</p><ul><li>写 <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>或写 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (此 UUID 是 <code>我爱🍉老师1314</code> 的 UUID 映射)</li></ul></div>',16),k=l("其映射标准在 "),m={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},q=l("VLESS UUID 映射标准：将自定义字符串映射为一个 UUIDv5"),h=e("p",null,[l("你可以使用命令 "),e("code",null,'xray uuid -i "自定义字符串"'),l(" 生成自定义字符串所映射的的 UUID。")],-1),v=e("blockquote",null,[e("p",null,[l("也可以使用命令 "),e("code",null,"xray uuid"),l(" 生成随机的 UUID.")])],-1),g=e("blockquote",null,[e("p",null,[e("code",null,"level"),l(": number")])],-1),j=l("用户等级，连接会使用这个用户等级对应的 "),f=l("本地策略"),y=l("。"),U=l("level 的值, 对应 "),x=l("policy"),D=l(" 中 "),I=e("code",null,"level",-1),_=l(" 的值。 如不指定, 默认为 0。"),O=c('<blockquote><p><code>email</code>: string</p></blockquote><p>用户邮箱地址，用于区分不同用户的流量。</p><h3 id="detourobject" tabindex="-1"><a class="header-anchor" href="#detourobject" aria-hidden="true">#</a> DetourObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>to</code>: string</p></blockquote><p>一个 inbound 的<code>tag</code>, 指定的 inbound 的必须是使用 VMess 协议的 inbound.</p><h3 id="defaultobject" tabindex="-1"><a class="header-anchor" href="#defaultobject" aria-hidden="true">#</a> DefaultObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>level</code>: number</p></blockquote>',9),V=l("用户等级，连接会使用这个用户等级对应的 "),C=l("本地策略"),L=l("。"),X=l("level 的值, 对应 "),M=l("policy"),S=l(" 中 "),T=e("code",null,"level",-1),w=l(" 的值。 如不指定, 默认为 0。");u.render=function(l,c){const u=n("RouterLink"),E=n("OutboundLink");return s(),a(p,null,[r,e("p",null,[o(u,{to:"/development/protocols/vmess.html"},{default:t((()=>[i])),_:1}),d]),b,e("p",null,[k,e("a",m,[q,o(E)])]),h,v,g,e("p",null,[j,o(u,{to:"/config/policy.html#levelpolicyobject"},{default:t((()=>[f])),_:1}),y]),e("p",null,[U,o(u,{to:"/config/policy.html#policyobject"},{default:t((()=>[x])),_:1}),D,I,_]),O,e("p",null,[V,o(u,{to:"/config/policy.html#levelpolicyobject"},{default:t((()=>[C])),_:1}),L]),e("p",null,[X,o(u,{to:"/config/policy.html#policyobject"},{default:t((()=>[M])),_:1}),S,T,w])],64)};export default u;
