import{r as n,o as s,c as a,a as p,b as e,F as t,d as o,e as r}from"./app.c4cd2a44.js";const l={},u=o('<h1 id="metrics123" tabindex="-1"><a class="header-anchor" href="#metrics123" aria-hidden="true">#</a> metrics123</h1><p>更直接（希望更好）的统计导出方式。</p><h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置" aria-hidden="true">#</a> 相关配置</h2><p>可以在 inbounds 配置中增加一个 metrics 的 inbound</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">11111</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;metrics_in&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在路由配置中增加针对 metrics inbound 的路由规则</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">&quot;metrics_in&quot;</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;metrics_out&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在基础配置中增加 metrics</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>    <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;metrics_out&quot;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="pprof" tabindex="-1"><a class="header-anchor" href="#pprof" aria-hidden="true">#</a> pprof</h3><p>Access <code>http://127.0.0.1:11111/debug/pprof/</code> or use go tool pprof to start profiling or inspect running goroutines.</p><h3 id="expvars" tabindex="-1"><a class="header-anchor" href="#expvars" aria-hidden="true">#</a> expvars</h3><p>Access <code>http://127.0.0.1:11111/debug/vars</code></p><p>Variables exported include:</p><ul><li><code>stats</code> includes statistics about inbounds, outbounds and users</li><li><code>observatory</code> includes observatory results</li></ul>',16),c=r("for example with "),i={href:"https://github.com/yichya/luci-app-xray",target:"_blank",rel:"noopener noreferrer"},b=r("luci-app-xray"),k=r(" you are likely to get a result like this (standard expvar things like "),m=p("code",null,"cmdline",-1),d=r(" and "),y=p("code",null,"memstats",-1),q=r(" are omitted)"),_=o('<details><summary>点击查看</summary><br><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;observatory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;tcp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;alive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">782</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;outbound_tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp_outbound&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;last_seen_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477189</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;last_try_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477189</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;udp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;alive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">779</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;outbound_tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;udp_outbound&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;last_seen_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477191</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;last_try_time&quot;</span><span class="token operator">:</span> <span class="token number">1648477191</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;dns_server_inbound_5300&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">14286</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">5857</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;http_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">74460</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">10231</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;https_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">6327</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1347</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;socks_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">19925615</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">5512</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;tproxy_tcp_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">4739161</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1568869</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;tproxy_udp_inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">2608142</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;blackhole_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;direct&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">97714548</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">3234617</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;dns_server_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">7116</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">2229</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;manual_tproxy_outbound_tcp_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;manual_tproxy_outbound_udp_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;tcp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">23873238</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">1049595</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;udp_outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;downlink&quot;</span><span class="token operator">:</span> <span class="token number">639282</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;uplink&quot;</span><span class="token operator">:</span> <span class="token number">74634</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div></details>',1),h=r("To get a better view of these numbers, "),g={href:"https://github.com/netdata/netdata",target:"_blank",rel:"noopener noreferrer"},x=r("Netdata"),v=r(" (with python.d plugin) is a great option:"),f=o('<ol><li>Edit related configuration file (<code>sudo /etc/netdata/edit-config python.d/go_expvar.conf</code>)</li><li>Take the following configuration file as an example:</li></ol><details><summary>点击查看</summary><br><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray:\n  name: &#39;xray&#39;\n  update_every: 2\n  url: &#39;http://127.0.0.1:11111/debug/vars&#39;\n  collect_memstats: false\n  extra_charts:\n     - id: &#39;inbounds&#39;\n       options:\n         name: &#39;inbounds&#39;\n         title: &#39;Xray System Inbounds&#39;\n         units: bytes\n         family: xray\n         context: xray.inbounds\n         chart_type: line\n       lines:\n         - expvar_key: stats.inbound.tproxy_tcp_inbound.downlink\n           id: &#39;tcp.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.tproxy_udp_inbound.downlink\n           id: &#39;udp.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.http_inbound.downlink\n           id: &#39;http.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.https_inbound.downlink\n           id: &#39;https.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.socks_inbound.downlink\n           id: &#39;socks.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.tproxy_tcp_inbound.uplink\n           id: &#39;tcp.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.tproxy_udp_inbound.uplink\n           id: &#39;udp.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.http_inbound.uplink\n           id: &#39;http.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.https_inbound.uplink\n           id: &#39;https.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.inbound.socks_inbound.uplink\n           id: &#39;socks.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n     - id: &#39;outbounds&#39;\n       options:\n         name: &#39;outbounds&#39;\n         title: &#39;Xray System Outbounds&#39;\n         units: bytes\n         family: xray\n         context: xray.outbounds\n         chart_type: line\n       lines:\n         - expvar_key: stats.outbound.tcp_outbound.downlink\n           id: &#39;tcp.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.outbound.udp_outbound.downlink\n           id: &#39;udp.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.outbound.direct.downlink\n           id: &#39;direct.downlink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.outbound.tcp_outbound.uplink\n           id: &#39;tcp.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.outbound.udp_outbound.uplink\n           id: &#39;udp.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n         - expvar_key: stats.outbound.direct.uplink\n           id: &#39;direct.uplink&#39;\n           algorithm: incremental\n           expvar_type: int\n     - id: &#39;observatory&#39;\n       options:\n         name: &#39;observatory&#39;\n         title: &#39;Xray Observatory Metrics&#39;\n         units: milliseconds\n         family: xray\n         context: xray.observatory\n         chart_type: line\n       lines:\n         - expvar_key: observatory.tcp_outbound.delay\n           id: tcp\n           expvar_type: int\n         - expvar_key: observatory.udp_outbound.delay\n           id: udp\n           expvar_type: int\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div></details><p>And you will get a nice plot like this:</p><p><img src="https://github.com/chika0801/Xray-docs-next/assets/88967758/455e88ce-ced2-4593-a9fa-425bb293215b" alt="160428235-2988bf69-5d6c-41ec-8267-1bd512508aa8"></p><h3 id="additional" tabindex="-1"><a class="header-anchor" href="#additional" aria-hidden="true">#</a> Additional</h3><p>Maybe reusing the empty object <code>stats</code> in config file is better than adding <code>metrics</code> here?</p><p><strong>Edit:</strong> removed prometheus related things and added usage about expvars</p>',7);l.render=function(o,r){const l=n("OutboundLink");return s(),a(t,null,[u,p("p",null,[c,p("a",i,[b,e(l)]),k,m,d,y,q]),_,p("p",null,[h,p("a",g,[x,e(l)]),v]),f],64)};export default l;
