import{_ as r,r as e,o as i,c as u,a,b as n,d as o,w as c,e as s}from"./app-BOvYEtC3.js";const b={},k=s(`<h1 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback"><span>Fallback</span></a></h1><blockquote><p><strong>Fallback - одна из самых мощных функций Xray, эффективно предотвращающая активное зондирование и позволяющая свободно настраивать совместное использование нескольких служб на часто используемых портах.</strong></p></blockquote><p>Fallback обеспечивает Xray высокой степенью защиты от активного зондирования и имеет уникальный механизм резервирования первого пакета.</p><p>Fallback также может разделять трафик различных типов по пути, что позволяет совместно использовать один порт для нескольких служб.</p><p>В настоящее время вы можете использовать функцию fallback при использовании протоколов VLESS или Trojan, настроив <code>fallbacks</code>, и создавать очень разнообразные комбинации.</p><h2 id="настроика-fallbacks" tabindex="-1"><a class="header-anchor" href="#настроика-fallbacks"><span>Настройка <code>fallbacks</code></span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p>Массив, содержащий серию мощных конфигураций резервирования и разделения трафика.</p><h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject"><span>FallbackObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>fallbacks</code> - это массив, здесь приведено описание конфигурации одного из его элементов.</strong></p><p>Элемент <code>fallbacks</code> является необязательным и может использоваться только для комбинации транспорта TCP+TLS.</p>`,13),h=n("code",null,'"alpn":["http/1.1"]',-1),_=s("<p>Обычно сначала нужно настроить набор резервных путей по умолчанию с опущенными или пустыми <code>alpn</code> и <code>path</code>, а затем настроить другие разделения по мере необходимости.</p><p>VLESS будет перенаправлять трафик с длиной первого пакета после дешифрования TLS менее 18 байт, неверной версией протокола или неудачной аутентификацией на адрес, указанный в <code>dest</code>.</p><p>Для других комбинаций транспорта необходимо удалить элемент <code>fallbacks</code> или все его дочерние элементы. В этом случае Fallback не будет включен, VLESS будет ждать считывания необходимой длины, а в случае неверной версии протокола или сбоя аутентификации соединение будет немедленно разорвано.</p><blockquote><p><code>name</code>: string</p></blockquote><p>Попытка сопоставить TLS SNI (указание имени сервера), любое значение или пустая строка, по умолчанию &quot;&quot;.</p><blockquote><p><code>alpn</code>: string</p></blockquote><p>Попытка сопоставить результат согласования TLS ALPN, любое значение или пустая строка, по умолчанию &quot;&quot;.</p>",7),m=n("code",null,"realAlpn =",-1),f=n("code",null,"fallbacks alpn",-1),v=n("code",null,'"h2"',-1),g=n("code",null,'"alpn":["h2","http/1.1"]',-1),q=s('<div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p><code>alpn</code>, установленный в Fallback, соответствует фактически согласованному ALPN, а <code>alpn</code>, установленный в Inbound TLS, - это список дополнительных ALPN во время рукопожатия. Это разные вещи.</p></div><blockquote><p><code>path</code>: string</p></blockquote><p>Попытка сопоставить HTTP-путь первого пакета, любое значение или пустая строка, по умолчанию пустая строка, если не пустая, то должна начинаться с <code>/</code>, h2c не поддерживается.</p><p>Интеллектуальность: при необходимости VLESS попытается просмотреть PATH (не более 55 байт; самый быстрый алгоритм, не выполняет полный разбор HTTP) и в случае успеха выведет в INFO-лог <code>realPath =</code>. Назначение: разделение трафика WebSocket или HTTP-маскировки для других входящих соединений, без лишней обработки, чистая переадресация трафика, теоретически более высокая производительность, чем у Nginx.</p><p>Примечание: <strong>входящее соединение, в котором находится fallbacks, должно быть TCP+TLS</strong>, это необходимо для разделения трафика на другие входящие соединения WS, входящие соединения, на которые разделяется трафик, не нуждаются в настройке TLS.</p><blockquote><p><code>dest</code>: string | number</p></blockquote><p>Определяет, куда перенаправляется TCP-трафик после дешифрования TLS, в настоящее время поддерживаются два типа адресов (это поле является обязательным, иначе запуск невозможен):</p>',7),x=n("li",null,[o("TCP, формат "),n("code",null,'"addr:port"'),o(", где addr поддерживает IPv4, доменное имя, IPv6, если указано доменное имя, TCP-соединение будет установлено напрямую (без использования встроенного DNS).")],-1),T=n("code",null,'"/dev/shm/domain.socket"',-1),S=n("code",null,"@",-1),L={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"@@",-1),j=n("p",null,[o("Если указан только порт, можно использовать число или строку, например, "),n("code",null,"80"),o(", "),n("code",null,'"80"'),o(", обычно указывает на службу http в открытом виде (addr будет дополнен до "),n("code",null,'"127.0.0.1"'),o(").")],-1),y=n("blockquote",null,[n("p",null,[n("code",null,"xver"),o(": number")])],-1),N={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},F=n("p",null,"В настоящее время при указании 1 или 2 функциональность полностью идентична, отличается только структура, причем первая может быть распечатана, а вторая - двоичная. Входящие TCP- и WS-соединения Xray уже поддерживают прием PROXY protocol.",-1),I={class:"custom-container warning"},w=n("p",{class:"custom-container-title"},"Внимание",-1),C={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"proxy_protocol",-1),E=n("code",null,"set_real_ip_from",-1),A=s('<h3 id="дополнительные-замечания" tabindex="-1"><a class="header-anchor" href="#дополнительные-замечания"><span>Дополнительные замечания</span></a></h3><ul><li>Будет выполнено сопоставление с наиболее точным дочерним элементом, порядок дочерних элементов не имеет значения. Если настроено несколько дочерних элементов с одинаковыми <code>alpn</code> и <code>path</code>, будет использоваться последний.</li><li>Резервирование и разделение трафика - это переадресация на уровне TCP после дешифрования, а не на уровне HTTP, проверка PATH первого пакета выполняется только при необходимости.</li><li>Вы можете просмотреть больше советов и рекомендаций по использованию Fallbacks: <ul><li><a href="../../document/level-1/fallbacks-lv1">Краткое описание функции Fallbacks</a></li></ul></li></ul>',2),H={id:"теория-fallbacks",tabindex:"-1"},O={class:"header-anchor",href:"#теория-fallbacks"};function X(B,R){const p=e("I18nTip"),l=e("RouterLink"),t=e("ExternalLinkIcon"),d=e("Badge");return i(),u("div",null,[a(p),k,n("ul",null,[n("li",null,[o("Если этот элемент имеет дочерние элементы, в "),a(l,{to:"/ru/config/transport.html#tlsobject"},{default:c(()=>[o("Inbound TLS")]),_:1}),o(" необходимо установить "),h,o(".")])]),_,n("p",null,[o("При необходимости VLESS попытается прочитать результат согласования TLS ALPN, и в случае успеха выведет в лог "),m,o(". Назначение: решает проблему несовместимости службы h2c Nginx с http/1.1, для которой в Nginx требуется написать две строки listen, по одной для 1.1 и h2c. Примечание: если в "),f,o(" присутствует "),v,o(", в "),a(l,{to:"/ru/config/transport.html#tlsobject"},{default:c(()=>[o("Inbound TLS")]),_:1}),o(" необходимо установить "),g,o(" для поддержки доступа h2.")]),q,n("ol",null,[x,n("li",null,[o("Unix domain socket, формат - абсолютный путь, например, "),T,o(", в начале можно добавить "),S,o(" для обозначения "),n("a",L,[o("abstract"),a(t)]),o(", "),P,o(" - для обозначения abstract с заполнением.")])]),j,y,n("p",null,[o("Отправка "),n("a",N,[o("PROXY protocol"),a(t)]),o(", специально для передачи реального исходного IP-адреса и порта запроса, заполняется версией 1 или 2, по умолчанию 0, то есть не отправляется. При необходимости рекомендуется указать 1.")]),F,n("div",I,[w,n("p",null,[o("Если вы "),n("a",C,[o("настраиваете Nginx на прием PROXY protocol"),a(t)]),o(", помимо установки "),V,o(", необходимо также установить "),E,o(", иначе могут возникнуть проблемы.")])]),A,n("h2",H,[n("a",O,[n("span",null,[o("Теория Fallbacks "),a(d,{text:"В разработке",type:"warning"})])])])])}const Y=r(b,[["render",X],["__file","fallback.html.vue"]]);export{Y as default};
