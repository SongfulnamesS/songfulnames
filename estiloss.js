 imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif";
showRandomImg = true;
aBold = true;
summaryPost = 200;
summaryTitle = 20;
numposts2 = 99999;

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

function capanime(json) {
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
      var trtd = '<li><a class="rated_avatar" title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="47" height="47" border="0" alt="' + posttitle + '"/></a><a class="rated_title" href="' + posturl + '">' + posttitle + '</a><div class="rated_stars"><span>'+daystr+'</span><img src="http://i.imgur.com/GWOKAA9.png" style="height:11px; vertical-align:middle;" title="Progamacion Semanal" alt="Progamacion Semanal"></div><a class="rated_more" href=' + posturl + '><img style="vertical-align:middle;" src="http://i.imgur.com/VBwAaDQ.png" alt="Ver Anime"></a></li>';
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
      var trtd = '<div class="home_portada_bg"><a class="big_portada_title" title="'+ posttitle +'" href="' + posturl + '">' + posttitle + '</a><a class="portada_big" title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="151" height="250" alt="' + posttitle + '"/><span class="tl">" href="' + posturl + '">' + posttitle + '"><p class="desc-mid">"' + postsnippet + '"></p></span></a></div>';
        document.write(trtd);
        j++
    }
}

function showrecentposts1(json) {
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
      var trtd = '<div class="lolanime"><div class="lolimg"><a title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div><div class="animedt"><a href="' + posturl + '">' + posttitle + '</a><span class="veranime"><a title="Ver '+ posttitle +'" href="' + posturl + '">Ver Ova</a></span></div></div>';
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

function aleatorio(json) {
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
      var trtd = '<div class="home_portada_bg" style="margin: 0 0 4px 17px;padding: 3px;"><a class="big_portada_title" title="'+ posttitle +'" href="' + posturl + '">' + posttitle + '</a><a class="portada_big" title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="151" height="250" alt="' + posttitle + '"/></a></div>';

        document.write(trtd);
        j++
    }
}
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
      var trtd = '<a href="' + posturl + '"><img src="' + img[i] + '" width="450" height="246" alt="' + posttitle + '" title="#htmlcaption-'+ numero +'"/></a>';

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
      var trtd = '<div class="nivo-html-caption" id="htmlcaption-'+ numero +'"><a href="' + posturl + '"><strong style="width: 469px;height: 18px;line-height: 18px;font-size:18px;">' + posttitle + '</strong></a></div>';

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