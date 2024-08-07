import{_ as r,r as a,o as u,c as i,a as e,b as s,d as n,w as l,e as o}from"./app-BOvYEtC3.js";const d={},v=o(`<h1 id="wireguard" tabindex="-1"><a class="header-anchor" href="#wireguard"><span>WireGuard</span></a></h1><p>Стандартная реализация протокола WireGuard.</p><div class="custom-container danger"><p class="custom-container-title">Предупреждение</p><p><strong>Протокол WireGuard не предназначен для обхода блокировок, и его использование может привести к блокировке сервера из-за наличия характерных признаков.</strong></p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;secretKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PRIVATE_KEY&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// необязательно, по умолчанию [&quot;10.0.0.1&quot;, &quot;fd59:7153:2388:b5fd:0000:0000:0000:0001&quot;]</span>
    <span class="token string">&quot;IPv4_CIDR&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;IPv6_CIDR&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;и так далее...&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;peers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ENDPOINT_ADDR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PUBLIC_KEY&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;kernelMode&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// необязательно, по умолчанию true, если поддерживается и есть достаточные права</span>
  <span class="token property">&quot;mtu&quot;</span><span class="token operator">:</span> <span class="token number">1420</span><span class="token punctuation">,</span> <span class="token comment">// необязательно, по умолчанию 1420</span>
  <span class="token property">&quot;reserved&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// необязательно, по умолчанию runtime.NumCPU()</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ForceIP&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>В настоящее время в исходящем протоколе WireGuard не поддерживается настройка <code>streamSettings</code>.</p></div><blockquote><p><code>secretKey</code>: string</p></blockquote><p>Приватный ключ пользователя. Обязательный параметр.</p><blockquote><p><code>address</code>: string array</p></blockquote><p>WireGuard создаст виртуальный сетевой интерфейс TUN на локальном компьютере. Используйте один или несколько IP-адресов, IPv6 поддерживается.</p><blockquote><p><code>kernelMode</code>: true | false</p></blockquote><p>Использовать ли TUN виртуального сетевого интерфейса ядра Linux.<br> Для использования TUN виртуального сетевого интерфейса ядра Linux требуется поддержка системы и права root, после использования будет занята 1023-я таблица маршрутизации IPv6.<br></p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если в 1023-й таблице маршрутизации IPv6 уже есть записи маршрутов и значение <code>kernelMode</code> равно <code>true</code>, нормальная работа будет невозможна.</p></div><blockquote><p><code>mtu</code>: int</p></blockquote><p>Размер фрагментации TUN нижнего уровня WireGuard.</p><details><summary>Как рассчитать MTU</summary><p>Структура пакета WireGuard выглядит следующим образом:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 20-байтовый заголовок IPv4 или 40-байтовый заголовок IPv6
- 8-байтовый заголовок UDP
- 4 байта типа
- 4 байта индекса ключа
- 8 байтов nonce
- N байтов зашифрованных данных
- 16-байтовый тег аутентификации
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>N байтов зашифрованных данных</code> - это значение MTU, которое нам нужно. В зависимости от того, использует ли конечная точка IPv4 или IPv6, конкретное значение может быть 1440 (IPv4) или 1420 (IPv6), и его можно дополнительно уменьшить, если это необходимо в особых условиях (например, PPPoE для домашнего интернета требует дополнительного вычитания 8).</p></details><blockquote><p><code>reserved</code> [ number ]</p></blockquote><p>Зарезервированные байты WireGuard.</p>`,18),k=s("br",null,null,-1),q=s("code",null,"reserved",-1),m=s("br",null,null,-1),b=s("code",null,"reserved",-1),g={href:"https://github.com/badafans/warp-reg",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/chise0713/warp-reg.sh",target:"_blank",rel:"noopener noreferrer"},y=o('<blockquote><p><code>workers</code>: int</p></blockquote><p>Количество потоков, используемых WireGuard.</p><blockquote><p><code>peers</code>: [ <a href="#peers">Peers</a> ]</p></blockquote><p>Список серверов WireGuard, где каждый элемент является конфигурацией сервера.</p><blockquote><p><code>domainStrategy</code>: &quot;ForceIPv6v4&quot; | &quot;ForceIPv6&quot; | &quot;ForceIPv4v6&quot; | &quot;ForceIPv4&quot; | &quot;ForceIP&quot;</p></blockquote>',5),P=s("br",null,null,-1),I=s("code",null,'"ForceIP"',-1),h=s("br",null,null,-1),f=s("code",null,'"dns"',-1),S=s("br",null,null,-1),N=o(`<div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если значение <code>domainStrategy</code> конфликтует со значением <code>&quot;queryStrategy&quot;</code> в конфигурации <code>&quot;dns&quot;</code>, это может привести к ошибкам при открытии веб-сайтов.</p></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://1.1.1.1/dns-query&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;geosite:openai&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;skipFallback&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIPv6&quot;</span> <span class="token comment">// Запрашивать только записи AAAA</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;queryStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UseIP&quot;</span> <span class="token comment">// Запрашивать записи A и AAAA одновременно, если этот параметр не указан, значение по умолчанию - UseIP</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если <code>domainStrategy: &quot;ForceIPv4&quot;</code>, а в поле DNS, управляющем запросами домена geosite:openai, используется <code>&quot;queryStrategy&quot;: &quot;UseIPv6&quot;</code>, это приведет к ошибкам при открытии веб-сайтов geosite:openai.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>В Xray-core v1.8.0 - v1.8.4 нет <code>&quot;domainStrategy&quot;</code>.<br> Если целевой адрес является доменным именем, для получения IP-адреса используется встроенный DNS-сервер Xray-core. Значение <code>&quot;queryStrategy&quot;</code> в конфигурации <code>&quot;dns&quot;</code> используется для управления приоритетом IPv4 или IPv6.<br> Если конфигурация <code>&quot;dns&quot;</code> не указана, для получения IP-адреса используется системный DNS, а приоритет IPv4 или IPv6 определяется системой.</p></div><h3 id="peers" tabindex="-1"><a class="header-anchor" href="#peers"><span>Peers</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ENDPOINT_ADDR&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;publicKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PUBLIC_KEY&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;preSharedKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PRE_SHARED_KEY&quot;</span><span class="token punctuation">,</span> <span class="token comment">// необязательно, по умолчанию &quot;0000000000000000000000000000000000000000000000000000000000000000&quot;</span>
  <span class="token property">&quot;keepAlive&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// необязательно, по умолчанию 0</span>
  <span class="token property">&quot;allowedIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/0&quot;</span><span class="token punctuation">]</span> <span class="token comment">// необязательно, по умолчанию [&quot;0.0.0.0/0&quot;, &quot;::/0&quot;]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>endpoint</code>: address</p></blockquote><p>Адрес сервера, обязательный параметр.</p><p>Формат URL:порт, например, <code>engage.cloudflareclient.com:2408</code><br> Формат IP:порт, например, <code>162.159.192.1:2408</code> или <code>[2606:4700:d0::a29f:c001]:2408</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если целевой адрес имеет тип URL, для получения IP-адреса будет использоваться встроенный DNS-сервер Xray-core, приоритет IPv4 или IPv6 определяется значением <code>domainStrategy</code>.<br> Если конфигурация <code>&quot;dns&quot;</code> не указана, для получения IP-адреса будет использоваться системный DNS, а приоритет IPv4 или IPv6 будет определяться системой.</p></div><blockquote><p><code>publicKey</code>: string</p></blockquote><p>Публичный ключ сервера, используемый для аутентификации, обязательный параметр.</p><blockquote><p><code>preSharedKey</code>: string</p></blockquote><p>Дополнительный ключ симметричного шифрования.</p><blockquote><p><code>keepAlive</code>: int</p></blockquote><p>Интервал отправки keep-alive пакетов в секундах, значение по умолчанию - 0, что означает отсутствие keep-alive.</p><blockquote><p><code>allowedIPs</code>: string array</p></blockquote><p>WireGuard разрешает трафик только от определенных исходных IP-адресов.</p>`,18);function x(D,U){const p=a("I18nTip"),t=a("ExternalLinkIcon"),c=a("RouterLink");return u(),i("div",null,[e(p),v,s("p",null,[n("Новый параметр в Xray-core v1.8.0."),k,n(" При подключении к Warp через WireGuard из-за ограничений Cloudflare для некоторых IP-адресов в Гонконге и Лос-Анджелесе требуется значение "),q,n(" для успешного подключения."),m,n(" Значение "),b,n(" можно получить с помощью сторонних инструментов, таких как: "),s("a",g,[n("warp-reg"),e(t)]),n(", "),s("a",_,[n("warp-reg.sh"),e(t)]),n(".")]),y,s("p",null,[n("Новый параметр в Xray-core v1.8.6."),P,n(" Если этот параметр не указан или оставлен пустым, используется значение по умолчанию "),I,n("."),h,n(" Если целевой адрес является доменным именем, для получения IP-адреса используется "),e(c,{to:"/ru/config/dns.html"},{default:l(()=>[n("встроенный DNS-сервер")]),_:1}),n(" Xray-core (если конфигурация "),f,n(" не указана, используется системный DNS), и этот IP-адрес отправляется через WireGuard для установления соединения."),S]),N])}const A=r(d,[["render",x],["__file","wireguard.html.vue"]]);export{A as default};
