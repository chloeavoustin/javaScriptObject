'use strict';var $base={debug:!1,log:function(context,message){this.debug&&console.log(context+': '+message)},selectors:{$body:null},screen:{selectors:{$main:null,$menuContainer:null},args:{sectionSelector:'.screen',responsiveWidth:1200,verticalCentered:!1},init:function(){$base.log('fullPage','init'),this.selectors.$main=$('#fullPage'),this.selectors.$menuContainer=$('.menu'),this.selectors.$main.fullpage(this.args)}},init:function(){$base.log('app','init'),$base.selectors.$body=$('body'),$base.selectors.$body.hasClass('workshop-slide')&&this.screen.init()}};$(document).ready(function(){$base.init()});var $app={debug:!0,log:function(context,message){this.debug&&console.log(context+': '+message)},config:{debug:!0,breakpoint:{tablette:768,mobile:480}},slider:{selectors:['.home-slider','.event_slider'],init:function(){$app.log('app.slider','init');for(var i=0;i<this.selectors.length;i++){var slider=this.selectors[i];0<slider.length&&$(slider).each(function(index,element){$app.log('app.slider.init',' ____ New slider'),$app.log('app.slider.init',index),$app.log('app.slider.init',element)})}}},init:function(){this.log('app','init'),this.slider.init()}};$(document).ready(function(){$app.log('document','ready'),$app.init()});