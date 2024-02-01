import{_ as e,r as t,o,c as p,a as i,b as n,d as c,w as l,e as s}from"./app-kDZ-w46R.js";const u={},r=s(`<h1 id="fakedns" tabindex="-1"><a class="header-anchor" href="#fakedns"><span>FakeDNS</span></a></h1><p>FakeDNS is used to obtain target domain names by forging DNS, which can reduce the delay in DNS queries and work with transparent proxies to obtain target domain names.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>FakeDNS may contaminate the local DNS and cause &quot;network unreachable&quot; after Xray is closed.</p></div><h2 id="fakednsobject" tabindex="-1"><a class="header-anchor" href="#fakednsobject"><span>FakeDNSObject</span></a></h2><p><code>FakeDNSObject</code> corresponds to the <code>fakedns</code> item in the configuration file.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198.18.0.0/16&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FakeDnsObject</code> can also be configured as an array containing multiple FakeIP Pools. When a DNS query request is received, FakeDNS returns a group of FakeIPs obtained by multiple FakeIP Pools at the same time.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198.18.0.0/15&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fc00::/18&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ipPool</code>: CIDR</p></blockquote><p>FakeDNS will use the IP block specified by this option to allocate addresses.</p><blockquote><p><code>poolSize</code>: int</p></blockquote><p>Specifies the maximum number of domain name-IP mappings stored by FakeDNS. When the number of mappings exceeds this value, mappings will be eliminated according to the LRU rule. The default is 65535.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p><code>poolSize</code> must be less than or equal to the total number of addresses corresponding to <code>ipPool</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If the <code>dns</code> item in the configuration file sets <code>fakedns</code>, but the configuration file does not set <code>FakeDNSObject</code>, Xray will initialize <code>FakeDNSObject</code> based on the <code>queryStrategy</code> of the DNS component.</p><p>When <code>queryStrategy</code> is set to <code>UseIP</code>, the initialized FakeIP Pool is equivalent to</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198.18.0.0/15&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">32768</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fc00::/18&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">32768</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>queryStrategy</code> is set to <code>UseIPv4</code>, the initialized FakeIP Pool is equivalent to</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198.18.0.0/15&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>queryStrategy</code> is set to <code>UseIPv6</code>, the initialized FakeIP Pool is equivalent to</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ipPool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fc00::/18&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;poolSize&quot;</span><span class="token operator">:</span> <span class="token number">65535</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to use?</span></a></h3>`,15),d=s(`<p>Only by routing DNS queries to FakeDNS can it be effective.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span> <span class="token comment">// fakedns comes first</span>
      <span class="token string">&quot;8.8.8.8&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dns-in&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Intercept DNS traffic from DNS query inbound or from inbound traffic of transparent proxies.</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dns-out&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When external DNS requests enter the FakeDNS component, it will return IP addresses within its own <code>ipPool</code> as the virtual resolution results of the domain name, and record the mapping relationship between the domain name and the virtual resolution results.</p><p>In addition, you need to enable <code>Sniffing</code> in the <strong>client</strong> for incoming traffic that needs to be proxied, and use the <code>fakedns</code> target address reset.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Use &quot;fakedns&quot;, or use it with other sniffer, or directly use &quot;fakedns+others&quot;.</span>
  <span class="token property">&quot;metadataOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>        <span class="token comment">// When this item is true, destOverride can only use fakedns.</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>If the FakeIP is not correctly restored to the domain name, the server will not be accessible.</p></div><h3 id="using-with-other-types-of-dns" tabindex="-1"><a class="header-anchor" href="#using-with-other-types-of-dns"><span>Using with other types of DNS</span></a></h3><h4 id="coexistence-with-dns-shunting" tabindex="-1"><a class="header-anchor" href="#coexistence-with-dns-shunting"><span>Coexistence with DNS shunting</span></a></h4><p>When using DNS shunting, to give <code>fakedns</code> a higher priority, you need to add the same <code>domains</code> as other types of DNS.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// consistent with the content used in the shunt below</span>
        <span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;domain:example.com&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;domain:example.com&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;8.8.8.8&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fakedns-blacklist" tabindex="-1"><a class="header-anchor" href="#fakedns-blacklist"><span>FakeDNS blacklist</span></a></h4><p>If you do not want certain domain names to use FakeDNS, you can add <code>domains</code> configuration in other types of DNS configurations so that when the specified domain names are matched, other DNS servers have a higher priority than FakeDNS, thereby achieving the FakeDNS blacklist mechanism.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;domain:do-not-use-fakedns.com&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fakedns-whitelist" tabindex="-1"><a class="header-anchor" href="#fakedns-whitelist"><span>FakeDNS whitelist</span></a></h4><p>If you only want certain domain names to use FakeDNS, you can add <code>domains</code> configuration to <code>fakedns</code> so that when the specified domain names are matched, <code>fakedns</code> has a higher priority than other DNS servers, thereby achieving the FakeDNS whitelist mechanism.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;domain:only-this-use-fakedns.com&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function k(v,m){const a=t("RouterLink");return o(),p("div",null,[r,i("p",null,[n("FakeDNS is essentially a "),c(a,{to:"/en/config/dns.html#serverobject"},{default:l(()=>[n("DNS server")]),_:1}),n(" that can be used in conjunction with any DNS rules.")]),d])}const q=e(u,[["render",k],["__file","fakedns.html.vue"]]);export{q as default};
