import{r as e,o as a,c as s,a as n,b as o,F as r,e as i,d as l}from"./app.c4cd2a44.js";const t={},p=n("h1",{id:"compile-the-document",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compile-the-document","aria-hidden":"true"},"#"),i(" Compile the document")],-1),c=n("h2",{id:"preparatory-work",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preparatory-work","aria-hidden":"true"},"#"),i(" Preparatory Work")],-1),d=i("Xray uses "),u={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},h=i("Golang"),b=i(" as its programming language, so you need to install the latest version of Golang first in order to compile."),m={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"TIP",-1),v=i("Install Golang: "),f={href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"},w=i("golang.org/doc/install"),y=l('<p>If you happen to use Windows, please <strong>make sure</strong> to use Powershell.</p><h2 id="pull-xray-source-code" tabindex="-1"><a class="header-anchor" href="#pull-xray-source-code" aria-hidden="true">#</a> Pull Xray source code</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/XTLS/Xray-core.git\n<span class="token builtin class-name">cd</span> Xray-core <span class="token operator">&amp;&amp;</span> go mod download\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you have free time, you can try GitHub&#39;s official tool: <code>gh repo clone XTLS/Xray-core</code></p><p>Note: In a network environment where Google cannot be accessed normally, dependencies cannot be pulled normally, and <code>GOPROXY</code> needs to be set first:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io,direct\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="build-binary" tabindex="-1"><a class="header-anchor" href="#build-binary" aria-hidden="true">#</a> Build Binary</h2><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>This command needs to be executed within Xray root directory.</p></div><h3 id="windows-powershell" tabindex="-1"><a class="header-anchor" href="#windows-powershell" aria-hidden="true">#</a> Windows(Powershell):</h3><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0\ngo build <span class="token operator">-</span>o xray<span class="token punctuation">.</span>exe <span class="token operator">-</span>trimpath <span class="token operator">-</span>ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> <span class="token punctuation">.</span><span class="token operator">/</span>main\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="macos-linux" tabindex="-1"><a class="header-anchor" href="#macos-linux" aria-hidden="true">#</a> macOS, Linux:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> go build -o xray -trimpath -ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> ./main\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Running the above command will generate an xray executable file in the directory.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you need to compile a program that can be debugged, i.e., you can use dlv to attach to the running program for debugging, please remove the &#39;-w -s&#39; options from the ldflags.</p><ul><li>w option disables the generation of debug information. After using this option, gdb cannot be used for debugging.</li><li>s option disables the symbol table. PS: Actually, debugging with vscode or other IDEs seems to be more convenient.</li></ul><h2 id="cross-compilation" tabindex="-1"><a class="header-anchor" href="#cross-compilation" aria-hidden="true">#</a> Cross compilation:</h2><p>Here, we take the example of compiling to a Linux server in a Windows (Powershell) environment:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0\n<span class="token variable">$env</span>:GOOS=<span class="token string">&quot;linux&quot;</span>\n<span class="token variable">$env</span>:GOARCH=<span class="token string">&quot;amd64&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>go build -o xray -trimpath -ldflags &quot;-s -w -buildid=&quot; ./main```</p><p>After uploading to the server, remember to execute <code>chmod +x xray</code> in the server terminal.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Execute <code>go tool dist list</code> to view all supported systems and architectures.</p></div></div><h2 id="reproducible-build" tabindex="-1"><a class="header-anchor" href="#reproducible-build" aria-hidden="true">#</a> Reproducible Build:</h2><p>Following the above steps, it is possible to compile and release an identical binary file as the one in Release.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>Please confirm that you are using the same Golang version as the one used to compile the release.</p></div>',17);t.render=function(i,l){const t=e("OutboundLink");return a(),s(r,null,[p,c,n("p",null,[d,n("a",u,[h,o(t)]),b]),n("div",m,[g,n("p",null,[v,n("a",f,[w,o(t)])])]),y],64)};export default t;
