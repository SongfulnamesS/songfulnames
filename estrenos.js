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

function topanime(json) {
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

function gratisme(json) {
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
      var trtd = '<li><a class="rated_avatar" title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="47" height="47" border="0" alt="' + posttitle + '"/></a><a class="rated_title" href="' + posturl + '">' + posttitle + '</a><div class="rated_stars"><span>'+daystr+'</span><img src="http://4.bp.blogspot.com/-iLWPFywYVgg/U0a2zVfFqeI/AAAAAAAACA0/wEp4CmjnBLc/s1600/estrella.png" style="height:11px; vertical-align:middle;" title="Progamacion Estrenos" alt="Progamacion Jkanime"></div><a class="rated_more" href=' + posturl + '><img style="vertical-align:middle;" src="http://3.bp.blogspot.com/-Tb6i2OrgUrs/U0a21laJahI/AAAAAAAACA8/21CmqxspRYw/s1600/verr.png" alt="Ver Anime"></a></li>';
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

function demoniosa(json) {
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
      var trtd = '<div class="lolanime"><div class="lolimg"><a title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div><span>'+daystr+'</span><div class="animedt"><a href="' + posturl + '">' + posttitle + '</a><span class="veranime"><a title="Ver '+ posttitle +'" href="' + posturl + '">Ver Pelicula</a></span></div></div>';
        document.write(trtd);
        j++
    }
}

function ultimosanime(json) {
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


function slider(json) {
document.write("<div class='nivoSlider' id='slider'>");
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }


var numero;
numero = 0;
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
		numero++;
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
      var trtd = '<a href="' + posturl + '"><div class="estreno-slider"><img src="' + img[i] + '" width="450" height="246" alt="' + posttitle + '" title="#htmlcaption-'+ numero +'"/></div></a>';

        document.write(trtd);
        j++
    }document.write("</div>");
}
function tituloslider(json) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    if (numposts2 <= json.feed.entry.length) {
        maxpost = numposts2
    } else {
        maxpost = json.feed.entry.length
    }

var numero;
numero = 0;
    for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
		numero++;
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
      var trtd = '<div class="caption" id="orbit-caption'+ numero +'"><a href="' + posturl + '"><strong style="width: 469px;height: 18px;line-height: 18px;font-size:18px;">' + posttitle + '</strong></a></div>';

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

(function(e){e.fn.orbit=function(a){a=e.extend({animation:"fade",animationSpeed:800,advanceSpeed:4E3,startClockOnMouseOut:true,startClockOnMouseOutAfter:3E3,directionalNav:true,captions:true,captionAnimationSpeed:800,timer:false,bullets:false},a);return this.each(function(){function m(c){function g(){f.eq(h).css({"z-index":1});s=false}var h=b,k=c;if(h==k)return false;if(!s){s=true;if(c=="next"){b++;if(b==n)b=0}else if(c=="prev"){b--;if(b<0)b=n-1}else{b=c;if(h<b)k="next";else if(h>b)k="prev"}a.bullets&&
x();if(a.animation=="fade"){f.eq(h).css({"z-index":2});f.eq(b).css({opacity:0,"z-index":3}).animate({opacity:1},a.animationSpeed,g);a.captions&&o()}if(a.animation=="horizontal-slide"){f.eq(h).css({"z-index":2});k=="next"&&f.eq(b).css({left:t,"z-index":3}).animate({left:0},a.animationSpeed,g);k=="prev"&&f.eq(b).css({left:-t,"z-index":3}).animate({left:0},a.animationSpeed,g);a.captions&&o()}if(a.animation=="vertical-slide"){f.eq(h).css({"z-index":2});k=="prev"&&f.eq(b).css({top:u,"z-index":3}).animate({top:0},
a.animationSpeed,g);k=="next"&&f.eq(b).css({top:-u,"z-index":3}).animate({top:0},a.animationSpeed,g);a.captions&&o()}}}var b=0,n=0,t,u,s,d=e(this).addClass("orbit"),f=d.find("img, a img");f.each(function(){var c=e(this),g=c.width();c=c.height();d.width(g);t=d.width();d.height(c);u=d.height();n++});f.eq(b).css({"z-index":3});if(a.timer){d.append('<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>');var j=e("div.timer"),p;if(j.length!=0){var C=
a.advanceSpeed/180,v=e("div.timer span.rotator"),y=e("div.timer span.mask"),z=e("div.timer span.pause"),l=0,A,w=function(){p=true;z.removeClass("active");A=setInterval(function(){var c="rotate("+l+"deg)";l+=2;v.css({"-webkit-transform":c,"-moz-transform":c,"-o-transform":c});if(l>180){v.addClass("move");y.addClass("move")}if(l>360){v.removeClass("move");y.removeClass("move");l=0;m("next")}},C)},q=function(){p=false;clearInterval(A);z.addClass("active")};w();j.click(function(){p?q():w()});if(a.startClockOnMouseOut){var B;
d.mouseleave(function(){B=setTimeout(function(){p||w()},a.startClockOnMouseOutAfter)});d.mouseenter(function(){clearTimeout(B)})}}}if(a.captions){d.append('<div class="caption"><span class="orbit-caption"></span></div>');var r=d.children("div.caption").children("span").addClass("orbit-caption").show(),o=function(){var c=f.eq(b).attr("rel"),g=e("#"+c).html(),h=r.height()+20;r.attr("id","#"+c).html(g);g?r.parent().stop().animate({bottom:0},a.captionAnimationSpeed):r.parent().stop().animate({bottom:-h},
a.captionAnimationSpeed)};o()}if(a.directionalNav){d.append('<div class="slider-nav"><span class="right">Right</span><span class="left">Left</span></div>');j=d.children("div.slider-nav").children("span.left");var D=d.children("div.slider-nav").children("span.right");j.click(function(){a.timer&&q();m("prev")});D.click(function(){a.timer&&q();m("next")})}if(a.bullets){d.append('<ul class="orbit-bullets"></ul>');var E=e("ul.orbit-bullets");for(i=0;i<n;i++){j=e("<li>"+i+"</li>");e("ul.orbit-bullets").append(j);
j.data("index",i);j.click(function(){a.timer&&q();m(e(this).data("index"))})}var x=function(){E.children("li").removeClass("active").eq(b).addClass("active")};x()}})}})(jQuery);

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
{if(flag==1){towrite=towrite+' | ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">MÃ¡s Â»</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}

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
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top" style="color:white;">Ver Episodio</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}