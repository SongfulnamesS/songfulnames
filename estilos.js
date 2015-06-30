imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif";
showRandomImg = true;
aBold = true;
summaryPost = 140;
summaryTitle = 25;
numposts2 = 99999;
numposts1 = 40;

function removeHtmlTag(strx, chop) {
    var s = strx.split("<");
    for (var i = 0; i < s.length; i++) {
        if (s[i].indexOf(">") != -1) {
            s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length)
        }
    }
    s = s.join("");
    s = s.substring(0, chop - 1);
    return s
}
function peliculas(json) {
	var numerar;
	numerar = 0;
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
      numerar = numerar +1;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
      var trtd = '<div class="loltopanime"><div class="loltopimg"><a title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div><div class="topanimedt"><span>'+numerar+' </span><a href="' + posturl + '">' + posttitle + '</a></div></div>';
        document.write(trtd);
        j++
    }
}

function semanal(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
      var trtd = '<li><a class="rated_avatar" title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="47" height="47" border="0" alt="' + posttitle + '"/></a><a class="rated_title" href="' + posturl + '">' + posttitle + '</a><div class="rated_stars"><span>'+daystr+'</span><img src="http://4.bp.blogspot.com/-iLWPFywYVgg/U0a2zVfFqeI/AAAAAAAACA0/wEp4CmjnBLc/s1600/estrella.png" style="height:11px; vertical-align:middle;" title="Programacion Semanal" alt="Progamacion Jkanime"></div><a class="rated_more" href=' + posturl + '><img style="vertical-align:middle;" src="http://3.bp.blogspot.com/-Tb6i2OrgUrs/U0a21laJahI/AAAAAAAACA8/21CmqxspRYw/s1600/verr.png" alt="Ver Anime"></a></li>';
        document.write(trtd);
        j++
    }
}
function anime(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
      var trtd = '<div class="home_portada_bg"><a class="big_portada_title" href="' + posturl + '">' + posttitle + '</a><a class="portada_big" href="' + posturl + '"><img src="' + img[i] + '" width="151" height="250" alt="' + posttitle + '"/></a></div>';
        document.write(trtd);
        j++
    }
}

function ovas(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
      var trtd = '<div class="lolanime"><div class="lolimg"><a title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div><span>'+daystr+'</span><div class="animedt"><a href="' + posturl + '">' + posttitle + '</a><span class="veranime"><a title="Ver '+ posttitle +'" href="' + posturl + '">Ver Peliculas</a></span></div></div>';
        document.write(trtd);
        j++
    }
}

function listados(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
       
      var trtd = '<li><a href="' + posturl + '">' + posttitle + '</a></li>';
        document.write(trtd);
        j++
    }
}

function carouselito(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();
document.write('<ul>');
for (var i = 0; i < numposts1; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";
postdate = entry.published.$t;
if(j>imgr.length-1) j=0;
img[i] = imgr[j];
s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];
for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;
var trtd = '<div class="capa-carousel"><li class="car"><div class="thumb"><a href="'+posturl+'"><img width="110" height="120" class="alignnone" src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li></div>';

document.write(trtd);
j++;
}
document.write('</ul>');
}

function thumbnails(url,image,size){
var item=image;
var salida ='<a class="tooltip" href="'+url+'"><img src="'+item.replace('/s72-c/','/s'+size+'/')+'"/></a>';
if(item!="") return salida; else return "";
}
//
onload=function() {
var plmain = document.getElementById('section').offsetHeight;
var plsidebar = document.getElementById('aside').offsetHeight;
if(plsidebar>plmain) plmain=plsidebar;
document.getElementById('section').style.height = document.getElementById('aside').style.height = plmain+ 'px';
}
//
function eliminattags(cual,longitud){
  var resumen = cual.split("<");
  for(var i=0;i<resumen.length;i++){
    if(resumen[i].indexOf(">")!=-1){
      resumen[i] = resumen[i].substring(resumen[i].indexOf(">")+1,resumen[i].length);
    }
  }
  resumen =  resumen.join("");
  resumen = resumen.substring(0,longitud-1);
  return resumen;
}
function estrenos(json) {
  var imagenpodefecto = "URL_imagen";
  var lenresumen = 100;
  var entry, posttitle, posturl, postimg, postcontent, salida;
  for (var i = 0; i < numposts; i++) {
    entry = json.feed.entry[i];
    posttitle = entry.title.$t;
    if (i == json.feed.entry.length) { break; }
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
    postcontent = "";
    if ("content" in entry) {
      postcontent = entry.content.$t;
    } else if ("summary" in entry) {
      postcontent = entry.summary.$t;
    }
    postcontent = eliminattags(postcontent,lenresumen);
    if ("media$thumbnail" in entry) {
      postimg = entry.media$thumbnail.url;
      postimg = postimg.replace('s72-c','s200');
    } else {
      postimg = imagenpodefecto;
    }
      salida = "<div class='item-estrenos'>";
    salida += "<a class='tooltip' href='" + posturl + "'><img src='" + postimg + "' alt='" + posttitle + "' title='" + posttitle + "'/></a>";
      salida += "</div>";
      document.write(salida);
  }
}

