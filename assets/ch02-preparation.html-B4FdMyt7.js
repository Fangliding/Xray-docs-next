import{_ as r,r as n,o as s,c as l,a as t,b as e,d as o,e as c}from"./app-9On5B9xS.js";const d="/assets/ch02-img01-a-name-DXHjY1Jd.png",h={},u=c('<h1 id="chapter-2-preparation-of-raw-materials" tabindex="-1"><a class="header-anchor" href="#chapter-2-preparation-of-raw-materials"><span>[Chapter 2] Preparation of Raw Materials</span></a></h1><p>This chapter is rather special because it involves monetary transactions. This article takes a neutral stance on the project and does not make specific recommendations. What I can do is to tell you what you need to prepare.</p><h2 id="_2-1-acquiring-a-vps" tabindex="-1"><a class="header-anchor" href="#_2-1-acquiring-a-vps"><span>2.1 Acquiring a VPS</span></a></h2><p>You need to obtain a healthy VPS with an unblocked IP, and perform the following basic preparations in the management console:</p><ol><li>Install Debian 10 64-bit system in the backend of VPS.</li><li>Write down the IP address of VPS in a notebook (this article will use <code>&quot;100.200.300.400&quot;</code> as an example, which is an intentionally incorrect and illegal IP address. Please replace it with your real IP address).</li><li>Write down the SSH remote login port of VPS in a notebook.</li><li>Write down the username and password for SSH remote login in a notebook.</li></ol><p>Buying a VPS is a relatively complex matter. It is recommended to first learn the relevant knowledge and choose one that suits your own economic ability and line requirements. In addition, you can choose to take advantage of some benefits offered by international giants (such as permanent free or limited-time free packages offered by Oracle and Google). In any case, you must act within your means.</p><div class="custom-container tip"><p class="custom-container-title">Explanation</p><p>Regarding the choice of Debian 10 as the operating system, let me elaborate a bit: No matter what you have heard online, no matter which guru has told you that XXX version of Linux is better or XXX version of Linux is more powerful, these sectarian disputes have <strong>nothing to do with you right now</strong>! Using Debian 10 is enough to optimize your VPS server for security, stability, and performance (such as using cloud-optimized kernel, timely support of BBR, etc.). After you become familiar with Linux, you can try other Linux distributions.</p></div><h2 id="_2-2-obtaining-a-desired-domain-name" tabindex="-1"><a class="header-anchor" href="#_2-2-obtaining-a-desired-domain-name"><span>2.2 Obtaining a Desired Domain Name</span></a></h2><p>You need to obtain a domain name and add an A record in the DNS settings, pointing to the IP address of your VPS.</p><ol><li>Please choose a reliable international domain name service provider. Choose some common domain name suffixes, and make sure not to use the <code>.cn</code> suffix.</li><li>In the DNS settings, add an A record pointing to the IP address of your VPS (the name of the A record can be anything, and in this article, it will be represented by <code>&quot;a-name&quot;</code>). The complete domain name will be represented by <code>&quot;subdomain.yourdomain.com&quot;</code> or <code>&quot;a-name.yourdomain.com&quot;</code>. The effect is as shown in the picture below:</li></ol><p><img src="'+d+'" alt="Add A Record"></p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>This is <strong>not</strong> a real usable website. Please replace it with your real website URL.</p></div><h2 id="_2-3-software-you-need-to-install-on-your-local-computer" tabindex="-1"><a class="header-anchor" href="#_2-3-software-you-need-to-install-on-your-local-computer"><span>2.3 Software you need to install on your local computer</span></a></h2><ol><li>SSH remote login tool</li></ol>',14),p={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,"macOS/Linux: Terminal")],-1),f=e("ol",{start:"2"},[e("li",null,"Remote file copying tool")],-1),g={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},y=e("ul",null,[e("li",null,"macOS/Linux: Terminal")],-1),_={start:"3"},b={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"_2-4-your-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-4-your-progress"},[e("span",null,"2.4 Your Progress")])],-1),v=e("p",null,"If you have all the raw materials ready as mentioned above, you have already obtained the key to unlocking the door to a new world. So, what are you waiting for? Let's quickly move on to the next chapter and step through this door!",-1),x=e("blockquote",null,[e("p",null,"⬛⬛⬜⬜⬜⬜⬜⬜ 25%")],-1);function k(S,P){const i=n("I18nTip"),a=n("ExternalLinkIcon");return s(),l("div",null,[t(i),u,e("ul",null,[e("li",null,[o("Windows: "),e("a",p,[o("PuTTY"),t(a)]),m])]),f,e("ul",null,[e("li",null,[o("Windows: "),e("a",g,[o("WinSCP"),t(a)]),y])]),e("ol",_,[e("li",null,[o("Reliable text editor "),e("ul",null,[e("li",null,[o("Windows/macOS/Linux: "),e("a",b,[o("VSCode"),t(a)])])])])]),w,v,x])}const q=r(h,[["render",k],["__file","ch02-preparation.html.vue"]]);export{q as default};
