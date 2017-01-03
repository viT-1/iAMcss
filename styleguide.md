# iAMcss styleguide

## Вступление
iAMcss не является самостоятельной методологией, это всего лишь нотация,
набор соглашений, призванных облегчить написание и сопровождение css-правил.
Соответственно никакого js-движка, использования утилит по сборке не требуется,
никаких требований по организации структуры папок и файлов iAMcss не предъявляет.

iAMcss лишь упорядочивает вашу работу по написанию  и использованию css-селекторов,
соответственно вы можете применять эту нотацию в любых фреймворках, вёрстку
которых Вам удобно будет поправить.

##iAMcss = БЭМ + AMCSS

iAMcss следует методологии БЭМ. БЭМ оперирует тремя основными понятиями:
Блок, Элемент, Модификатор. С модификатором всё понятно, по БЭМу он [определяется](https://ru.bem.info/methodology/quick-start/#Модификатор) так:
модификатор - сущность, определяющая внешний вид, состояние или поведение блока либо элемента.

С разделением понятий Блок и Элемент всё гораздо сложнее.
Очень часто начинающие БЭМеры совершают [много ошибок](https://habrahabr.ru/post/305548/), и это нормальное положение
дел, так как верстальщики и js-программисты при работе с HTML-разметкой привыкли
оперировать понятием DOM-элемент (тэг). И действительно, чтобы не путать,
где блок, а где элемент, где простой блок (похожий на элемент), а где составной,
гораздо яснее было бы пользоваться понятием Абсолютно Независимого Блока
(подобное положение дел высказывалось [на хабре](https://habrahabr.ru/post/203994/)).

Чтобы уйти от этой путаницы, которую архитекторы БЭМа [заложили в основании БЭМа](https://ru.bem.info/methodology/quick-start/#Когда-создавать-блок-когда-элемент),
iAMcss предлагает пользоваться следующими понятиями: Interface, Attribute, Modificator.
Ставку делаем на [селекторы атрибутов CSS 2.1](http://caniuse.com/#feat=css-sel2)!

Гугл, кстати, решил уйти от блоков, и [опирается на элементы](https://habrahabr.ru/company/dataart/blog/270109/),
что, без предварительной сборки препроцессорами, возвращает нас к проблемам которые
был призван решить БЭМ: например css-каскадирование, использующееся для того чтобы
отличить один элемент от такого же элемента, но имеющего другой уровень вложенности.

##Interface
Interface - абстрактное понятие подразумевающее множество-интерфейсный класс,
[как в классическом ООП](https://habrahabr.ru/post/30444/), определяющее набор свойств/функций объекта,
но не его реализацию. Не путать с визуальным интерфейсом!

Interface можно рассматривать как Namespace - пространство имён (элементов) подчиняющееся
одной функциональности. Например под одним пространством интерфейса сгруппированы все DOM-элементы
обеспечивающие функциональность "выпадающего списка".

По сути БЭМу "[Блок](https://ru.bem.info/methodology/quick-start/#Блок)" необходим с той же целью,
с какой используется понятие interface в ООП: для того чтобы отделить одну функциональность от другой
и сгруппировать воедино все составляющие части этой функциональности.

В нотации iAMcss 1.0 интерфейс должен быть прописан как iClass в html-атрибуте class
каждого DOM-элемента вместе составляющих единое целое (отвечающих за одну функциональность).
Не должно быть селекторов типа ".iClass {}", поскольку интерфейс это объединяющее абстрактное понятие,
а не реальное, принадлежащее конкретной DOM-ноде!

К чему же тогда должны быть привязаны CSS-селекторы? Если продолжать аналогию с ООП,
то реализацией/классом по iAMcss является конкретная DOM-нода, она же "элемент" (по БЭМ),
соответственно селекторы должны основываться на атрибутах.

##Attribute
Attribute - основа реализации селекторов по iAMcss как преемника [AMCSS](https://amcss.github.io/).
Атрибут в iAMcss аналогичен понятию "[Элемент](https://ru.bem.info/methodology/quick-start/#Элемент)" в БЭМ.
HTML-атрибут используется в iAMcss для ссылки на конкретный DOM-элемент с которым мы будем работать
(опеределять js-поведение и оформление), он помогает усилить специфичность селектора конкретного тэга.

Почему не пользуемся для этих целей атрибутом "class" пояснено в следующем параграфе. Помимо этого
атрибуты позволяют разложить все модификаторы по своим полочкам, что особенно актуально в случае миксов
и при сложных наборах состояний элемента.

Такова эволюция CSS-селекторов HTML-разметки:
- до CSS ([html3](http://citforum.ru/internet/html3.2ex/all.shtml)) оформление размещали в множестве атрибутов (align, bgcolor, width...)
- затем из атрибутов оформление вынесли в inline-стили
- затем вынесли оформление в отдельный файл, css-селекторы которого основывались на атрибуте class и на именовании тэгов
- после того как атрибут класс был облюбован множеством фреймворков, js-хуков и метками микроданных,
разработчикам, во избежание коллизий, пришлось уводить селекторы в custom data-attributes
- в идеале нас ждёт переход на [веб-компоненты](http://stackoverflow.com/questions/9845011/are-custom-elements-valid-html5#answer-9845124), Google уже [перешёл](https://material.angularjs.org/latest/CSS/button)!

Для того чтобы не городить своё велосипед, по возможности следует использовать стандартные атрибуты (например "disabled").
Если их недостаточно, то следует учитывать стандарт [WAI ARIA](https://www.w3.org/WAI/ARIA/project).

##Modificator
Modificator - Cущность, доопределяющая внешний вид, состояние или поведение элемента.
В сравнении с БЭМ'ом, для простоты восприятия, в определении исключено упоминание о "Блоке".

Имя модификатора размещается в значении атрибута, и тем самым iAMcss решает ту же
проблему, что и [CSS-modules](https://github.com/css-modules/css-modules): даёт возможность иметь базу (селектор атрибута) и доопределять
элемент при помощи селектора атрибута с его значением, не создавая для этого дополнительный класс.

iAMcss перед реализацией БЭМа, использующей атрибут class, имеет синтаксическое преимущество:
отсутствие дублирующей громоздкой строки с путём до элемента предваряющей значение модификатора.
К тому же, в случае миксов, разметка HTML по БЭМу превращается в свалку длинных наименований классов,
тогда как по iAMcss все модификаторы сгруппированы по своим атрибутам (при том их будет несколько).

Для декларации модификатора, которым следует пользоваться всем элементам микса, возможно использование
атрибута "class" - это будет "общак" ;) Не забывайте, что "class" скорей всего используется и другими
фреймворками, потому добавляйте к наименованию модификатора namespace (префикс проекта/организации).

##Миксы
[Миксы](https://ru.bem.info/methodology/quick-start/#Микс) возможно реализовать только при помощи
html-атрибутов (или их значений), поскольку каждый DOM-элемент обязан иметь одно конкретное имя
html-тэга, а не множество, тогда как на одном тэге можно разместить большое количество всевозможных
атрибутов, благодаря чему и реализовать микс.

С точки зрения iAMcss, миксы являются аналогом множественного наследования интерфейсов в ООП.
Реализация миксов по iAMcss 1.0 и 2.0 несколько различается: в первом случае это набор iКлассов
в атрибуте "class", во втором случае это набор атрибутов на одной html-ноде.

Поскольку миксы рассматриваются как множественное наследование от интерфейсов, то в идеале,
во избежание коллизий и работы со специфичностью селекторов, iКлассы не должны определять
одинаковый набор css-свойств. Миксы не рекомендуется использовать для доопределения тех
или иных свойств элемента, для этого предназначены модификаторы.

По возможности избегайте миксов, и вам легче будет перейти на разработку веб-компонент,
и соответственно легче перенести в их стили селекторы написанные в нотации iAMcss.

##Преимущества и недостатки версий iAMcss 1.0 и 2.0


##Примеры кода
- Сравнительная вёрстка [БЭМ, iAMcss 1.0 и iAMcss 2.0](http://codepen.io/viT-1/pen/RKbXwE).
- Сложный [микс кнопки и выпадающего списка](http://codepen.io/viT-1/pen/VjXybd) по iAMcss 1.0