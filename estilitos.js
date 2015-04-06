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

function midoramas(json) {
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

function midoramas(json) {
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
        
var trtd = '<li><a href="' + posturl + '" title="'+ posttitle +'"><span class="der-post"><img border="0" height="54" src="' + img[i] + '" width="40"></span><div class="play_label_search"><span></span></div><span class="der-two-tilt">'+ posttitle +'</span><span class="der-two-hor"><span style="color:#D40C0C;font-weight: bold">'+daystr+'</span></span><span class="der-two-anal-ver">análisis</span></a></li>';   
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

function toditos(json) {
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

function pelidoramas(json) {
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
      var trtd = '<div class="lolanime"><div class="lolimg"><a title="'+ posttitle +'" href="' + posturl + '"><img src="' + img[i] + '" width="166" border="0" alt="' + posttitle + '"/></a></div><div class="animedt"><a href="' + posturl + '">' + posttitle + '</a><span class="veranime"><a title="Ver '+ posttitle +'" href="' + posturl + '">Ver Doramas</a></span></div></div>';
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
      var trtd = '<div class="home_portada_bg" style="margin: 0 0 4px 17px;padding: 3px;"><a class="big_portada_title" href="' + posturl + '">' + posttitle + '</a><a class="portada_big" href="' + posturl + '"><img src="' + img[i] + '" width="151" height="250" alt="' + posttitle + '"/></a></div>';

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
      var trtd = '<div class="nivo-html-caption" id="htmlcaption-'+ numero +'"><a href="' + posturl + '"><strong style="font-size:18px;">' + posttitle + '</strong></a></div>';

      document.write(trtd);
        j++
    }
}


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
{if(flag==1)towrite=towrite+' ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">MÃƒÂ¡s Ã‚Â»</a>';flag=1;;}
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
