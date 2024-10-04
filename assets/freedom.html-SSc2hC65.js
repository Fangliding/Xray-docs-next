import{_ as p,r as c,o as l,c as d,a as t,b as e,d as o,w as s,e as a}from"./app-9On5B9xS.js";const r={},i=a(`<h1 id="freedom-fragment-noises" tabindex="-1"><a class="header-anchor" href="#freedom-fragment-noises"><span>Freedom (fragment, noises)</span></a></h1><p>Freedom — это исходящий протокол, который можно использовать для отправки (обычных) данных TCP или UDP в любую сеть.</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fragment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;packets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tlshello&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100-200&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10-20&quot;</span> <span class="token comment">// единица измерения: мс</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;noises&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base64&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;packet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7nQBAAABAAAAAAAABnQtcmluZwZtc2VkZ2UDbmV0AAABAAE=&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10-16&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proxyProtocol&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot;<br> &quot;UseIP&quot; | &quot;UseIPv6v4&quot; | &quot;UseIPv6&quot; | &quot;UseIPv4v6&quot; | &quot;UseIPv4&quot;<br> &quot;ForceIP&quot; | &quot;ForceIPv6v4&quot; | &quot;ForceIPv6&quot; | &quot;ForceIPv4v6&quot; | &quot;ForceIPv4&quot;</p></blockquote><p>Значение по умолчанию — <code>&quot;AsIs&quot;</code>.</p><p>Когда целевым адресом является доменное имя, при настройке соответствующих значений Freedom будет вести себя следующим образом:</p>`,7),q=e("li",null,[o("При использовании "),e("code",null,'"AsIs"'),o(" Xray будет напрямую использовать системный стек для установления соединения. Приоритет и выбор IP-адреса зависят от системных настроек. По некоторым причинам, UDP-соединения, использующие доменные имена, игнорируют системные настройки и отдают приоритет IPv4.")],-1),v=e("code",null,"DNSObject",-1),k=a("<li><code>&quot;IPv4&quot;</code> означает попытку подключения только по IPv4, <code>&quot;IPv4v6&quot;</code> — попытку подключения по IPv4 или IPv6, но для доменных имен с двумя стеками будет использоваться IPv4 (аналогично для v4v6, не будем повторяться).</li><li>Если в настройках встроенного DNS указан <code>&quot;queryStrategy&quot;</code>, фактическое поведение будет объединено с этим параметром, и будут разрешаться только те типы IP, которые указаны в обоих параметрах. Например, <code>&quot;queryStrategy&quot;: &quot;UseIPv4&quot;</code> и <code>&quot;domainStrategy&quot;: &quot;UseIP&quot;</code> фактически эквивалентны <code>&quot;domainStrategy&quot;: &quot;UseIPv4&quot;</code>.</li><li>При использовании параметров, начинающихся с <code>&quot;Use&quot;</code>, если результат разрешения не соответствует требованиям (например, доменное имя имеет только запись A, но используется <code>UseIPv6</code>), будет выполнен откат к <code>AsIs</code>.</li><li>При использовании параметров, начинающихся с <code>&quot;Force&quot;</code>, если результат разрешения не соответствует требованиям, соединение установить не удастся.</li>",4),m={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"СОВЕТ 1",-1),b=e("code",null,'"UseIP"',-1),h=e("code",null,'"ForceIP"',-1),P=e("code",null,"sendThrough",-1),g=e("code",null,"sendThrough",-1),I=e("code",null,"UseIPv4",-1),y=e("code",null,"sendThrough",-1),f=a("<blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom будет принудительно отправлять все данные на указанный адрес (а не на адрес, указанный во входящем соединении).</p><p>Значение — строка, например: <code>&quot;127.0.0.1:80&quot;</code>, <code>&quot;:1234&quot;</code>.</p><p>Если адрес не указан, например <code>&quot;:443&quot;</code>, Freedom не будет изменять исходный целевой адрес. Если порт равен <code>0</code>, например <code>&quot;xray.com: 0&quot;</code>, Freedom не будет изменять исходный порт.</p><blockquote><p><code>userLevel</code>: number</p></blockquote>",5),A=e("code",null,"userLevel",-1),U=e("code",null,"level",-1),S=e("code",null,"0",-1),F=e("blockquote",null,[e("p",null,[e("code",null,"fragment"),o(": map")])],-1),x=e("code",null,'"length"',-1),T=e("code",null,'"interval"',-1),j=a("<p><code>&quot;packets&quot;</code>: поддерживаются два режима фрагментации: &quot;1-3&quot; — фрагментация потока TCP, применяется к первым трем операциям записи данных на стороне клиента; &quot;tlshello&quot; — фрагментация пакета TLS-рукопожатия.</p><p><code>&quot;length&quot;</code>: длина фрагмента (в байтах).</p><p><code>&quot;interval&quot;</code>: интервал между фрагментами (в мс).</p><p>Если значение равно <code>0</code> и установлено <code>&quot;packets&quot;: &quot;tlshello&quot;</code>, фрагментированный пакет Client Hello будет отправлен в одном TCP-пакете (если его исходный размер не превышает MSS или MTU, что приводит к автоматической фрагментации системой).</p><blockquote><p><code>noise</code>: array</p></blockquote><p>UDP-шум, используемый для отправки случайных данных в качестве &quot;шума&quot; перед установлением UDP-соединения. Наличие этой структуры считается включением. Это может обмануть снифферы, но также может нарушить нормальное соединение. Используйте на свой страх и риск. По этой причине он обходит порт 53, так как это нарушает работу DNS.</p><p>Массив, в котором можно определить несколько пакетов шума для отправки. Отдельный элемент массива определяется следующим образом:</p><p><code>&quot;type&quot;</code>: тип пакета шума. В настоящее время поддерживаются <code>&quot;rand&quot;</code> (случайные данные), <code>&quot;str&quot;</code> (пользовательская строка) и <code>&quot;base64&quot;</code> (пользовательские двоичные данные, закодированные в Base64).</p><p><code>&quot;packet&quot;</code>: содержимое пакета данных, основанное на предыдущем значении <code>type</code>.</p><ul><li>Если <code>type</code> равен <code>rand</code>, здесь указывается длина случайных данных. Это может быть фиксированное значение, например <code>&quot;100&quot;</code>, или диапазон значений, например <code>&quot;50-150&quot;</code>.</li><li>Если <code>type</code> равен <code>str</code>, здесь указывается строка для отправки.</li><li>Если <code>type</code> равен <code>base64</code>, здесь указываются двоичные данные, закодированные в Base64.</li></ul>",10),N=e("code",null,'"delay"',-1),D=e("strong",null,"задержка",-1),B=a("<blockquote><p><code>proxyProtocol</code>: number</p></blockquote><p>Протокол PROXY обычно используется в сочетании с <code>redirect</code> для перенаправления на сервер Nginx или другой сервер, на котором включен протокол PROXY. Если сервер не поддерживает протокол PROXY, соединение будет разорвано.</p><p><code>proxyProtocol</code> принимает значение номера версии протокола PROXY — <code>1</code> или <code>2</code>. Если не указано, по умолчанию используется значение <code>0</code> (протокол не используется).</p>",3);function C(R,O){const u=c("I18nTip"),n=c("RouterLink");return l(),d("div",null,[t(u),i,e("ul",null,[q,e("li",null,[o("При указании других значений для разрешения будет использоваться "),t(n,{to:"/ru/config/dns.html"},{default:s(()=>[o("встроенный DNS-сервер")]),_:1}),o(" Xray-core. Если "),v,o(" не существует, будет использоваться системный DNS. Если имеется несколько подходящих IP-адресов, ядро случайным образом выберет один из них в качестве целевого IP-адреса.")]),k]),e("div",m,[_,e("p",null,[o("При использовании режимов "),b,o(" или "),h,o(" и указании "),P,o(" в "),t(n,{to:"/ru/config/outbound.html#outboundobject"},{default:s(()=>[o("конфигурации исходящего соединения")]),_:1}),o(", Freedom будет автоматически определять необходимый тип IP-адреса (IPv4 или IPv6) на основе значения "),g,o(". Если вручную указан только один тип IP-адреса (например, "),I,o("), но он не соответствует локальному адресу, указанному в "),y,o(", подключение установить не удастся.")])]),f,e("p",null,[o("Уровень пользователя. Подключение будет использовать "),t(n,{to:"/ru/config/policy.html#levelpolicyobject"},{default:s(()=>[o("локальную политику")]),_:1}),o(", соответствующую этому уровню пользователя.")]),e("p",null,[o("Значение "),A,o(" соответствует значению "),U,o(" в "),t(n,{to:"/ru/config/policy.html#policyobject"},{default:s(()=>[o("policy")]),_:1}),o(". Если не указано, по умолчанию используется значение "),S,o(".")]),F,e("p",null,[o("Несколько пар «ключ-значение», используемых для управления исходящей фрагментацией TCP. В некоторых случаях это может обмануть системы цензуры, например, обойти черные списки SNI. "),x,o(" и "),T,o(" относятся к типу "),t(n,{to:"/ru/development/intro/guide.html#int32range"},{default:s(()=>[o("Int32Range")]),_:1})]),j,e("p",null,[N,o(": "),D,o(", в миллисекундах. После отправки этого пакета шума ядро будет ждать указанное время, прежде чем отправить следующий пакет шума или реальные данные. По умолчанию ожидание отсутствует. Тип: "),t(n,{to:"/ru/development/intro/guide.html#int32range"},{default:s(()=>[o("Int32Range")]),_:1})]),B])}const V=p(r,[["render",C],["__file","freedom.html.vue"]]);export{V as default};
