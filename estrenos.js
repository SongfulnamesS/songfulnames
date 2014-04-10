imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-QjSndGbF0No/T-Nt3HgKsDI/AAAAAAAAG9o/cN6_Oy306rc/s1600/no-video.gif";
showRandomImg = true;
aBold = true;
summaryPost = 140;
summaryTitle = 25;
label1 = "Capitulo";
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

function showrecentposts(json) {
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
var trtd = '<li class="car"><div class="thumb"><a href="'+posturl+'"><img width="110" height="120" class="alignnone" src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li>';

document.write(trtd);
j++;
}
document.write('</ul>');
}

function thumbnails(url,title,image,size){
var item=image;
var salida ='<a class="tooltip" href="'+url+'" title="'+title+'"><img src="'+item.replace('/s72-c/','/s'+size+'/')+'" title="'+title+'" alt="'+title+'"/></a>';
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
  var numposts = 999;
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
    salida += "<a class='tooltip' href='" + posturl + "' title='" + posttitle + "'><img src='" + postimg + "' alt='" + posttitle + "' title='" + posttitle + "'/></a>";
      salida += "</div>";
      document.write(salida);
  }
}
