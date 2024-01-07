import{r as e,o as n,c as s,a as o,b as a,w as t,F as c,e as p,d as l}from"./app.6590e061.js";const r={},i=o("h1",{id:"blackhole",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#blackhole","aria-hidden":"true"},"#"),p(" Blackhole")],-1),u=p("Blackhole is an outbound data protocol that blocks all outbound data. When used in conjunction with "),d=p("routing configurations"),b=p(", it can be used to block access to certain websites."),h=l('<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>response</code>: <a href="#responseobject">ResponseObject</a></p></blockquote><p>Configures the response data for the blackhole.</p><p>After receiving the data to be forwarded, the blackhole will send the specified response data and then close the connection. The data to be forwarded will be discarded. If this field is not specified, the blackhole will simply close the connection.</p><h3 id="responseobject" tabindex="-1"><a class="header-anchor" href="#responseobject" aria-hidden="true">#</a> ResponseObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: &quot;http&quot; | &quot;none&quot;</p></blockquote><p>When <code>type</code> is set to <code>&quot;none&quot;</code> (default value), the blackhole will simply close the connection.</p><p>When <code>type</code> is set to <code>&quot;http&quot;</code>, the blackhole will send a simple HTTP 403 packet as the response and then close the connection.</p>',10);r.render=function(p,l){const r=e("RouterLink");return n(),s(c,null,[i,o("p",null,[u,a(r,{to:"/en/config/routing.html"},{default:t((()=>[d])),_:1}),b]),h],64)};export default r;
