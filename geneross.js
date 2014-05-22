function catethumbs(json){document.write('<ul class="cate_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='https://lh6.googleusercontent.com/_dsEG33PDaHw/Tdw5i1GeYnI/AAAAAAAABcM/K_URA3p40_A/sin-imagen.png';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Ene";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Abr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Ago";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dic";document.write('<li class="clearfix">');if(showpostthumbnails==true)
document.write('<a href="'+posturl+'" target ="_top"><img class="cate_thumb" src="'+thumburl+'"/></a>');document.write('<div class="catetil"><a href="'+posturl+'" target ="_top">'+posttitle+'</a></div><br>');if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('');}
else{document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('');}}
var towrite='';var flag=0;document.write('<br>');if(showpostdate==true){towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">MÃ¡s Â»</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}

function labelthumbs(json){document.write('<ul class="label_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='https://lh6.googleusercontent.com/_dsEG33PDaHw/Tdw5i1GeYnI/AAAAAAAABcM/K_URA3p40_A/sin-imagen.png';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Ene";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Abr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Ago";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dic";document.write('<li class="clearfix">');if(showpostthumbnails==true)
  document.write('<a href="'+posturl+'" target ="_top"><strong><img src="http://i.imgur.com/G5OzQ9h.png"/></strong><img class="label_thumb" src="'+thumburl+'"/></a>');document.write('<strong><a href="'+posturl+'" target ="_top">'+posttitle+'</a></strong><br>');                                                                                                        
if("content"in entry){var postcontent=entry.content.$t;}
else                   
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('');}
else{                  
document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('');}}
var towrite='';var flag=0;document.write('<br>');                                                                
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}

