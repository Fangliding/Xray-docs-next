import{r as e,o as t,c as n,a as o,b as l,F as s,e as a}from"./app.c4cd2a44.js";const i={},r=o("h1",{id:"chapter-4-security-and-protection",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#chapter-4-security-and-protection","aria-hidden":"true"},"#"),a(" [Chapter 4] Security and Protection")],-1),u=o("h2",{id:"_4-1-why-do-we-need-security-protection",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-1-why-do-we-need-security-protection","aria-hidden":"true"},"#"),a(" 4.1 Why Do We Need Security Protection?")],-1),c=o("p",null,"Security protection for Linux servers is a complex and huge subject. Countless websites, apps, services, and even offline infrastructure are built on the foundation of Linux, which involves huge economic benefits and commercial value. This also means that there is a huge motivation for black and gray industries to launch attacks. However, these services are so important that major security vulnerabilities are not allowed. Therefore, countless operation and maintenance professionals are working hard on the battlefield of security attacks and defense, which enables us to enjoy a basic stable modern digital life.",-1),d=o("p",null,"Now, you have a VPS and will open its data access channel to achieve the goal of traffic forwarding, which means you are now on the front line of the security battle and face all risks. However, at the same time, newcomers tend to have a polarized view of security issues due to lack of knowledge and information: either they feel it is as light as a feather and has nothing to do with them, or they feel it is as heavy as Mount Tai and feel anxious all day long.",-1),h=o("ul",null,[o("li",null,[o("p",null,"For the former, my suggestion is: safety is of utmost importance. Try to gather more information on safety issues to avoid regretting after experiencing losses.")]),o("li",null,[o("p",null,"For the latter, my suggestion is: don't worry too much, our servers still don't have too much value and generally won't attract high-level attacks. The basic threats we need to face are mostly malicious scans and login attempts from some automated scripts. Just follow this article to do some basic protection.")])],-1),m=o("h2",{id:"_4-2-what-are-the-specific-risks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-2-what-are-the-specific-risks","aria-hidden":"true"},"#"),a(" 4.2 What are the specific risks")],-1),p=o("p",null,'Just like the configuration we did in the "Remote Login" section, anyone who knows the four elements of [IP address] + [port] + [username] + [password] can log in to your VPS server. So obviously, the security of these four elements is the bottom line that we need to protect. Let\'s analyze them one by one:',-1),g=o("ol",null,[o("li",null,[o("p",null,"[IP Address]: Malicious scripts randomly attempt to scan IP ranges, which can be regarded as public information and cannot be hidden.")]),o("li",null,[o("p",null,[a("[Port]: If you are using the default port, then [Port = "),o("code",null,"22"),a("].")])]),o("li",null,[o("p",null,[a("[Username]: If using the default user, then [Username = "),o("code",null,"root"),a("]")])]),o("li",null,[o("p",null,"[Password]: There is no default value for the password. It must be randomly generated by the VPS backend or set by you. In other words, if all the settings of your server are default, then three of the four elements are already known. Therefore, the security of your entire server relies on a small password. In this case, there are several situations:")])],-1),y=o("ul",null,[o("li",null,[o("p",null,"If you use a VPS management background to generate passwords randomly, it usually contains random uppercase and lowercase letters, symbols, and is relatively secure.")]),o("li",null,[o("p",null,[a("If you changed your password to something super weak like "),o("code",null,"123456"),a(" just for the sake of easy memorization, hacking into your VPS server would be a piece of cake.")])]),o("li",null,[o("p",null,[a("If you change your password to a more complex one that you have used elsewhere just for the sake of easy memory, it is not really safe. You should understand that hackers have cheats in their hands, such as "),o("code",null,"password tables"),a(", which contain tens of thousands, hundreds of thousands, millions, or even more real leaked passwords.")])])],-1),f=o("ol",{start:"5"},[o("li",null,"But you should understand that no hacker really sits in front of a computer and tries your password repeatedly. All attack attempts are carried out automatically by malicious scripts, which work tirelessly for 24 hours. Perhaps while you are sleeping soundly every night, your server is enduring round after round of attacks.")],-1),w=o("p",null,[a("Once the password is successfully cracked, it means that all four of your elements have been mastered by the attacker. The malicious script will quickly log in to the server, obtain the highest "),o("code",null,"root"),a(" control of the server, install and deploy its malicious services, and then use your server to do all kinds of bad things 24 hours a day (such as mining, spreading viruses, sending spam emails, fraudulent emails, acting as a BT relay, and even dark web public nodes, and so on). If the malicious script is relatively restrained, it can actually achieve considerable concealment. Generally, newcomers will not observe and pay attention to indicators such as login records, process changes, CPU usage changes, and traffic changes of the VPS, so it is difficult for you to discover that you have been hacked. Until your VPS service provider blocks your account or you receive a lawyer's letter.")],-1),b=o("ol",{start:"6"},[o("li",null,"Don't forget that when you obtain a VPS, you probably need to use your real payment information, and when you log in to various websites and social platforms, your IP address will also be recorded, which has a direct or indirect relationship with your identity. Therefore, once these bad things happen, they will inevitably be associated with you.")],-1),v=o("h2",{id:"_4-3-what-security-measures-do-we-need-to-take",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-3-what-security-measures-do-we-need-to-take","aria-hidden":"true"},"#"),a(" 4.3 What security measures do we need to take")],-1),k=o("p",null,"Based on the above analysis, what we need to do is to strengthen the three elements of [port], [username], and [password] to reduce the risk of being hacked.",-1),x=o("ol",null,[o("li",null,"[Port]: Modify the SSH remote login port to a [non-22 port] (4.4)."),o("li",null,"[Username]: Create a [non-root] new user and disable root user SSH remote login (4.5, 4.6)."),o("li",null,"[Password]: Enable RSA key verification for SSH login and disable password verification login (4.7).")],-1),S=o("p",null,"Remember to follow the order and don't lock yourself out.",-1),T=o("h2",{id:"_4-4-change-the-ssh-remote-login-port-to-a-non-22-port",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-4-change-the-ssh-remote-login-port-to-a-non-22-port","aria-hidden":"true"},"#"),a(" 4.4 Change the SSH Remote Login Port to a Non-22 Port")],-1),P=o("p",null,[a("Now, let's solve the problem of \"port = "),o("code",null,"22"),a("\". (Note: some VPS service providers have non-22 ports set as default, so you can ignore this step if that's the case. Of course, you can also follow this article to change it to another port.)")],-1),I=o("ol",null,[o("li",null,"Basic commands of Little White Linux:")],-1),A=o("table",null,[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}},"ID"),o("th",{style:{"text-align":"center"}},"Command Name"),o("th",{style:{"text-align":"center"}},"Description")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-03")]),o("td",{style:{"text-align":"center"}},[o("code",null,"nano")]),o("td",{style:{"text-align":"center"}},"Text editor")]),o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-04")]),o("td",{style:{"text-align":"center"}},[o("code",null,"systemctl restart")]),o("td",{style:{"text-align":"center"}},"Restart a service")])])],-1),L=o("ol",{start:"2"},[o("li",null,"Basic Configuration Files of Little White Linux")],-1),C=o("table",null,[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}},"Number"),o("th",{style:{"text-align":"center"}},"Configuration File Location"),o("th",{style:{"text-align":"center"}},"File Description")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"conf-01")]),o("td",{style:{"text-align":"center"}},[o("code",null,"/etc/ssh/sshd_config")]),o("td",{style:{"text-align":"center"}},"SSH Remote Login Program Settings")])])],-1),_=o("ol",{start:"3"},[o("li",null,[a("The first thing we need to do, of course, is to [open the SSH remote login program settings with the text editor "),o("code",null,"nano"),a("]. In Windows, you will [find the file and double-click] it. What should you do in Linux? Take a close look at the command instructions above, isn't it simple? Yes, it is:")])],-1),W=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"nano"),a(" /etc/ssh/sshd_config\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),H=o("p",null,[a("This is a command in the shell terminal to open the "),o("code",null,"sshd_config"),a(" file located in the "),o("code",null,"/etc/ssh/"),a(" directory using the "),o("code",null,"nano"),a(" text editor.")],-1),Y=o("ol",{start:"4"},[o("li",null,[a("Once the file is opened, you will enter the interface of "),o("code",null,"nano"),a(". After observing for a while, you will find that it displays important shortcut keys at the bottom of the screen (enclosed in a red box in the figure below). You can take the exam directly without memorizing them, which is very user-friendly, isn't it?")])],-1),N=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img01-nano-ui.1b0418d7.png",alt:"Interface of nano"})],-1),D=o("ol",{start:"5"},[o("li",null,[a("The second thing we need to do is to "),o("strong",null,[a("find the "),o("code",null,"Port"),a(" item in the opened file and modify its port")]),a(". The number after "),o("code",null,"Port"),a(" is the SSH port. It is generally recommended to change it to an integer greater than "),o("code",null,"1024"),a(" and less than "),o("code",null,"65535"),a(" (this article takes "),o("code",null,"9753"),a(" as an example). Please think about how to operate it with the shortcut keys of "),o("code",null,"nano"),a(". You are right again! It is:")])],-1),R=o("ul",null,[o("li",null,[a("Use "),o("code",null,"ctrl+w"),a(" to enter search mode, then type "),o("code",null,"Port 22"),a(" and press Enter")]),o("li",null,[a("Delete "),o("code",null,"22"),a(" and replace it with "),o("code",null,"9753")]),o("li",null,[a("Note: If this line starts with "),o("code",null,"#"),a(", it means that this line is [commented out] and [does not take effect]. You can write a new line at the end of the file without "),o("code",null,"#"),a(", or delete the "),o("code",null,"#"),a(" to enable this line.")])],-1),V=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,[a("This article uses "),o("code",null,"9753"),a(" as an example, which means that with the release of this article, this port will become a feature that may be prioritized or blocked by attackers or the Great Firewall of China. Therefore, I strongly recommend that you use another port that you come up with yourself, after all, you have over 60,000 ports to choose from freely.")])],-1),X=o("ol",{start:"6"},[o("li",null,"The third thing we need to do is to [save the file and exit].")],-1),E=o("ul",null,[o("li",null,[a("If you observed carefully in step 3, you would have noticed that saving is not done by the common "),o("code",null,"ctrl+s"),a(".")]),o("li",null,[a("The correct shortcut keys: save is "),o("code",null,"ctrl+o"),a(" + "),o("code",null,"enter"),a(", and exit is "),o("code",null,"ctrl+x"),a(".")])],-1),U=o("ol",{start:"7"},[o("li",null,"The last thing we need to do is to [restart the SSH service to make the changes take effect].")],-1),z=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[a("systemctl restart "),o("span",{class:"token function"},"ssh"),a("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),F=o("p",null,"This is a shell command to restart the SSH service.",-1),j=o("ol",{start:"8"},[o("li",null,"The complete process demonstration is as follows:")],-1),O=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img02-sshd-conf-full.91641b17.gif",alt:"Demonstration of modifying non-22 port"})],-1),B=o("ol",{start:"9"},[o("li",null,"Modify PuTTY Configuration")],-1),K=o("p",null,[a('"Now that the new port is in effect, you will need to use '),o("code",null,"9753"),a(" the next time you log in with PuTTY. So please go to the PuTTY settings to change the port number and save the session. Well, you should know where to change it, right? (If you don't know, you need to reread the previous content!)\"")],-1),M=o("h2",{id:"_4-5-creating-a-new-user-without-root-access",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-5-creating-a-new-user-without-root-access","aria-hidden":"true"},"#"),a(" 4.5 Creating a New User Without Root Access")],-1),G=o("p",null,[a("In the second step, let's solve the issue of the username being "),o("code",null,"root"),a(".")],-1),q=o("p",null,[a("Firstly, you need to understand that "),o("code",null,"root"),a(" in Linux system is not just a simple administrator account. It is the foundation of the entire system, the ruler and the supreme god of the system. Once the "),o("code",null,"root"),a(" account has security issues, the entire system will be vulnerable and there will be nowhere to hide. So, let's follow me to carry out the operations:")],-1),J=o("ol",null,[o("li",null,"Little White Linux Basic Commands:")],-1),Q=o("table",null,[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}},"Number"),o("th",{style:{"text-align":"center"}},"Command Name"),o("th",{style:{"text-align":"center"}},"Command Description")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-05")]),o("td",{style:{"text-align":"center"}},[o("code",null,"adduser")]),o("td",{style:{"text-align":"center"}},"Add new user to the system")]),o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-06")]),o("td",{style:{"text-align":"center"}},[o("code",null,"apt install")]),o("td",{style:{"text-align":"center"}},"Install a software package")]),o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-07")]),o("td",{style:{"text-align":"center"}},[o("code",null,"visudo")]),o("td",{style:{"text-align":"center"}},"Special editor to modify sudo permission settings")])])],-1),Z=o("ol",{start:"2"},[o("li",null,[a("The first thing we need to do is to [add a new user and set a login password]. You can choose any name you want, here I will use "),o("code",null,"vpsadmin"),a(" as an example:")])],-1),$=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,"adduser vpsadmin\n")]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),ee=o("p",null,'This is a command in the shell terminal to add a new user named "vpsadmin".',-1),te=o("p",null,[a("After executing the command, follow the prompts to operate. Be sure to set a user password (remember that you won't see "),o("code",null,"******"),a(" when setting the password). Afterwards, the system will ask you for some additional user information, which can be ignored by pressing Enter all the way.")],-1),ne=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img03-adduser.c309caca.png",alt:"Creating a new user"})],-1),oe=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,'This article takes "vpsadmin" as an example, which means that with the release of this article, this username will also become a significant feature, and may be the first choice for attackers to try. Therefore, just like ports, I strongly recommend that you use another username that you come up with yourself.')],-1),le=o("ol",{start:"3"},[o("li",null,"The complete process demonstration is as follows:")],-1),se=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img04-adduser-full.b1abf911.gif",alt:"Creating a new user"})],-1),ae=o("ol",{start:"4"},[o("li",null,[a("The second thing we need to do is to install the "),o("code",null,"sudo"),a(" function (which allows ordinary accounts to temporarily obtain the power of "),o("code",null,"root"),a(" at critical moments and unleash their full power to save the world).")])],-1),ie=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"apt"),a(" update "),o("span",{class:"token operator"},"&&"),a(),o("span",{class:"token function"},"apt"),a(),o("span",{class:"token function"},"install"),a(),o("span",{class:"token function"},"sudo"),a("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),re=o("p",null,'This is a shell command to update the package list and install the "sudo" package.',-1),ue=o("p",null,[a("You may have noticed that this command actually consists of two commands. The first half, "),o("code",null,"apt update"),a(", you have seen and used before, is to refresh the software version information on the server. The latter half, "),o("code",null,"apt install"),a(", is the installation command that will be used this time. The two commands are connected together to instruct the system to refresh the latest available software and then install the latest version of the "),o("code",null,"sudo"),a(" program. "),o("code",null,"&&"),a(" is used to link the two commands together for execution.")],-1),ce=o("ol",{start:"5"},[o("li",null,[a("The third thing we need to do is to add the "),o("code",null,"vpsadmin"),a(" user to the "),o("code",null,"sudo"),a(" list, so that they have the privilege to borrow the power of "),o("code",null,"root"),a(".")])],-1),de=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,"visudo\n")]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),he=o("p",null,[a("(Note: "),o("code",null,"visudo"),a(" is a command used in Linux/Unix systems to edit the sudoers file, which specifies which users or groups are allowed to run certain commands with administrative privileges.)")],-1),me=o("p",null,[a("Simply add the following line under "),o("code",null,"User Privilege Specification"),a(": "),o("code",null,"vpsadmin ALL=(ALL) NOPASSWD: ALL"),a(".")],-1),pe=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,[a("I want to specifically explain the setting of "),o("code",null,"NOPASSWD"),a(". It means that when the "),o("code",null,"vpsadmin"),a(" user temporarily uses the "),o("code",null,"root"),a(" permission, no additional password needs to be entered. This is contrary to general security recommendations. The reason why I recommend this is that many newcomers insist on using the "),o("code",null,"root"),a(" account because they feel relaxed when using "),o("code",null,"root"),a(' without repeatedly entering passwords. "Choosing the lesser of two evils," I believe that the risk of [directly using the '),o("code",null,"root"),a(" user] is greater than the risk of [not entering a password when using "),o("code",null,"sudo"),a("], so I made the above suggestion.")]),o("p",null,[a("If you want to follow the traditional practice and enter a password every time you use "),o("code",null,"sudo"),a(", then you can change this line to "),o("code",null,"vpsadmin ALL=(ALL:ALL) ALL"),a(".")]),o("ol",{start:"6"},[o("li",null,"The complete process demonstration is as follows:")]),o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img05-sudo-full.d131730a.gif",alt:"Creating a new user"})]),o("h2",{id:"_4-6-disabling-ssh-remote-login-for-root-user",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-6-disabling-ssh-remote-login-for-root-user","aria-hidden":"true"},"#"),a(" 4.6 Disabling SSH Remote Login for Root User")]),o("ol",null,[o("li",null,[a("Now that you're gradually getting familiar with Linux, it's time for you to think. What's the first thing we need to do? That's right, it's still to use the "),o("code",null,"nano"),a(" editor to open the "),o("code",null,"SSH remote login program settings"),a(". What? You can't remember how to do it? Then go back and review the content above and come back! ............ Correct answer:")])]),o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"nano"),a(" /etc/ssh/sshd_config\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])]),o("p",null,[a("This is a command line instruction to open and edit the "),o("code",null,"sshd_config"),a(" file located at "),o("code",null,"/etc/ssh/"),a(" using the "),o("code",null,"nano"),a(" text editor.")]),o("ol",{start:"2"},[o("li",null,[a("Find the line "),o("code",null,"PermitRootLogin Yes"),a(", and change the value after it to "),o("code",null,"no"),a(". Do you remember how to do it? ............ Correct answer:")])]),o("ul",null,[o("li",null,[a("Use "),o("code",null,"ctrl+w"),a(" to enter search mode, then enter "),o("code",null,"PermitRootLogin"),a(" and press enter.")]),o("li",null,[a("Delete "),o("code",null,"yes"),a(" and change it to "),o("code",null,"no"),a(".")])]),o("ol",{start:"3"},[o("li",null,"Save the file and exit. Do you remember how to do it? ............ Correct answer: N/A (The correct answer is not provided in the given text.)")]),o("ul",null,[o("li",null,[a("Save is "),o("code",null,"ctrl+o"),a(", then press "),o("code",null,"Enter"),a(" to confirm.")]),o("li",null,[a("Exit is "),o("code",null,"ctrl+x"),a(".")])]),o("ol",{start:"4"},[o("li",null,"Restart the ssh service to make the changes take effect. Do you remember...? Never mind, let's just reveal the correct answer:")]),o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[a("systemctl restart "),o("span",{class:"token function"},"ssh"),a("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])]),o("p",null,"(This is a Linux shell command to restart the SSH service.)"),o("ol",{start:"5"},[o("li",null,"The complete process is demonstrated as follows:")]),o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img06-ssh-no-root-full.a9943c8b.gif",alt:"Disable SSH remote login for root user"})]),o("ol",{start:"6"},[o("li",null,[a("Next time you log in remotely via SSH using PuTTY, you will no longer be able to connect as the "),o("code",null,"root"),a(" user. You will need to use the username "),o("code",null,"vpsadmin"),a(" instead. For convenience, you can set "),o("code",null,"vpsadmin"),a(" as the default login username in PuTTY. (Tip: Don't forget to save the session.)")])]),o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img07-putty-default-user.a515e814.png",alt:"PuTTY Setting Default User Name"})]),o("h2",{id:"_4-7-login-with-rsa-key-and-disable-password-login",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-7-login-with-rsa-key-and-disable-password-login","aria-hidden":"true"},"#"),a(" 4.7 Login with RSA Key and Disable Password Login")]),o("p",null,"In the third step, we will solve the problem of the password being cracked."),o("p",null,'As mentioned earlier, hackers are not foolish enough to crack your password by brute force, but rather they use cheating methods such as "password tables". Unless you use a randomly generated super long password (such as with 1Password, or macOS keychain and other password management tools), it\'s easy to fall victim to this.'),o("p",null,'Although a very long random password can improve security, it is usually difficult to remember and manually enter, which can also lead to mistakes. To solve this problem, we can simply abandon the "password verification" method and switch to a more secure "key verification" method.'),o("p",null,'The so-called "key authentication" refers to generating a pair of related key files (public key and private key), uploading the "public key" to the VPS for backup. Each time you log in, SSH will match the "public key" and "private key". If the verification is correct, the "key pair" will be verified and the authentication will pass. (In other words, you don\'t need to remember and enter complex passwords, just protect the "private key" file from being leaked.)'),o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,[a("This article uses "),o("code",null,"RSA"),a(" keys as an example because "),o("code",null,"RSA"),a(" keys have a long history of support in various devices and "),o("code",null,"SSH"),a(" clients and can still provide sufficient security. However, it is not the only choice available.")]),o("p",null,"Other common keys include:"),o("ul",null,[o("li",null,[o("code",null,"DSA"),a(" - It has been mathematically proven to be insecure, so never use it.")]),o("li",null,[o("code",null,"ECDSA"),a(" - It has high security with small keys, but its algorithm is suspected to have a backdoor by the NSA. If there is something on your VPS that is worth the attention of the NSA, do not use it.")]),o("li",null,[o("code",null,"Ed25519"),a(" - This is an algorithm that is very similar to "),o("code",null,"ECDSA"),a(", and it has similar performance advantages. At the same time, all of its documentation is public, so it is generally considered to be free of backdoors.")])]),o("p",null,[a("So, if your device and software both support it, I recommend choosing "),o("code",null,"Ed25519"),a(" keys as a priority.")])])],-1),ge=o("p",null,"Now let's configure the [Key Authentication]!",-1),ye=o("ol",null,[o("li",null,[o("p",null,[a("Run "),o("code",null,"PuTTYgen"),a(" (PuTTY Key Generator). The location is "),o("code",null,"Start Menu"),a(" --\x3e "),o("code",null,"All Programs"),a(" --\x3e "),o("code",null,"PuTTY (64-bit)"),a(" --\x3e "),o("code",null,"PuTTYgen"),a(".")])]),o("li",null,[o("p",null,[a("Click on "),o("code",null,"Generate"),a(" to start the generation process (move the mouse randomly in the blank area of the interface to add random numbers).")])])],-1),fe=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img08-puttygen-save.32267800.png",alt:"Generate Key"})],-1),we=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,[a("The example in this image is based on a "),o("code",null,"2048"),a("-bit "),o("code",null,"RSA"),a(" key. However, in reality, if you want to achieve the same level of security as a "),o("code",null,"256"),a("-bit key for "),o("code",null,"EDCSA/Ed25519"),a(", you need to use a "),o("code",null,"3072"),a("-bit "),o("code",null,"RSA"),a(" key. (i.e., change the number in the bottom right corner to "),o("code",null,"3072"),a(")")])],-1),be=o("ol",{start:"2"},[o("li",null,"You can add a password to your private key to increase security."),o("li",null,[a("Click on "),o("code",null,"Save public key"),a(" to save the public key with the file name "),o("code",null,"id_rsa.pub"),a(".")]),o("li",null,[a("Click on "),o("code",null,"Save private key"),a(" to save the private key with the file name "),o("code",null,"id_rsa"),a(" (PuTTY private keys come with the "),o("code",null,".ppk"),a(" extension).")]),o("li",null,[a("Most importantly, copy and save all the content inside the red box below by scrolling down, with the file name "),o("code",null,"authorized_keys"),a(". (If you save it using vscode, it will be saved as a text file with a "),o("code",null,".txt"),a(" extension, which is fine. We will remove the extension when uploading it to VPS later.)")])],-1),ve=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img09-puttygen-save-keys.a599bbdf.png",alt:"Save Key"})],-1),ke=o("ol",{start:"2"},[o("li",null,'Upload the public key to the "vpsadmin" user on the VPS.')],-1),xe=o("p",null,[a("1, This step requires the use of the previously prepared "),o("code",null,"WinSCP"),a(".")],-1),Se=a("2, Go to the "),Te={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},Pe=a("official website"),Ie=a(" to download and install. It will prompt you to import PuTTY settings, and of course, you can import them with one click!"),Ae=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img10-winscp-import-session.342a201a.png",alt:"One-click Import Session"})],-1),Le=o("p",null,"3, If there is no prompt for import or you have already installed it in advance, configure it according to the following figure.",-1),Ce=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img11-winscp-ui.70f60717.png",alt:"WinSCP login settings"})],-1),_e=o("p",null,"4, The directory on the left side of WinSCP is the folder and files on your local computer. Please locate the folder where the key is stored.",-1),We=o("p",null,[a("5, The directory on the right side of WinSCP is the folder and files on the VPS server, which are located in the "),o("code",null,"/home/vpsadmin/"),a(" folder by default. To display hidden files, please click on "),o("code",null,"X hidden"),a(" in the lower right corner.")],-1),He=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img12-winscp-locations.f31ffa53.png",alt:"Local and remote folders"})],-1),Ye=o("p",null,[a("6, Right-click on the right side (in VPS) and create a new folder named "),o("code",null,".ssh"),a(" (note the period at the beginning).")],-1),Ne=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img13-winscp-newfolder-key.66d24a49.png",alt:"Create a folder to place public key in VPS"})],-1),De=o("p",null,[a("7, Upload the [public key] "),o("code",null,"authorized_keys"),a(" to the "),o("code",null,".ssh"),a(" folder.")],-1),Re=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img14-winscp-upload-key.9fa9340c.png",alt:"Upload authorized_keys"})],-1),Ve=o("p",null,[a("8, When uploading, rename the [public key] from "),o("code",null,"authorized_keys.txt"),a(" to "),o("code",null,"authorized_keys"),a(" (remove the "),o("code",null,".txt"),a(" extension).")],-1),Xe=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img15-winscp-rename-key.79776390.png",alt:"Ensure there is no file extension"})],-1),Ee=o("p",null,"9, The complete process demonstration is as follows:",-1),Ue=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img16-winscp-full.9c46d03b.gif",alt:"Complete demonstration of WinSCP operation"})],-1),ze=o("ol",{start:"3"},[o("li",null,"Enable RSA key authentication for SSH login and disable password authentication login on the VPS side.")],-1),Fe=o("ul",null,[o("li",null,[a("Basic Linux Commands: "),o("table",null,[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}},"Number"),o("th",{style:{"text-align":"center"}},"Command"),o("th",{style:{"text-align":"center"}},"Description")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-08")]),o("td",{style:{"text-align":"center"}},[o("code",null,"sudo")]),o("td",{style:{"text-align":"center"}},[a("Run a command with "),o("code",null,"root"),a(" privileges")])]),o("tr",null,[o("td",{style:{"text-align":"center"}},[o("code",null,"cmd-09")]),o("td",{style:{"text-align":"center"}},[o("code",null,"chmod")]),o("td",{style:{"text-align":"center"}},"Change the permissions of a target file/directory")])])])]),o("li",null,"SSH remote connection to VPS (PuTTY)"),o("li",null,[a("Change the permission of the "),o("code",null,"authorized_keys"),a(" file to "),o("code",null,"600"),a(" (only the owner can read and write).")])],-1),je=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"chmod"),a(),o("span",{class:"token number"},"600"),a(" ~/.ssh/authorized_keys\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),Oe=o("p",null,[a("This is a command in shell script to change the permissions of the "),o("code",null,"authorized_keys"),a(" file to "),o("code",null,"600"),a(" for the current user's SSH directory ("),o("code",null,"~/.ssh/"),a(").")],-1),Be=o("ol",{start:"4"},[o("li",null,[a("Modify SSH configuration. We have used this many times, but now that we have changed from the almighty "),o("code",null,"root"),a(" to the ordinary user "),o("code",null,"vpsadmin"),a(", we do not have the permission to edit SSH configuration directly. At this time, we need to use the "),o("code",null,"sudo"),a(" command:")])],-1),Ke=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"sudo"),a(),o("span",{class:"token function"},"nano"),a(" /etc/ssh/sshd_config\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),Me=o("p",null,"(This is a command in the shell/terminal to open the sshd_config file located in the /etc/ssh/ directory with the sudo privilege using the nano text editor.)",-1),Ge=o("ol",{start:"5"},[o("li",null,[o("p",null,[a("Find ("),o("code",null,"ctrl+w"),a(") "),o("code",null,"PasswordAuthentication"),a(" and change it to "),o("code",null,"no"),a(".")])]),o("li",null,[o("p",null,[a("Find ("),o("code",null,"ctrl+w"),a(") "),o("code",null,"PubkeyAuthentication"),a(", change it to "),o("code",null,"yes"),a(", then save ("),o("code",null,"ctrl+o"),a(") and exit ("),o("code",null,"ctrl+x"),a(").")])]),o("li",null,[o("p",null,[a("Restart the SSH service. (Note: Don't forget to use "),o("code",null,"sudo"),a(" to gain permission.)")])])],-1),qe=o("div",{class:"language-bash ext-sh line-numbers-mode"},[o("pre",{class:"language-bash"},[o("code",null,[o("span",{class:"token function"},"sudo"),a(" systemctl restart "),o("span",{class:"token function"},"ssh"),a("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),Je=o("p",null,[a("This is a command in the shell terminal to restart the SSH service with root privileges using the "),o("code",null,"systemctl"),a(" command.")],-1),Qe=o("ol",{start:"8"},[o("li",null,"The complete process is as follows:")],-1),Ze=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img17-rsa-login-full.2cf70977.gif",alt:"Enable SSH key verification and disable password verification"})],-1),$e=o("ol",{start:"4"},[o("li",null,"The public key has been set up on the VPS end. Now we need to specify the private key location for PuTTY to use when logging in. (Reminder: Don't forget to save the session.)")],-1),et=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img18-putty-privatekey-location.694b3b0d.png",alt:"Specify private key location in PuTTY"})],-1),tt=o("ol",{start:"5"},[o("li",null,[a("Now, the [Key-based login] has been successfully enabled, [Password authentication] has been successfully disabled, and the default login username and private key have been saved for PuTTY. In the future, when using PuTTY to log in, simply load the "),o("code",null,"VPS-SERVER"),a(" configuration, click "),o("code",null,"Open"),a(", and you can log in with just one click.")])],-1),nt=o("p",null,"If you have set a password for your private key, you need to enter this password to use the key when logging in, as shown in the following figure:",-1),ot=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img19-putty-privatekey-passphrase.d7ab41cd.png",alt:"Enter Private Key Password"})],-1),lt=o("ol",{start:"6"},[o("li",null,[a("Don't forget to set the corresponding key for "),o("code",null,"WinSCP"),a(", otherwise you won't be able to log in when you want to transfer files later.")])],-1),st=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch04-img20-winscp-privatekey-location.b1a9346e.png",alt:"WinSCP Specify Private Key Location"})],-1),at=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Warning"),o("p",null,"Any software that requires SSH login needs key verification. As there are too many software, it is impossible to show them one by one. Please set it up according to your needs.")],-1),it=o("h2",{id:"_4-8-your-progress",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-8-your-progress","aria-hidden":"true"},"#"),a(" 4.8 Your Progress")],-1),rt=o("p",null,"Up to this point, your VPS has completed the basic security measures of [port], [username], and [password]. Although it is not completely impregnable, most malicious scripts should no longer be able to harm you.",-1),ut=o("p",null,"Now that we finally have a secure system foundation, in the next chapter, we can start step by step to install and configure the infrastructure that Xray needs! (What infrastructure? A web page, a certificate)",-1),ct=o("blockquote",null,[o("p",null,"⬛⬛⬛⬛⬜⬜⬜⬜ 50%")],-1);i.render=function(a,i){const dt=e("OutboundLink");return t(),n(s,null,[r,u,c,d,h,m,p,g,y,f,w,b,v,k,x,S,T,P,I,A,L,C,_,W,H,Y,N,D,R,V,X,E,U,z,F,j,O,B,K,M,G,q,J,Q,Z,$,ee,te,ne,oe,le,se,ae,ie,re,ue,ce,de,he,me,pe,ge,ye,fe,we,be,ve,ke,xe,o("p",null,[Se,o("a",Te,[Pe,l(dt)]),Ie]),Ae,Le,Ce,_e,We,He,Ye,Ne,De,Re,Ve,Xe,Ee,Ue,ze,Fe,je,Oe,Be,Ke,Me,Ge,qe,Je,Qe,Ze,$e,et,tt,nt,ot,lt,st,at,it,rt,ut,ct],64)};export default i;
