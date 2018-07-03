'use strict';var $base={debug:!1,log:function(context,message){this.debug&&console.log(context+': '+message)},selectors:{$body:null},screen:{selectors:{$main:null},args:{sectionSelector:'.screen',responsiveWidth:1200,verticalCentered:!1},init:function(){$base.log('fullPage','init'),this.selectors.$main=$('#fullPage'),this.selectors.$main.fullpage(this.args)}},init:function(){$base.log('app','init'),$base.selectors.$body=$('body'),$base.selectors.$body.hasClass('workshop-slide')&&this.screen.init()}};$(document).ready(function(){$base.init()}),$(document).ready(function(){$app.log('document','ready'),$app.init()});var $app={log:function(context,message){this.config.debug&&console.log(context+': '+message)},config:{debug:!0,breakpoint:{tablette:768,mobile:480}},init:function(){this.log('app','init'),this.slider.init()},slider:{selectors:['.home-slider','.event_slider'],init:function(){$app.log('app.slider','init');for(var i=0;i<this.selectors.length;i++){var slider=this.selectors[i];0<slider.length&&$(slider).each(function(index,element){$app.log('app.slider.init',' ____ New slider'),this.buildSlider(element)}.bind(this))}},buildSlider:function(element){$app.log('app.slider','buildSlider'),$(element).slick(this.configureSlider(element)),this.prevSlide(element),this.nextSlide(element)},configureSlider:function(element){$app.log('app.slider','configureSlider');var config={slidesToShow:$(element).data('slidestoshow'),adaptiveHeight:$(element).data('adaptiveheight'),centerMode:$(element).data('centermode'),centerPadding:$(element).data('centerpadding')+'px',dots:$(element).data('dots'),arrows:!1,responsive:[{breakpoint:$app.config.breakpoint.tablette,settings:{}},{breakpoint:$app.config.breakpoint.mobile,settings:{}}]};return this.configureResponsiveSlider(element,config)},configureResponsiveSlider:function(element,config){return $app.log('app.slider','configureResponsiveSlider'),2<$(element).data('slidestoshow')&&(config.responsive[0].settings.slidesToShow=2,config.responsive[1].settings.slidesToShow=1),40<$(element).data('centerpadding')&&(config.responsive[0].settings.centerPadding='40px'),20<$(element).data('centerpadding')&&(config.responsive[1].settings.centerPadding='20px'),config},nextSlide:function(element){$app.log('app.slider','nextSlide');var slider=$(element);slider.parent().find('.next').click(function(){slider.slick('slickNext')})},prevSlide:function(element){$app.log('app.slider','prevSlide');var slider=$(element);slider.parent().find('.prev').click(function(){slider.slick('slickPrev')})}}};