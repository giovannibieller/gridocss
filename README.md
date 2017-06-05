# gridocss
simple, light and responsive **5KB Flexbox CSS Grid**

## grido install ##
```npm install gridocss --save```

## grido dev ##
```npm install```<br/>
```gulp watch``` for dev server Browsersync with Hot Reloading<br/>
```gulp dist``` for production build<br/>

---

## grido container ##
~ add  ```grido``` class to your container <br /> 
~ example: ```<div class="grido"></div>```

## grido items ##
~ add ```grido__``` class to your items, followed by the  ```% width``` that you're looking for. <br /> 
~ percentages: 5, 10, 15, 20, 25 ... up to 100 <br /> 
~ special widths:  ```.grido__33``` set 33.333333% width ||  ```.grido__66``` set 66.666666% width ||  ```.grido__auto``` set width to auto <br /> 
~ example: ```<div class="grido__20"></div>```  set 20% width to the item <br /> 

## grido responsive ##
~ add ```grido__ class``` to your items, followed by the  % width that you're looking for and the device size  ```sm [mobile], md [tablet]```. <br /> 
~ special widths:  ```.grido__33__{device}```,  ```.grido__66__{device}``` and  ```.grido__auto__{device}``` <br /> 
~ breakpoints: md  ```max-width: 991px;``` sm  ```max-width: 767px;``` <br /> 
~ example: ```<div class="grido__20 grido__50__md grido__100__sm"></div>```  set 20% width for a desktop view, 50% for tablet and 100% for mobile; <br /> 

## grido pads ##
~ add ```grido__pads class``` to the container to have padding between your items. otherwise you can add it in your own div with css<br /> 
~ example:  ```<div class="grido grido__pads"></div>```

## grido alignments ##
### space-between ###
~ [default alignment] items alignment to ```space-between```

### space-around ###
~ set ```grido--around``` class to items for ```space-around``` alignment
~ example: ```<div class="grido grido--around"></div>```

### flex-start ###
~ set ```grido--start``` class to items for ```flex-start``` alignment
~ example: ```<div class="grido grido--start"></div>```

### flex-end ###
~ set ```grido--end``` class to items for ```flex-end``` alignment
~ example: ```<div class="grido grido--end"></div>```

### responsive alignments ###
~ set ```grido__{device}--{type}``` to manage responsive alignments
~ example: ```<div class="grido grido--start grido__md--end grido__sm--between"></div>``` set  ```flex-start``` alignment for a desktop view,  ```flex-end``` for tablet and  ```space-between``` for mobile

## grido autosizing and grow ## 
~ set ```grido__auto``` class to set auto fill of the all the window space
~ if you have a set of items and you want to have one element with a larger width you can set ```grido__auto__{number}``` to set a  flex-grow to the item. the default is 1. 2 will be twice the other elements widths
~ it works responsive too with ```grido__auto__{number}__{device}```
~ example:  ```<div class="grido grido__auto"></div><div class="grido grido__auto__3 grido__auto__1__md"></div> ```

## grido order ##
~ set ```grido__order__ class``` to your items to change the order to display them
~ it works responsive too with ```grido__order__{num}__{device}``` class 
~ example: refers to block num 1  ```<div class="grido grido__auto grido__order__2 grido__order__1__md grido__order__3__sm"></div>```
