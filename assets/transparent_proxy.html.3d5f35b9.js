import{r as n,o as s,c as l,a,b as e,w as t,F as r,e as p,d as o}from"./app.c4cd2a44.js";const u={},c=a("h1",{id:"透明代理入门",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#透明代理入门","aria-hidden":"true"},"#"),p(" 透明代理入门")],-1),i=a("h2",{id:"什么是透明代理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#什么是透明代理","aria-hidden":"true"},"#"),p(" 什么是透明代理")],-1),b=a("p",null,"透明代理简单地说就是不让被代理的设备感觉到自己被代理了。简单地说就是，被代理的设备上不需要运行任何代理软件(比如 Xray、V2RayNG 等)，当你连接上网络时，你的设备已经被代理了。",-1),d=a("p",null,"这也意味着，代理的软件运行在别的地方，比如运行在路由器中，通过路由器上网的设备就自动被代理了。",-1),m=a("h2",{id:"透明代理的实现",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#透明代理的实现","aria-hidden":"true"},"#"),p(" 透明代理的实现")],-1),k=a("p",null,"透明代理的实现目前主要有两种方式：",-1),h=a("h3",{id:"tun2socks",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#tun2socks","aria-hidden":"true"},"#"),p(" tun2socks")],-1),g=a("p",null,"可用 Windows/Linux(包括安卓)实现。因为实现过程比较简单，很少有教程，我这里简单描述一下。",-1),R=a("p",null,[a("strong",null,"Windows")],-1),A=p("安装 "),f={href:"https://github.com/NetchX/Netch/releases",target:"_blank",rel:"noopener noreferrer"},P=p("Netch"),T=p(" ，使用模式"),y=a("code",null,"[3] [TUN/TAP] 绕过局域网",-1),N=p("启动。"),X=o("<li><p>开启热点</p></li><li><p>打开<code>控制面板</code>-&gt;<code>网络和 Internet</code>-&gt;<code>网络和共享中心</code>-&gt;<code>更改适配器设置</code>，找到<code>TAP-Windows Adapter</code>和<code>Microsoft Wi-Fi Direct Virtual Adapter</code>。</p></li><li><p>鼠标右键点击<code>TAP-Windows Adapter</code>，<code>属性</code>-&gt;<code>共享</code>，勾选<code>允许其他网络用户通过此计算机的 Internet 连接来连接</code>，在<code>家庭网络连接</code>中选择<code>Microsoft Wi-Fi Direct Virtual Adapter</code>的那个网络连接，点击确定。</p></li>",3),E=a("p",null,[a("strong",null,"Android")],-1),x=a("ol",null,[a("li",null,[a("p",null,"配置连接 V2RayNG")]),a("li",null,[a("p",null,"开启热点")]),a("li",null,[a("p",null,"热点设置 -> 允许热点使用 VPN(部分安卓系统可能没有这个选项)")])],-1),U=a("h3",{id:"iptables-nftables",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iptables-nftables","aria-hidden":"true"},"#"),p(" iptables/nftables")],-1),O=a("p",null,"iptables 与 nftables 实现透明代理的原理相同，下文统一使用 iptables。",-1),Y=a("p",null,"基于 iptables 的透明代理实现只能用于 Linux 系统(包括 openwrt/安卓)。由于其比 tun2socks 更高效率以及适合在路由器中配置而广泛使用。",-1),I=p("现存的三篇白话文透明代理教程其实讲的都是基于这种方案的透明代理实现，它们是： "),v={href:"https://guide.v2fly.org/app/transparent_proxy.html",target:"_blank",rel:"noopener noreferrer"},j=p("新 V2Ray 白话文指南-透明代理"),_=p(" 、 "),w={href:"https://guide.v2fly.org/app/tproxy.html",target:"_blank",rel:"noopener noreferrer"},S=p("新 V2Ray 白话文指南-透明代理(TPROXY)"),G=p(" 、 "),B=p("透明代理（TProxy）配置教程"),D=p(" 。其中第一篇是基于 iptables-redirect 模式，已经过时了，不建议使用，仅供参考。第二篇和第三篇讲的都是基于 iptables-tproxy 模式的透明代理实现。"),L=a("h2",{id:"iptables-实现透明代理原理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iptables-实现透明代理原理","aria-hidden":"true"},"#"),p(" iptables 实现透明代理原理")],-1),W=a("p",null,[p("Linux 使用"),a("code",null,"Netfilter"),p("来管理网络，"),a("code",null,"Netfilter"),p("模型如下：")],-1),C=a("p",null,[a("img",{src:"/Xray-docs-next/assets/netfilter.ef038b15.png",alt:"Netfilter"})],-1),M=a("p",null,[a("strong",null,"假设使用路由器作为网关(即我们平时的上网方式)，那么：")],-1),V=a("p",null,"局域网设备通过路由器访问互联网的流量方向：",-1),K=a("p",null,[a("code",null,"PREROUTING链->FORWARD链->POSTINGROUTING链")],-1),F=a("p",null,"局域网设备访问路由器的流量(如登陆路由器 web 管理界面/ssh 连接路由器/访问路由器的 dns 服务器等)方向：",-1),$=a("p",null,[a("code",null,"PREROUTING链->INPUT链->网关本机")],-1),q=a("p",null,"路由器访问互联网的流量方向：",-1),H=a("p",null,[a("code",null,"网关本机->OUTPUT链->POSTINGROUTING链")],-1),z=a("p",null,[a("strong",null,[p("通过使用 iptables 操控"),a("code",null,"PREROUTING链"),p("和"),a("code",null,"OUTPUT链"),p("的流量走向，转发到 Xray，就可以代理局域网设备和网关本机。")])],-1),J=a("h2",{id:"透明代理难在哪里",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#透明代理难在哪里","aria-hidden":"true"},"#"),p(" 透明代理难在哪里")],-1),Q=a("p",null,[p("透明代理的难点就在于路由，所谓路由，就是区分哪些流量是直连的，哪些该被代理，所以我个人认为叫做"),a("strong",null,"分流"),p("更加合适。")],-1),Z=a("p",null,"我们可以把路由由易到难分为以下几个阶段：",-1),nn=a("ol",null,[a("li",null,[a("p",null,"代理全部请求")]),a("li",null,[a("p",null,"本地局域网 IP/组播 IP 请求直连，其它请求代理")]),a("li",null,[a("p",null,"在 2 的基础上直连 Xray 发起的连接请求")]),a("li",null,[a("p",null,"在 3 的基础上直连指向中国大陆 IP 的连接请求，并对国内外域名选择国内外 DNS 服务器解析。")])],-1),sn=a("p",null,"上面说的三篇教程，都是在第四阶段。所以新手直接阅读可能显得有点难懂。",-1),ln=a("h2",{id:"从零开始一步步实现基于-iptables-tproxy-的透明代理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#从零开始一步步实现基于-iptables-tproxy-的透明代理","aria-hidden":"true"},"#"),p(" 从零开始一步步实现基于 iptables-tproxy 的透明代理")],-1),an=a("h3",{id:"在开始之前-你需要有一定的基础知识",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#在开始之前-你需要有一定的基础知识","aria-hidden":"true"},"#"),p(" 在开始之前，你需要有一定的基础知识：")],-1),en=a("ol",null,[a("li",null,[a("p",null,"大概知道什么是 TCP/IP 协议、域名和 DNS 服务器")]),a("li",null,[a("p",null,"知道什么是 WAN 口，LAN 口，LAN_IP，WAN_IP 以及 DHCP 服务器。对于旁路由，只有一个网口，这里称其为 LAN 口")]),a("li",null,[a("p",null,"对 Linux 系统有最基础的了解(知道怎么运行命令)")]),a("li",null,[a("p",null,"能够手写客户端 json 文件配置，至少要能看懂")])],-1),tn=a("h3",{id:"前期准备工作",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前期准备工作","aria-hidden":"true"},"#"),p(" 前期准备工作")],-1),rn=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"注意"),a("p",null,[p("在开始操作前，记得使用 "),a("code",null,"sysctl -w net.ipv4.ip_forward=1"),p(" 打开linux ipv4封包转发")])],-1),pn=a("p",null,[a("strong",null,"1. 准备一个运行 Linux 系统的网关")],-1),on=a("p",null,"比如，刷了 OpenWRT 的路由器",-1),un=a("p",null,[a("strong",null,"2. 在网关(路由器)准备好 Xray 可执行文件以及配置文件")],-1),cn=a("p",null,"配置文件监听 12345 端口，开启 tproxy：",-1),bn=a("div",{class:"language-json ext-json line-numbers-mode"},[a("pre",{class:"language-json"},[a("code",null,[a("span",{class:"token punctuation"},"{"),p("\n  "),a("span",{class:"token property"},'"log"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"{"),p("\n    "),a("span",{class:"token property"},'"loglevel"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token string"},'"warning"'),p("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),p("\n  "),a("span",{class:"token property"},'"inbounds"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"["),p("\n    "),a("span",{class:"token punctuation"},"{"),p("\n      "),a("span",{class:"token property"},'"port"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token number"},"12345"),a("span",{class:"token punctuation"},","),p("\n      "),a("span",{class:"token property"},'"protocol"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token string"},'"dokodemo-door"'),a("span",{class:"token punctuation"},","),p("\n      "),a("span",{class:"token property"},'"settings"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"{"),p("\n        "),a("span",{class:"token property"},'"network"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token string"},'"tcp,udp"'),a("span",{class:"token punctuation"},","),p("\n        "),a("span",{class:"token property"},'"followRedirect"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token boolean"},"true"),p("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),p("\n      "),a("span",{class:"token property"},'"streamSettings"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"{"),p("\n        "),a("span",{class:"token property"},'"sockopt"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"{"),p("\n          "),a("span",{class:"token property"},'"tproxy"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token string"},'"tproxy"'),p("\n        "),a("span",{class:"token punctuation"},"}"),p("\n      "),a("span",{class:"token punctuation"},"}"),p("\n    "),a("span",{class:"token punctuation"},"}"),p("\n  "),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),p("\n  "),a("span",{class:"token property"},'"outbounds"'),a("span",{class:"token operator"},":"),p(),a("span",{class:"token punctuation"},"["),p("\n    "),a("span",{class:"token punctuation"},"{"),p("\n      你的服务器配置\n    "),a("span",{class:"token punctuation"},"}"),p("\n  "),a("span",{class:"token punctuation"},"]"),p("\n"),a("span",{class:"token punctuation"},"}"),p("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br")])],-1),dn=a("p",null,"我们由易到难，不写 routing，只写一个 inbound 一个 outbound。",-1),mn=a("h3",{id:"首先-我们先试试做到第一阶段",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#首先-我们先试试做到第一阶段","aria-hidden":"true"},"#"),p(" 首先，我们先试试做到第一阶段")],-1),kn=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"注意"),a("p",null,"如果你不能接受你的机器需要重启，最好先开一个虚拟机进行练习")],-1),hn=a("p",null,[p("将所有"),a("code",null,"PREROUTING链"),p("的流量，都转发到 Xray 中。")],-1),gn=a("p",null,"运行 Xray，执行以下指令：",-1),Rn=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"ip"),p(" rule "),a("span",{class:"token function"},"add"),p(" fwmark "),a("span",{class:"token number"},"1"),p(" table "),a("span",{class:"token number"},"100"),p("\n"),a("span",{class:"token function"},"ip"),p(" route "),a("span",{class:"token function"},"add"),p(),a("span",{class:"token builtin class-name"},"local"),p(),a("span",{class:"token number"},"0.0"),p(".0.0/0 dev lo table "),a("span",{class:"token number"},"100"),p("\niptables -t mangle -N XRAY\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A PREROUTING -j XRAY\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])],-1),An=a("p",null,"当你输入完之后，如果你是使用 ssh 连接到网关上的，你会发现 ssh 的连接断开了(不用紧张，断电重启即可恢复)，并且透明代理无法上网；如果你是的网关是虚拟机，你会发现网关本身也无法上网，并且 Xray 日志 access_log 中出现许多源地址为目标地址，目标地址为 WAN_IP 的请求。",-1),fn=a("p",null,[p("理论上网关本机访问公网只会经过"),a("code",null,"OUTPUT链"),p("和"),a("code",null,"POSTROUTING链"),p("，为什么操控"),a("code",null,"PREROUTING链"),p("会导致网关无法上网呢？这是因为网络通讯往往是双向的，虽然网关访问公网 IP 不需要经过"),a("code",null,"PREROUTING链"),p("，但被访问的服务器向网关返回信息时要经过"),a("code",null,"PREROUTING链"),p("，且这部分被转发到 Xray 了，因此出现了日志中的反向请求。")],-1),Pn=a("p",null,"我们修改一下规则，源 IP 不是来自局域网的则返回。重启网关，运行 Xray，执行以下指令：",-1),Tn=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"ip"),p(" rule "),a("span",{class:"token function"},"add"),p(" fwmark "),a("span",{class:"token number"},"1"),p(" table "),a("span",{class:"token number"},"100"),p("\n"),a("span",{class:"token function"},"ip"),p(" route "),a("span",{class:"token function"},"add"),p(),a("span",{class:"token builtin class-name"},"local"),p(),a("span",{class:"token number"},"0.0"),p(".0.0/0 dev lo table "),a("span",{class:"token number"},"100"),p("\niptables -t mangle -N XRAY\n"),a("span",{class:"token comment"},'# "网关LAN_IP地址段" 通过运行命令"ip address | grep -w "inet" | awk \'{print $2}\'"获得，是其中的一个'),p("\niptables -t mangle -A XRAY "),a("span",{class:"token operator"},"!"),p(" -s 网关LAN_IP地址段 -j RETURN\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A PREROUTING -j XRAY\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br")])],-1),yn=a("p",null,"然后你会发现，虽然 ssh 连接断开了，但是透明代理已经可用了。只要我们修改系统 dns 为公共 dns，就能正常上网了(因为现在网关访问不了，所以 dns 设置为网关是不行的)。",-1),Nn=a("p",null,"至此，第一阶段就完成了。之所以无法访问网关，是因为代理规则代理了全部流量，包括访问网关的流量。试想在 VPS 上访问你本地的网关，肯定是访问不了的，所以我们要对这部分流量直连，请看第二阶段：",-1),Xn=a("h3",{id:"第二阶段",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第二阶段","aria-hidden":"true"},"#"),p(" 第二阶段")],-1),En=a("p",null,"重启网关，运行 Xray，执行以下指令：",-1),xn=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"ip"),p(" rule "),a("span",{class:"token function"},"add"),p(" fwmark "),a("span",{class:"token number"},"1"),p(" table "),a("span",{class:"token number"},"100"),p("\n"),a("span",{class:"token function"},"ip"),p(" route "),a("span",{class:"token function"},"add"),p(),a("span",{class:"token builtin class-name"},"local"),p(),a("span",{class:"token number"},"0.0"),p(".0.0/0 dev lo table "),a("span",{class:"token number"},"100"),p("\niptables -t mangle -N XRAY\n\n"),a("span",{class:"token comment"},"# 所有目标地址在网关所在网段的请求直连"),p("\n"),a("span",{class:"token comment"},'# 通过运行命令"ip address | grep -w "inet" | awk \'{print $2}\'"获得，一般来说有多个'),p("\niptables -t mangle -A XRAY -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY -d 网关所在网段2 -j RETURN\n"),a("span",{class:"token punctuation"},".."),p(".\n\n"),a("span",{class:"token comment"},"# 目标地址为组播IP/E类地址/广播IP的请求直连"),p("\niptables -t mangle -A XRAY -d "),a("span",{class:"token number"},"224.0"),p(".0.0/3 -j RETURN\n\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A PREROUTING -j XRAY\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br")])],-1),Un=a("p",null,[p("使用这条规则后，上一条规则"),a("code",null,"iptables -t mangle -A XRAY ! -s 网关LAN_IP地址段 -j RETURN"),p("便成为了多余规则，可以删去。")],-1),On=a("p",null,"至此，第二阶段完成。网关已经可以访问，ssh 不会断开。",-1),Yn=a("h3",{id:"第三阶段",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第三阶段","aria-hidden":"true"},"#"),p(" 第三阶段")],-1),In=a("p",null,"我们平时用的 DNS 一般来自路由器，但这个 iptables 规则只代理了局域网中的设备，却没有代理网关本机，这样返回的 DNS 查询结果可能是错误的或者污染的。",-1),vn=a("p",null,[p("iptables-tproxy 不支持对"),a("code",null,"OUTPUT链"),p("操作，但是我们可以通过配置"),a("code",null,"策略路由"),p("，把"),a("code",null,"OUTPUT链"),p("中相应的包重新路由到"),a("code",null,"PREROUTING链"),p("上。")],-1),jn=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# 添加策略路由: 标记为1的包，走路由表100"),p("\n"),a("span",{class:"token function"},"ip"),p(" rule "),a("span",{class:"token function"},"add"),p(" fwmark "),a("span",{class:"token number"},"1"),p(" table "),a("span",{class:"token number"},"100"),p("\n"),a("span",{class:"token comment"},"# 添加路由条目到路由表100: 所有包路由到本地"),p("\n"),a("span",{class:"token function"},"ip"),p(" route "),a("span",{class:"token function"},"add"),p(),a("span",{class:"token builtin class-name"},"local"),p(),a("span",{class:"token number"},"0.0"),p(".0.0/0 dev lo table "),a("span",{class:"token number"},"100"),p("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br")])],-1),_n=a("p",null,[p("通过配置上述"),a("code",null,"策略路由"),p("，我们只需要在"),a("code",null,"OUTPUT链"),p("中给包打标记为"),a("code",null,"1"),p("，相应的包就会路由到网关本机，即"),a("code",null,"PREROUTING链"),p("上。所以我们就给网关本机需要代理的请求在"),a("code",null,"OUTPUT链"),p("上标记"),a("code",null,"1"),p("即可。")],-1),wn=a("p",null,"如果要代理网关本机发出的的全部请求，就会引入一个问题，Xray 运行在网关，Xray 向代理服务端发送请求，这个请求又被代理了，就形成了回环。",-1),Sn=a("p",null,"因此要代理网关本机，就要避免回环发生，即代理规则中规避 Xray 请求的流量。",-1),Gn=a("p",null,[a("strong",null,"常见的方法有三种：")],-1),Bn=a("ol",null,[a("li",null,"直连目标地址为 VPS 的流量")],-1),Dn=a("p",null,"重启网关，运行 Xray，执行以下指令：",-1),Ln=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"#代理局域网设备"),p("\n"),a("span",{class:"token comment"},"#继承上一个阶段的成果"),p("\n"),a("span",{class:"token function"},"ip"),p(" rule "),a("span",{class:"token function"},"add"),p(" fwmark "),a("span",{class:"token number"},"1"),p(" table "),a("span",{class:"token number"},"100"),p("\n"),a("span",{class:"token function"},"ip"),p(" route "),a("span",{class:"token function"},"add"),p(),a("span",{class:"token builtin class-name"},"local"),p(),a("span",{class:"token number"},"0.0"),p(".0.0/0 dev lo table "),a("span",{class:"token number"},"100"),p("\niptables -t mangle -N XRAY\niptables -t mangle -A XRAY -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY -d 网关所在网段2 -j RETURN\n"),a("span",{class:"token punctuation"},".."),p(".\niptables -t mangle -A XRAY -d "),a("span",{class:"token number"},"224.0"),p(".0.0/3 -j RETURN\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),a("span",{class:"token number"},"12345"),p(" --tproxy-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A PREROUTING -j XRAY\n\n"),a("span",{class:"token comment"},"#代理网关本机"),p("\niptables -t mangle -N XRAY_MASK\niptables -t mangle -A XRAY_MASK -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY_MASK -d 网关所在网段2 -j RETURN\n"),a("span",{class:"token punctuation"},".."),p(".\niptables -t mangle -A XRAY_MASK -d "),a("span",{class:"token number"},"224.0"),p(".0.0/3 -j RETURN\niptables -t mangle -A XRAY_MASK -d VPS公网ip/32 -j RETURN\niptables -t mangle -A XRAY_MASK -j MARK --set-mark "),a("span",{class:"token number"},"1"),p("\niptables -t mangle -A OUTPUT -p tcp -j XRAY_MASK\niptables -t mangle -A OUTPUT -p udp -j XRAY_MASK\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br")])],-1),Wn=a("p",null,"但是这么配置有个缺点，如果使用 CDN 或者 VPS 很多的话，就不好写规则了。",-1),Cn=a("ol",{start:"2"},[a("li",null,"通过 mark 规避")],-1),Mn=a("p",null,"三个白话文教程都是使用这种方法规避，自行参考，这里不再赘述。",-1),Vn=a("ol",{start:"3"},[a("li",null,"通过 gid 规避(推荐)")],-1),Kn=p("参考 "),Fn=p("[透明代理]通过 gid 规避 Xray 流量"),$n=a("p",null,"这样就完成了第三阶段的代理，也就是平时说的全局代理。但是记得把网关的 DNS 服务器设置为国外的 DNS 服务器，否则可能依然返回被污染的结果。",-1),qn=a("h3",{id:"第四阶段",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第四阶段","aria-hidden":"true"},"#"),p(" 第四阶段")],-1),Hn=a("p",null,"其实，并不是所有人都需要实现第四阶段。全局代理对于大部分情况已经适用。",-1),zn=a("p",null,"特别是对于旁路由而言。需要代理时，将网关调成旁路由的 IP，不需要代理时，将网关换回主路由 IP。",-1),Jn=a("p",null,"至于第四阶段的具体实现，那三篇白话文教程讲的都是。在理解了上面的内容后，再去看那三篇白话文教程，就比较容易理解了。",-1),Qn=a("h3",{id:"代理-ipv6",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#代理-ipv6","aria-hidden":"true"},"#"),p(" 代理 ipv6")],-1),Zn=p("上面的规则只对 ipv4 生效，如果还想要代理 ipv6 请求，则使用 ip6tables 命令，用法与 iptables 基本相同。参考 "),ns=p("[透明代理]通过 gid 规避 Xray 流量#4-设置 iptables 规则"),ss=a("h1",{id:"iptables-透明代理的其它注意事项",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iptables-透明代理的其它注意事项","aria-hidden":"true"},"#"),p(" iptables 透明代理的其它注意事项")],-1),ls=a("li",null,[a("p",null,[p("如果作为代理的网关作为主路由，要在"),a("code",null,"PREROUTING链"),p("规则中加一条"),a("code",null,"iptables -t mangle -A XRAY ! -s 网关LAN_IP地址段 -j RETURN"),p("，即在第一阶段使用、第二阶段被删除的指令。如果不写，WAN 口中同网段的其它人可以将网关填写成你的 WAN_IP，从而蹭你的透明代理用，还可能带来一定的危险性。")])],-1),as={href:"https://guide.v2fly.org/app/tproxy.html#%E8%AE%BE%E7%BD%AE%E7%BD%91%E5%85%B3",target:"_blank",rel:"noopener noreferrer"},es=p("新 V2Ray 白话文指南-透明代理(TPROXY)#设置网关"),ts=p(" 中的第三条说："),rs=a("code",null,"手动配置 PC 的网络，将默认网关指向树莓派的地址即 192.168.1.22。此时 PC 应当能正常上网（由于还没设置代理，“正常”是指可以上国内的网站）",-1),ps=p("。实际上，Ubuntu、CentOS、debian 等系统就算开启了 IP 转发，PC 也不能正常上网，这是正常的。事实上只有 OpenWRT 能做到文中所描述的那样，据 "),os={href:"https://github.com/BioniCosmos",target:"_blank",rel:"noopener noreferrer"},us=p("@BioniCosmos"),cs=p(" 点拨，这是由于一般的 Linux 系统没有 Masquery 规则。"),is={href:"https://guide.v2fly.org/app/tproxy.html#%E8%A7%A3%E5%86%B3-too-many-open-files-%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},bs=p("too many open files 问题"),ds=p(" ，解决方法见 "),ms=a("strong",null,[a("a",{href:"../iptables_gid#3-%E9%85%8D%E7%BD%AE%E6%9C%80%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%A7%E5%BC%80%E6%95%B0%E8%BF%90%E8%A1%8Cxray%E5%AE%A2%E6%88%B7%E7%AB%AF"},"[透明代理]通过 gid 规避 Xray 流量-配置最大文件大开数&运行 Xray 客户端")],-1),ks=a("li",null,[a("p",null,"避免已有连接的包二次通过 TPROXY ,待补充...")],-1),hs=a("li",null,[a("p",null,"主路由、单臂路由与旁路由，待补充...")],-1);u.render=function(p,o){const u=n("OutboundLink"),gs=n("RouterLink");return s(),l(r,null,[c,i,b,d,m,k,h,g,R,a("ol",null,[a("li",null,[a("p",null,[A,a("strong",null,[a("a",f,[P,e(u)])]),T,y,N])]),X]),E,x,U,O,Y,a("p",null,[I,a("strong",null,[a("a",v,[j,e(u)])]),_,a("strong",null,[a("a",w,[S,e(u)])]),G,a("strong",null,[e(gs,{to:"/document/level-2/tproxy.html"},{default:t((()=>[B])),_:1})]),D]),L,W,C,M,V,K,F,$,q,H,z,J,Q,Z,nn,sn,ln,an,en,tn,rn,pn,on,un,cn,bn,dn,mn,kn,hn,gn,Rn,An,fn,Pn,Tn,yn,Nn,Xn,En,xn,Un,On,Yn,In,vn,jn,_n,wn,Sn,Gn,Bn,Dn,Ln,Wn,Cn,Mn,Vn,a("p",null,[Kn,a("strong",null,[e(gs,{to:"/document/level-2/iptables_gid.html"},{default:t((()=>[Fn])),_:1})])]),$n,qn,Hn,zn,Jn,Qn,a("p",null,[Zn,a("strong",null,[e(gs,{to:"/document/level-2/iptables_gid#4-%E8%AE%BE%E7%BD%AEiptables%E8%A7%84%E5%88%99.html"},{default:t((()=>[ns])),_:1})])]),ss,a("ol",null,[ls,a("li",null,[a("p",null,[a("strong",null,[a("a",as,[es,e(u)])]),ts,rs,ps,a("strong",null,[a("a",os,[us,e(u)])]),cs])]),a("li",null,[a("p",null,[a("strong",null,[a("a",is,[bs,e(u)])]),ds,ms])]),ks,hs])],64)};export default u;
