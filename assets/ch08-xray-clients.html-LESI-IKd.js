import{_ as c,r as p,o as i,c as u,a as n,b as s,d as a,w as l,e as t}from"./app-kDZ-w46R.js";const r="/Xray-docs-next/assets/ch08-img01-flow-Nus5m8Xg.png",d="/Xray-docs-next/assets/ch08-img02-buzz-BMkpbZbZ.png",k={},v=t('<h1 id="【第-8-章】xray-客户端篇" tabindex="-1"><a class="header-anchor" href="#【第-8-章】xray-客户端篇"><span>【第 8 章】Xray 客户端篇</span></a></h1><h2 id="_8-1-xray-的工作原理简述" tabindex="-1"><a class="header-anchor" href="#_8-1-xray-的工作原理简述"><span>8.1 Xray 的工作原理简述</span></a></h2><p>要正确的配置和使用<code>Xray</code>，就需要正确的理解其工作原理，对于新人，可以先看看下面简化的示意图（省略了许多复杂的设置）：</p><p><img src="'+r+'" alt="Xray数据流向"></p><p>这其中的关键点是：</p><ol><li><p>APP 要主动或借助转发工具，将数据【流入(<code>inbounds</code>)】<code>Xray</code> 客户端</p></li><li><p>流量进入客户端后，会被【客户端路由(<code>routing</code>)】按规则处理后，向不同方向【流出<code>(outbounds)</code>】<code>Xray</code> 客户端。比如：</p><ol><li>国内流量直连（<code>direct</code>）</li><li>国外流量转发 VPS（<code>proxy</code>）</li><li>广告流量屏蔽（<code>block</code>）</li></ol></li><li><p>向 VPS 转发的国外流量，会跨过防火墙，【流入(<code>inbounds</code>)】 <code>Xray</code> 服务器端</p></li><li><p>流量进入服务器端后，与客户端一样，会被【服务器端路由(<code>routing</code>)】按规则处理后，向不同方向【流出<code>(outbounds)</code>】：</p><ol><li>因为已经在防火墙之外，所以流量默认直连，你就可以访问到不存在网站们了（<code>direct</code>）</li><li>如果需要在不同的 VPS 之间做链式转发，就可以继续配置转发规则（<code>proxy</code>）</li><li>你可以在服务器端继续禁用各种你想禁用的流量，如广告、BT 下载等（<code>block</code>）</li></ol></li></ol>',6),m={class:"custom-container warning"},q=n("p",{class:"custom-container-title"},"注意",-1),b=n("p",null,[s("请务必记得，"),n("code",null,"Xray"),s(" 的路由配置非常灵活，上面的说明只是无限可能性中的一种。")],-1),g=n("p",null,[s("借助 "),n("code",null,"geosite.dat"),s(" 和 "),n("code",null,"geoip.dat"),s(" 这两个文件，可以很灵活的从【域名】和【IP】这两个角度、不留死角的控制流量流出的方向。这比曾经单一笼统的 "),n("code",null,"GFWList"),s(" 强大很多很多，可以做到非常细致的微调：比如可以指定 Apple 域名直连或转发、指定亚马逊域名代理或转发，百度的域名屏蔽等等。。。）")],-1),y=n("h2",{id:"_8-2-客户端与服务器端正确连接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-2-客户端与服务器端正确连接"},[n("span",null,"8.2 客户端与服务器端正确连接")])],-1),h=n("p",null,[s("现在你已经理解了 "),n("code",null,"Xray"),s(" 的工作原理，那么接下来的配置，其实就是【告诉你的客户端如何连接 VPS 服务器】。这和你已经很熟悉的、告诉"),n("code",null,"PuTTY"),s("如何远程连接服务器是一样的。只不过 Xray 连接时的要素不止是【IP 地址】+【端口】+【用户名】+【密码】这四要素了。")],-1),_=n("code",null,"Xray",-1),x=n("code",null,"config.json",-1),f=n("code",null,"Xray",-1),X=n("code",null,"VLESS",-1),S=n("code",null,"XTLS",-1),N=t('<ul><li>服务器【地址】: <code>a-name.yourdomain.com</code></li><li>服务器【端口】: <code>443</code></li><li>连接的【协议】: <code>vless</code></li><li>连接的【流控】: <code>xtls-rprx-vision</code> (vision 模式适合全平台)</li><li>连接的【验证】: <code>uuiduuid-uuid-uuid-uuiduuiduuid</code></li><li>连接的【安全】: <code>&quot;allowInsecure&quot;: false</code></li></ul><p>鉴于新人一般都会使用手机 APP 或者电脑的 GUI 客户端，我就把常用的客户端罗列在下面。每个客户端都有自己独特的配置界面，逐一截图展示并不现实，所以请你务必仔细阅读这些客户端的说明、然后把上述要素填入合适的地方即可。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>许多工具其实是同时支持 <code>xray-core</code> 和 <code>v2fly-core</code> 的，但默认内置的不一定是哪个，所以别忘记检查一下是否是你想要的那个在工作哦！</p></div>',3),P=n("p",null,[n("strong",null,"v2rayN - 适用于 Windows 平台")],-1),w={href:"https://github.com/2dust/v2rayN/releases",target:"_blank",rel:"noopener noreferrer"},I=n("li",null,"请根据该客户端的说明进行设置",-1),T=n("p",null,[n("strong",null,"v2rayNG - 适用于 Android 平台")],-1),L={href:"https://github.com/2dust/v2rayNG/releases",target:"_blank",rel:"noopener noreferrer"},V=n("li",null,"请根据该客户端的说明进行设置",-1),C=n("li",null,[n("p",null,[n("strong",null,"Shadowrocket - 适用于 iOS, 基于苹果 M 芯片的 macOS")]),n("ul",null,[n("li",null,"你需要注册一个【非中国区】的 iCloud 账户"),n("li",null,"你需要通过 App Store 搜索并购买"),n("li",null,"请根据该客户端的说明进行设置")])],-1),D=n("p",null,[n("strong",null,"Qv2ray - 跨平台图形界面，适用于 Linux, Windows, macOS")],-1),j={href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"},G={href:"https://qv2ray.net/",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,"请根据该客户端的说明进行设置",-1),O=n("p",null,[n("strong",null,"V2RayXS - 基于 V2RayX 开发的一款使用 xray-core 的 macOS 客户端")],-1),R={href:"https://github.com/tzmax/v2rayXS/releases",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/XTLS/Xray-core/issues/91",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,"请根据该客户端的说明进行设置",-1),Q=t('<p>到这一步，你的全套配置就已经可以正常使用啦！</p><h2 id="_8-3-附加题-1-在-pc-端手工配置-xray-core" tabindex="-1"><a class="header-anchor" href="#_8-3-附加题-1-在-pc-端手工配置-xray-core"><span>8.3 附加题 1：在 PC 端手工配置 <code>xray-core</code></span></a></h2><p>虽然到上面一步已经可以结束了，但是如果你是个好奇心强、记忆力好的的同学，一定会想起来我在上一章说过，你把<code>xray-core</code> 的二进制文件“放在服务器运行，它就是服务器端；你把它下载到本地电脑运行，它就是客户端。” 那究竟要怎样直接使用 <code>xray-core</code> 做客户端呢？</p><p>为了回答这个问题，我加入了附加题章节，有一点点超纲，有一点点麻烦，但费这个笔墨是因为这个方式有它的优势：</p><ul><li><p>第一时间获得最新版而无需等待 APP 升级适配</p></li><li><p>灵活自由的路由配置能力（当然 GUI 客户端中 Qv2ray 的高级路由编辑器非常强大，也可以完整实现 xray-core 的路由配置功能）</p></li><li><p>节约系统资源 （GUI 界面一定会有资源消耗，消耗的多少则取决于客户端的实现）</p></li></ul><p>它的劣势应该就是【需要手写配置文件】有点麻烦了。但其实，你想想，服务器上你已经成功的写过一次了，现在又有什么区别呢？接下来，还是老样子，我们分解一下步骤：</p>',6),W={href:"https://github.com/XTLS/Xray-core/releases",target:"_blank",rel:"noopener noreferrer"},F=t(`<li><p>在合适的文件夹建立空白配置文件：<code>config.json</code> （自己常用平台下新建文件大家肯定都会，这就真不用啰嗦了）</p></li><li><p>至于什么是“合适的文件夹”？这就取决于具体的平台了~</p></li><li><p>填写客户端配置</p><ul><li>我就以 <code>8.1</code> 原理说明里展示的基本三类分流（国内流量直连、国际流量转发 VPS、广告流量屏蔽），结合 <code>8.2</code> 的连接要素，写成一个配置文件</li><li>请将 <code>uuid</code> 替换成与你服务器一致的 <code>uuid</code></li><li>请将 <code>address</code> 替换成你的真实域名</li><li>请将 <code>serverName</code> 替换成你的真实域名</li><li>各个配置模块的说明我都已经（很啰嗦的）放在对应的配置点上了</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// REFERENCE:</span>
<span class="token comment">// https://github.com/XTLS/Xray-examples</span>
<span class="token comment">// https://xtls.github.io/config/</span>

<span class="token comment">// 常用的config文件，不论服务器端还是客户端，都有5个部分。外加小小白解读：</span>
<span class="token comment">// ┌─ 1_log          日志设置 - 日志写什么，写哪里（出错时有据可查）</span>
<span class="token comment">// ├─ 2_dns          DNS-设置 - DNS怎么查（防DNS污染、防偷窥、避免国内外站匹配到国外服务器等）</span>
<span class="token comment">// ├─ 3_routing      分流设置 - 流量怎么分类处理（是否过滤广告、是否国内外分流）</span>
<span class="token comment">// ├─ 4_inbounds     入站设置 - 什么流量可以流入Xray</span>
<span class="token comment">// └─ 5_outbounds    出站设置 - 流出Xray的流量往哪里去</span>

<span class="token punctuation">{</span>
  <span class="token comment">// 1_日志设置</span>
  <span class="token comment">// 注意，本例中我默认注释掉了日志文件，因为windows, macOS, Linux 需要写不同的路径，请自行配置</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;access&quot;: &quot;/home/local/xray_log/access.log&quot;,    // 访问记录</span>
    <span class="token comment">// &quot;error&quot;: &quot;/home/local/xray_log/error.log&quot;,    // 错误记录</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span> <span class="token comment">// 内容从少到多: &quot;none&quot;, &quot;error&quot;, &quot;warning&quot;, &quot;info&quot;, &quot;debug&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 2_DNS设置</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 2.1 国外域名使用国外DNS查询</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2.2 国内域名使用国内DNS查询，并期待返回国内的IP，若不是国内IP则舍弃，用下一个查询</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2.3 作为2.2的备份，对国内网站进行二次查询</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;114.114.114.114&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2.4 最后的备份，上面全部失败时，用本机DNS查询</span>
      <span class="token string">&quot;localhost&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 3_分流设置</span>
  <span class="token comment">// 所谓分流，就是将符合否个条件的流量，用指定\`tag\`的出站协议去处理（对应配置的5.x内容）</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPIfNonMatch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 3.1 广告域名屏蔽</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:category-ads-all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 3.2 国内域名直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 3.3 国内IP直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 3.4 国外域名代理</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 3.5 默认规则</span>
      <span class="token comment">// 在Xray中，任何不符合上述路由规则的流量，都会默认使用【第一个outbound（5.1）】的设置，所以一定要把转发VPS的outbound放第一个</span>
      <span class="token comment">// 3.6 走国内&quot;223.5.5.5&quot;的DNS查询流量分流走direct出站</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 4_入站设置</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 4.1 一般都默认使用socks5协议作本地转发</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks-in&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过socks5协议做本地转发的地址</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10800</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过socks5协议做本地转发的端口</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 4.2 有少数APP不兼容socks协议，需要用http协议做转发，则可以用下面的端口</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-in&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过http协议做本地转发的地址</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10801</span> <span class="token comment">// 这个是通过http协议做本地转发的端口</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 5_出站设置</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 5.1 默认转发VPS</span>
    <span class="token comment">// 一定放在第一个，在routing 3.5 里面已经说明了，这等于是默认规则，所有不符合任何规则的流量都走这个</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vless&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换成你的真实域名</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uuiduuid-uuid-uuid-uuid-uuiduuiduuid&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 和服务器端的一致</span>
                <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tlsSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;serverName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换成你的真实域名</span>
          <span class="token property">&quot;allowInsecure&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁止不安全证书</span>
          <span class="token property">&quot;fingerprint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span> <span class="token comment">// 通过 uTLS 库 模拟 Chrome / Firefox / Safari 或随机生成的指纹</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 5.2 用\`freedom\`协议直连出站，即当routing中指定&#39;direct&#39;流出时，调用这个协议做处理</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 5.3 用\`blackhole\`协议屏蔽流量，即当routing中指定&#39;block&#39;时，调用这个协议做处理</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),Y=t(`<h2 id="_8-4-附加题-2-在-pc-端手工运行-xray-core" tabindex="-1"><a class="header-anchor" href="#_8-4-附加题-2-在-pc-端手工运行-xray-core"><span>8.4 附加题 2：在 PC 端手工运行 <code>xray-core</code></span></a></h2><p>写好了配置文件该，要怎么让 <code>xray-core</code> 运行起来呢？双击好像并没有反应啊？</p><p>首先，你要找到电脑上的【命令行界面】。</p><ol><li>Linux 桌面、macOS 系统的同学肯定已经比较熟悉了，搜索 <code>Console</code> 或者 <code>Terminal</code> 就可以</li><li>Windows 就可以搜索使用 <code>Cmd</code> 或者 <code>Powershell</code> 等程序（WSL 的同学你坐下，你的 <code>Console</code> 当然也可以）</li></ol><p>其次，我们要做的事情是【让 <code>xray</code> 找到并读取配置文件 <code>config.json</code>，然后运行】，所以：</p><ol><li><p>在 Windows 下，假设你的 <code>Xray</code> 程序位置是 <code>C:\\Xray-windows-64\\xray.exe</code>，配置文件位置是<code>C:\\Xray-windows-64\\config.json</code>，那么正确的启动命令就是：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Xray-windows-64<span class="token punctuation">\\</span>xray.exe <span class="token parameter variable">-c</span> C:<span class="token punctuation">\\</span>Xray-windows-64<span class="token punctuation">\\</span>config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里的 <code>-c</code> 就是指定配置文件路径的参数，告诉 <code>xray</code> 去后面的位置找配置文件</p></div></li><li><p>相似的，在 Linux 和 macOS 下，假设你的 <code>Xray</code> 程序位置是 <code>/usr/local/bin/xray</code>，配置文件位置是<code>/usr/local/etc/xray/config.json</code>，那么正确的启动命令就是</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/bin/xray <span class="token parameter variable">-c</span> /usr/local/etc/xray/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>每个系统都有系统路径变量，所以写 <code>Xray</code> 程序时不一定要写绝对路径。但是写了肯定没错，所以我就如此演示了。</p></div></li></ol><h2 id="_8-5-附加题-3-在-pc-端开机自动运行-xray-core" tabindex="-1"><a class="header-anchor" href="#_8-5-附加题-3-在-pc-端开机自动运行-xray-core"><span>8.5 附加题 3：在 PC 端开机自动运行 <code>xray-core</code></span></a></h2><p>如果你真的尝试了手动运行 <code>xray-core</code>，你一定会发现这个方式还有点小问题：</p><ol><li>每次运行 <code>Xray</code> 都要出现一个黑乎乎的窗口，很丑</li><li>不能开机自动运行，每次都要手工输入，十分不方便</li></ol><p>我可以肯定的告诉你：<strong>完全可以解决</strong>。但是具体的解决方式，就当作课外作业留给大家吧！（友情提示，文档站的问答区有线索哦）</p><h2 id="_8-6-圆满完成" tabindex="-1"><a class="header-anchor" href="#_8-6-圆满完成"><span>8.6 圆满完成！</span></a></h2><p>我相信，有耐心看到这里的同学，都是兼具好奇心和行动力的学习派！我现在要郑重的恭喜你，因为到了这里，你已经完完整整的【<strong>从第一条命令开始，完成了 VPS 服务器部署，并成功的在客户端配置使用 Xray</strong>】了！这毫无疑问是一个巨大的胜利！</p><p>我相信，你现在一定对<code>Linux</code>不再恐惧，对<code>Xray</code>不再陌生了吧！</p><p><strong>至此，小小白白话文圆满结束！</strong></p><blockquote><p>⬛⬛⬛⬛⬛⬛⬛⬛ 100%</p></blockquote><h2 id="_8-7-to-infinity-and-beyond" tabindex="-1"><a class="header-anchor" href="#_8-7-to-infinity-and-beyond"><span>8.7 TO INFINITY AND BEYOND!</span></a></h2><p><strong>但现在你看到的，远远不是 Xray 的全貌。</strong></p><p><code>Xray</code>是一个强大而丰富的网络工具集合，平台化的提供了众多模块，可以像瑞士军刀一样，通过灵活的配置组合解决各种不同的问题。而本文，仅仅蜻蜓点水的用了<strong>最简单</strong>、<strong>最直观</strong>的配置来做<strong>基础演示</strong>。</p><p>如果你觉得现在已经完全够用了，那就好好的享受它给你带来的信息自由。但如果你的好奇心依然不能停歇，那就去继续挖掘它无限的可能性吧！</p><p>需要更多信息，可以到这里寻找：</p>`,20),M={href:"https://xtls.github.io/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://t.me/projectXray",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,[n("img",{src:d,alt:"TO INFINITY AND BEYOND!"})],-1),Z=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"不算后记的后记"),n("p",null,"希望我陪你走过的这一段小小的旅程，可以成为你网络生活中的一份小小助力。"),n("p",null,"这篇文章里的工具和信息难免会一点点的陈旧过时，但你一定会逐渐成长为大佬。未来的某个时间，若你能偶尔想起这篇教程、想起我写下本文的初衷，那我衷心希望你能够薪火相传、把最新的知识分享给后来人，让这一份小小的助力在社区里坚定的传递下去。"),n("p",null,"这是个大雪封山乌云密布的世界，人们孤独的走在各自的路上试图寻找阳光，如果大家偶尔交汇时不能守望相助互相鼓励，那最终剩下的，恐怕只有【千山鸟飞绝 万径人踪灭】的凄凉了吧。")],-1);function J(K,$){const e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[v,n("div",m,[q,b,g,n("p",null,[s("现在，"),a(e,{to:"/document/level-1/routing-lv1-part1.html"},{default:l(()=>[s("《路由 (routing) 功能简析》")]),_:1}),s(" 已经上线，我建议对路由功能有兴趣的同学，先继续跟着本文完成客户端的基础配置，之后再去这里详细学习。")])]),y,h,n("p",null,[s("实际上，"),_,s("的连接要素是由不同的"),a(e,{to:"/config/inbounds/"},{default:l(()=>[s("协议")]),_:1}),s("决定的。本文在第 7 章的配置文件 "),x,s(" 里，我们使用 "),f,s(" 下独特而强大的 "),X,s(" 协议 + "),S,s(" 流控。所以看看那个配置文件的内容就能知道，这个协议组合的连接要素有：")]),N,n("ul",null,[n("li",null,[P,n("ul",null,[n("li",null,[s("请从它的"),n("a",w,[s("GitHub 仓库 Release 页面"),a(o)]),s("获取最新版")]),I])]),n("li",null,[T,n("ul",null,[n("li",null,[s("请从它的"),n("a",L,[s("GitHub 仓库 Release 页面"),a(o)]),s("获取最新版")]),V])]),C,n("li",null,[D,n("ul",null,[n("li",null,[s("请从它的"),n("a",j,[s("GitHub 仓库 Release 页面"),a(o)]),s("获取最新版（还可以从它的"),n("a",E,[s("GitHub 自动构建仓库"),a(o)]),s("寻找更新的版本）")]),n("li",null,[s("请从它的"),n("a",G,[s("项目主页"),a(o)]),s("学习文档")]),A])]),n("li",null,[O,n("ul",null,[n("li",null,[s("请从它的 "),n("a",R,[s("GitHub 仓库 Release 页面"),a(o)]),s(" 获取最新版")]),n("li",null,[s("支持一键导入 "),n("a",B,[s("VMessAEAD / VLESS 分享链接标准提案"),a(o)]),s(" 为标准的分享链接")]),H])])]),Q,n("ol",null,[n("li",null,[n("p",null,[s("首先请从 Xray 官方的 "),n("a",W,[s("GitHub 仓库 Release 页面"),a(o)]),s(" 获取对应平台的版本，并解压缩到合适的文件夹")])]),F]),Y,n("ol",null,[n("li",null,[n("a",M,[s("xtls.github.io"),a(o)]),s(" - 官方文档站")]),n("li",null,[n("a",z,[s("官方 Telegram 群组"),a(o)]),s(" - 活跃而友善的官方讨论社区")])]),U,Z])}const sn=c(k,[["render",J],["__file","ch08-xray-clients.html.vue"]]);export{sn as default};
