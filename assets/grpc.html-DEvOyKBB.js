import{_ as e,r as n,o as a,c,a as s,b as p,d as i,e as t}from"./app-kDZ-w46R.js";const r={},l=t(`<h1 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc"><span>gRPC</span></a></h1><p>基于 gRPC 的传输方式。</p><p>它基于 HTTP/2 协议，理论上可以通过其它支持 HTTP/2 的服务器（如 Nginx）进行中转。 gRPC（HTTP/2）内置多路复用，不建议使用 gRPC 与 HTTP/2 时启用 mux.cool。</p><div class="custom-container warning"><p class="custom-container-title">⚠⚠⚠</p><ul><li>gRPC 不支持指定 Host。请在出站代理地址中填写 <strong>正确的域名</strong> ，或在 <code>(x)tlsSettings</code> 中填写 <code>ServerName</code>，否则无法连接。</li><li>gRPC 不支持回落到其他服务。</li><li>gRPC 服务存在被主动探测的风险。建议使用 Caddy 或 Nginx 等反向代理工具，通过 Path 前置分流。</li></ul></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果您使用 Caddy 或 Nginx 等反向代理，请注意下列事项：</p><ul><li>请确定反向代理服务器开启了 HTTP/2</li><li>请使用 HTTP/2 或 h2c (Caddy)，grpc_pass (Nginx) 连接到 Xray。</li><li>普通模式的 Path 为 <code>/\${serviceName}/Tun</code>, Multi 模式为 <code>/\${serviceName}/TunMulti</code></li><li>如果需要接收客户端 IP，可以通过由 Caddy / Nginx 发送 <code>X-Real-IP</code> header 来传递客户端 IP。</li></ul></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你正在使用回落，请注意下列事项：</p><ul><li>不建议回落到 gRPC，存在被主动探测的风险。</li><li>请确认<code>h2</code> 位于 (x)tlsSettings.alpn 中的第一顺位，否则 gRPC（HTTP/2）可能无法完成 TLS 握手。</li><li>gRPC 无法通过进行 Path 分流。</li></ul></div><h2 id="grpcobject" tabindex="-1"><a class="header-anchor" href="#grpcobject"><span>GRPCObject</span></a></h2><p><code>GRPCObject</code> 对应传输配置的 <code>grpcSettings</code> 项。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multiMode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user_agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom user agent&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;idle_timeout&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token property">&quot;health_check_timeout&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;permit_without_stream&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;initial_windows_size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>serviceName</code>: string</p></blockquote><p>一个字符串，指定服务名称，<strong>类似于</strong> HTTP/2 中的 Path。 客户端会使用此名称进行通信，服务端会验证服务名称是否匹配。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当 <code>serviceName</code> 起始为斜杠时可以自定义 path。<br> 例如在服务端填写 <code>&quot;serviceName&quot;: &quot;/my/sample/path1|path2&quot;</code>，客户端可填写 <code>&quot;serviceName&quot;: &quot;/my/sample/path1&quot;</code> 或 <code>&quot;/my/sample/path2&quot;</code>。</p></div><blockquote><p><code>user_agent</code>: string</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><p>设置 gRPC 的用户代理，可能能防止某些 CDN 阻止 gRPC 流量。</p>`,15),d=s("code",null,"multiMode",-1),u=t('<p><code>true</code> 启用 <code>multiMode</code>，默认值为： <code>false</code>。</p><p>这是一个 <strong>实验性</strong> 选项，可能不会被长期保留，也不保证跨版本兼容。此模式在 <strong>测试环境中</strong> 能够带来约 20% 的性能提升，实际效果因传输速率不同而不同。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><blockquote><p><code>idle_timeout</code>: number</p></blockquote><p>单位秒，当这段时间内没有数据传输时，将会进行健康检查。如果此值设置为 <code>10</code> 以下，将会使用 <code>10</code>，即最小值。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果没有使用 Caddy 或 Nginx 等反向代理工具（<strong>通常不会</strong>），设为 <code>60</code> 以下，服务端可能发送意外的 h2 GOAWAY 帧以关闭现有连接。</p></div><p>健康检查默认<strong>不启用</strong>。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>可能会解决一些“断流”问题。</p></div><blockquote><p><code>health_check_timeout</code>: number</p></blockquote><p>单位秒，健康检查的超时时间。如果在这段时间内没有完成健康检查，且仍然没有数据传输时，即认为健康检查失败。默认值为 <code>20</code>。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><blockquote><p><code>permit_without_stream</code>: true | false</p></blockquote><p><code>true</code> 允许在没有子连接时进行健康检查。默认值为 <code>false</code>。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><blockquote><p><code>initial_windows_size</code>: number</p></blockquote><p>h2 Stream 初始窗口大小。当值小于等于 <code>0</code> 时，此功能不生效。当值大于 <code>65535</code> 时，动态窗口机制（Dynamic Window）会被禁用。默认值为 <code>0</code>，即不生效。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>只需</strong>在<strong>出站</strong>（<strong>客户端</strong>）配置。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过 Cloudflare CDN 时，可将值设为 <code>65536</code> 及以上，即禁用动态窗口机制（Dynamic Window），可防止 Cloudflare CDN 发送意外的 h2 GOAWAY 帧以关闭现有连接。</p></div>',19);function g(m,v){const o=n("Badge");return a(),c("div",null,[l,s("blockquote",null,[s("p",null,[d,p(": true | false "),i(o,{text:"BETA",type:"warning"})])]),u])}const q=e(r,[["render",g],["__file","grpc.html.vue"]]);export{q as default};
