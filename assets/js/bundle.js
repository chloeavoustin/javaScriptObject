'use strict';var $base={debug:!1,log:function(context,message){this.debug&&console.log(context+': '+message)},selectors:{$body:null},screen:{selectors:{$main:null,$menuContainer:null},args:{sectionSelector:'.screen',responsiveWidth:1200,verticalCentered:!1},init:function(){$base.log('fullPage','init'),this.selectors.$main=$('#fullPage'),this.selectors.$menuContainer=$('.menu'),this.selectors.$main.fullpage(this.args)}},init:function(){$base.log('app','init'),$base.selectors.$body=$('body'),$base.selectors.$body.hasClass('workshop-slide')&&this.screen.init()}};$(document).ready(function(){$base.init()}),$(document).ready(function(){$app.log('document','ready'),$app.init()});var sliderObject={$element:null,$config:null,$container:null,$next:null,$prev:null},$app={debug:!0,log:function(context,message){this.debug&&console.log(context+': '+message)},config:{debug:!0,breakpoint:{tablette:768,mobile:480}},init:function(){this.log('app','init'),this.slider.init()},slider:{selectors:['.home-slider','.event_slider'],allSliders:[],init:function(){$app.log('app.slider','init');for(var i=0;i<this.selectors.length;i++){var slider=this.selectors[i];0<slider.length&&$(slider).each(function(index,element){$app.log('app.slider.init',' ____ New slider'),this.buildSlider(this.createSlider(index,element))}.bind(this))}},createSlider:function(index,element){$app.log('slider','createSlider'),this.allSliders[index]=Object.create(sliderObject);var slider=this.allSliders[index];return slider.$element=$(element),slider.$container=slider.$element.parent(),slider.$next=slider.$container.find('.next'),slider.$prev=slider.$container.find('.prev'),this.configureSlider(slider),slider},buildSlider:function(slider){$app.log('app.slider','buildSlider'),slider.$element.slick(slider.$config),this.nextSlide(slider),this.prevSlide(slider)},configureSlider:function(slider){$app.log('app.slider','configureSlider'),slider.$config={slidesToShow:slider.$element.data('slidestoshow'),adaptiveHeight:slider.$element.data('adaptiveheight'),centerMode:slider.$element.data('centermode'),centerPadding:slider.$element.data('centerpadding')+'px',dots:slider.$element.data('dots'),arrows:!1,responsive:[{breakpoint:$app.config.breakpoint.tablette,settings:{}},{breakpoint:$app.config.breakpoint.mobile,settings:{}}]},this.configureResponsiveSlider(slider)},configureResponsiveSlider:function(slider){$app.log('app.slider','configureResponsiveSlider'),2<slider.$element.data('slidestoshow')&&(slider.$config.responsive[0].settings.slidesToShow=2,slider.$config.responsive[1].settings.slidesToShow=1),40<slider.$element.data('centerpadding')&&(slider.$config.responsive[0].settings.centerPadding='40px'),20<slider.$element.data('centerpadding')&&(slider.$config.responsive[1].settings.centerPadding='20px')},nextSlide:function(slider){$app.log('app.slider','nextSlide'),slider.$next.click(function(){slider.$element.slick('slickNext')})},prevSlide:function(slider){$app.log('app.slider','prevSlide'),slider.$prev.click(function(){slider.$element.slick('slickPrev')})}}};