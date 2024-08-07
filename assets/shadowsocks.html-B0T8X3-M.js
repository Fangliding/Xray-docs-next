import{_ as i,r as t,o as u,c as d,a as o,b as s,d as n,w as p,e as a}from"./app-BOvYEtC3.js";const r={},k=s("h1",{id:"shadowsocks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#shadowsocks"},[s("span",null,"Shadowsocks")])],-1),q={href:"https://ru.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},h=a("<p>Текущая совместимость:</p><ul><li>Поддерживает пересылку пакетов TCP и UDP, при этом UDP можно выборочно отключить;</li><li>Рекомендуемые методы шифрования: <ul><li>2022-blake3-aes-128-gcm</li><li>2022-blake3-aes-256-gcm</li><li>2022-blake3-chacha20-poly1305</li></ul></li><li>Другие методы шифрования: <ul><li>aes-256-gcm</li><li>aes-128-gcm</li><li>chacha20-poly1305 или chacha20-ietf-poly1305</li><li>xchacha20-poly1305 или xchacha20-ietf-poly1305</li><li>none или plain</li></ul></li></ul><p>Новый формат протокола Shadowsocks 2022 повышает производительность и обеспечивает полную защиту от повторов, решая следующие проблемы безопасности старого протокола:</p>",3),b={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},m=s("li",null,"Возрастающий коэффициент ложных срабатываний исходного фильтра повторов TCP с течением времени",-1),v=s("li",null,"Отсутствие защиты от повторов UDP",-1),g=s("li",null,"Поведение TCP, которое можно использовать для активного зондирования",-1),_=a(`<div class="custom-container danger"><p class="custom-container-title">Предупреждение</p><p>При использовании метода шифрования &quot;none&quot; трафик передается в открытом виде. В целях безопасности не используйте этот метод в общедоступных сетях.</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject"><span>InboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;114514&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1919810&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-128-gcm&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>Поддерживаемые типы сетевых протоколов. Например, если указано <code>&quot;tcp&quot;</code>, будет приниматься только трафик TCP. Значение по умолчанию: <code>&quot;tcp&quot;</code>.</p><blockquote><p><code>method</code>: string</p></blockquote><p>Метод шифрования, доступные варианты см. выше.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Обязательный параметр.</p><ul><li>Shadowsocks 2022</li></ul><p>Используется предварительный общий ключ, аналогичный WireGuard, в качестве пароля.</p><p>Используйте команду <code>openssl rand -base64 &lt;длина&gt;</code> для генерации ключа, совместимого с shadowsocks-rust, длина зависит от используемого метода шифрования.</p><table><thead><tr><th>Метод шифрования</th><th style="text-align:right;">Длина ключа</th></tr></thead><tbody><tr><td>2022-blake3-aes-128-gcm</td><td style="text-align:right;">16</td></tr><tr><td>2022-blake3-aes-256-gcm</td><td style="text-align:right;">32</td></tr><tr><td>2022-blake3-chacha20-poly1305</td><td style="text-align:right;">32</td></tr></tbody></table><p>В реализации Go всегда работают 32-битные ключи.</p><ul><li>Другие методы шифрования</li></ul><p>Любая строка. Длина пароля не ограничена, но короткие пароли более уязвимы для взлома, рекомендуется использовать пароли длиной 16 символов или более.</p><blockquote><p><code>level</code>: number</p></blockquote>`,17),y=s("code",null,"level",-1),w=s("code",null,"level",-1),f=a(`<blockquote><p><code>email</code>: string</p></blockquote><p>Адрес электронной почты пользователя, используется для разделения трафика разных пользователей (журналы, статистика).</p><h2 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject"><span>ClientObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1919810&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Наличие этой опции означает включение многопользовательского режима.</p><p>Если <code>method</code> в InboundConfigurationObject не является опцией SS2022, можно указать <code>&quot;method&quot;</code> для каждого пользователя. (<code>&quot;method&quot;</code> также поддерживает только опции, не относящиеся к SS2022) и <code>&quot;password&quot;</code> (при этом <code>&quot;password&quot;</code>, установленный в InboundConfigurationObject, будет игнорироваться).</p><p>Если <code>method</code> в InboundConfigurationObject является опцией SS2022, то из соображений безопасности больше не поддерживается установка <code>&quot;method&quot;</code> для отдельных пользователей, используется единый <code>&quot;method&quot;</code>, указанный в InboundConfigurationObject.</p><p>Обратите внимание, что SS2022, в отличие от старого SS, не игнорирует <code>&quot;password&quot;</code> верхнего уровня, правильный способ записи пароля клиента: <code>ServerPassword:UserPassword</code>. Например: <code>&quot;password&quot;: &quot;114514:1919810&quot;</code></p><p>Остальные опции имеют то же значение, что и в InboundConfigurationObject.</p>`,9);function j(x,S){const l=t("I18nTip"),e=t("ExternalLinkIcon"),c=t("RouterLink");return u(),d("div",null,[o(l),k,s("p",null,[n("Протокол "),s("a",q,[n("Shadowsocks"),o(e)]),n(", совместимый с большинством других реализаций.")]),h,s("ul",null,[s("li",null,[s("a",b,[n("Серьезные уязвимости в шифровании Shadowsocks AEAD, которые не могут гарантировать целостность содержимого"),o(e)])]),m,v,g]),_,s("p",null,[n("Уровень пользователя, для соединения будет использоваться "),o(c,{to:"/ru/config/policy.html#levelpolicyobject"},{default:p(()=>[n("локальная политика")]),_:1}),n(", соответствующая этому уровню пользователя. Значение "),y,n(" соответствует значению "),w,n(" в разделе "),o(c,{to:"/ru/config/policy.html#levelpolicyobject"},{default:p(()=>[n("policy")]),_:1}),n(". Если не указано, используется значение по умолчанию - 0.")]),f])}const I=i(r,[["render",j],["__file","shadowsocks.html.vue"]]);export{I as default};
