!function(e){function t(t,n){return parseInt(e.css(t[0],n))||0}function n(e){return e[0].offsetWidth+t(e,"marginLeft")+t(e,"marginRight")}function r(e){return e[0].offsetHeight+t(e,"marginTop")+t(e,"marginBottom")}e.fn.jCarouselLite=function(t){return t=e.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!30,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},t||{}),this.each(function(){function l(){return v.slice(p).slice(0,b)}function i(n){if(!s){if(t.beforeStart&&t.beforeStart.call(this,l()),t.circular)n<=t.start-b-1?(u.css(c,-((h-2*b)*x)+"px"),p=n==t.start-b-1?h-2*b-1:h-2*b-t.scroll):n>=h-b+1?(u.css(c,-(b*x)+"px"),p=n==h-b+1?b+1:b+t.scroll):p=n;else{if(0>n||n>h-b)return;p=n}s=!0,u.animate("left"==c?{left:-(p*x)}:{top:-(p*x)},t.speed,t.easing,function(){t.afterEnd&&t.afterEnd.call(this,l()),s=!1}),t.circular||(e(t.btnPrev+","+t.btnNext).removeClass("disabled"),e(p-t.scroll<0&&t.btnPrev||p+t.scroll>h-b&&t.btnNext||[]).addClass("disabled"))}return!1}var s=!1,c=t.vertical?"top":"left",o=t.vertical?"height":"width",a=e(this),u=e("ul:first",a),f=e(".car",u),d=f.size(),b=t.visible;t.circular&&(u.prepend(f.slice(d-b-1+1).clone()).append(f.slice(0,b).clone()),t.start+=b);var v=e(".car",u),h=v.size(),p=t.start;a.css("visibility","visible"),v.css({overflow:"hidden","float":t.vertical?"none":"left"}),u.css({padding:"0",position:"relative","list-style-type":"none","z-index":"1"}),a.css({overflow:"hidden","z-index":"2"});var x=t.vertical?r(v):n(v),m=x*h,g=x*b;v.css({width:v.width()}),u.css(o,m+"px").css(c,-(p*x)),a.css(o,g+"px"),t.btnPrev&&e(t.btnPrev).click(function(){return i(p-t.scroll)}),t.btnNext&&e(t.btnNext).click(function(){return i(p+t.scroll)}),t.btnGo&&e.each(t.btnGo,function(n,r){e(r).click(function(){return i(t.circular?t.visible+n:n)})}),t.mouseWheel&&a.mousewheel&&a.mousewheel(function(e,n){return i(n>0?p-t.scroll:p+t.scroll)}),t.auto&&setInterval(function(){i(p+t.scroll)},t.auto+t.speed)})}}(jQuery);