document.write('<style type="text/css">.tabview{display:none;}<\/style>');function tabviewObj(argsObj){var arg;this.div=null;this.classMain="tabview";this.classMainLive="tabviewcont";this.classTab="tabviewtab";this.classTabDefault="tabviewtabdefault";this.classNav="tabviewnav";this.classTabHide="tabviewtabhide";this.classNavActive="tabviewactive";this.titleElements=['h2','h3','h4','h5','h6'];this.titleElementsStripHTML=true;this.removeTitle=true;this.addLinkId=false;this.linkIdFormat='<tabviewid>nav<tabnumberone>';for(arg in argsObj){this[arg]=argsObj[arg]}this.REclassMain=new RegExp('\\b'+this.classMain+'\\b','gi');this.REclassMainLive=new RegExp('\\b'+this.classMainLive+'\\b','gi');this.REclassTab=new RegExp('\\b'+this.classTab+'\\b','gi');this.REclassTabDefault=new RegExp('\\b'+this.classTabDefault+'\\b','gi');this.REclassTabHide=new RegExp('\\b'+this.classTabHide+'\\b','gi');this.tabs=new Array();if(this.div){this.init(this.div);this.div=null}}tabviewObj.prototype.init=function(e){var childNodes,i,i2,t,defaultTab=0,DOM_ul,DOM_li,DOM_a,aId,headingElement;if(!document.getElementsByTagName){return false}if(e.id){this.id=e.id}this.tabs.length=0;childNodes=e.childNodes;for(i=0;i<childNodes.length;i++){if(childNodes[i].className&&childNodes[i].className.match(this.REclassTab)){t=new Object();t.div=childNodes[i];this.tabs[this.tabs.length]=t;if(childNodes[i].className.match(this.REclassTabDefault)){defaultTab=this.tabs.length-1}}}DOM_ul=document.createElement("ul");DOM_ul.className=this.classNav;for(i=0;i<this.tabs.length;i++){t=this.tabs[i];t.headingText=t.div.title;if(this.removeTitle){t.div.title=''}if(!t.headingText){for(i2=0;i2<this.titleElements.length;i2++){headingElement=t.div.getElementsByTagName(this.titleElements[i2])[0];if(headingElement){t.headingText=headingElement.innerHTML;if(this.titleElementsStripHTML){t.headingText.replace(/<br>/gi," ");t.headingText=t.headingText.replace(/<[^>]+>/g,"")}break}}}if(!t.headingText){t.headingText=i+1}DOM_li=document.createElement("li");t.li=DOM_li;DOM_a=document.createElement("a");DOM_a.appendChild(document.createTextNode(t.headingText));DOM_a.href="javascript:void(null);";DOM_a.title=t.headingText;DOM_a.onclick=this.navClick;DOM_a.tabview=this;DOM_a.tabviewIndex=i;if(this.addLinkId&&this.linkIdFormat){aId=this.linkIdFormat;aId=aId.replace(/<tabviewid>/gi,this.id);aId=aId.replace(/<tabnumberzero>/gi,i);aId=aId.replace(/<tabnumberone>/gi,i+1);aId=aId.replace(/<tabtitle>/gi,t.headingText.replace(/[^a-zA-Z0-9\-]/gi,''));DOM_a.id=aId}DOM_li.appendChild(DOM_a);DOM_ul.appendChild(DOM_li)}e.insertBefore(DOM_ul,e.firstChild);e.className=e.className.replace(this.REclassMain,this.classMainLive);this.tabShow(defaultTab);if(typeof this.onLoad=='function'){this.onLoad({tabview:this})}return this};tabviewObj.prototype.navClick=function(event){var rVal,a,self,tabviewIndex,onClickArgs;a=this;if(!a.tabview){return false}self=a.tabview;tabviewIndex=a.tabviewIndex;a.blur();if(typeof self.onClick=='function'){onClickArgs={'tabview':self,'index':tabviewIndex,'event':event};if(!event){onClickArgs.event=window.event}rVal=self.onClick(onClickArgs);if(rVal===false){return false}}self.tabShow(tabviewIndex);return false};tabviewObj.prototype.tabHideAll=function(){var i;for(i=0;i<this.tabs.length;i++){this.tabHide(i)}};tabviewObj.prototype.tabHide=function(tabviewIndex){var div;if(!this.tabs[tabviewIndex]){return false}div=this.tabs[tabviewIndex].div;if(!div.className.match(this.REclassTabHide)){div.className+=' '+this.classTabHide}this.navClearActive(tabviewIndex);return this};tabviewObj.prototype.tabShow=function(tabviewIndex){var div;if(!this.tabs[tabviewIndex]){return false}this.tabHideAll();div=this.tabs[tabviewIndex].div;div.className=div.className.replace(this.REclassTabHide,'');this.navSetActive(tabviewIndex);if(typeof this.onTabDisplay=='function'){this.onTabDisplay({'tabview':this,'index':tabviewIndex})}return this};tabviewObj.prototype.navSetActive=function(tabviewIndex){this.tabs[tabviewIndex].li.className=this.classNavActive;return this};tabviewObj.prototype.navClearActive=function(tabviewIndex){this.tabs[tabviewIndex].li.className='';return this};function tabviewAutomatic(tabviewArgs){var tempObj,divs,i;if(!tabviewArgs){tabviewArgs={}}tempObj=new tabviewObj(tabviewArgs);divs=document.getElementsByTagName("div");for(i=0;i<divs.length;i++){if(divs[i].className&&divs[i].className.match(tempObj.REclassMain)){tabviewArgs.div=divs[i];divs[i].tabview=new tabviewObj(tabviewArgs)}}return this}function tabviewAutomaticOnLoad(tabviewArgs){var oldOnLoad;if(!tabviewArgs){tabviewArgs={}}oldOnLoad=window.onload;if(typeof window.onload!='function'){window.onload=function(){tabviewAutomatic(tabviewArgs)}}else{window.onload=function(){oldOnLoad();tabviewAutomatic(tabviewArgs)}}}if(typeof tabviewOptions=='undefined'){tabviewAutomaticOnLoad()}else{if(!tabviewOptions['manualStartup']){tabviewAutomaticOnLoad(tabviewOptions)}}

