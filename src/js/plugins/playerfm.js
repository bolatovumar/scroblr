"use strict";

var $        = require("jquery");
var Plugin   = require("../modules/Plugin");
var Utils    = require("../modules/Utilities");
var Playerfm = Object.create(Plugin);

Playerfm.init("playerfm", new RegExp("player\\.fm", "i"));

Playerfm.scrape = function () {
    var elapsedStr       = $('.permaplayer .current .play-monitor .time-elapsed').text();
    var timeRemainingStr = $('.permaplayer .current .play-monitor .time-remaining').text();

    return {
        artist:   $('.permaplayer .track-wrapper .current-series-link').text(),
        title:    $('.permaplayer .track-wrapper .current-episode-link').text(),
        elapsed:  Utils.calculateDuration(elapsedStr),
        duration: Utils.calculateDuration(elapsedStr, timeRemainingStr),
        stopped:  $('.container .playpause .jp-play').css("display") !== "none"
    };
};

module.exports = Playerfm;
