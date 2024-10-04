import{_ as l,r as c,o as i,c as d,a as s,b as n,d as o,w as a,e}from"./app-9On5B9xS.js";const r={},q=n("h1",{id:"маршрутизация",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#маршрутизация"},[n("span",null,"Маршрутизация")])],-1),k=n("p",null,"Модуль маршрутизации может отправлять входящие данные через разные исходящие соединения в соответствии с разными правилами для достижения цели проксирования по требованию.",-1),b=n("p",null,"Например, распространенным сценарием использования является разделение внутреннего и внешнего трафика. Xray может использовать внутренние механизмы для определения трафика из разных регионов, а затем отправлять его на разные исходящие прокси.",-1),v=e(`<h2 id="routingobject" tabindex="-1"><a class="header-anchor" href="#routingobject"><span>RoutingObject</span></a></h2><p><code>RoutingObject</code> соответствует элементу <code>routing</code> в файле конфигурации.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domainMatcher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hybrid&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balancers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;IPIfNonMatch&quot; | &quot;IPOnDemand&quot;</p></blockquote><p>Стратегия разрешения доменных имен. Используются разные стратегии в зависимости от настройки.</p><ul><li><code>&quot;AsIs&quot;</code>: для выбора маршрута используются только доменные имена. Значение по умолчанию.</li><li><code>&quot;IPIfNonMatch&quot;</code>: если доменное имя не соответствует ни одному правилу, доменное имя разрешается в IP-адрес (запись A или запись AAAA) для повторного сопоставления; <ul><li>Если у доменного имени несколько записей A, предпринимается попытка сопоставить все записи A, пока одна из них не будет соответствовать какому-либо правилу;</li><li>Разрешенный IP-адрес используется только при выборе маршрута, в пересылаемых пакетах данных по-прежнему используется исходное доменное имя;</li></ul></li><li><code>&quot;IPOnDemand&quot;</code>: если при сопоставлении встречается любое правило на основе IP-адреса, доменное имя немедленно разрешается в IP-адрес для сопоставления;</li></ul><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>Алгоритм сопоставления доменных имен. Используются разные алгоритмы в зависимости от настройки. Этот параметр влияет на все <code>RuleObject</code>, для которых не указан отдельный алгоритм сопоставления.</p><ul><li><code>&quot;hybrid&quot;</code>: используется новый алгоритм сопоставления доменных имен, который работает быстрее и занимает меньше места. Значение по умолчанию.</li><li><code>&quot;linear&quot;</code>: используется старый алгоритм сопоставления доменных имен.</li></ul><blockquote><p><code>rules</code>: [<a href="#ruleobject">RuleObject</a>]</p></blockquote><p>Соответствует массиву, каждый элемент которого является правилом.</p><p>Для каждого соединения маршрутизация будет выполняться в соответствии с этими правилами сверху вниз. Когда встречается первое действующее правило, это соединение перенаправляется на указанный им <code>outboundTag</code> или <code>balancerTag</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если ни одно правило не совпадает, трафик по умолчанию отправляется через первый исходящий канал.</p></div><blockquote><p><code>balancers</code>: [ <a href="#balancerobject">BalancerObject</a> ]</p></blockquote><p>Массив, каждый элемент которого является конфигурацией балансировщика нагрузки.</p><p>Когда правило указывает на балансировщик нагрузки, Xray выбирает исходящий канал через этот балансировщик нагрузки, а затем перенаправляет трафик через него.</p><h3 id="ruleobject" tabindex="-1"><a class="header-anchor" href="#ruleobject"><span>RuleObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainMatcher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hybrid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;qq.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fc00::/7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fe80::/10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sourcePort&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tag-vmess&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;:method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ruleTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rule name&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Предупреждение</p><p>Если указано несколько атрибутов, они должны выполняться <strong>одновременно</strong>, чтобы текущее правило вступило в силу.</p></div><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>Алгоритм сопоставления доменных имен. Используются разные алгоритмы в зависимости от настройки. Этот параметр имеет приоритет над <code>domainMatcher</code>, настроенным в <code>RoutingObject</code>.</p><ul><li><code>&quot;hybrid&quot;</code>: используется новый алгоритм сопоставления доменных имен, который работает быстрее и занимает меньше места. Значение по умолчанию.</li><li><code>&quot;linear&quot;</code>: используется старый алгоритм сопоставления доменных имен.</li></ul><blockquote><p><code>type</code>: &quot;field&quot;</p></blockquote><p>В настоящее время поддерживается только опция <code>&quot;field&quot;</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Можно опустить эту строку в Xray-core v1.8.7 или более поздней версии.</p></div><blockquote><p><code>domain</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой сопоставление доменного имени. Возможны следующие форматы:</p>`,27),g=e('<li>Простая строка: правило вступает в силу, если эта строка соответствует любой части целевого доменного имени. Например, &quot;sina.com&quot; может соответствовать &quot;sina.com&quot;, &quot;sina.com.cn&quot; и &quot;www.sina.com&quot;, но не соответствует &quot;sina.cn&quot;.</li><li>Регулярное выражение: начинается с <code>&quot;regexp:&quot;</code>, остальная часть является регулярным выражением. Правило вступает в силу, если это регулярное выражение соответствует целевому доменному имени. Например, <code>&quot;regexp:\\\\\\\\.goo.\\*\\\\\\\\.com\\$&quot;</code> соответствует &quot;www.google.com&quot; или &quot;fonts.googleapis.com&quot;, но не соответствует &quot;google.com&quot;. (Обратите внимание, что в json обратная косая черта, часто используемая в регулярных выражениях, используется как escape-символ, поэтому обратная косая черта <code>\\</code> в регулярном выражении должна быть заменена на <code>\\\\</code>)</li><li>Поддомен (рекомендуется): начинается с <code>&quot;domain:&quot;</code>, остальная часть является доменным именем. Правило вступает в силу, если это доменное имя является целевым доменным именем или его поддоменом. Например, &quot;domain:xray.com&quot; соответствует &quot;www.xray.com&quot;, &quot;xray.com&quot;, но не соответствует &quot;wxray.com&quot;.</li><li>Полное совпадение: начинается с <code>&quot;full:&quot;</code>, остальная часть является доменным именем. Правило вступает в силу, если это доменное имя полностью соответствует целевому доменному имени. Например, &quot;full:xray.com&quot; соответствует &quot;xray.com&quot;, но не соответствует &quot;www.xray.com&quot;.</li><li>Предопределенный список доменов: начинается с <code>&quot;geosite:&quot;</code>, остальная часть является именем, например, <code>geosite:google</code> или <code>geosite:cn</code>. Имена и списки доменов см. в разделе <a href="#%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2">Предопределенные списки доменов</a>.</li>',5),m=n("code",null,'"ext:файл:тег"',-1),h=n("code",null,"ext:",-1),D=n("code",null,"geosite.dat",-1),y=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"Подсказка"),n("p",null,[n("code",null,'"ext:geoip.dat:cn"'),o(" эквивалентно "),n("code",null,'"geoip:cn"')])],-1),_=n("blockquote",null,[n("p",null,[n("code",null,"ip"),o(": [string]")])],-1),B=n("p",null,"Массив, каждый элемент которого представляет собой диапазон IP-адресов. Правило вступает в силу, если какой-либо элемент соответствует целевому IP-адресу. Возможны следующие форматы:",-1),f=n("li",null,[o("IP-адрес: например, "),n("code",null,'"127.0.0.1"'),o(".")],-1),j={href:"https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BC%D0%B5%D0%B6%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,'"10.0.0.0/8"',-1),x=n("code",null,'"0.0.0.0/0"',-1),I=n("code",null,'"::/0"',-1),P=e("<li>Предопределенный список IP-адресов: этот список встроен в каждый установочный пакет Xray, имя файла - <code>geoip.dat</code>. Формат использования: <code>&quot;geoip:код_страны&quot;</code>, должно начинаться с <code>geoip:</code> (в нижнем регистре), за которым следует двухбуквенный код страны, поддерживаются почти все страны с доступом в Интернет. <ul><li>Специальное значение: <code>&quot;geoip:private&quot;</code>, включает в себя все частные адреса, например, <code>127.0.0.1</code>.</li><li>Функция инверсии (!), <code>&quot;geoip:!cn&quot;</code> означает результаты, не входящие в <code>geoip:cn</code>.</li></ul></li>",1),w=n("code",null,'"ext:файл:тег"',-1),O=n("code",null,"ext:",-1),A=n("code",null,"geoip.dat",-1),C=e(`<blockquote><p><code>port</code>: number | string</p></blockquote><p>Диапазон портов назначения, возможны три формата:</p><ul><li><code>&quot;a-b&quot;</code>: a и b являются положительными целыми числами, меньшими 65536. Этот диапазон является замкнутым интервалом, правило вступает в силу, если порт назначения попадает в этот диапазон.</li><li><code>a</code>: a является положительным целым числом, меньшим 65536. Правило вступает в силу, если порт назначения равен a.</li><li>Смесь двух вышеуказанных форматов, разделенных запятой &quot;,&quot;. Например: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>sourcePort</code>: number | string</p></blockquote><p>Порт источника, возможны три формата:</p><ul><li><code>&quot;a-b&quot;</code>: a и b являются положительными целыми числами, меньшими 65536. Этот диапазон является замкнутым интервалом, правило вступает в силу, если порт источника попадает в этот диапазон.</li><li><code>a</code>: a является положительным целым числом, меньшим 65536. Правило вступает в силу, если порт источника равен a.</li><li>Смесь двух вышеуказанных форматов, разделенных запятой &quot;,&quot;. Например: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>Допустимые значения: &quot;tcp&quot;, &quot;udp&quot; или &quot;tcp,udp&quot;. Правило вступает в силу, если тип соединения соответствует указанному.</p><blockquote><p><code>source</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой диапазон IP-адресов. Возможные форматы: IP-адрес, CIDR, GeoIP и загрузка IP-адресов из файла. Правило вступает в силу, если какой-либо элемент соответствует IP-адресу источника.</p><blockquote><p><code>user</code>: [string]</p></blockquote><p>Массив, каждый элемент которого является адресом электронной почты. Правило вступает в силу, если какой-либо элемент соответствует пользователю-источнику.</p><p>Аналогично доменному имени, также поддерживается сопоставление с помощью регулярных выражений, начинающихся с <code>regexp:</code>. (Также необходимо заменить <code>\\</code> на <code>\\\\</code>, см. объяснение в разделе <code>domain</code>)</p><blockquote><p><code>inboundTag</code>: [string]</p></blockquote><p>Массив, каждый элемент которого является тегом. Правило вступает в силу, если какой-либо элемент соответствует тегу входящего протокола.</p><blockquote><p><code>protocol</code>: [ &quot;http&quot; | &quot;tls&quot; | &quot;bittorrent&quot; ]</p></blockquote><p>Массив, каждый элемент которого представляет собой протокол. Правило вступает в силу, если какой-либо протокол соответствует типу протокола текущего соединения.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Необходимо включить опцию <code>sniffing</code> во входящем прокси, чтобы определить тип протокола, используемого соединением.</p></div><blockquote><p><code>attrs</code>: object</p></blockquote><p>Объект json, ключи и значения которого являются строками, используется для проверки значений атрибутов трафика. Правило вступает в силу, если HTTP-заголовки содержат все указанные ключи, а значения содержат указанные подстроки. Регистр ключей не учитывается. Значения поддерживают использование регулярных выражений.</p><p>Также поддерживаются псевдозаголовки h2, такие как <code>:method</code> и <code>:path</code>, для сопоставления метода и пути (хотя в HTTP/1.1 эти заголовки отсутствуют)</p><p>Для метода, отличного от CONNECT, входящего HTTP-запроса, <code>attrs</code> можно получить напрямую, для других входящих запросов необходимо включить <code>sniffing</code>, чтобы получить эти значения для сопоставления.</p><p>Примеры:</p><ul><li>Проверка HTTP GET: <code>{&quot;:method&quot;: &quot;GET&quot;}</code></li><li>Проверка HTTP Path: <code>{&quot;:path&quot;: &quot;/test&quot;}</code></li><li>Проверка Content Type: <code>{&quot;accept&quot;: &quot;text/html&quot;}</code></li></ul><blockquote><p><code>outboundTag</code>: string</p></blockquote><p>Соответствует тегу исходящего канала.</p><blockquote><p><code>balancerTag</code>: string</p></blockquote><p>Соответствует тегу балансировщика нагрузки.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Необходимо указать либо <code>balancerTag</code>, либо <code>outboundTag</code>. Если указаны оба, используется <code>outboundTag</code>.</p></div><blockquote><p><code>ruleTag</code>: string</p></blockquote><p>Необязательно, не имеет фактического эффекта, используется только для идентификации имени этого правила.</p><p>Если установлено, при совпадении с этим правилом в журнал с уровнем Info будет выводиться соответствующая информация, используемая для отладки того, какое правило маршрутизации сработало.</p><h3 id="balancerobject" tabindex="-1"><a class="header-anchor" href="#balancerobject"><span>BalancerObject</span></a></h3><p>Конфигурация балансировщика нагрузки. Когда балансировщик нагрузки активен, он выбирает наиболее подходящий исходящий канал из указанных исходящих каналов в соответствии с конфигурацией и перенаправляет трафик через него.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fallbackTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;outbound&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>Тег этого балансировщика нагрузки, используется для сопоставления с <code>balancerTag</code> в <code>RuleObject</code>.</p><blockquote><p><code>selector</code>: [ string ]</p></blockquote><p>Массив строк, каждая из которых будет использоваться для сопоставления с префиксом тега исходящего канала. Например, для следующих тегов исходящих каналов: <code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>, <code>&quot;selector&quot;: [&quot;a&quot;]</code> будет соответствовать <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>.</p><p>Если найдено несколько исходящих каналов, балансировщик нагрузки в настоящее время случайным образом выбирает один из них в качестве конечного исходящего канала.</p><blockquote><p><code>fallbackTag</code>: string</p></blockquote><p>Если балансировщик нагрузки не может выбрать подходящий исходящий канал, используется исходящий канал, указанный в этом параметре.</p><blockquote><p><code>strategy</code>: <a href="#strategyobject">StrategyObject</a></p></blockquote><h4 id="strategyobject" tabindex="-1"><a class="header-anchor" href="#strategyobject"><span>StrategyObject</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;roundRobin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>type</code> : &quot;random&quot; | &quot;roundRobin&quot; | &quot;leastPing&quot; | &quot;leastLoad&quot;</p></blockquote>`,46),R=n("li",null,[n("code",null,"random"),o(": значение по умолчанию. Случайным образом выбирает соответствующий исходящий прокси.")],-1),E=n("li",null,[n("code",null,"roundRobin"),o(": выбирает соответствующие исходящие прокси по очереди.")],-1),N=n("code",null,"leastPing",-1),S=n("code",null,"leastLoad",-1),F=e(`<blockquote><p><code>settings</code>: <a href="#strategysettingsobject">StrategySettingsObject</a></p></blockquote><h5 id="strategysettingsobject" tabindex="-1"><a class="header-anchor" href="#strategysettingsobject"><span>StrategySettingsObject</span></a></h5><p>Это необязательный параметр конфигурации, формат которого различается для разных стратегий балансировки нагрузки. В настоящее время этот параметр конфигурации можно добавить только для стратегии балансировки нагрузки <code>leastLoad</code>.</p><h3 id="примеры-конфигурации-балансировки-нагрузки" tabindex="-1"><a class="header-anchor" href="#примеры-конфигурации-балансировки-нагрузки"><span>Примеры конфигурации балансировки нагрузки</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;in&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;round&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;balancers&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;out&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;roundRobin&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;round&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;in&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out1&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out2&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="предопределенные-списки-доменов" tabindex="-1"><a class="header-anchor" href="#предопределенные-списки-доменов"><span>Предопределенные списки доменов</span></a></h3><p>Этот список встроен в каждый установочный пакет Xray, имя файла - <code>geosite.dat</code>. Этот файл содержит некоторые распространенные доменные имена. Формат использования: <code>geosite:имя_файла</code>, например, <code>geosite:google</code> означает фильтрацию маршрутизации или DNS для доменных имен, соответствующих <code>google</code> в файле.</p><p>Распространенные доменные имена:</p><ul><li><code>category-ads</code>: содержит распространенные доменные имена рекламы.</li><li><code>category-ads-all</code>: содержит распространенные доменные имена рекламы, а также доменные имена поставщиков рекламы.</li><li><code>cn</code>: эквивалентно объединению <code>geolocation-cn</code> и <code>tld-cn</code>.</li><li><code>apple</code>: содержит большинство доменных имен Apple.</li><li><code>google</code>: содержит большинство доменных имен Google.</li><li><code>microsoft</code>: содержит большинство доменных имен Microsoft.</li><li><code>facebook</code>: содержит большинство доменных имен Facebook.</li><li><code>twitter</code>: содержит большинство доменных имен Twitter.</li><li><code>telegram</code>: содержит большинство доменных имен Telegram.</li><li><code>geolocation-cn</code>: содержит распространенные доменные имена сайтов материкового Китая.</li><li><code>geolocation-!cn</code>: содержит распространенные доменные имена сайтов, не относящихся к материковому Китаю.</li><li><code>tld-cn</code>: содержит домены верхнего уровня, управляемые CNNIC для использования в материковом Китае, например, доменные имена, оканчивающиеся на <code>.cn</code>, <code>.中国</code>.</li><li><code>tld-!cn</code>: содержит домены верхнего уровня, не используемые в материковом Китае, например, доменные имена, оканчивающиеся на <code>.tw</code> (Тайвань), <code>.jp</code> (Япония), <code>.sg</code> (Сингапур), <code>.us</code> (США), <code>.ca</code> (Канада) и т.д.</li></ul>`,9),M={href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"};function L(G,H){const u=c("I18nTip"),t=c("RouterLink"),p=c("ExternalLinkIcon");return i(),d("div",null,[s(u),q,k,b,n("p",null,[o("Более подробный анализ функции маршрутизации: "),s(t,{to:"/ru/document/level-1/routing-lv1-part1.html"},{default:a(()=>[o("Краткий анализ функции маршрутизации (routing)")]),_:1}),o(".")]),v,n("ul",null,[g,n("li",null,[o("Загрузка доменных имен из файла: имеет вид "),m,o(", должно начинаться с "),h,o(" (в нижнем регистре), за которым следует имя файла и тег, файл хранится в "),s(t,{to:"/ru/config/features/env.html#%D0%BF%D1%83%D1%82%D1%8C-%D0%BA-%D1%84%D0%B0%D0%B9%D0%BB%D1%83-%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2"},{default:a(()=>[o("каталоге ресурсов")]),_:1}),o(", формат файла такой же, как у "),D,o(", тег должен существовать в файле.")])]),y,_,B,n("ul",null,[f,n("li",null,[n("a",j,[o("CIDR"),s(p)]),o(": например, "),T,o(", также можно использовать "),x,o(),I,o(" для указания всех IPv4- или IPv6-адресов.")]),P,n("li",null,[o("Загрузка IP-адресов из файла: имеет вид "),w,o(", должно начинаться с "),O,o(" (в нижнем регистре), за которым следует имя файла и тег, файл хранится в "),s(t,{to:"/ru/config/features/env.html#%D0%BF%D1%83%D1%82%D1%8C-%D0%BA-%D1%84%D0%B0%D0%B9%D0%BB%D1%83-%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2"},{default:a(()=>[o("каталоге ресурсов")]),_:1}),o(", формат файла такой же, как у "),A,o(", тег должен существовать в файле.")])]),C,n("ul",null,[R,E,n("li",null,[N,o(": выбирает соответствующий исходящий прокси с наименьшей задержкой на основе результатов наблюдений за соединением. Необходимо добавить параметр конфигурации "),s(t,{to:"/ru/config/observatory.html#observatoryobject"},{default:a(()=>[o("observatory")]),_:1}),o(".")]),n("li",null,[S,o(": выбирает наиболее стабильный соответствующий исходящий прокси на основе результатов наблюдений за соединением. Необходимо добавить параметр конфигурации "),s(t,{to:"/ru/config/observatory.html#burstobservatoryobject"},{default:a(()=>[o("burstObservatory")]),_:1}),o(".")])]),F,n("p",null,[o("Вы также можете просмотреть полный список доменов здесь: "),n("a",M,[o("Domain list community"),s(p)]),o(".")])])}const V=l(r,[["render",L],["__file","routing.html.vue"]]);export{V as default};