function labelthumbs(json){document.write('<ul class="label_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='https://lh6.googleusercontent.com/_dsEG33PDaHw/Tdw5i1GeYnI/AAAAAAAABcM/K_URA3p40_A/sin-imagen.png';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Ene";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Abr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Ago";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dic";document.write('<li class="clearfix">');if(showpostthumbnails==true)
document.write('<a href="'+posturl+'" target ="_top"><img class="label_thumb" src="'+thumburl+'"/></a>');document.write('<strong><a href="'+posturl+'" target ="_top">'+posttitle+'</a></strong><br>');if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('');}
else{document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('');}}
var towrite='';var flag=0;document.write('<br>');if(showpostdate==true){towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' | ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" style="color:white;">Ver Episodio</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}



function liscapitulos(json) {
 j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        var trtd = '<li><a href="'+posturl+'">'+posttitle+'<small class="right">'+daystr+'</small></a></li>';
        document.write(trtd);
        j++
    }  
 
}

(function($) {
    $.fn.tipsy = function(options) {

        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        return this.each(function() {
            
            var opts = $.fn.tipsy.elementOptions(this, options);
            
            $(this).hover(function() {

                $.data(this, 'cancel.tipsy', true);

                var tip = $.data(this, 'active.tipsy');
                if (!tip) {
                    tip = $('<div class="tipsy"><div class="tipsy-inner"/></div>');
                    tip.css({position: 'absolute', zIndex: 100000});
                    $.data(this, 'active.tipsy', tip);
                }

                if ($(this).attr('title') || typeof($(this).attr('original-title')) != 'string') {
                    $(this).attr('original-title', $(this).attr('title') || '').removeAttr('title');
                }

                var title;
                if (typeof opts.title == 'string') {
                    title = $(this).attr(opts.title == 'title' ? 'original-title' : opts.title);
                } else if (typeof opts.title == 'function') {
                    title = opts.title.call(this);
                }

                tip.find('.tipsy-inner')[opts.html ? 'html' : 'text'](title || opts.fallback);

                var pos = $.extend({}, $(this).offset(), {width: this.offsetWidth, height: this.offsetHeight});
                tip.get(0).className = 'tipsy'; // reset classname in case of dynamic gravity
                tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
                var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;
                var gravity = (typeof opts.gravity == 'function') ? opts.gravity.call(this) : opts.gravity;

                switch (gravity.charAt(0)) {
                    case 'n':
                        tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                        break;
                    case 's':
                        tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                        break;
                    case 'e':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                        break;
                    case 'w':
                        tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                        break;
                }

                if (opts.fade) {
                    tip.css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: 0.8});
                } else {
                    tip.css({visibility: 'visible'});
                }

            }, function() {
                $.data(this, 'cancel.tipsy', false);
                var self = this;
                setTimeout(function() {
                    if ($.data(this, 'cancel.tipsy')) return;
                    var tip = $.data(self, 'active.tipsy');
                    if (opts.fade) {
                        tip.stop().fadeOut(function() { $(this).remove(); });
                    } else {
                        tip.remove();
                    }
                }, 100);

            });
            
        });
        
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.defaults = {
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        title: 'title'
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
})(jQuery);


function recomendables(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        
		var re=/<\S[^>]*>/g;
        var post;
		var postcortado;
        postcortado=postcontent.replace(re,"");
      if(postcortado.length<63){
        post=postcortado;
      }else{
		post=postcortado.substring(0,63);
		}
        

		postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;

        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
        
var trtd = '<li><a href="' + posturl + '" title="'+ posttitle +'"><span class="img"><img border="0" height="54" src="' + img[i] + '" width="40"></span><div class="play_label_search"><span></span></div><span class="tit">'+ posttitle +'</span><span class="year"><span style="color:#D40C0C;font-weight: bold">'+daystr+'</span></span><span class="info">'+post+'</span></a></li>';   
        document.write(trtd);
        j++
    }
}

function romancitas(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break
            }
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                pcm = entry.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in entry) {
            var postcontent = entry.content.$t
        } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
        } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
            if (parseInt(m) == month[u2]) {
                m = month2[u2];
                break
            }
        }
        var daystr = day + ' ' + m + ' ' + y;
        pcm = '<a href="' + posturl + '">' + pcm + ' comments</a>';
      var trtd = '<div class="lstsradd"><div class="snplblkn"></div><div class="animedt">' + posttitle + '</div><a class="tooltip" title="'+ posttitle +'" href="' + posturl + '"><div class="lstanmadd-lston"></div><img class="imglstsr" src="' + img[i] + '" width="154" border="0" alt="' + posttitle + '"/></a></div>';
        document.write(trtd);
        j++
    }
}

function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}function showrecentposts(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();document.write('<ul>');for(var i=0;i<numposts1;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li class="car"><div class="thumb"><a href="'+posturl+'"><img width="200" height="250" class="alignnone" src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li>';document.write(trtd);j++}document.write('</ul>')}function showrecentposts5(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts1;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var trtd='<li id="nav-post-'+i+'" class="ui-tabs-nav-item"><a href="#post-'+i+'"><img width="100" height="69" src="'+img[i]+'"/><span>'+posttitle+'</span></a></li>';document.write(trtd);j++}}function showrecentposts1(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();if(numposts2<=json.feed.entry.length){maxpost=numposts2}else{maxpost=json.feed.entry.length}for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;pcm='<a href="'+posturl+'">'+pcm+' comments</a>';var trtd='<div class="col_maskolis"><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><a href="'+posturl+'"><img class="maskolis_img" src="'+img[i]+'"/></a><div class="clear"></div></div>';document.write(trtd);j++}}var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='http://imgclasificados3.emol.com/78987370_0/imagen_no_disponible.gif'}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<div/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;');if(i!=0)document.write('"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img class="maskolis_img" title="'+relatedTitles[r]+'" src="'+thumburl[r]+'"/></a>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)} 
