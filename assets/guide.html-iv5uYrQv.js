import{_ as t,r as o,o as c,c as d,a as n,b as e,d as l,e as i}from"./app-9On5B9xS.js";const h={},u=i('<h1 id="правила-разработки" tabindex="-1"><a class="header-anchor" href="#правила-разработки"><span>Правила разработки</span></a></h1><h2 id="основные-принципы" tabindex="-1"><a class="header-anchor" href="#основные-принципы"><span>Основные принципы</span></a></h2><h3 id="система-контроля-версии" tabindex="-1"><a class="header-anchor" href="#система-контроля-версии"><span>Система контроля версий</span></a></h3><p>Код проекта X размещен на GitHub:</p>',4),p={href:"https://github.com/XTLS/Xray-core",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/XTLS/Xray-install",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/XTLS/Xray-examples",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/XTLS/Xray-docs-next",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"ветки-branch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ветки-branch"},[e("span",null,"Ветки (Branch)")])],-1),x=e("ul",null,[e("li",null,"Основной веткой проекта является main."),e("li",null,"Основной веткой для выпуска релизов также является main."),e("li",null,"Необходимо убедиться, что main в любой момент времени может быть скомпилирован и работает корректно."),e("li",null,"Если вам нужно разработать новую функцию, создайте новую ветку для разработки. После завершения разработки и тщательного тестирования объедините ее с основной веткой."),e("li",null,"Удалите ветки, которые были объединены с основной веткой и больше не нужны.")],-1),v=e("h3",{id:"релизы-release",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#релизы-release"},[e("span",null,"Релизы (Release)")])],-1),X=e("ul",null,[e("li",null,[l("Создайте два канала выпуска: для предварительных версий и для стабильных версий. "),e("ul",null,[e("li",null,"Предварительные версии могут быть ежедневными сборками, в основном используются для тестирования в определенных ситуациях, ознакомления с новыми функциями и получения обратной связи для дальнейшего улучшения."),e("li",null,"Стабильные версии выпускаются по расписанию (например, ежемесячно) и содержат стабильные изменения.")])])],-1),y=e("h3",{id:"использование-других-проектов",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#использование-других-проектов"},[e("span",null,"Использование других проектов")])],-1),k={href:"https://pkg.go.dev/search?limit=25&m=package&q=golang.org%2Fx",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,"Если вам нужно использовать другие проекты, сначала создайте issue для обсуждения.",-1),q=e("li",null,[l("Другие "),e("ul",null,[e("li",null,"Можно использовать любые инструменты, которые не нарушают лицензии обеих сторон и полезны для проекта.")])],-1),G=e("h2",{id:"процесс-разработки",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#процесс-разработки"},[e("span",null,"Процесс разработки")])],-1),L=e("h3",{id:"перед-написанием-кода",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#перед-написанием-кода"},[e("span",null,"Перед написанием кода")])],-1),P={href:"https://github.com/XTLS/Xray-core/issues",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"изменение-кода",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#изменение-кода"},[e("span",null,"Изменение кода")])],-1),C={href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[l("Перед каждой отправкой (push) выполните команду: "),e("code",null,"go generate core/format.go"),l(".")],-1),B=e("li",null,[l("Если вам нужно изменить protobuf, например, добавить новый параметр конфигурации, выполните команду: "),e("code",null,"go generate core/proto.go"),l(".")],-1),I=e("li",null,[l("Перед отправкой pull request рекомендуется запустить тесты: "),e("code",null,"go test ./..."),l(".")],-1),E=e("li",null,"Перед отправкой pull request рекомендуется, чтобы новый код имел покрытие кода (code coverage) не менее 70%.",-1),w=e("li",null,[l("Другие "),e("ul",null,[e("li",null,"Обратите внимание на читаемость кода.")])],-1),F=i(`<h3 id="запрос-на-включение-изменении-pull-request" tabindex="-1"><a class="header-anchor" href="#запрос-на-включение-изменении-pull-request"><span>Запрос на включение изменений (Pull Request)</span></a></h3><ul><li>Перед отправкой PR сначала выполните команду <code>git pull https://github.com/XTLS/Xray-core.git</code>, чтобы убедиться, что слияние пройдет гладко.</li><li>Один PR должен решать только одну задачу. Если вы исправляете несколько ошибок, отправьте по одному PR для каждой ошибки.</li><li>Из-за особенностей Golang (пути к пакетам) процесс PR для проектов Go отличается от других проектов. Рекомендуемый процесс следующий: <ol><li>Сначала сделайте форк (fork) проекта, создайте свой собственный репозиторий <code>github.com/&lt;your_name&gt;/Xray-core.git</code>.</li><li>Клонируйте свой репозиторий Xray локально: <code>git clone https://github.com/&lt;your_name&gt;/Xray-core.git</code>.</li><li>Создайте новую ветку на основе ветки <code>main</code>, например, <code>git branch issue24 main</code>.</li><li>Внесите изменения в новую ветку и зафиксируйте их (commit).</li><li>Перед отправкой (push) измененной ветки в свой репозиторий переключитесь на ветку <code>main</code> и выполните команду <code>git pull https://github.com/XTLS/Xray-core.git</code>, чтобы получить последнюю версию кода.</li><li>Если на предыдущем шаге были получены новые изменения, переключитесь на созданную вами ветку и выполните команду <code>git rebase main</code> для слияния веток. Если возникнут конфликты файлов, их необходимо разрешить.</li><li>После завершения предыдущего шага вы можете отправить свою ветку в свой репозиторий: <code>git push -u origin your-branch</code>.</li><li>Наконец, отправьте PR из своей ветки в ветку <code>main</code> репозитория <code>XTLS/Xray-core</code>.</li><li>В заголовке и описании PR четко опишите проблему, которую решает этот PR / новую функцию / цель изменений кода.</li><li>Дождитесь ответа разработчиков.</li></ol></li></ul><h3 id="изменения-кода" tabindex="-1"><a class="header-anchor" href="#изменения-кода"><span>Изменения кода</span></a></h3><h4 id="проблемы-с-функциональностью" tabindex="-1"><a class="header-anchor" href="#проблемы-с-функциональностью"><span>Проблемы с функциональностью</span></a></h4><p>Отправьте хотя бы один тестовый пример (Test Case), чтобы проверить изменения в существующей функциональности.</p><h4 id="проблемы-с-производительностью" tabindex="-1"><a class="header-anchor" href="#проблемы-с-производительностью"><span>Проблемы с производительностью</span></a></h4><p>Отправьте необходимые тестовые данные, чтобы подтвердить проблемы с производительностью существующего кода или улучшение производительности нового кода.</p><h4 id="новые-функции" tabindex="-1"><a class="header-anchor" href="#новые-функции"><span>Новые функции</span></a></h4><ul><li>Если новая функция не влияет на существующую функциональность, предоставьте переключатель (например, флаг) для ее включения/отключения и оставьте ее отключенной по умолчанию.</li><li>Перед разработкой новой крупной функции (например, добавления нового протокола) создайте issue для обсуждения.</li></ul><h4 id="другое" tabindex="-1"><a class="header-anchor" href="#другое"><span>Другое</span></a></h4><p>Зависит от конкретной ситуации.</p><h2 id="стандарты-кодирования-xray" tabindex="-1"><a class="header-anchor" href="#стандарты-кодирования-xray"><span>Стандарты кодирования Xray</span></a></h2><p>Следующие правила применяются к коду Golang в Xray.</p><h3 id="структура-кода" tabindex="-1"><a class="header-anchor" href="#структура-кода"><span>Структура кода</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Xray-core
├── app        // Модули приложений
│   ├── router // Маршрутизация
├── common     // Общий код
├── proxy      // Протоколы связи
│   ├── blackhole
│   ├── dokodemo-door
│   ├── freedom
│   ├── socks
│   ├── vmess
├── transport  // Транспортные модули
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="стандарты-кодирования" tabindex="-1"><a class="header-anchor" href="#стандарты-кодирования"><span>Стандарты кодирования</span></a></h3><p>В основном соответствуют рекомендациям Golang, за некоторыми исключениями. Приведены здесь для удобства ознакомления с Golang.</p><h4 id="именование" tabindex="-1"><a class="header-anchor" href="#именование"><span>Именование</span></a></h4>`,18),H=e("li",null,[l("Для имен файлов и каталогов по возможности используйте одно английское слово, например, hello.go. "),e("ul",null,[e("li",null,"Если это невозможно, используйте дефисы для разделения слов в имени каталога и подчеркивания для разделения слов в имени файла, например, hello-world/hello_again.go."),e("li",null,"Тестовый код должен иметь суффикс _test.go.")])],-1),N=e("li",null,[l("Для типов используйте нотацию PascalCase, например, ConnectionHandler. "),e("ul",null,[e("li",null,"Сокращения не обязательно писать в нижнем регистре, то есть HTML не нужно писать как Html.")])],-1),V=e("li",null,"Для публичных переменных-членов также используйте нотацию PascalCase.",-1),M={href:"https://ru.wikipedia.org/wiki/CamelCase",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"privateAttribute",-1),O=e("li",null,[l("Для удобства рефакторинга рекомендуется использовать нотацию PascalCase для всех методов. "),e("ul",null,[e("li",null,[l("Полностью приватные типы помещайте в каталог "),e("code",null,"internal"),l(".")])])],-1),j=i('<h4 id="организация-кода" tabindex="-1"><a class="header-anchor" href="#организация-кода"><span>Организация кода</span></a></h4><ul><li>Один файл должен содержать один основной тип и связанные с ним приватные функции.</li><li>Тестовые файлы, такие как Mock и другие утилиты, помещайте в подкаталог testing.</li></ul><h4 id="int32range" tabindex="-1"><a class="header-anchor" href="#int32range"><span>Int32Range</span></a></h4><p><strong>Для конечного пользователя</strong></p><p>Значение, представляющее собой необязательный диапазон. Возможные варианты записи:</p><ul><li>Отдельное число или диапазон, заключенные в кавычки: <ul><li><code>&quot;&quot;</code> (считается как 0). Обратите внимание, что полное отсутствие настройки поля и установка пустого значения могут иметь разное значение.</li><li><code>&quot;114&quot;</code></li><li><code>&quot;114-514&quot;</code></li></ul></li><li>Отдельное целое число (int). В этом случае возможно указать только одно число: <ul><li><code>114</code></li></ul></li></ul><p><strong>Для разработчика</strong></p><p>Если вам нужно использовать диапазон в файле конфигурации, используйте тип <code>Int32Range</code>. Для получения значений используйте <code>.From</code> и <code>.To</code> вместо использования строкового типа (<code>string</code>) и последующего ручного разбора.</p><p>Метод <code>.EnsureOrder()</code> можно использовать для обмена значений From и To, если From больше, чем To (при необходимости).</p>',9);function z(D,J){const r=o("I18nTip"),a=o("ExternalLinkIcon"),s=o("Badge");return c(),d("div",null,[n(r),u,e("ul",null,[e("li",null,[l("Ядро Xray "),e("a",p,[l("Xray-core"),n(a)])]),e("li",null,[l("Скрипты установки "),e("a",_,[l("Xray-install"),n(a)])]),e("li",null,[l("Шаблоны конфигурации "),e("a",g,[l("Xray-examples"),n(a)])]),e("li",null,[l("Документация по Xray "),e("a",m,[l("Xray-docs-next"),n(a)])])]),e("p",null,[l("Вы можете использовать "),e("a",b,[l("Git"),n(a)]),l(" для получения кода.")]),f,x,v,n(s,{text:"В РАЗРАБОТКЕ",type:"warning"}),X,y,e("ul",null,[e("li",null,[l("Golang "),e("ul",null,[e("li",null,[l("В коде рекомендуется использовать стандартную библиотеку Golang и библиотеки из "),e("a",k,[l("golang.org/x/"),n(a)]),l(".")]),T])]),q]),G,L,e("p",null,[l("Если вы обнаружили какую-либо проблему или у вас есть идеи по улучшению проекта, создайте "),e("a",P,[l("issue"),n(a)]),l(" для обсуждения, чтобы избежать дублирования усилий и траты времени на написание кода.")]),R,e("ul",null,[e("li",null,[l("Golang "),e("ul",null,[e("li",null,[l("См. "),e("a",C,[l("Effective Go"),n(a)]),l(".")]),S,B,I,E])]),w]),F,e("ul",null,[H,N,V,e("li",null,[l("Для приватных переменных-членов используйте "),e("a",M,[l("нотацию camelCase"),n(a)]),l(", например, "),A,l(".")]),O]),j])}const Q=t(h,[["render",z],["__file","guide.html.vue"]]);export{Q as default};
