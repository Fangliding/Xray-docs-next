(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{417:function(t,a,s){t.exports=s.p+"assets/img/netfilter.6ced0551.png"},503:function(t,a,s){"use strict";s.r(a);var e=s(20),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"透明代理入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透明代理入门"}},[t._v("#")]),t._v(" 透明代理入门")]),t._v(" "),e("h2",{attrs:{id:"什么是透明代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是透明代理"}},[t._v("#")]),t._v(" 什么是透明代理")]),t._v(" "),e("p",[t._v("透明代理简单地说就是不让被代理的设备感觉到自己被代理了。简单地说就是，被代理的设备上不需要运行任何代理软件(比如 Xray、V2RayNG 等)，当你连接上网络时，你的设备已经被代理了。")]),t._v(" "),e("p",[t._v("这也意味着，代理的软件运行在别的地方，比如运行在路由器中，通过路由器上网的设备就自动被代理了。")]),t._v(" "),e("h2",{attrs:{id:"透明代理的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透明代理的实现"}},[t._v("#")]),t._v(" 透明代理的实现")]),t._v(" "),e("p",[t._v("透明代理的实现目前主要有两种方式：")]),t._v(" "),e("h3",{attrs:{id:"tun2socks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tun2socks"}},[t._v("#")]),t._v(" tun2socks")]),t._v(" "),e("p",[t._v("可用 Windows/Linux(包括安卓)实现。因为实现过程比较简单，很少有教程，我这里简单描述一下。")]),t._v(" "),e("p",[e("strong",[t._v("Windows")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装 "),e("strong",[e("a",{attrs:{href:"https://github.com/NetchX/Netch/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netch"),e("OutboundLink")],1)]),t._v(" ，使用模式"),e("code",[t._v("[3] [TUN/TAP] 绕过局域网")]),t._v("启动。")])]),t._v(" "),e("li",[e("p",[t._v("开启热点")])]),t._v(" "),e("li",[e("p",[t._v("打开"),e("code",[t._v("控制面板")]),t._v("->"),e("code",[t._v("网络和 Internet")]),t._v("->"),e("code",[t._v("网络和共享中心")]),t._v("->"),e("code",[t._v("更改适配器设置")]),t._v("，找到"),e("code",[t._v("TAP-Windows Adapter")]),t._v("和"),e("code",[t._v("Microsoft Wi-Fi Direct Virtual Adapter")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("鼠标右键点击"),e("code",[t._v("TAP-Windows Adapter")]),t._v("，"),e("code",[t._v("属性")]),t._v("->"),e("code",[t._v("共享")]),t._v("，勾选"),e("code",[t._v("允许其他网络用户通过此计算机的 Internet 连接来连接")]),t._v("，在"),e("code",[t._v("家庭网络连接")]),t._v("中选择"),e("code",[t._v("Microsoft Wi-Fi Direct Virtual Adapter")]),t._v("的那个网络连接，点击确定。")])])]),t._v(" "),e("p",[e("strong",[t._v("Android")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("配置连接 V2RayNG")])]),t._v(" "),e("li",[e("p",[t._v("开启热点")])]),t._v(" "),e("li",[e("p",[t._v("热点设置 -> 允许热点使用 VPN(部分安卓系统可能没有这个选项)")])])]),t._v(" "),e("h3",{attrs:{id:"iptables-nftables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-nftables"}},[t._v("#")]),t._v(" iptables/nftables")]),t._v(" "),e("p",[t._v("iptables 与 nftables 实现透明代理的原理相同，下文统一使用 iptables。")]),t._v(" "),e("p",[t._v("基于 iptables 的透明代理实现只能用于 Linux 系统(包括 openwrt/安卓)。由于其比 tun2socks 更高效率以及适合在路由器中配置而广泛使用。")]),t._v(" "),e("p",[t._v("现存的三篇白话文透明代理教程其实讲的都是基于这种方案的透明代理实现，它们是： "),e("strong",[e("a",{attrs:{href:"https://guide.v2fly.org/app/transparent_proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("新 V2Ray 白话文指南-透明代理"),e("OutboundLink")],1)]),t._v(" 、 "),e("strong",[e("a",{attrs:{href:"https://guide.v2fly.org/app/tproxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("新 V2Ray 白话文指南-透明代理(TPROXY)"),e("OutboundLink")],1)]),t._v(" 、 "),e("strong",[e("RouterLink",{attrs:{to:"/document/level-2/tproxy.html"}},[t._v("透明代理（TProxy）配置教程")])],1),t._v(" 。其中第一篇是基于 iptables-redirect 模式，已经过时了，不建议使用，仅供参考。第二篇和第三篇讲的都是基于 iptables-tproxy 模式的透明代理实现。")]),t._v(" "),e("h2",{attrs:{id:"iptables-实现透明代理原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-实现透明代理原理"}},[t._v("#")]),t._v(" iptables 实现透明代理原理")]),t._v(" "),e("p",[t._v("Linux 使用"),e("code",[t._v("Netfilter")]),t._v("来管理网络，"),e("code",[t._v("Netfilter")]),t._v("模型如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(417),alt:"Netfilter"}})]),t._v(" "),e("p",[e("strong",[t._v("假设使用路由器作为网关(即我们平时的上网方式)，那么：")])]),t._v(" "),e("p",[t._v("局域网设备通过路由器访问互联网的流量方向：")]),t._v(" "),e("p",[e("code",[t._v("PREROUTING链->FORWARD链->POSTINGROUTING链")])]),t._v(" "),e("p",[t._v("局域网设备访问路由器的流量(如登陆路由器 web 管理界面/ssh 连接路由器/访问路由器的 dns 服务器等)方向：")]),t._v(" "),e("p",[e("code",[t._v("PREROUTING链->INPUT链->网关本机")])]),t._v(" "),e("p",[t._v("路由器访问互联网的流量方向：")]),t._v(" "),e("p",[e("code",[t._v("网关本机->OUTPUT链->POSTINGROUTING链")])]),t._v(" "),e("p",[e("strong",[t._v("通过使用 iptables 操控"),e("code",[t._v("PREROUTING链")]),t._v("和"),e("code",[t._v("OUTPUT链")]),t._v("的流量走向，转发到 Xray，就可以代理局域网设备和网关本机。")])]),t._v(" "),e("h2",{attrs:{id:"透明代理难在哪里"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透明代理难在哪里"}},[t._v("#")]),t._v(" 透明代理难在哪里")]),t._v(" "),e("p",[t._v("透明代理的难点就在于路由，所谓路由，就是区分哪些流量是直连的，哪些该被代理，所以我个人认为叫做"),e("strong",[t._v("分流")]),t._v("更加合适。")]),t._v(" "),e("p",[t._v("我们可以把路由由易到难分为以下几个阶段：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("代理全部请求")])]),t._v(" "),e("li",[e("p",[t._v("本地局域网 IP/组播 IP 请求直连，其它请求代理")])]),t._v(" "),e("li",[e("p",[t._v("在 2 的基础上直连 Xray 发起的连接请求")])]),t._v(" "),e("li",[e("p",[t._v("在 3 的基础上直连指向中国大陆 IP 的连接请求，并对国内外域名选择国内外 DNS 服务器解析。")])])]),t._v(" "),e("p",[t._v("上面说的三篇教程，都是在第四阶段。所以新手直接阅读可能显得有点难懂。")]),t._v(" "),e("h2",{attrs:{id:"从零开始一步步实现基于-iptables-tproxy-的透明代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从零开始一步步实现基于-iptables-tproxy-的透明代理"}},[t._v("#")]),t._v(" 从零开始一步步实现基于 iptables-tproxy 的透明代理")]),t._v(" "),e("h3",{attrs:{id:"在开始之前-你需要有一定的基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在开始之前-你需要有一定的基础知识"}},[t._v("#")]),t._v(" 在开始之前，你需要有一定的基础知识：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("大概知道什么是 TCP/IP 协议、域名和 DNS 服务器")])]),t._v(" "),e("li",[e("p",[t._v("知道什么是 WAN 口，LAN 口，LAN_IP，WAN_IP 以及 DHCP 服务器。对于旁路由，只有一个网口，这里称其为 LAN 口")])]),t._v(" "),e("li",[e("p",[t._v("对 Linux 系统有最基础的了解(知道怎么运行命令)")])]),t._v(" "),e("li",[e("p",[t._v("能够手写客户端 json 文件配置，至少要能看懂")])])]),t._v(" "),e("h3",{attrs:{id:"前期准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前期准备工作"}},[t._v("#")]),t._v(" 前期准备工作")]),t._v(" "),e("p",[e("strong",[t._v("1. 准备一个运行 Linux 系统的网关")])]),t._v(" "),e("p",[t._v("比如，刷了 OpenWRT 的路由器")]),t._v(" "),e("p",[e("strong",[t._v("2. 在网关(路由器)准备好 Xray 可执行文件以及配置文件")])]),t._v(" "),e("p",[t._v("配置文件监听 12345 端口，开启 tproxy：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loglevel"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sockopt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tproxy"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      你的服务器配置\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("我们由易到难，不写 routing，只写一个 inbound 一个 outbound。")]),t._v(" "),e("h3",{attrs:{id:"首先-我们先试试做到第一阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先-我们先试试做到第一阶段"}},[t._v("#")]),t._v(" 首先，我们先试试做到第一阶段")]),t._v(" "),e("p",[t._v("将所有"),e("code",[t._v("PREROUTING链")]),t._v("的流量，都转发到 Xray 中。")]),t._v(" "),e("p",[t._v("运行 Xray，执行以下指令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" rule "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fwmark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0 dev lo table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\niptables -t mangle -N XRAY\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A PREROUTING -j XRAY\n")])])]),e("p",[t._v("当你输入完之后，如果你是使用 ssh 连接到网关上的，你会发现 ssh 的连接断开了(不用紧张，断电重启即可恢复)，并且透明代理无法上网；如果你是的网关是虚拟机，你会发现网关本身也无法上网，并且 Xray 日志 access_log 中出现许多源地址为目标地址，目标地址为 WAN_IP 的请求。")]),t._v(" "),e("p",[t._v("理论上网关本机访问公网只会经过"),e("code",[t._v("OUTPUT链")]),t._v("和"),e("code",[t._v("POSTROUTING链")]),t._v("，为什么操控"),e("code",[t._v("PREROUTING链")]),t._v("会导致网关无法上网呢？这是因为网络通讯往往是双向的，虽然网关访问公网 IP 不需要经过"),e("code",[t._v("PREROUTING链")]),t._v("，但被访问的服务器向网关返回信息时要经过"),e("code",[t._v("PREROUTING链")]),t._v("，且这部分被转发到 Xray 了，因此出现了日志中的反向请求。")]),t._v(" "),e("p",[t._v("我们修改一下规则，源 IP 不是来自局域网的则返回。重启网关，运行 Xray，执行以下指令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" rule "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fwmark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0 dev lo table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\niptables -t mangle -N XRAY\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "网关LAN_IP地址段" 通过运行命令"ip address | grep -w "inet" | awk \'{print $2}\'"获得，是其中的一个')]),t._v("\niptables -t mangle -A XRAY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -s 网关LAN_IP地址段 -j RETURN\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A PREROUTING -j XRAY\n")])])]),e("p",[t._v("然后你会发现，虽然 ssh 连接断开了，但是透明代理已经可用了。只要我们修改系统 dns 为公共 dns，就能正常上网了(因为现在网关访问不了，所以 dns 设置为网关是不行的)。")]),t._v(" "),e("p",[t._v("至此，第一阶段就完成了。之所以无法访问网关，是因为代理规则代理了全部流量，包括访问网关的流量。试想在 VPS 上访问你本地的网关，肯定是访问不了的，所以我们要对这部分流量直连，请看第二阶段：")]),t._v(" "),e("h3",{attrs:{id:"第二阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段"}},[t._v("#")]),t._v(" 第二阶段")]),t._v(" "),e("p",[t._v("重启网关，运行 Xray，执行以下指令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" rule "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fwmark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0 dev lo table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\niptables -t mangle -N XRAY\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有目标地址在网关所在网段的请求直连")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 通过运行命令"ip address | grep -w "inet" | awk \'{print $2}\'"获得，一般来说有多个')]),t._v("\niptables -t mangle -A XRAY -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY -d 网关所在网段2 -j RETURN\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目标地址为组播IP/E类地址/广播IP的请求直连")]),t._v("\niptables -t mangle -A XRAY -d "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0/3 -j RETURN\n\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A PREROUTING -j XRAY\n")])])]),e("p",[t._v("使用这条规则后，上一条规则"),e("code",[t._v("iptables -t mangle -A XRAY ! -s 网关LAN_IP地址段 -j RETURN")]),t._v("便成为了多余规则，可以删去。")]),t._v(" "),e("p",[t._v("至此，第二阶段完成。网关已经可以访问，ssh 不会断开。")]),t._v(" "),e("h3",{attrs:{id:"第三阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三阶段"}},[t._v("#")]),t._v(" 第三阶段")]),t._v(" "),e("p",[t._v("我们平时用的 DNS 一般来自路由器，但这个 iptables 规则只代理了局域网中的设备，却没有代理网关本机，这样返回的 DNS 查询结果可能是错误的或者污染的。")]),t._v(" "),e("p",[t._v("iptables-tproxy 不支持对"),e("code",[t._v("OUTPUT链")]),t._v("操作，但是"),e("code",[t._v("Netfilter")]),t._v("有个特性，在"),e("code",[t._v("OUTPUT链")]),t._v("给包打标记为"),e("code",[t._v("1")]),t._v("后相应的包会重路由到"),e("code",[t._v("PREROUTING链")]),t._v("上。所以我们就给网关本机需要代理的请求在"),e("code",[t._v("OUTPUT链")]),t._v("上标记"),e("code",[t._v("1")]),t._v("即可。")]),t._v(" "),e("p",[t._v("如果要代理网关本机发出的的全部请求，就会引入一个问题，Xray 运行在网关，Xray 向代理服务端发送请求，这个请求又被代理了，就形成了回环。")]),t._v(" "),e("p",[t._v("因此要代理网关本机，就要避免回环发生，即代理规则中规避 Xray 请求的流量。")]),t._v(" "),e("p",[e("strong",[t._v("常见的方法有三种：")])]),t._v(" "),e("ol",[e("li",[t._v("直连目标地址为 VPS 的流量")])]),t._v(" "),e("p",[t._v("重启网关，运行 Xray，执行以下指令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#代理局域网设备")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#继承上一个阶段的成果")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" rule "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fwmark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0 dev lo table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\niptables -t mangle -N XRAY\niptables -t mangle -A XRAY -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY -d 网关所在网段2 -j RETURN\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\niptables -t mangle -A XRAY -d "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0/3 -j RETURN\niptables -t mangle -A XRAY -p tcp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A XRAY -p udp -j TPROXY --on-port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A PREROUTING -j XRAY\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#代理网关本机")]),t._v("\niptables -t mangle -N XRAY_MASK\niptables -t mangle -A XRAY_MASK -d 网关所在网段1 -j RETURN\niptables -t mangle -A XRAY_MASK -d 网关所在网段2 -j RETURN\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\niptables -t mangle -A XRAY_MASK -d "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0/3 -j RETURN\niptables -t mangle -A XRAY_MASK -d VPS公网ip/32 -j RETURN\niptables -t mangle -A XRAY_MASK -j MARK --set-mark "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\niptables -t mangle -A OUTPUT -p tcp -j XRAY_MASK\niptables -t mangle -A OUTPUT -p udp -j XRAY_MASK\n")])])]),e("p",[t._v("但是这么配置有个缺点，如果使用 CDN 或者 VPS 很多的话，就不好写规则了。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("通过 mark 规避")])]),t._v(" "),e("p",[t._v("三个白话文教程都是使用这种方法规避，自行参考，这里不再赘述。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("通过 gid 规避(推荐)")])]),t._v(" "),e("p",[t._v("参考 "),e("strong",[e("RouterLink",{attrs:{to:"/document/level-2/iptables_gid.html"}},[t._v("[透明代理]通过 gid 规避 Xray 流量")])],1)]),t._v(" "),e("p",[t._v("这样就完成了第三阶段的代理，也就是平时说的全局代理。但是记得把网关的 DNS 服务器设置为国外的 DNS 服务器，否则可能依然返回被污染的结果。")]),t._v(" "),e("h3",{attrs:{id:"第四阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四阶段"}},[t._v("#")]),t._v(" 第四阶段")]),t._v(" "),e("p",[t._v("其实，并不是所有人都需要实现第四阶段。全局代理对于大部分情况已经适用。")]),t._v(" "),e("p",[t._v("特别是对于旁路由而言。需要代理时，将网关调成旁路由的 IP，不需要代理时，将网关换回主路由 IP。")]),t._v(" "),e("p",[t._v("至于第四阶段的具体实现，那三篇白话文教程讲的都是。在理解了上面的内容后，再去看那三篇白话文教程，就比较容易理解了。")]),t._v(" "),e("h3",{attrs:{id:"代理-ipv6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理-ipv6"}},[t._v("#")]),t._v(" 代理 ipv6")]),t._v(" "),e("p",[t._v("上面的规则只对 ipv4 生效，如果还想要代理 ipv6 请求，则使用 ip6tables 命令，用法与 iptables 基本相同。参考 "),e("strong",[e("RouterLink",{attrs:{to:"/document/level-2/iptables_gid#4-设置iptables规则.html"}},[t._v("[透明代理]通过 gid 规避 Xray 流量#4-设置 iptables 规则")])],1)]),t._v(" "),e("h1",{attrs:{id:"iptables-透明代理的其它注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-透明代理的其它注意事项"}},[t._v("#")]),t._v(" iptables 透明代理的其它注意事项")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("如果作为代理的网关作为主路由，要在"),e("code",[t._v("PREROUTING链")]),t._v("规则中加一条"),e("code",[t._v("iptables -t mangle -A XRAY ! -s 网关LAN_IP地址段 -j RETURN")]),t._v("，即在第一阶段使用、第二阶段被删除的指令。如果不写，WAN 口中同网段的其它人可以将网关填写成你的 WAN_IP，从而蹭你的透明代理用，还可能带来一定的危险性。")])]),t._v(" "),e("li",[e("p",[e("strong",[e("a",{attrs:{href:"https://guide.v2fly.org/app/tproxy.html#%E8%AE%BE%E7%BD%AE%E7%BD%91%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("新 V2Ray 白话文指南-透明代理(TPROXY)#设置网关"),e("OutboundLink")],1)]),t._v(" 中的第三条说："),e("code",[t._v("手动配置 PC 的网络，将默认网关指向树莓派的地址即 192.168.1.22。此时 PC 应当能正常上网（由于还没设置代理，“正常”是指可以上国内的网站）")]),t._v("。实际上，Ubuntu、CentOS、debian 等系统就算开启了 IP 转发，PC 也不能正常上网，这是正常的。事实上只有 OpenWRT 能做到文中所描述的那样，据 "),e("strong",[e("a",{attrs:{href:"https://github.com/BioniCosmos",target:"_blank",rel:"noopener noreferrer"}},[t._v("@BioniCosmos"),e("OutboundLink")],1)]),t._v(" 点拨，这是由于一般的 Linux 系统没有 Masquery 规则。")])]),t._v(" "),e("li",[e("p",[e("strong",[e("a",{attrs:{href:"https://guide.v2fly.org/app/tproxy.html#%E8%A7%A3%E5%86%B3-too-many-open-files-%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("too many open files 问题"),e("OutboundLink")],1)]),t._v(" ，解决方法见 "),e("strong",[e("a",{attrs:{href:"../iptables_gid#3-%E9%85%8D%E7%BD%AE%E6%9C%80%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%A7%E5%BC%80%E6%95%B0%E8%BF%90%E8%A1%8Cxray%E5%AE%A2%E6%88%B7%E7%AB%AF"}},[t._v("[透明代理]通过 gid 规避 Xray 流量-配置最大文件大开数&运行 Xray 客户端")])])])]),t._v(" "),e("li",[e("p",[t._v("关于开启 ip_forward，待补充...")])]),t._v(" "),e("li",[e("p",[t._v("避免已有连接的包二次通过 TPROXY ,待补充...")])]),t._v(" "),e("li",[e("p",[t._v("主路由、单臂路由与旁路由，待补充...")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);