(function($) {
$.fn.hoverscroll = function(params) {
if (!params) { params = {}; }
params = $.extend({}, $.fn.hoverscroll.params, params);
this.each(function() {
var $this = $(this);
if (params.debug) {$.log('[HoverScroll] Trying to create hoverscroll on element ' + this.tagName + '#' + this.id);}
if (params.fixedArrows) {
$this.wrap('<div class="fixed-listcontainer"></div>')
}
else {
$this.wrap('<div class="listcontainer"></div>');
}

$this.addClass('list');
var listctnr = $this.parent();
listctnr.wrap('<div class="ui-widget-content hoverscroll' +
(params.rtl && !params.vertical ? " rtl" : "") + '"></div>');
//listctnr.wrap('<div class="hoverscroll"></div>');

var ctnr = listctnr.parent();

var leftArrow, rightArrow, topArrow, bottomArrow;
if (params.arrows) {
if (!params.vertical) {
if (params.fixedArrows) {
leftArrow = '<div class="fixed-arrow left"></div>';
rightArrow = '<div class="fixed-arrow right"></div>';

listctnr.before(leftArrow).after(rightArrow);
}
else {
leftArrow = '<div class="arrow left"></div>';
rightArrow = '<div class="arrow right"></div>';

listctnr.append(leftArrow).append(rightArrow);
}
}
else {
if (params.fixedArrows) {
topArrow = '<div class="fixed-arrow top"></div>';
bottomArrow = '<div class="fixed-arrow bottom"></div>';

listctnr.before(topArrow).after(bottomArrow);
}
else {
topArrow = '<div class="arrow top"></div>';
bottomArrow = '<div class="arrow bottom"></div>';

listctnr.append(topArrow).append(bottomArrow);
}
}
}
ctnr.width(params.width).height(params.height);

if (params.arrows && params.fixedArrows) {
if (params.vertical) {
topArrow = listctnr.prev();
bottomArrow = listctnr.next();

listctnr.width(params.width)
.height(params.height - (topArrow.height() + bottomArrow.height()));
}
else {
leftArrow = listctnr.prev();
rightArrow = listctnr.next();

listctnr.height(params.height)
.width(params.width - (leftArrow.width() + rightArrow.width()));
}
}
else {
listctnr.width(params.width).height(params.height);
}

var size = 0;

if (!params.vertical) {
ctnr.addClass('horizontal');
$this.children().each(function() {
$(this).addClass('item');

if ($(this).outerWidth) {
size += $(this).outerWidth(true);
}
else {
size += $(this).width() + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'))
+ parseInt($(this).css('margin-left')) + parseInt($(this).css('margin-right'));
}
});
$this.width(size);

if (params.debug) {
$.log('[HoverScroll] Computed content width : ' + size + 'px');
}
if (ctnr.outerWidth) {
size = ctnr.outerWidth();
}
else {
size = ctnr.width() + parseInt(ctnr.css('padding-left')) + parseInt(ctnr.css('padding-right'))
+ parseInt(ctnr.css('margin-left')) + parseInt(ctnr.css('margin-right'));
}

if (params.debug) {
$.log('[HoverScroll] Computed container width : ' + size + 'px');
}
}
else {
ctnr.addClass('vertical');
$this.children().each(function() {
$(this).addClass('item')

if ($(this).outerHeight) {
size += $(this).outerHeight(true);
}
else {
size += $(this).height() + parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom'))
+ parseInt($(this).css('margin-bottom')) + parseInt($(this).css('margin-bottom'));
}
});
$this.height(size);

if (params.debug) {
$.log('[HoverScroll] Computed content height : ' + size + 'px');
}
if (ctnr.outerHeight) {
size = ctnr.outerHeight();
}
else {
size = ctnr.height() + parseInt(ctnr.css('padding-top')) + parseInt(ctnr.css('padding-bottom'))
+ parseInt(ctnr.css('margin-top')) + parseInt(ctnr.css('margin-bottom'));
}

if (params.debug) {
$.log('[HoverScroll] Computed container height : ' + size + 'px');
}
}
var zone = {
1: {action: 'move', from: 0, to: 0.06 * size, direction: -1 , speed: 16},
2: {action: 'move', from: 0.06 * size, to: 0.15 * size, direction: -1 , speed: 8},
3: {action: 'move', from: 0.15 * size, to: 0.25 * size, direction: -1 , speed: 4},
4: {action: 'move', from: 0.25 * size, to: 0.4 * size, direction: -1 , speed: 2},
5: {action: 'stop', from: 0.4 * size, to: 0.6 * size},
6: {action: 'move', from: 0.6 * size, to: 0.75 * size, direction: 1 , speed: 2},
7: {action: 'move', from: 0.75 * size, to: 0.85 * size, direction: 1 , speed: 4},
8: {action: 'move', from: 0.85 * size, to: 0.94 * size, direction: 1 , speed: 8},
9: {action: 'move', from: 0.94 * size, to: size, direction: 1 , speed: 16}
}

ctnr[0].isChanging = false;
ctnr[0].direction = 0;
ctnr[0].speed = 1;
function checkMouse(x, y) {
x = x - ctnr.offset().left;
y = y - ctnr.offset().top;

var pos;
if (!params.vertical) {pos = x;}
else {pos = y;}

for (i in zone) {
if (pos >= zone[i].from && pos < zone[i].to) {
if (zone[i].action == 'move') {startMoving(zone[i].direction, zone[i].speed);}
else {stopMoving();}
}
}
}

function setArrowOpacity() {
if (!params.arrows || params.fixedArrows) {return;}

var maxScroll;
var scroll;

if (!params.vertical) {
maxScroll = listctnr[0].scrollWidth - listctnr.width();
scroll = listctnr[0].scrollLeft;
}
else {
maxScroll = listctnr[0].scrollHeight - listctnr.height();
scroll = listctnr[0].scrollTop;
}
var limit = params.arrowsOpacity;
var opacity = (scroll / maxScroll) * limit;

if (opacity > limit) { opacity = limit; }
if (isNaN(opacity)) { opacity = 0; }

var done = false;
if (opacity <= 0) {
$('div.arrow.left, div.arrow.top', ctnr).hide();
if(maxScroll > 0) {
$('div.arrow.right, div.arrow.bottom', ctnr).show().css('opacity', limit);
}
done = true;
}
if (opacity >= limit || maxScroll <= 0) {
$('div.arrow.right, div.arrow.bottom', ctnr).hide();
done = true;
}

if (!done) {
$('div.arrow.left, div.arrow.top', ctnr).show().css('opacity', opacity);
$('div.arrow.right, div.arrow.bottom', ctnr).show().css('opacity', (limit - opacity));
}
}

function startMoving(direction, speed) {
if (ctnr[0].direction != direction) {
if (params.debug) {
$.log('[HoverScroll] Starting to move. direction: ' + direction + ', speed: ' + speed);
}

stopMoving();
ctnr[0].direction = direction;
ctnr[0].isChanging = true;
move();
}
if (ctnr[0].speed != speed) {
if (params.debug) {
$.log('[HoverScroll] Changed speed: ' + speed);
}

ctnr[0].speed = speed;
}
}

function stopMoving() {
if (ctnr[0].isChanging) {
if (params.debug) {
$.log('[HoverScroll] Stoped moving');
}

ctnr[0].isChanging = false;
ctnr[0].direction = 0;
ctnr[0].speed = 1;
clearTimeout(ctnr[0].timer);
}
}

function move() {
if (ctnr[0].isChanging == false) {return;}

setArrowOpacity();

var scrollSide;
if (!params.vertical) {scrollSide = 'scrollLeft';}
else {scrollSide = 'scrollTop';}

listctnr[0][scrollSide] += ctnr[0].direction * ctnr[0].speed;
ctnr[0].timer = setTimeout(function() {move();}, 50);
}

if (params.rtl && !params.vertical) {
listctnr[0].scrollLeft = listctnr[0].scrollWidth - listctnr.width();
}

ctnr
.mousemove(function(e) {checkMouse(e.pageX, e.pageY);})
.bind('mouseleave', function() {stopMoving();});

this.startMoving = startMoving;
this.stopMoving = stopMoving;

if (params.arrows && !params.fixedArrows) {
// Initialise arrow opacity
setArrowOpacity();
}
else {
// Hide arrows
$('.arrowleft, .arrowright, .arrowtop, .arrowbottom', ctnr).hide();
}
});

return this;
};

if (!$.fn.offset) {
$.fn.offset = function() {
this.left = this.top = 0;

if (this[0] && this[0].offsetParent) {
var obj = this[0];
do {
this.left += obj.offsetLeft;
this.top += obj.offsetTop;
} while (obj = obj.offsetParent);
}

return this;
}
}

$.fn.hoverscroll.params = {
vertical: false, 
width: 130,
height: 50, 
arrows: true,
arrowsOpacity: 0.7, 
fixedArrows: false, 
rtl: false, 
debug: false 
};
$.log = function() {
try {console.log.apply(console, arguments);}
catch (e) {
try {opera.postError.apply(opera, arguments);}
catch (e) {}
}
};
})(jQuery);

// Aplicar desde aquí el hack de compatibilidad con Scriptaculous en caso de ser necesario

$(function(){
$("#slidervideo-tabs a").click(function(){
var container = $("#slidervideo-content");
container.html("<img src='http://3.bp.blogspot.com/-IbCgBm3kukw/UI3nvBbvtUI/AAAAAAAADL0/lfqoLXFkhfU/s400/loading.gif' class='loading-vid' />");
var id = $(this).attr("href").slice(1);
loadvideo(id);
return false;
});
$("#slidervideo-tabs").hoverscroll({vertical:true,width:130,height:330,arrows:false});
$("#slidervideo-tabs li").hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
loadvideo();
});

function loadvideo (hash){if(hash){hash = hash.slice(3);$("#slidervideo-content").html(video[hash]);$("#slidervideo-tabs li").removeClass("actVid");$("#slidervideo-tabs a[href=#vid"+hash+"]").parent().addClass("actVid");}else{$("#slidervideo-content").html(video[1]);$("#slidervideo-tabs li").removeClass("actVid");$("#slidervideo-tabs a[href=#vid1]").parent().addClass("actVid");}}