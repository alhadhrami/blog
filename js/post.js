$(function(){"use strict";function t(t){return t>1e3?(t/1e3).toFixed(1)+"k":t}if("none"!==$(".buttons").css("display")){$(".button").click(function(t){t.preventDefault();var n=$(this);window.open(n.attr("href"),n.attr("title"),"width=640,height=300")});var n=encodeURIComponent(document.location.href.split("?")[0].split("#")[0]);$.getJSON("http://free.sharedcount.com/?apikey=d730c518430eabcabc46ab79528c744067afa17e&url="+n,function(n){0!==n.GooglePlusOne&&$(".count-googleplus").html(t(n.GooglePlusOne)).fadeIn()}),$.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?&url="+n,function(n){var e=n.count;e>0&&$(".count-twitter").html(t(e)).fadeIn()}),$.getJSON("https://api.facebook.com/method/links.getStats?format=json&urls="+n,function(n){var e=n[0].total_count;e>0&&$(".count-facebook").html(t(e)).fadeIn()}),$.getJSON("https://www.linkedin.com/countserv/count/share?format=jsonp&callback=?&url="+n,function(n){var e=n.count;e>0&&$(".count-linkedin").html(t(e)).fadeIn()}),$.getJSON("http://www.reddit.com/api/info.json?jsonp=?&url="+n,function(n){var e=n.data.children.length;e>0&&$(".count-reddit").html(t(e)).fadeIn()}),$.getJSON("https://jsonp.nodejitsu.com/?url="+encodeURIComponent("http://www.stumbleupon.com/services/1.01/badge.getinfo?url="+n),function(n){var e=n.result.views;e>0&&$(".count-stumbleupon").html(t(e)).fadeIn()})}}),$(function(){"use strict";$("<script>").attr("src","//a.disquscdn.com/embed.js").attr("defer","defer").attr("async","async").appendTo("head")}),$(function(){"use strict";$("h2").each(function(t,n){var e=$(n),o=e.attr("id");o&&e.attr("name",o).append($("<a/>").addClass("link").attr("href","#"+o).append('<i class="icon icon-link notranslate"></i>'))})});