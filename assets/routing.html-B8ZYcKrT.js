import{_ as l,r as p,o as i,c as r,a as s,b as n,d as o,w as e,e as t}from"./app-BOvYEtC3.js";const d={},q=n("h1",{id:"маршрутизация",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#маршрутизация"},[n("span",null,"Маршрутизация")])],-1),b=n("p",null,"Модуль маршрутизации позволяет направлять входящие данные через разные исходящие подключения в соответствии с различными правилами, что позволяет реализовать проксирование по требованию.",-1),k=n("p",null,[o("Например, распространенным сценарием использования является разделение трафика на внутренний и внешний."),n("br"),o(" Xray может определять трафик из разных регионов с помощью внутренних механизмов и отправлять его через разные исходящие подключения.")],-1),v={href:"https://xtls.github.io/ru/document/level-1/routing-lv1-part1.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="routingobject" tabindex="-1"><a class="header-anchor" href="#routingobject"><span>RoutingObject</span></a></h2><p><code>RoutingObject</code> соответствует полю <code>routing</code> в конфигурационном файле.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domainMatcher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hybrid&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balancers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;IPIfNonMatch&quot; | &quot;IPOnDemand&quot;</p></blockquote><p>Стратегия разрешения доменных имен.</p><ul><li><code>&quot;AsIs&quot;</code>: использовать только доменные имена для выбора маршрута.<br> Значение по умолчанию.</li><li><code>&quot;IPIfNonMatch&quot;</code>: если доменное имя не соответствует ни одному правилу, разрешить доменное имя в IP-адрес (запись A или AAAA) и снова выполнить сопоставление. <ul><li>Если у домена есть несколько записей A, Xray попытается сопоставить все записи A, пока одна из них не совпадет с каким-либо правилом.</li><li>Разрешенный IP-адрес используется только для выбора маршрута, в пересылаемых пакетах данных по-прежнему используется исходное доменное имя.</li></ul></li><li><code>&quot;IPOnDemand&quot;</code>: при сопоставлении с любым правилом, основанным на IP-адресе, доменное имя немедленно разрешается в IP-адрес для сопоставления.</li></ul><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>Алгоритм сопоставления доменных имен.<br> Этот параметр влияет на все <code>RuleObject</code>, для которых не указан алгоритм сопоставления.</p><ul><li><code>&quot;hybrid&quot;</code>: использовать новый алгоритм сопоставления доменных имен, который работает быстрее и занимает меньше памяти.<br> Значение по умолчанию.</li><li><code>&quot;linear&quot;</code>: использовать старый алгоритм сопоставления доменных имен.</li></ul><blockquote><p><code>rules</code>: [<a href="#ruleobject">RuleObject</a>]</p></blockquote><p>Массив, каждый элемент которого представляет собой правило.</p><p>Для каждого соединения маршрутизатор проверяет правила сверху вниз.<br> Когда встречается первое подходящее правило, соединение перенаправляется на исходящее подключение, указанное в его <code>outboundTag</code> или <code>balancerTag</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если ни одно правило не подходит, трафик отправляется через первое исходящее подключение по умолчанию.</p></div><blockquote><p><code>balancers</code>: [ <a href="#balancerobject">BalancerObject</a> ]</p></blockquote><p>Массив, каждый элемент которого представляет собой конфигурацию балансировщика нагрузки.</p><p>Если правило указывает на балансировщик нагрузки, Xray выбирает исходящее подключение через этот балансировщик нагрузки и перенаправляет трафик через него.</p><h3 id="ruleobject" tabindex="-1"><a class="header-anchor" href="#ruleobject"><span>RuleObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
  <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Предупреждение</p><p>Если указано несколько атрибутов, правило применяется только в том случае, если <strong>все</strong> атрибуты совпадают.</p></div><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>Алгоритм сопоставления доменных имен.<br> Этот параметр имеет приоритет над параметром <code>domainMatcher</code> в <code>RoutingObject</code>.</p><ul><li><code>&quot;hybrid&quot;</code>: использовать новый алгоритм сопоставления доменных имен, который работает быстрее и занимает меньше памяти.<br> Значение по умолчанию.</li><li><code>&quot;linear&quot;</code>: использовать старый алгоритм сопоставления доменных имен.</li></ul><blockquote><p><code>type</code>: &quot;field&quot;</p></blockquote><p>В настоящее время поддерживается только значение <code>&quot;field&quot;</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>В Xray-core v1.8.7 и более поздних версиях эту строку можно опустить.</p></div><blockquote><p><code>domain</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой шаблон доменного имени.<br> Доступны следующие форматы:</p>`,27),m=t('<li>Простая строка: правило применяется, если эта строка соответствует любой части целевого доменного имени.<br> Например, &quot;sina.com&quot; соответствует &quot;sina.com&quot;, &quot;sina.com.cn&quot; и &quot;www.sina.com&quot;, но не соответствует &quot;sina.cn&quot;.</li><li>Регулярное выражение: начинается с <code>&quot;regexp:&quot;</code>, а остальная часть - это регулярное выражение.<br> Правило применяется, если это регулярное выражение соответствует целевому доменному имени.<br> Например, &quot;regexp:\\\\.goo.*\\\\.com$&quot; соответствует &quot;www.google.com&quot; или &quot;fonts.googleapis.com&quot;, но не соответствует &quot;google.com&quot;.</li><li>Поддомен (рекомендуется): начинается с <code>&quot;domain:&quot;</code>, а остальная часть - это доменное имя.<br> Правило применяется, если это доменное имя является целевым доменным именем или его поддоменом.<br> Например, &quot;domain:xray.com&quot; соответствует &quot;www.xray.com&quot; и &quot;xray.com&quot;, но не соответствует &quot;wxray.com&quot;.</li><li>Полное совпадение: начинается с <code>&quot;full:&quot;</code>, а остальная часть - это доменное имя.<br> Правило применяется, если это доменное имя полностью совпадает с целевым доменным именем.<br> Например, &quot;full:xray.com&quot; соответствует &quot;xray.com&quot;, но не соответствует &quot;www.xray.com&quot;.</li><li>Предопределенный список доменов: начинается с <code>&quot;geosite:&quot;</code>, а остальная часть - это имя, например <code>geosite:google</code> или <code>geosite:cn</code>.<br> Список имен и доменов см. в разделе <a href="#%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2">Предопределенные списки доменов</a>.</li>',5),h=n("code",null,'"ext:file:tag"',-1),D=n("code",null,"ext:",-1),y=n("br",null,null,-1),_=n("br",null,null,-1),B=n("code",null,"geosite.dat",-1),f=n("br",null,null,-1),j=t('<div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p><code>&quot;ext:geoip.dat:cn&quot;</code> эквивалентно <code>&quot;geoip:cn&quot;</code>.</p></div><blockquote><p><code>ip</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой диапазон IP-адресов.<br> Правило применяется, если один из элементов соответствует целевому IP-адресу.<br> Доступны следующие форматы:</p>',3),x=n("li",null,[o("IP-адрес: например, "),n("code",null,'"127.0.0.1"'),o(".")],-1),I={href:"https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BC%D0%B5%D0%B6%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,'"10.0.0.0/8"',-1),P=t("<li>Предопределенный список IP-адресов: этот список включен в каждый установочный пакет Xray и называется <code>geoip.dat</code>.<br> Используйте формат <code>&quot;geoip:cn&quot;</code>, где <code>geoip:</code> (в нижнем регистре) - префикс, за которым следует двухбуквенный код страны.<br> Поддерживаются практически все страны с доступом в Интернет. <ul><li>Специальное значение: <code>&quot;geoip:private&quot;</code>, включает все частные IP-адреса, например <code>127.0.0.1</code>.</li><li>Инверсия (!): <code>&quot;geoip:!cn&quot;</code> означает все IP-адреса, кроме тех, что указаны в <code>geoip:cn</code>.</li></ul></li>",1),w=n("code",null,'"ext:file:tag"',-1),O=n("code",null,"ext:",-1),A=n("br",null,null,-1),R=n("br",null,null,-1),E=n("code",null,"geoip.dat",-1),C=n("br",null,null,-1),S=t(`<blockquote><p><code>port</code>: number | string</p></blockquote><p>Диапазон портов назначения.<br> Доступны следующие форматы:</p><ul><li><code>&quot;a-b&quot;</code>: <code>a</code> и <code>b</code> - положительные целые числа, меньшие 65536.<br> Диапазон является замкнутым, правило применяется, если целевой порт находится в этом диапазоне.</li><li><code>a</code>: <code>a</code> - положительное целое число, меньшее 65536.<br> Правило применяется, если целевой порт равен <code>a</code>.</li><li>Комбинация двух вышеуказанных форматов, разделенных запятыми &quot;,&quot;.<br> Например: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>sourcePort</code>: number | string</p></blockquote><p>Порт источника.<br> Доступны следующие форматы:</p><ul><li><code>&quot;a-b&quot;</code>: <code>a</code> и <code>b</code> - положительные целые числа, меньшие 65536.<br> Диапазон является замкнутым, правило применяется, если порт источника находится в этом диапазоне.</li><li><code>a</code>: <code>a</code> - положительное целое число, меньшее 65536.<br> Правило применяется, если порт источника равен <code>a</code>.</li><li>Комбинация двух вышеуказанных форматов, разделенных запятыми &quot;,&quot;.<br> Например: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>Допустимые значения: &quot;tcp&quot;, &quot;udp&quot; или &quot;tcp,udp&quot;.<br> Правило применяется, если тип сети соединения соответствует указанному значению.</p><blockquote><p><code>source</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой диапазон IP-адресов.<br> Доступны следующие форматы: IP-адрес, CIDR, GeoIP и загрузка IP-адресов из файла.<br> Правило применяется, если один из элементов соответствует IP-адресу источника.</p><blockquote><p><code>user</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой адрес электронной почты.<br> Правило применяется, если один из элементов соответствует пользователю источника.</p><blockquote><p><code>inboundTag</code>: [string]</p></blockquote><p>Массив, каждый элемент которого представляет собой тег.<br> Правило применяется, если один из элементов соответствует тегу входящего протокола.</p><blockquote><p><code>protocol</code>: [ &quot;http&quot; | &quot;tls&quot; | &quot;bittorrent&quot; ]</p></blockquote><p>Массив, каждый элемент которого представляет собой протокол.<br> Правило применяется, если один из элементов соответствует типу протокола текущего соединения.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Для определения типа протокола соединения необходимо включить параметр <code>sniffing</code> во входящем подключении.</p></div><blockquote><p><code>attrs</code>: object</p></blockquote><p>Объект JSON, где ключи и значения являются строками, используемый для проверки атрибутов трафика.<br> Правило применяется, если заголовки HTTP содержат все указанные ключи, а значения содержат указанные подстроки.<br> Ключи нечувствительны к регистру.<br> Значения могут быть регулярными выражениями.</p><p>В настоящее время этот атрибут устанавливается только входящим прокси HTTP.</p><p>Примеры:</p><ul><li>Проверка HTTP GET: <code>{&quot;:method&quot;: &quot;GET&quot;}</code></li><li>Проверка пути HTTP: <code>{&quot;:path&quot;: &quot;/test&quot;}&quot;</code></li><li>Проверка типа содержимого: <code>{&quot;accept&quot;: &quot;text/html&quot;}&quot;</code></li></ul><blockquote><p><code>outboundTag</code>: string</p></blockquote><p>Тег исходящего подключения.</p><blockquote><p><code>balancerTag</code>: string</p></blockquote><p>Тег балансировщика нагрузки.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Необходимо указать либо <code>balancerTag</code>, либо <code>outboundTag</code>.<br> Если указаны оба параметра, используется <code>outboundTag</code>.</p></div><h3 id="balancerobject" tabindex="-1"><a class="header-anchor" href="#balancerobject"><span>BalancerObject</span></a></h3><p>Настройки балансировщика нагрузки.<br> Когда балансировщик нагрузки активируется, он выбирает наиболее подходящее исходящее подключение из указанных и перенаправляет трафик через него.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fallbackTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;outbound&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>Тег этого балансировщика нагрузки, используемый для сопоставления с <code>balancerTag</code> в <code>RuleObject</code>.</p><blockquote><p><code>selector</code>: [ string ]</p></blockquote><p>Массив строк, каждый элемент которого будет использоваться для сопоставления с префиксом тега исходящего подключения.<br> Например, для следующих тегов исходящих подключений: <code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>, <code>&quot;selector&quot;: [&quot;a&quot;]</code> будет соответствовать <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>.</p><p>Если найдено несколько совпадений, балансировщик нагрузки в настоящее время выбирает одно из них случайным образом.</p><blockquote><p><code>fallbackTag</code>: string</p></blockquote><p>Исходящее подключение, которое будет использоваться, если балансировщик нагрузки не сможет выбрать подходящее исходящее подключение.</p><blockquote><p><code>strategy</code>: <a href="#strategyobject">StrategyObject</a></p></blockquote><h4 id="strategyobject" tabindex="-1"><a class="header-anchor" href="#strategyobject"><span>StrategyObject</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;roundRobin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>type</code> : &quot;random&quot; | &quot;roundRobin&quot; | &quot;leastPing&quot; | &quot;leastLoad&quot;</p></blockquote>`,41),N=n("li",null,[n("code",null,"random"),o(" (значение по умолчанию): случайный выбор из подходящих исходящих подключений.")],-1),F=n("li",null,[n("code",null,"roundRobin"),o(": последовательный выбор из подходящих исходящих подключений.")],-1),M=n("code",null,"leastPing",-1),L=n("br",null,null,-1),X=n("code",null,"leastLoad",-1),G=n("br",null,null,-1),H=t(`<blockquote><p><code>settings</code>: <a href="#strategysettingsobject">StrategySettingsObject</a></p></blockquote><h5 id="strategysettingsobject" tabindex="-1"><a class="header-anchor" href="#strategysettingsobject"><span>StrategySettingsObject</span></a></h5><p>Это необязательный параметр. Формат настройки зависит от стратегии балансировки нагрузки.<br> В настоящее время этот параметр можно использовать только со стратегией <code>leastLoad</code>.</p><h3 id="пример-конфигурации-балансировщика-нагрузки" tabindex="-1"><a class="header-anchor" href="#пример-конфигурации-балансировщика-нагрузки"><span>Пример конфигурации балансировщика нагрузки</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>    <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
            <span class="token comment">// Настройки входящего подключения</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;in&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// Настройки исходящего подключения</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out1&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// Настройки исходящего подключения</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out2&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="предопределенные-списки-доменов" tabindex="-1"><a class="header-anchor" href="#предопределенные-списки-доменов"><span>Предопределенные списки доменов</span></a></h3><p>Этот список включен в каждый установочный пакет Xray и называется <code>geosite.dat</code>.<br> Этот файл содержит некоторые распространенные доменные имена.<br> Формат использования: <code>geosite:filename</code>, например <code>geosite:google</code> означает сопоставление с доменными именами, указанными в файле в разделе <code>google</code>, для маршрутизации или фильтрации DNS.</p><p>Распространенные доменные имена:</p><ul><li><code>category-ads</code>: содержит доменные имена распространенных рекламных сервисов.</li><li><code>category-ads-all</code>: содержит доменные имена распространенных рекламных сервисов, а также доменные имена поставщиков рекламы.</li><li><code>cn</code>: эквивалентно объединению <code>geolocation-cn</code> и <code>tld-cn</code>.</li><li><code>apple</code>: содержит большинство доменных имен Apple.</li><li><code>google</code>: содержит большинство доменных имен Google.</li><li><code>microsoft</code>: содержит большинство доменных имен Microsoft.</li><li><code>facebook</code>: содержит большинство доменных имен Facebook.</li><li><code>twitter</code>: содержит большинство доменных имен Twitter.</li><li><code>telegram</code>: содержит большинство доменных имен Telegram.</li><li><code>geolocation-cn</code>: содержит доменные имена распространенных сайтов, расположенных в Китае.</li><li><code>geolocation-!cn</code>: содержит доменные имена распространенных сайтов, расположенных за пределами Китая.</li><li><code>tld-cn</code>: содержит доменные имена верхнего уровня, управляемые CNNIC и используемые в Китае, например, домены, оканчивающиеся на <code>.cn</code>, <code>.中国</code>.</li><li><code>tld-!cn</code>: содержит доменные имена верхнего уровня, не используемые в Китае, например, домены, оканчивающиеся на <code>.hk</code> (Гонконг), <code>.tw</code> (Тайвань), <code>.jp</code> (Япония), <code>.sg</code> (Сингапур), <code>.us</code> (США), <code>.ca</code> (Канада) и т.д.</li></ul>`,9),V={href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"};function J($,z){const u=p("I18nTip"),c=p("ExternalLinkIcon"),a=p("RouterLink");return i(),r("div",null,[s(u),q,b,k,n("p",null,[o("Более подробное описание функции маршрутизации: "),n("a",v,[o("Введение в маршрутизацию (routing)"),s(c)]),o(".")]),g,n("ul",null,[m,n("li",null,[o("Загрузка доменов из файла: имеет вид "),h,o(", где "),D,o(" (в нижнем регистре) - префикс, за которым следует имя файла и тег."),y,o(" Файл должен находиться в "),s(a,{to:"/ru/config/features/env.html#%D0%BF%D1%83%D1%82%D0%B8-%D0%BA-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC-%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2"},{default:e(()=>[o("каталоге ресурсов")]),_:1}),o("."),_,o(" Формат файла такой же, как у "),B,o("."),f,o(" Тег должен присутствовать в файле.")])]),j,n("ul",null,[x,n("li",null,[n("a",I,[o("CIDR"),s(c)]),o(": например, "),T,o(".")]),P,n("li",null,[o("Загрузка IP-адресов из файла: имеет вид "),w,o(", где "),O,o(" (в нижнем регистре) - префикс, за которым следует имя файла и тег."),A,o(" Файл должен находиться в "),s(a,{to:"/ru/config/features/env.html#%D0%BF%D1%83%D1%82%D0%B8-%D0%BA-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC-%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2"},{default:e(()=>[o("каталоге ресурсов")]),_:1}),o("."),R,o(" Формат файла такой же, как у "),E,o("."),C,o(" Тег должен присутствовать в файле.")])]),S,n("ul",null,[N,F,n("li",null,[M,o(": выбор исходящего подключения с наименьшей задержкой на основе результатов мониторинга подключений."),L,o(" Требуется настроить "),s(a,{to:"/ru/config/observatory.html#observatoryobject"},{default:e(()=>[o("observatory")]),_:1}),o(".")]),n("li",null,[X,o(": выбор наиболее стабильного исходящего подключения на основе результатов мониторинга подключений."),G,o(" Требуется настроить "),s(a,{to:"/ru/config/observatory.html#burstobservatoryobject"},{default:e(()=>[o("burstObservatory")]),_:1}),o(".")])]),H,n("p",null,[o("Вы также можете просмотреть полный список доменов здесь: "),n("a",V,[o("Domain list community"),s(c)]),o(".")])])}const Q=l(d,[["render",J],["__file","routing.html.vue"]]);export{Q as default};
