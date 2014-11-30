(function() {

    contentLoaded(window, function() {
        Array.prototype.forEach.call(document.getElementsByClassName("boxtwitter"), function(el) {
            var username = el.getAttribute("data-username")
            if (username == null || username == "") {
                username = "popuri_us"
                alert("please specify a username for your widget with the 'data-username' attribute")
            }

            var ops = [ "backgroundColor", "borderColor", "textColor", "linkColor", "username", "language", "showtweets",
                "tweetscount", "showfollowers", "width", "followersrows", "showfriends", "friendsrows", "size", "theme"]

            var params = {
                username: "popuri_us",
                language: "en",
                showtweets: "1",
                tweetscount: "6",
                showfollowers: "1",
                followersrows: "2",
                showfriends: "1",
                friendsrows: "2",
                size: "large",
                width: "280",
                theme: "light",
                backgroundColor: "f5f5f5",
                borderColor: "a9a9a9",
                textColor: "4f4f4f",
                linkColor: "000000"
            }
            for (var i = 0; i < ops.length; i++) {
                var opName = ops[i]
                var op = el.getAttribute("data-" + opName)
                if (op != null && op != "") {
                    params[opName] = op
                }
            }

            var width = 0
            if (params.size == "custom") width = parseInt(params.width) - 12
            if (params.size == "large") width = 280
            if (params.size == "medium") width = 216
            if (params.size == "small") width = 162
            width = width + 12

            var height =
                12 // padding
                + 55 // header
                + 11 // footer
                + 18 // ??
            if (params["showtweets"] == "1")
                height += 205 // tweets
            if (params["showfollowers"] == "1")
                height +=
                    20 // followers header
                    + parseInt(params["followersrows"]) * 70 // rows
            if (params["showfriends"] == "1")
                height +=
                    20 // followers header
                    + parseInt(params["friendsrows"]) * 70 // rows

            var url = "//popuri.us/ext/twitterwidget/" + username + "?" + serialize(params)

            el.style.width = width + "px"
            el.style.height = height + "px"
            el.innerHTML = "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"" + url + "\" frameborder=\"0\"" +
                "scrolling=\"no\" allowtransparency=\"1\"></iframe>"
        });
    })

    // see: http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object
    function serialize(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    /*!
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */

    // @win window reference
    // @fn function reference
    function contentLoaded(win, fn) {

        var done = false, top = true,

            doc = win.document, root = doc.documentElement,

            add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
            rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
            pre = doc.addEventListener ? '' : 'on',

            init = function(e) {
                if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
                (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
                if (!done && (done = true)) fn.call(win, e.type || e);
            },

            poll = function() {
                try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
                init('poll');
            };

        if (doc.readyState == 'complete') fn.call(win, 'lazy');
        else {
            if (doc.createEventObject && root.doScroll) {
                try { top = !win.frameElement; } catch(e) { }
                if (top) poll();
            }
            doc[add](pre + 'DOMContentLoaded', init, false);
            doc[add](pre + 'readystatechange', init, false);
            win[add](pre + 'load', init, false);
        }

    }
}());





