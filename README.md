# iam-css
Репозиторий предназначен для размещения
- документации по css-методологии (style guide) iam-css
- примеров вёрстки(возможно сравнительных с другими методологиями). Больше склоняюсь к использованию codepen.
- открытых обсуждений и ответов на ваши вопросы по iam-css в разделе [issues на GitHub](https://github.com/viT-1/iAMcss/issues).

# Вступление
Как и многие верстальщики я столкнулся с необходимостью писать более управляемый css-код.
Благодаря каскадированию стилей мы себе зачастую отстреливаем ногу, потому, чтобы всё было в норме, нам необходимо следовать какой-либо методологии.

# Документация и примеры
Выложены на [странице](https://github.com/viT-1/iAMcss/blob/master/styleguide.md)

# История создания
- Посещение Яндекс-субботника и первые вопросы
- Оценка "жуткости" БЭМа
- Изучение других методологий с учётом современных тенденций (выход на AMCSS)
- Общение с апологетами БЭМа из команды Яндекса [iam-css](https://github.com/bem/bem-method/issues/455)

# Исходники
Cодержимое репозитория свободно для распростронения и изменения при указании сайта оригинального проекта — [viT-1.github.io/iAMcss](https://viT-1.github.io/iAMcss),
и имени автора [Пинчук Виталий](http://viT-1.blogspot.com)

# Полезные ссылки:
- TODO: Какие сложности доставляет каскад (статья на английском)
- Обзор CSS-методологий ([видеолекция на русском](https://www.youtube.com/watch?v=P4ag4JSNWTM), [слайды](http://www.slideshare.net/ElizavetaSelivanova/ss-49224792))
- [БЭМ](http://ru.bem.info/), Виталий Харисов "[Вёрстка независимыми блоками](http://vitaly.harisov.name/article/independent-blocks.html)"
- [BEViS](https://github.com/bevis-ui/docs/blob/master/faq/bem-vs-bevis.md)
- [MCSS](https://github.com/operatino/MCSS#readme) (автор методологии [рекомендует БЭМ](https://habrahabr.ru/post/256109/#comment_8442829))
- [AMCSS](https://amcss.github.io/)
- [Atomic BEM](https://css-tricks.com/abem-useful-adaptation-bem/)
- [AzaBEM](http://azagroup.ru/azabem-css-method/)
- [OPOR](http://nano.sapegin.ru/all/opor-methodology)
- [FUN](https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/)
- [SMACSS](https://smacss.com/) (автор методологии [рекомендует БЭМ](https://twitter.com/snookca/status/606908589295464449))
- [Atomic CSS](https://acss.io/) и его наследник [Tailwind CSS](https://tailwindcss.com/) (как по мне, так [это сомнительный путь](http://vit-1.blogspot.com/2021/11/tailwind-css-bem.html))

- [Keep your CSS selectors short](https://csswizardry.com/2012/05/keep-your-css-selectors-short/)
- [CSS Guidelines](https://github.com/chris-pearce/css-guidelines)
- [Примеры вёрстки с упором на WAI-ARIA-атрибуты](http://oaa-accessibility.org/)
- [Рекомендации](https://github.com/mediaelement/mediaelement/issues/1849#issuecomment-249254251) по рефакторингу эскалированной специфичности
- [CSS selectors performance 2018](https://www.sitepoint.com/optimizing-css-id-selectors-and-other-myths/)
- [Class vs data- attributes selectors performance](https://gomakethings.com/how-performant-are-data-attributes-as-selectors/)
- [JS performance of data-attributes](https://jsperf.com/data-dataset)
- [What shouldn’t I use data attributes for?](http://html5doctor.com/html5-custom-data-attributes/)
- [WHATWG html custom attribute naming conventions](https://github.com/whatwg/html/issues/2271)
- [CSS properties inheritance](https://meyerweb.com/eric/articles/webrev/199903.html)
- [CSS Custom Properties In The Cascade](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/)
- [Theming with css-variables](https://www.sitepoint.com/css-theming-custom-properties-javascript/)
- [[disabled] or :disabled](https://stackoverflow.com/questions/20141450/should-i-use-css-disabled-pseudo-class-or-disabled-attribute-selector-or-is-i)

# Facepalm code
[Vuetify v2.5.8](https://github.com/vuetifyjs/vuetify/blob/0f980ad51e22ba82e46f750eadcb7a586c802553/packages/vuetify/src/components/VChip/VChip.sass#L188):
```scss
// Needs increased specificity
  &.v-chip.v-chip
    background-color: transparent !important
```

MaterializeCSS 1.0.0<br />
[1](https://github.com/Dogfalo/materialize/blob/80e8ed370487aaf1e2185b028f7deda40da94eb9/dist/css/materialize.css#L5514):
```css
.btn-flat.disabled, .btn-flat.btn-flat[disabled] {
  background-color: transparent !important;
  color: #b3b2b2 !important;
  cursor: default;
}
```

[2](https://github.com/Dogfalo/materialize/blob/80e8ed370487aaf1e2185b028f7deda40da94eb9/dist/css/materialize.css#L4924):
```css
.card .card-action
a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {
  color: #ffd8a6;
}
```

[UIkit v3.9.4](https://github.com/uikit/uikit/blob/41d14ad79e0d11392975f840e651e35e42ff24f9/dist/css/uikit.css#L5956)
```css
.uk-dotnav > * > * {
  display: block;
```
И все [селекторы-модификаторы](https://github.com/uikit/uikit/blob/41d14ad79e0d11392975f840e651e35e42ff24f9/dist/css/uikit.css#L7229) с `!important`

[Bootstrap v5.1.3](https://github.com/twbs/bootstrap/blob/1df098361cac04217d6a464c80e890c4335ecb5c/scss/mixins/_visually-hidden.scss)
```scss
@mixin visually-hidden() {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  ...
```
and all helpers after [line 6573](https://github.com/twbs/bootstrap/blob/1df098361cac04217d6a464c80e890c4335ecb5c/dist/css/bootstrap.css#L6573)
