import{_ as i,r as a,o as u,c as r,a as e,b as s,d as n,w as t,e as p}from"./app-BOvYEtC3.js";const d={},v=s("h1",{id:"vless",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vless"},[s("span",null,"VLESS")])],-1),k=s("div",{class:"custom-container danger"},[s("p",{class:"custom-container-title"},"Предупреждение"),s("p",null,"VLESS не предусматривает встроенного шифрования, поэтому обязательным условием для его использования является наличие надежного канала, такого как TLS или REALITY.")],-1),b=s("p",null,"VLESS - это легкий транспортный протокол без сохранения состояния, который разделен на входящую и исходящую части и может служить мостом между клиентом и сервером Xray.",-1),q=p(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>vnext</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>Массив, представляющий список серверов VLESS, содержащий набор конфигураций, указывающих на сервер, где каждый элемент является конфигурацией сервера.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject"><span>ServerObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>Адрес сервера, указывающий на сервер, поддерживаются доменные имена, IPv4 и IPv6.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Порт сервера, обычно тот же, что и порт, прослушиваемый сервером.</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>Массив, представляющий список пользователей, распознаваемых сервером, где каждый элемент является конфигурацией пользователя.</p><h3 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject"><span>UserObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>Идентификатор пользователя VLESS, может быть любой строкой длиной менее 30 байт или допустимым UUID. Пользовательская строка и ее UUID-отображение эквивалентны, это означает, что вы можете использовать следующие способы записи id в файле конфигурации для идентификации одного и того же пользователя:</p><ul><li>Напишите <code>&quot;id&quot;: &quot;Я люблю арбуз учителя 1314&quot;</code>,</li><li>Или напишите <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (этот UUID является UUID-отображением строки &quot;Я люблю арбуз учителя 1314&quot;)</li></ul>`,17),m={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},S=p('<p>Вы можете использовать команду <code>xray uuid -i &quot;Пользовательская строка&quot;</code> для генерации UUID, соответствующего пользовательской строке. Вы также можете использовать команду <code>xray uuid</code> для генерации случайного UUID.</p><blockquote><p><code>encryption</code>: &quot;none&quot;</p></blockquote><p>Необходимо указать <code>&quot;none&quot;</code>, значение не может быть пустым.</p><p>Это требование призвано напомнить пользователю об отсутствии шифрования, а также предотвратить ошибки пользователей при вводе имени атрибута или его расположения в будущем, когда будут доступны методы шифрования.</p><p>Если значение encryption установлено неверно, при использовании Xray или -test будет выдано сообщение об ошибке.</p><blockquote><p><code>flow</code>: string</p></blockquote><p>Режим управления потоком, используется для выбора алгоритма XTLS.</p><p>В настоящее время для исходящего протокола доступны следующие режимы управления потоком:</p><ul><li>Отсутствует <code>flow</code> или пустая строка: используется обычный TLS-прокси.</li><li><code>xtls-rprx-vision</code>: используется новый режим XTLS, включает случайное заполнение внутреннего рукопожатия, поддерживает uTLS для имитации отпечатка клиента.</li><li><code>xtls-rprx-vision-udp443</code>: аналогично <code>xtls-rprx-vision</code>, но разрешает UDP-трафик, направленный на порт 443.</li></ul><p>Кроме того, в настоящее время XTLS поддерживает только TCP+TLS/Reality.</p><div class="custom-container tip"><p class="custom-container-title">О режимах управления потоком xtls-rprx-*-udp443</p><p>Когда XTLS в Xray-core включен, трафик, направленный на UDP-порт 443 (обычно QUIC), по умолчанию блокируется, чтобы приложение не использовало QUIC, а использовало TLS, чтобы XTLS действительно вступил в силу. Фактически, QUIC сам по себе не подходит для проксирования, поскольку QUIC имеет встроенные функции TCP, и когда он передается по протоколу VLESS как UDP-трафик, базовый протокол - TCP, что эквивалентно двум уровням TCP.</p><p>Если блокировка не требуется, укажите <code>xtls-rprx-*-udp443</code> на стороне клиента, на стороне сервера оставляйте без изменений.</p></div><div class="custom-container tip"><p class="custom-container-title">О режиме Splice</p><p>Splice - это функция, предоставляемая ядром Linux, где ядро системы напрямую пересылает TCP, минуя память Xray, что значительно сокращает количество операций копирования данных и переключения контекста процессора.</p><p>Ограничения использования режима Splice:</p><ul><li>Среда Linux.</li><li>Входящий протокол: <code>Dokodemo door</code>, <code>Socks</code>, <code>HTTP</code> и другие чистые TCP-соединения или другие входящие протоколы, использующие XTLS.</li><li>Исходящий протокол: VLESS + XTLS.</li><li>Обратите внимание, что при использовании протокола mKCP Splice не будет использоваться (да, хотя ошибки и нет, на самом деле он не используется).</li></ul><p>Кроме того, при использовании Splice отображение скорости сети будет запаздывать, это особенность, а не ошибка.</p><p>При использовании режима Vision Splice будет включен автоматически, если выполнены вышеуказанные условия.</p></div><blockquote><p><code>level</code>: number</p></blockquote>',13),h=s("code",null,"level",-1);function x(g,y){const c=a("I18nTip"),o=a("RouterLink"),l=a("ExternalLinkIcon");return u(),r("div",null,[e(c),v,k,b,s("p",null,[n("В отличие от "),e(o,{to:"/ru/config/outbounds/vmess.html"},{default:t(()=>[n("VMess")]),_:1}),n(", VLESS не зависит от системного времени, аутентификация также осуществляется с помощью UUID.")]),q,s("p",null,[n("Стандарт сопоставления описан в "),s("a",m,[n("VLESS UUID Mapping Standard: Mapping Custom Strings to a UUIDv5"),e(l)]),n(".")]),S,s("p",null,[n("Уровень пользователя, для соединения будет использоваться "),e(o,{to:"/ru/config/policy.html#levelpolicyobject"},{default:t(()=>[n("локальная политика")]),_:1}),n(", соответствующая этому уровню пользователя.")]),s("p",null,[n("Значение level соответствует значению "),h,n(" в разделе "),e(o,{to:"/ru/config/policy.html#policyobject"},{default:t(()=>[n("policy")]),_:1}),n(". Если не указано, используется значение по умолчанию - 0.")])])}const f=i(d,[["render",x],["__file","vless.html.vue"]]);export{f as default};
