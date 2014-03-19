"use strict";

var $      = require("jquery");
var Plugin = require("../modules/Plugin");
var Utils  = require("../modules/Utilities");
var Indieshuffle = Object.create(Plugin);

Indieshuffle.init("indieshuffle");

Indieshuffle.test = function () {
    var domainTest = this.hostre.test(document.location.hostname);
    var playerTest = $("#now-playing").length > 0;

    return domainTest && playerTest;
};

Indieshuffle.scrape = function () {
    var info = {
        artist:   $("#now-playing-title strong").text(),
        duration: Utils.calculateDuration($("#jplayer_total_time").text()),
        elapsed:  Utils.calculateDuration($("#jplayer_play_time").text()),
        title:    $("#now-playing-title a").contents().filter(filterTextNode).text(),
        stopped:  !$("#play-pause").hasClass("playing")
    };

    return info;
};

function filterTextNode() {
    /* jshint validthis:true */
    return this.nodeType === 3;
}

module.exports = Indieshuffle;
