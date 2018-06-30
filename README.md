# gridoCSS

simple, light and responsive Flexbox CSS Grid made with SCSS

[![npm version](https://badge.fury.io/js/gridocss.svg)](https://badge.fury.io/js/gridocss)
[![NPM Status](https://img.shields.io/github/license/giovannibieller/gridocss.svg)](https://www.npmjs.org/package/gridocss)

## grido TOC

-   [Install](#grido-install)
-   [Development](#grido-dev)
-   [Grido container](#grido-container)
-   [Grido direction](#grido-direction)
-   [Grido wrap](#grido-wrap)
-   [Grido items](#grido-items)
-   [Grido responsive](#grido-responsive)
-   [Grido padding](#grido-pads)
-   [Grido alignments](#grido-alignments)
-   [Grido vertical alignments](#grido-vertical-alignments)
-   [Grido fill](#grido-fill)
-   [Grido autosizing](#grido-autosizing)
-   [Grido grow](#grido-grow)
-   [Grido order](#grido-order)

## grido install

~ `npm install gridocss --save`<br/>
~ download [zip](https://raw.githubusercontent.com/giovannibieller/gridocss/master/demo/zip/gridoCSS.zip) and add `.min` CSS to the head of your HTML page.

## grido dev

`npm install`<br/>
`gulp dist` to create production build<br/>
`gulp watch` dev server Browsersync with Hot Reloading<br/><br/>

# gridoDocs

## grido container

~ add `.grido` class to your container <br />

```html
<div class="grido">...</div>
```

## grido direction

~ add `.grido--{direction}` class to manage direction <br />
~ add `.grido_{device}--{direction}` class to manage responsive direction <br />
~ you can use `--row` or `--col` <br />
~ default is `--row` <br />

```html
<div class="grido grido--pads grido--col grido_sm--row">...</div>
```

## grido wrap

~ add `.grido--{wrap}` class to manage wrap <br />
~ add `.grido_{device}--{wrap}` class to manage responsive wrap <br />
~ you can use `--wrap` or `--nowrap` <br />
~ default is `--wrap` <br />

```html
<div class="grido grido--pads grido--nowrap grido_sm--wrap">...</div>
```

## grido items

~ add `.gc_{size}` class to your items. <br />
~ sizes: 2, 3, 4 ... up to 12 <br />

```html
<div class="grido">
    <div class="gc_8">...</div>
    <div class="gc_4">...</div>
</div>
```

## grido responsive

~ add `.gc_{size}_{device}` class to your items. <br />
~ devices: `sm [mobile], md [tablet]`<br />
~ breakpoints: md `max-width: 991px` sm `max-width: 767px`<br />

```html
<div class="grido">
    <div class="gc_4 gc_9_md gc_6_sm">...</div>
    <div class="gc_8 gc_3_md gc_6_sm"></div>
</div>
```

## grido pads

~ add `.grido--pads` class to the container to have padding between your items.<br />

```html
<div class="grido grido--pads">...</div>
```

## grido alignments

### space-between

~ items alignment to `space-between` [default alignment]<br/>

```html
<div class="grido">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### space-around

~ set `.grido--around` class to the container for `space-around` alignment<br />

```html
<div class="grido grido--around">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### flex-start

~ set `.grido--start` class to the container for `flex-start` alignment<br />

```html
<div class="grido grido--start">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### flex-end

~ set `grido--end` class to the container for `flex-end` alignment<br />

```html
<div class="grido grido--end">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### center

~ set `grido--center` class to the container for `center` alignment<br />

```html
<div class="grido grido--center">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### responsive alignments

~ set `.grido_{device}--{type}` to manage responsive alignments<br />

```html
<div class="grido grido--start grido_md--end grido_sm--between">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

## grido vertical alignments

### flex-start

~ set `.grido--v_start` class to the container for `flex-start` vertical alignment<br />

```html
<div class="grido grido--v_start">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### center

~ set `.grido--v_center` class to the container for `center` vertical alignment<br />

```html
<div class="grido grido--v_center">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### flex-end

~ set `.grido--v_end` class to the container for `flex-end` vertical alignment<br />

```html
<div class="grido grido--v_end">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### stretch

~ set `.grido--v_stretch` class to the container for `stretch` vertical alignment<br />

```html
<div class="grido grido--v_stretch">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

### vertical responsive alignments

~ set `.grido_{device}--{type}` to manage vertical responsive alignments<br />

```html
<div class="grido grido--v_start grido_md--v_end grido_sm--v_center">
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
    <div class="gc_2">...</div>
</div>
```

## grido fill

~ set `.gc_fill` class on items to fill all the available space.<br />
~ set `.gc_fill_{device}` class to manage responsive fill.<br />

```html
<div class="grido">
    <div class="gc_fill">...</div>
    <div class="gc_2 gc_fill_md">...</div>
</div>
```

## grido autosizing

~ set `.gc_auto` class on items to set auto width.<br />
~ set `.gc_auto_{device}` class to manage responsive auto width.<br />

```html
<div class="grido">
    <div class="gc_auto">...</div>
    <div class="gc_3 gc_auto_md">...</div>
</div>
```

## grido grow

~ set `.gc_grow_{number}` class to items to use a `flex-grow` ratio.<br />
~ set `.gc_grow_{number}__{device}` class to manage responsive grows.<br />

```html
<div class="grido">
    <div class="gc_grow">...</div>
    <div class="gc_grow_3 gc_grow_1_md">...</div>
</div>
```

## grido order

~ set `.gc_order_{number}` class to your items to change the order<br />
~ set `.gc_order_{number}__{device}` class to manage responsive order<br />

```html
<div class="grido">
    <div class="gc_order_2 gc_order_1_md gc_order_3_sm">...</div>
    <div class="gc_order_1 gc_order_2_md gc_order_2_sm">...</div>
    <div class="gc_order_3 gc_order_3_md gc_order_1_sm">...</div>
</div>
```
