(function() {
    FFBS_voted_7y1qg = false;
    FFBS_show_info_7y1qg = true;
    FFBS_show_share_7y1qg = true;
    FFBS_enable_ads_7y1qg = true;
    FFBS_info_7y1qg = "info";
    FFBS_share_7y1qg = "share_7y1qg";
    FFBS_show_feedback_7y1qg = false;
    FFBS_feedback_viewing_7y1qg = false;
    FFBS_feedback_7y1qg = "None";
    FFBS_feedback_data_7y1qg = null;
    FFBS_feedback_shown_7y1qg = false;
    FFBS_feedback_closed_7y1qg = false;
    FFBS_feedback_rendered_7y1qg = false;
    FFBS_info_event_7y1qg = null;
    FFBS_info_delay_7y1qg = 1;
    FFBS_info_shown_7y1qg = false;
    FFBS_info_waiting_7y1qg = false;
    FFBS_info_viewing_7y1qg = false;
    FFBS_info_force_close_7y1qg = false;
    FFBS_info_timer_7y1qg = null;
    FFBS_labels_id_7y1qg = '';
    FFBS_type_7y1qg = '';
    FFBS_data_7y1qg = new Array();
    FFBS_data_7y1qg['label-votes'] = "";
    FFBS_data_7y1qg['label-views'] = "";
    FFBS_data_7y1qg['label-rating'] = "";
    FFBS_data_7y1qg['label-info-ratings'] = "";
    FFBS_ad_blocker_checked = false;
    FFBS_need_separator_7y1qg = true;
    FFBS_trial_over_7y1qg = false;

    (function() {
        if (!FFBS_ad_blocker_checked) {
            FFBS_ad_blocker_enabled = true;
            var d = document;
            var s = d.createElement('script');
            s.setAttribute('type','text/javascript');
            s.setAttribute('src','http://static.graddit.com/js/advertisement.js');
            var h = d.getElementsByTagName('head').item(0);
            h.insertBefore(s, h.firstChild);
            FFBS_ad_blocker_checked = true;
        }
    })();

    
    var classStar = "ffbs_star_img";
    
    
    var classStarSet = "ffbs_star_img_set";
    
    
    var classStarVote = "ffbs_star_img_vote";
    

    if (typeof FFBS_styles_checked == "undefined") {
        FFBS_styles_checked = true;
        var ruleExists = false;
        var content = document.documentElement.innerHTML;
        if (content.indexOf("span." + classStar) > 0 || content.indexOf("graddit.css") > 0) {
            ruleExists = true;
        }
        if (!ruleExists) {
            var sheets = document.styleSheets;
            if (typeof sheets != "undefined") {
                for (var i = 0; i < sheets.length && !ruleExists; i++) {
                    try {
                        var styles = (sheets[i].cssRules)? sheets[i].cssRules : sheets[i].rules;
                        if (styles != null) {
                            for (var j = 0; j < styles.length && !ruleExists; j++) {
                                if (styles[j].selectorText.indexOf("span." + classStar) >= 0) {
                                    ruleExists = true;
                                }
                            }
                        }
                    } catch (err) {
                    }
                }
            }
        }
        if (!ruleExists) {
            console.log("graddit styles not found");
            
        }
    }

    var FFBS_getVotesLabel_7y1qg = function(votes) {
        var result;
        if (FFBS_data_7y1qg['label-votes'] == '') {
            if (votes == 1) {
                result = "vote";
            } else {
                result = "votes";
            }
        } else {
            result = FFBS_data_7y1qg['label-votes'];
        }
        return result;
    }

    var FFBS_getViewsLabel = function(views) {
        var result;
        if (FFBS_data_7y1qg['label-views'] == '') {
            if (views == 1) {
                result = "view";
            } else {
                result = "views";
            }
        } else {
            result = FFBS_data_7y1qg['label-views'];
        }
        return result;
    }
    
    var div = null;
    if (/msie/i.test (navigator.userAgent)) {
        var elements = document.getElementsByName("rate_7y1qg");
        var found = false;
        for (var i = 0; i < elements.length && !found; i++) {
            if (elements[i].attributes['id'] != null && elements[i].attributes['id'].value == 'rate_7y1qg') {
                found = true;
                div = elements[i];
            }
        }
    } else {
        div = document.getElementById("rate_7y1qg");
    }
    var starIdPrefix = "ffbs_star_7y1qg_";
    var stars;
    var renderedStars = new Array();
    if (div != null) {
        var innerText = div.innerHTML;
        innerText = innerText.replace(/\s*<!--/, "").replace(/-->\s*/, "");
        stars = eval(innerText);
        var label = div.getAttribute("data-label-votes");
        if (label != null) {
            if (label != "icon") {
                FFBS_data_7y1qg["label-votes"] = label;
            } else {
                FFBS_data_7y1qg["label-votes"] = "<img src='http://static.graddit.com/img/icons/graddit_vote.png' alt='votes' title='Votes'/>";
                FFBS_need_separator_7y1qg = false;
            }
        }
        label = div.getAttribute("data-label-views");
        if (label != null) {
            if (label != "icon") {
                FFBS_data_7y1qg["label-views"] = label;
            } else {
                FFBS_data_7y1qg["label-views"] = "<img src='http://static.graddit.com/img/icons/graddit_view.png' alt='views' title='Views'/> ";
                FFBS_need_separator_7y1qg = false;
            }
        }
        label = div.getAttribute("data-label-rating");
        if (label != null) {
            if (label != "icon") {
                FFBS_data_7y1qg["label-rating"] = label;
            } else {
                FFBS_data_7y1qg["label-rating"] = "<img src='http://static.graddit.com/img/icons/graddit_stats.png' alt='rating' title='Rating'/> ";
                FFBS_need_separator_7y1qg = false;
            }
        }
        label = div.getAttribute("data-label-info-ratings");
        if (label != null) {
            FFBS_data_7y1qg['label-info-ratings'] = label;
        }
    } else {
        stars = eval('{[["&#9734;","&#9733;"]]}');
    }
    var maxStars = parseInt("5");
    if (maxStars == 0) {
        return;
    }
    var avg = Math.round(0);
    var tmp = "";
    var sIdx = 0;
    var data = [0, 0, 0, 0, 0];
    if (maxStars > 2) {
        if (FFBS_type_7y1qg === 'poll') {
            tmp += "<ul class='ffbs_poll'>";
        }
        var votes = 0;
        for (i = 0; i < maxStars; i++) {
            if (sIdx >= stars.length) {
                sIdx = 0;
            }
            var starClass;
            var star;
            var starId = starIdPrefix + i;
            if (i < avg && FFBS_type_7y1qg !== 'simplepoll' && FFBS_type_7y1qg !== 'poll') {
                starClass = classStarSet;
                if (stars[sIdx].length == 1) {
                    star = stars[sIdx];
                } else {
                    if (stars[sIdx].length == 2) {
                        star = stars[sIdx][1];
                    } else {
                        star = stars[sIdx][2];
                    }
                }
            } else {
                starClass = classStar;
                if (stars[sIdx].length == 1) {
                    star = stars[sIdx];
                } else {
                    star = stars[sIdx][0];
                }
            }
            if (FFBS_type_7y1qg === 'poll') {
                tmp += "<li name='ffbs_poll_7y1qg' onclick='FFBS_onVote7y1qg(this.id);' onmouseover='FFBS_onStarMouseOver7y1qg(this.id, event);' onmouseout='FFBS_onStarMouseOut7y1qg(this.id);' id='"+starId+"' class='"+starClass+"'><span class='ffbs_poll_title'>"+star+"</span><div class='ffbs_poll_bar'>";
                var percent = 0;
                var percentStr = "";
                if (votes > 0 && parseInt(data[sIdx]) > 0) {
                    percent = (Math.round(100 * parseInt(data[sIdx]) / votes));
                    percentStr = " (" + percent + "%)";
                }
                tmp += "<div name='ffbs_poll_bar_7y1qg' class='" + classStarSet + "' style='height: 100%; width: " + percent + "%;'></div>";
                tmp += "</div><span name='ffbs_poll_votes_7y1qg' class='ffbs_poll_votes'>" + data[sIdx] + percentStr + "</span>";
                tmp += "</li>";
            } else {
                tmp += "<span onclick='FFBS_onVote7y1qg(this.id);' onmouseover='FFBS_onStarMouseOver7y1qg(this.id, event);' onmouseout='FFBS_onStarMouseOut7y1qg(this.id);' id='"+starId+"' class='"+starClass+"'>"+star+"</span>";
                if (FFBS_type_7y1qg === 'simplepoll') {
                    tmp += " (<span id='"+starId+"_votes'>" + data[sIdx] + "</span>)";
                    if (stars[sIdx].length > 1) {
                        tmp += stars[sIdx][1];
                    }
                }
            }
            sIdx++;
        }
        var votesLabel;
        var votesStr = "";
        
        votesLabel = FFBS_getVotesLabel_7y1qg(votes);
        if (FFBS_data_7y1qg['label-votes'] == "") {
            votesStr = "<span id='" + starIdPrefix + "statsn'>0</span> <span id='" + starIdPrefix + "statsv'>" + votesLabel + "</span>";
        } else {
            votesStr = "<span id='" + starIdPrefix + "statsv'>" + votesLabel + "</span><span id='" + starIdPrefix + "statsn'>0</span>";
        }
        
        var avgStr = "";
        
        if (FFBS_data_7y1qg['label-rating'] == "") {
            avgStr = "rating: " + Math.round(0 * 10) / 10;
        } else {
            avgStr = FFBS_data_7y1qg['label-rating'] + Math.round(0 * 10) / 10;
        }
        if (FFBS_need_separator_7y1qg) {
           avgStr += " | ";
        } else {
           avgStr += "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        
        var viewsStr = "";
        
        if (FFBS_data_7y1qg['label-views'] == "") {
            viewsStr = "0 " + FFBS_getViewsLabel(0);
        } else {
            viewsStr = FFBS_getViewsLabel(0) + "0";
        }
        
        var stats = "";
        if (votesStr !== '' || viewsStr !== '' || avgStr != '') {
            stats = "&nbsp;";
            if (FFBS_need_separator_7y1qg) {
                stats += "(";
            }
            stats += "" + avgStr + "" + votesStr + "";
            if (FFBS_need_separator_7y1qg) {
                stats += " | ";
            } else {
                stats += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            stats += viewsStr + "";
            if (FFBS_need_separator_7y1qg) {
                stats += ")";
            }
        }
        if ("stats_7y1qg" == "rate_7y1qg") {
            tmp += stats;
        } else if ("stats_7y1qg" != "") {
            var statsDiv = document.getElementById("stats_7y1qg");
            if (statsDiv != null) {
                statsDiv.innerHTML = stats;
            } else {
                document.write(stats);
            }
        }
        if (FFBS_labels_id_7y1qg != null && FFBS_labels_id_7y1qg != '') {
            var labelsDiv = document.getElementById(FFBS_labels_id_7y1qg);
            if (labelsDiv != null && labelsDiv.innerHTML != "") {
                if (0 < 15 || 0 % 100 == 0) {
                    tmp += "<img style='visibility: hidden; width: 1px; display: none;' src='http://www.graddit.com/savelabels?id=7y1qg&labels=" + labelsDiv.innerHTML.toUpperCase() + "'/>";
                }
            }
        }
        
        if (FFBS_type_7y1qg === 'poll') {
            tmp += "</ul>";
        }

        if (FFBS_trial_over_7y1qg) {
            tmp += '<div title="Trial period is over, please subscribe. Voting disabled." id="blink_7y1qg" style="position: relative; left: 3px; display: inline-block;"><a target="_blank" href="http://www.graddit.com/prices" style="dext-decoration: none;"><img src="http://static1.graddit.com/img/qm.png" style="border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; width: 16px;"/></a></div>';
        }
        
        if (div != null) {
            div.innerHTML = tmp;
            div.style.visibility = 'visible';
        } else {
            document.write(tmp);
        }
    } else {
        if (maxStars == 2) {
            tmp = "<span class='" + classStar + "' id='" + starIdPrefix + "0' onclick='FFBS_onVote7y1qg(this.id);' onmouseover='FFBS_onStarMouseOver7y1qg(this.id, event);' onmouseout='FFBS_onStarMouseOut7y1qg(this.id);'>" + stars[0] + "</span>" + "&nbsp;<span id='" + starIdPrefix + "0n' style='font-size: 75%;'>" + data[0] + "</span>&nbsp;&nbsp;:&nbsp;&nbsp;" + "<span class='" + classStar + "' id='" + starIdPrefix + "1' onclick='FFBS_onVote7y1qg(this.id);' onmouseover='FFBS_onStarMouseOver7y1qg(this.id, event);' onmouseout='FFBS_onStarMouseOut7y1qg(this.id);'>" + stars[1] + "</span>" + "&nbsp;<span id='" + starIdPrefix + "1n' style='font-size: 75%;'>" + data[1] + "</span>";
        } else {
            tmp = "<span class='" + classStar + "' id='" + starIdPrefix + "0' onclick='FFBS_onVote7y1qg(this.id);' onmouseover='FFBS_onStarMouseOver7y1qg(this.id, event);' onmouseout='FFBS_onStarMouseOut7y1qg(this.id);'>" + stars[0] + "</span>" + "&nbsp;<span id='" + starIdPrefix + "0n' style='font-size: 75%;'>" + data[0] + "</span>";
        }
        if (FFBS_labels_id_7y1qg != null && FFBS_labels_id_7y1qg != '') {
            var labelsDiv = document.getElementById(FFBS_labels_id_7y1qg);
            if (labelsDiv != null && labelsDiv.innerHTML != "") {
                if (0 < 15 || 0 % 100 == 0) {
                    tmp += "<img style='visibility: hidden; width: 1px; display: none;' src='http://www.graddit.com/savelabels?id=7y1qg&labels=" + labelsDiv.innerHTML.toUpperCase() + "'/>";
                }
            }
        }

        if (FFBS_trial_over_7y1qg) {
            tmp += '<div title="Trial period is over, please subscribe. Voting disabled." id="blink_7y1qg" style="position: relative; left: 3px; display: inline-block;"><a target="_blank" href="http://www.graddit.com/prices" style="dext-decoration: none;"><img src="http://static1.graddit.com/img/qm.png" style="border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; width: 16px;"/></a></div>';
        }

        div.innerHTML = tmp;
        div.style.visibility = 'visible';
    }

    if (FFBS_show_share_7y1qg) {
        var shareDiv = document.getElementById(FFBS_share_7y1qg);
        if (shareDiv != null) {
            var currentLocation = document.location + '';
            shareDiv.innerHTML = "<a href='http://www.facebook.com/sharer.php?u=" + currentLocation + "' class='ffbs_share ffbs_share_facebook' title='Share on Facebook' target='_blank'></a><a href='http://vkontakte.ru/share.php?url=" + currentLocation + "' class='ffbs_share ffbs_share_vk' title='Share on VK' target='_blank'></a><a href='https://twitter.com/share?url=" + currentLocation + "' class='ffbs_share ffbs_share_twitter' title='Share on Twitter' target='_blank'></a><a href='https://plus.google.com/share?url=" + currentLocation + "' class='ffbs_share ffbs_share_google' title='Share on Google+' target='_blank'></a><a href='http://del.icio.us/post?url=" + currentLocation + "' class='ffbs_share ffbs_share_delicious' title='Share on Delicious' target='_blank'></a>";
        }
    }

    

    FFBS_callback_7y1qg = function(id, data) {
        var e = document.getElementById(id);
        if (e != null) {
            e.innerHTML = data;
        }
    }

    FFBS_onVote7y1qg = function(id) {
        if (FFBS_voted_7y1qg || FFBS_trial_over_7y1qg) {
            return;
        }
        var feedback = "";
        if (FFBS_show_feedback_7y1qg) {
            var f = FFBS_feedback_data_7y1qg;
            var fLen = f.length;
            var tmp = "";
            for (var i in f) {
                if (f.hasOwnProperty(i)) {
                    var c = document.getElementById("feedback_7y1qg_" + i);
                    if (c != null && c.checked == true) {
                        tmp += i + "-";
                    }
                }
            }
            var div = document.getElementById(FFBS_feedback_7y1qg);
            if (div != null) {
                div.style.display = "none";
                FFBS_feedback_shown_7y1qg = false;
            }
            if (tmp != "") {
                feedback = "feedback=" + fLen + "-" + tmp.substr(0, tmp.length - 1);
            }
        }
        var params = "";
        var top = "";
        
        if (top != "") {
            params = "?" + top;
        }
        if (feedback != "") {
            if (params != "") {
                params += "&" + feedback;
            } else {
                params = "?" + feedback;
            }
        }
        
        /*
        if (window.location) {
            var location = window.location.href.split('#');
            location = location[0];
            if (params != "") {
                params += "&url=" + location;
            } else {
                params = "?url=" + location;
            }
        }
        */
        
        var idx = parseInt(id.substr(id.indexOf(starIdPrefix) + starIdPrefix.length, id.length));
        
        var d = document;
        var s = d.createElement('script');
        s.setAttribute('type','text/javascript');
        s.setAttribute('src','http://www.graddit.com/rate/7y1qg/' + (idx + 1) + params);
        var h = d.getElementsByTagName('head').item(0);
        h.insertBefore(s, h.firstChild);
        if (FFBS_type_7y1qg !== 'simplepoll') {
            var statsn = document.getElementById(starIdPrefix + "statsn");
            
            if (statsn != null) {
                var n = parseInt(statsn.innerHTML) + 1;
                statsn.innerHTML = n;
                var statsv = document.getElementById(starIdPrefix + "statsv");
                if (statsv != null && FFBS_data_7y1qg['label-votes'] == "") {
                    statsv.innerHTML = FFBS_getVotesLabel_7y1qg(n);
                }
            }
            
        }
        FFBS_voted_7y1qg = true;
        document.body.style.cursor = "default";
        if (maxStars > 2 && FFBS_type_7y1qg !== 'simplepoll' && FFBS_type_7y1qg !== 'poll') {
            for (var i = 0; i <= idx; i++) {
                var star = document.getElementById(starIdPrefix + i);
                if (star != null) {
                    renderedStars[i] = new Array();
                    renderedStars[i]["class"] = star.className;
                    renderedStars[i]["content"] = star.innerHTML;
                }
                star.className = classStarSet;
                var vStar = stars[i % stars.length];
                if (vStar.length > 1) {
                    if (vStar.length == 2) {
                        vStar = vStar[1];
                    } else {
                        vStar = vStar[2];
                    }
                }
                star.innerHTML = vStar;
            }
        } else {
            var star = document.getElementById(starIdPrefix + idx);
            if (star != null) {
                star.className = renderedStars[idx]["class"];
                star.innerHTML = renderedStars[idx]["content"];
            }
            star = document.getElementById(starIdPrefix + idx + "n");
            if (star != null) {
                star.innerHTML = parseInt(star.innerHTML) + 1;
            }
            if (FFBS_type_7y1qg === 'simplepoll') {
                var votesElement = document.getElementById(id + "_votes");
                if (votesElement != null) {
                    var n = parseInt(votesElement.innerHTML) + 1;
                    votesElement.innerHTML = n;
                }
            } else if (FFBS_type_7y1qg === 'poll') {
                var liElements = document.getElementsByName("ffbs_poll_7y1qg");
                var totalVotes = 1;
                for (var loops = 0; loops < 2; loops++) {
                    for (var i = 0; i < liElements.length; i++) {
                        var found = false;
                        for (var j = 0; j < liElements[i].childNodes.length && found === false; j++) {
                            if (liElements[i].childNodes[j].getAttribute("name") === "ffbs_poll_votes_7y1qg") {
                                found = liElements[i].childNodes[j];
                            }
                        }
                        if (found !== false ) {
                            var votesString = found.innerHTML;
                            if (loops == 0) {
                                var matches = votesString.match(/(\d+)\s\((\d+)/);
                                if (matches != null) {
                                    if (matches[1] != null) {
                                        totalVotes += parseInt(matches[1]);
                                    }
                                }
                            } else {
                                var matches = votesString.match(/(\d+)\s\((\d+)/);
                                if (matches != null) {
                                    if (matches[1] != null && matches[2] != null) {
                                        if (liElements[i].getAttribute("id") == id) {
                                            var newVotes = parseInt(matches[1]) + 1;
                                            found.innerHTML = newVotes + " (" + (Math.round(100 * newVotes / totalVotes)) + "%)";
                                        } else {
                                            var newVotes = parseInt(matches[1])
                                            found.innerHTML = newVotes + " (" + (Math.round(100* newVotes / totalVotes)) + "%)";
                                        }
                                    }
                                } else {
                                    matches = votesString.match(/0/);
                                    if (matches != null) {
                                        if (liElements[i].getAttribute("id") == id) {
                                            found.innerHTML = "1 (" + (Math.round(100 / totalVotes)) + "%)";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    FFBS_info7y1qg = function(id) {
        if (!FFBS_info_shown_7y1qg && !FFBS_info_force_close_7y1qg) {
            FFBS_info_shown_7y1qg = true;
            var maxStars = parseInt("5");
            var info = document.getElementById(id);
            if (info == null) {
                info = document.createElement("div");
                info.setAttribute("id", id);
                info.setAttribute("class", "ffbs_info");
                info.innerHTML = "";
                document.body.appendChild(info);
            }
            if (info != null) {
                var event = FFBS_info_event_7y1qg;
                var x = FFBS_getEventX(event);
                var y = FFBS_getEventY(event);
                if (x + y != 0) {
                    info.style.top = y + 20 + "px";
                    info.style.left = x - 50 + "px";
                }
                var i = 1;
                var data = [0, 0, 0, 0, 0];
                var votes = 0;
                var maxHeight = 30;
                var height = 5;
                if (maxStars >= 2) {
                    var ratingsLabel = "Ratings";
                } else {
                    var ratingsLabel = "Get widget";
                }
                if (FFBS_data_7y1qg["label-info-ratings"]) {
                    ratingsLabel = FFBS_data_7y1qg["label-info-ratings"];
                }
                
                var similar = "";
                
                var tmp = "<table class='ffbs_info' cellpadding='0' cellspacing='0'><tr><td colspan='" + data.length + "'><span class='ffbs_info_voices' style='white-space: nowrap;'>" + ratingsLabel + "</span></td><td><span class='ffbs_site_link'><a class='ffbs_site_link' target='_blank' href='http://www.graddit.com/eng'><span onclick=\"javascript:document.location='http://www.graddit.com/eng'; return false;\">&#9733;</span></a></span></td>" + similar + "</tr>";
                if (maxStars >= 2) {
                    var maxVotes = 1;
                    for (var vote in data) {
                        if (data.hasOwnProperty(vote)) {
                            if (data[vote] > maxVotes) {
                                maxVotes = data[vote];
                            }
                        }
                    }
                    for (var tr = 0; tr < 2; tr++) {
                        tmp += "<tr>";
                        for (var vote in data) {
                            if (data.hasOwnProperty(vote)) {
                                if (tr == 0) {
                                    var h = Math.round(maxHeight * data[vote] / maxVotes) + 1;
                                    tmp += "<td valign='bottom'><span class='ffbs_info_bar' style='height: " + h + "px;'></span></td>";
                                } else if (tr == 1) {
                                    tmp += "<td valign='top'>" + data[vote] + "</td>";
                                    i++;
                                }
                            }
                        }
                        tmp += "</tr>";
                    }
                }
                tmp += "</table>";
                if (FFBS_show_feedback_7y1qg) {
                    var f = null;
                    if (FFBS_feedback_rendered_7y1qg) {
                        f = FFBS_feedback_data_7y1qg;
                    } else {
                        var div = document.getElementById(FFBS_feedback_7y1qg);
                        if (div != null) {
                            var innerText = div.innerHTML;
                            innerText = innerText.replace(/\s*<!--/, "").replace(/-->\s*/, "");
                            f = eval(innerText);
                        }
                    }
                    if (f != null) {
                        tmp += "<hr class='ffbs_info' />";
                        tmp += "<table class='ffbs_feedback' cellpadding='0' cellspacing='0'>";
                        var fData = null;
                        var maxVotes = 1;
                        for (var i in fData) {
                            if (fData.hasOwnProperty(i)) {
                                var v = parseInt(fData[i]);
                                if (v > maxVotes) {
                                    maxVotes = v;
                                }
                            }
                        }
                        var idx = 0;
                        var maxWidth = 100;
                        var hasFeedback = false;
                        for (var i in fData) {
                            if (fData.hasOwnProperty(i)) { 
                                if (f[i] != null) {
                                    tmp += "<tr><td style='text-align: right;'>" + f[i] + "</td><td style='text-align: right;'>" + fData[i] + "</td>";
                                    var w = Math.round(maxWidth * parseInt(fData[i]) / maxVotes) + 1;
                                    tmp += "<td style='text-align: left;'><span class='ffbs_info_hbar' style='width: " + w + "px;'></span></td></tr>";
                                    if (!hasFeedback) {
                                        hasFeedback = true;
                                    }
                                }
                            }
                        }
                        tmp += "</table>";
                        if (hasFeedback) {
                            tmp += "<hr class='ffbs_info'/>";
                        }
                    }
                } else {
                    tmp += "<hr class='ffbs_info'/>";
                }
                if (maxStars >= 2) {
                    
                    if (FFBS_enable_ads_7y1qg) {
                      
                      tmp += "<fieldset style='font-size: 8px; border: 0; margin: 0; padding: 0;'><legend style='margin-left: -2px; font-size: 8px; font-weight: normal;'>ads</legend>";
                      if (FFBS_ad_blocker_enabled) {
                          //tmp += "<a href='http://bit.ly/XyqwRX' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://bit.ly/XyqwRX'; return false;\"><center><img src='http://static.graddit.com/img/a/a_own.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; width: 210px;'></center></span></a>";
                          //tmp += "<a href='http://fruitfulbookmarks-en.blogspot.com/2013/04/star-ratings-rich-snippet-on-google-serp.html' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://fruitfulbookmarks-en.blogspot.com/2013/04/star-ratings-rich-snippet-on-google-serp.html'; return false;\"><center><img src='http://static.graddit.com/img/a/blogspot_serp_ratings.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; width: 243px;'></center></span></a>";
                          //tmp += "<a href='http://mlnpics.blogspot.com' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://bit.ly/10N5xes'; return false;\"><center><img src='http://static.graddit.com/img/a/bgs.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;'></center></span></a>";
                          //tmp += "<a href='http://bit.ly/13Ddl49' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://bit.ly/13Ddl49'; return false;\"><center><img src='http://static.graddit.com/img/a/gog_2.jpg' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;'></center></span></a>";
                          //tmp += "<a href='http://bit.ly/177po7W' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://bit.ly/177po7W'; return false;\"><center><img src='http://static.graddit.com/img/a/seo.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;'></center></span></a>";
                          tmp += "<a href='http://www.bytespit.com' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://www.bytespit.com'; return false;\"><center><img src='http://static1.graddit.com/img/a/a.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;'></center></span></a>";
                          tmp += "</fieldset>";
                      } else {
                      
                        tmp += "<a href='http://www.bytespit.com' class='ffbs_site_link' style='font-size: 10px;'><span onclick=\"document.location='http://www.bytespit.com'; return false;\"><center><img src='http://static1.graddit.com/img/a/a.png' style='border: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none;'></center></span></a>";
                      
                      tmp += "</fieldset>";
                      
                      
                      tmp += "<span style='position: absolute; display: inline; width: 1px; height: 1px; visibility: hidden;'><img style='visibility: hidden;' src='http://www.graddit.com/track/showinfoads-0'/></span>";
                      }
                    }
                    
                } else {
                    
                }
                //tmp += "<img src='http://stats.graddit.com/piwik.php?idsite=1&rec=1&rand=" + Math.random() + "&urlref=" + document.referrer + "' style='border:0; visibility: hidden; display: none;' alt='' />";
                info.innerHTML = tmp;
                info.style.display = "inline";
                info.style.position = "absolute";
                if (info.onmouseover == null) {
                    info.onmouseover = function() {
                        FFBS_info_viewing_7y1qg = true;
                    }
                    info.onmouseout = function() {
                        FFBS_info_viewing_7y1qg = false;
                        setTimeout("FFBS_info_clear7y1qg('info');", 500);
                    }
                }
            }
        }
    }

    FFBS_info_clear7y1qg = function(id) {
        if (!FFBS_info_waiting_7y1qg && FFBS_info_shown_7y1qg && !FFBS_info_viewing_7y1qg) {
            FFBS_info_shown_7y1qg = false;
            var info = document.getElementById(id);
            if (info != null) {
                info.style.display = "none";
            }
        }
    }

    FFBS_feedback_clear7y1qg = function(id) {
        if (FFBS_feedback_shown_7y1qg && !FFBS_feedback_viewing_7y1qg) {
            FFBS_feedback_shown_7y1qg = false;
            var f = document.getElementById(id);
            if (f != null) {
                f.style.display = "none";
            }
        }
    }

    FFBS_getEventX = function(event) {
        if (event.pageX) {
            x = event.pageX;
        } else {
            x = event.clientX + document.documentElement.scrollLeft;
        }
        return x;
    }

    FFBS_getEventY = function(event) {
        if (event.pageY) {
            y = event.pageY;
        } else {
            y = event.clientY + document.documentElement.scrollTop;
        }
        return y;
    }

    FFBS_copyEvent = function(event) {
        var tmpEvent = {};
        if (event.pageX) {
            tmpEvent['pageX'] = event.pageX;
            tmpEvent['pageY'] = event.pageY;
        } else if (event.clientX) {
            tmpEvent['clientX'] = event.clientX;
            tmpEvent['clientY'] = event.clientY;
        }
        return tmpEvent;
    }

    FFBS_getElementTopPos = function(e) {
        var top = 0;
        if (e.offsetParent) {
            do {
                top += e.offsetTop;
            } while (e = e.offsetParent);
        }
        return top;
    }


    FFBS_onStarMouseOver7y1qg = function(id, event) {
        if (FFBS_show_info_7y1qg || FFBS_enable_ads_7y1qg) {
            FFBS_info_force_close_7y1qg = false;
            FFBS_info_waiting_7y1qg = true;
            FFBS_info_event_7y1qg = FFBS_copyEvent(event);
            if (!FFBS_info_shown_7y1qg) {
                FFBS_info_timer_7y1qg = setTimeout(function(){FFBS_info7y1qg('info');}, FFBS_info_delay_7y1qg * 1000);
            }
        }
        if (FFBS_voted_7y1qg || FFBS_trial_over_7y1qg) {
            return;
        }
        document.body.style.cursor = "pointer";
        var idx = parseInt(id.substr(id.indexOf(starIdPrefix) + starIdPrefix.length, id.length));
        if (maxStars > 2 && FFBS_type_7y1qg !== 'simplepoll' && FFBS_type_7y1qg !== 'poll') {
            for (var i = 0; i < maxStars; i++) {
                var star = document.getElementById(starIdPrefix + i);
                if (i <= idx) {
                    if (star != null) {
                        renderedStars[i] = new Array();
                        renderedStars[i]["class"] = star.className;
                        renderedStars[i]["content"] = star.innerHTML;
                    }
                    star.className = classStarVote;
                    var vStar = stars[i % stars.length];
                    if (vStar.length > 1) {
                        vStar = vStar[1];
                        if (star.innerHTML.toLowerCase().indexOf("<img") == 0) {
                            if (vStar.toLowerCase().indexOf("<img") == 0) {
                                var matches = vStar.match(/src="(.+)"/);
                                if (matches[1] != null) {
                                    star.childNodes[0].src = matches[1];
                                }
                            }
                        }
                    }
                    if (star.innerHTML.indexOf("<") != 0) {
                        star.innerHTML = vStar;
                    }
                } else {
                    if (star != null) {
                        renderedStars[i] = new Array();
                        renderedStars[i]["class"] = star.className;
                        renderedStars[i]["content"] = star.innerHTML;
                    }
                    star.className = classStar;
                    var vStar = stars[i % stars.length];
                    vStar = vStar[0];
                    if (star.innerHTML.indexOf("<") != 0) {
                        star.innerHTML = vStar;
                    } else {
                        if (star.innerHTML.toLowerCase().indexOf("<img") == 0) {
                            if (vStar.toLowerCase().indexOf("<img") == 0) {
                                var matches = vStar.match(/src="(.+)"/);
                                if (matches[1] != null) {
                                    star.childNodes[0].src = matches[1];
                                }
                            }
                        }
                    }
                }
            }
        } else {
            var star = document.getElementById(starIdPrefix + idx);
            if (star != null) {
                renderedStars[idx] = new Array();
                renderedStars[idx]["class"] = star.className;
                renderedStars[idx]["content"] = star.innerHTML;
            }
            star.className = classStarVote;
            if (FFBS_type_7y1qg !== 'simplepoll' && FFBS_type_7y1qg !== 'poll') {
                var vStar = stars[idx % stars.length];
                if (vStar.length > 1) {
                    vStar = vStar[1];
                }
                if (star.innerHTML.indexOf("<") != 0) {
                    star.innerHTML = vStar;
                }
            }
        }
        if (FFBS_show_feedback_7y1qg && !FFBS_voted_7y1qg) {
            var div = document.getElementById(FFBS_feedback_7y1qg);
            if (div != null) {
                if (!FFBS_feedback_shown_7y1qg && !FFBS_feedback_closed_7y1qg) {
                    var f;
                    if (!FFBS_feedback_rendered_7y1qg) {
                        var innerText = div.innerHTML;
                        innerText = innerText.replace(/\s*<!--/, "").replace(/-->\s*/, "");
                        f = eval(innerText);
                        FFBS_feedback_data_7y1qg = f;
                        var tmp = "<a href='javascript: FFBS_close_feedback_7y1qg();' class='ffbs_feedback'>Close</a><br/>";
                        for (var i in f) {
                            if (f.hasOwnProperty(i)) {
                                tmp += "<input id='feedback_7y1qg_" + i + "' type='checkbox' /> " + f[i] + "<br/>";
                            }
                        }
                        div.innerHTML = tmp;
                        if (div.onmouseover == null) {
                            div.onmouseover = function() {
                                FFBS_feedback_viewing_7y1qg = true;
                            }
                            div.onmouseout = function() {
                                FFBS_feedback_viewing_7y1qg = false;
                                setTimeout("FFBS_feedback_clear7y1qg('None');", 200);
                            }
                        }
                        div.style.display = "inline";
                        FFBS_feedback_shown_7y1qg = true;
                        FFBS_feedback_rendered_7y1qg = true;
                    } else {
                        div.style.display = "inline";
                        FFBS_feedback_shown_7y1qg = true;
                    }
                } else {
                    
                }
            }
        }
    }

    FFBS_close_feedback_7y1qg = function() {
        var div = document.getElementById(FFBS_feedback_7y1qg);
        if (div != null) {
            div.style.display = "none";
            FFBS_feedback_closed_7y1qg = true;
        }
    }

    FFBS_onStarMouseOut7y1qg = function(id) {
        if (FFBS_show_info_7y1qg || FFBS_enable_ads_7y1qg) {
            FFBS_info_waiting_7y1qg = false;
            FFBS_info_timer_7y1qg = null;
            FFBS_info_force_close_7y1qg = true;
            setTimeout("FFBS_info_clear7y1qg('info');", 1000);
        }
        if (FFBS_voted_7y1qg || FFBS_trial_over_7y1qg) {
            return;
        }
        document.body.style.cursor = "default";
        var idx = parseInt(id.substr(id.indexOf(starIdPrefix) + starIdPrefix.length, id.length));
        if (maxStars > 2 && FFBS_type_7y1qg !== 'simplepoll' && FFBS_type_7y1qg !== 'poll') {
            for (var i = 0; i < maxStars; i++) {
                var star = document.getElementById(starIdPrefix + i);
                if (star != null) {
                    star.className = renderedStars[i]["class"];
                    if (star.innerHTML.indexOf("<") != 0) {
                        star.innerHTML = renderedStars[i]["content"];
                    } else {
                        if (star.innerHTML.toLowerCase().indexOf("<img") == 0) {
                            if (renderedStars[i]["content"].toLowerCase().indexOf("<img") == 0) {
                                var matches = renderedStars[i]["content"].match(/src="(.+)"/);
                                if (matches[1] != null) {
                                    star.childNodes[0].src = matches[1];
                                }
                            }
                        }
                    }
                }
            }
        } else {
            var star = document.getElementById(starIdPrefix + idx);
            if (star != null) {
                star.className = renderedStars[idx]["class"];
                if (star.innerHTML.indexOf("<") != 0) {
                    star.innerHTML = renderedStars[idx]["content"];
                }
            }
        }
    }
})();