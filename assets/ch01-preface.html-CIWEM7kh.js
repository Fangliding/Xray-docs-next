import{_ as s,r as a,o as n,c as o,a as r,e}from"./app-BOvYEtC3.js";const i="/Xray-docs-next/assets/ch01-img01-choice-DrFC1LCY.png",t={},l=e('<h1 id="【第-1-章】-小小白白话文" tabindex="-1"><a class="header-anchor" href="#【第-1-章】-小小白白话文"><span>【第 1 章】 小小白白话文</span></a></h1><h2 id="_1-1-这篇文档是写给谁的" tabindex="-1"><a class="header-anchor" href="#_1-1-这篇文档是写给谁的"><span>1.1 这篇文档是写给谁的？</span></a></h2><p>一句话：写给 <strong>① 零基础</strong> <strong>② 希望学习自建 VPS</strong> 的新人。</p><h2 id="_1-2-这篇文档不是写给谁的" tabindex="-1"><a class="header-anchor" href="#_1-2-这篇文档不是写给谁的"><span>1.2 这篇文档不是写给谁的？</span></a></h2><p>包括但不限于：各路大神大能、懒得自己折腾的小白、已经会折腾的高手、确定要用机场的土豪、确定要用一键脚本的逍遥派...... 总之只要有技术基础、或不愿不想自建的同学，您直接关闭本文即可，因为这篇文章大概是入不了您的法眼的，更可能会让您生一肚子闲气，那多划不来。</p><h2 id="_1-3-郑重声明及其他声明" tabindex="-1"><a class="header-anchor" href="#_1-3-郑重声明及其他声明"><span>1.3 郑重声明及其他声明</span></a></h2><p>郑重声明：</p><p>鄙人技术奇菜无比，故本文必然挂一漏万破绽百出。您若发现问题还请温柔提醒，莫要人参公鸡。</p><p>免责声明：</p><p>本文内容请您自行判断是否可信可靠可用，若您根据本文内容建立和使用 VPS 服务器时出了任何问题和不良结果，鄙人概不负责。</p><p>啰嗦声明：</p><p>基于本文【零基础用户】的目标受众，许多内容会尽力详尽说明，所以语言偏啰嗦，请做好心理准备。</p><h2 id="_1-4-为什么自建是个难题" tabindex="-1"><a class="header-anchor" href="#_1-4-为什么自建是个难题"><span>1.4 为什么自建是个难题？</span></a></h2><p>要回答这个问题，就需要稍微多说一点背景信息了。</p><p>一、科学上网这件事</p><p>科学上网这件事情，说来已经发展了近二十年（震惊!!!.jpg）。最初，自己稍微动动手即可（改改 host、连一下 ssh）、后来需要找一个网页代理，再后来需要写一个私有协议(比如 Shadowsocks)等等。</p><p>随着 GFW 技术这十几年来不断的迭代升级，若要完成【自己动手科学上网】这个目标，需要做的事情已经包括但不限于：</p><ul><li>了解 Linux 系统基本命令</li><li>了解网络传输协议</li><li>有技术和经济能力完成 VPS 购买及管理</li><li>有技术和经济能力完成域名购买及管理</li><li>有技术能力完成 TLS 证书申请 等等。</li></ul><p>这就让【自建 VPS 科学上网】这个曾经简单的行为逐渐变成了令新人望而生畏的挑战。</p><p>二、零基础用户的无奈</p><p>零基础的非技术用户，如果完成上面这一连串的操作，势必要学习大量的知识，但稍微搜索之后，新人只怕会更加迷茫：大量的信息散布在互联网的各个角落：博客、问答网站、群组、论坛、GitHub、Telegram、YouTube 等等等等）。这些信息纷乱复杂、水平良莠不齐、甚至可能互相矛盾。基本上就是不把新人彻底弄晕誓不罢休。</p><p>面对这些杂乱无章的信息，新人突然就从【信息匮乏】变成了【信息过剩】。若是几番连蒙带猜的折腾以失败告终（大概率如此）的话，他的积极性势必大受挫折。在这个过程中，若他又恰好去了一些不太友好的地方去求助，恐怕还要雪上加霜的被嘲讽一番：“这么菜，用机场不就行了，瞎折腾什么啊！”、“先去学会 Linux 再回来问吧”。</p><p>这时候，大概也只有一声“呵呵”可以表达心情了。</p><h2 id="_1-5-用机场不就行了" tabindex="-1"><a class="header-anchor" href="#_1-5-用机场不就行了"><span>1.5 “用机场不就行了？”</span></a></h2><p>首先，我想反问一下那些冷嘲热讽的人：“用机场”真的就是万灵药吗？</p><p>其次，我认为“不懂”和“不想懂”是有本质区别的。态度恶劣的巨婴伸手党自然惹人厌烦，但真心自学却不得要领的人不该受到无端的白眼和歧视，也正是这种对新人不加区分的恶劣社区氛围促使我写下本文。那么闲话少说，我们来看看机场的优势与劣势究竟如何：</p><p>一、“机场“的优势</p><p>所谓“机场”，就是“线路提供商”。他负责完成 1.4 提到的那一串技术操作和管理，用户则付费获得使用权。所以，它的优点至少有：</p><ol><li><strong>用户操作简单</strong>：扫码操作、一键添加规则等</li><li><strong>线路选择多</strong>：可解锁不同国家、地区的网络服务；比如 iplc 等专线服务、游戏加速服务等</li><li><strong>接入节点多</strong>：所以抵抗节点封锁的能力强一些，封了一个就换下一个</li></ol><p>二、“机场”的风险</p><p>“方便”这枚硬币的另一面就是“风险”，基于“机场”的技术特点和市场情况，它的风险至少有：</p><ol><li><strong>“机场”可完全获得用户信息</strong>：用户在网上的所有痕迹，都【必然】经过且【非常可能】长期存储在其服务器上，这些记录无法受到任何具备法律效力的用户隐私协议的约束（<strong>窥视、记录你的一举一动</strong>）</li><li><strong>“机场”缺乏市场管理</strong>：不可避免存在着以欺诈为目标的恶意商家（<strong>主动跑路</strong>）</li><li><strong>“机场”面临监管压力</strong>：大机场相对有保障的同时，也无法避免树大招风。2020 年间，已经有几个大机场停运、跑路的事件发生，用户的正常使用受到严重干扰（<strong>被动跑路</strong>）</li><li><strong>“机场”技术水平难以确定</strong>：线路质量良莠不齐，挂羊头卖狗肉的现象屡见不鲜（<strong>速度慢、掉线多、连不上</strong>）</li></ol><h2 id="_1-6-那么你到底要不要自建呢" tabindex="-1"><a class="header-anchor" href="#_1-6-那么你到底要不要自建呢"><span>1.6 那么你到底要不要自建呢？</span></a></h2><p>现在，你已经看到了机场的优势和风险，要用什么，就请各位充分思考并自行决定。毕竟，最适合你的方案才是最好的方案。</p><p><img src="'+i+'" alt="It&#39;s Your Choice!"></p><ol><li><p>如果决定使用机场的话，现在，你可以关闭本文了。</p></li><li><p>如果你决定自建，那就请继续阅读后面的章节吧！！</p></li></ol><p>总之，本文的目标就是成为零基础用户的知识起点，提供对每一步充分的讲解和演示，清清楚楚（甚至<strong>婆婆妈妈、絮絮叨叨、啰啰嗦嗦</strong>）的协助新人完成【<strong>从输入第一条命令开始，完成 VPS 服务器部署，并成功在客户端完成科学上网</strong>】的全程。并在这个过程中帮助新人逐步接触和熟悉 Linux 的基础操作，为之后的进一步自学打下基础。</p><h2 id="_1-7-题外啰嗦几句" tabindex="-1"><a class="header-anchor" href="#_1-7-题外啰嗦几句"><span>1.7 题外啰嗦几句</span></a></h2><ol><li><p>墙外的信息泥沙俱下，请务必学会理性、独立的思辨，不要随意站队，不要轻信猎奇的信息。</p></li><li><p>衷心希望大家获得更顺畅的网络后，可以获取更新鲜的知识、更丰富的娱乐、接触更美好的世界、结交更多志同道合的朋友，但不要成为任何有不可告人目的之人的替罪羊。</p></li><li><p>你的互联网身份依然是你的身份，绝对的匿名化是极为困难的，所以请务必遵守你个人所在地区和 IP 所在地区的相关法律法规。无论何时，自我保护都是最基本的底线。</p></li></ol><h2 id="_1-8-你的进度" tabindex="-1"><a class="header-anchor" href="#_1-8-你的进度"><span>1.8 你的进度</span></a></h2><blockquote><p>⬛⬜⬜⬜⬜⬜⬜⬜ 12.5%</p></blockquote>',41);function h(c,d){const p=a("I18nTip");return n(),o("div",null,[r(p),l])}const _=s(t,[["render",h],["__file","ch01-preface.html.vue"]]);export{_ as default};
