// ==UserScript==
// @name         Sakugabooru - Add browser buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sakugabooru.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sakugabooru.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var artistTags = document.querySelectorAll("li.tag-type-artist");
    artistTags.forEach(function(element) {
        var text = element.children[1].textContent;
        var link = document.createElement("a");
        link.href = "https://sakugabooru-browser.vercel.app/artists/" + text;
        link.textContent = "b ";
        element.insertBefore(link, element.firstChild);
    });

    var copyrightTags = document.querySelectorAll("li.tag-type-copyright");
    copyrightTags.forEach(function(element) {
        var text = element.children[1].textContent;
        var link = document.createElement("a");
        link.href = "https://sakugabooru-browser.vercel.app/shows/" + text;
        link.textContent = "b ";
        element.insertBefore(link, element.firstChild);
    });

    // Your code here...
})();