// ==UserScript==
// @name         MAL Stack Counts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://myanimelist.net/stacks/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myanimelist.net
// @grant        GM.log
// ==/UserScript==

(function() {
    'use strict';
        let watching = document.querySelectorAll("a.watching").length;
        let completed = document.querySelectorAll("a.completed").length;
        let hold = document.querySelectorAll("a.on-hold").length;
        let dropped = document.querySelectorAll("a.dropped").length;
        let planning = document.querySelectorAll("a.plantowatch").length;

        let tagElement = document.querySelector(".tag");
        let strongElement = document.createElement("strong");
        strongElement.textContent = `Watching: ${watching} Completed: ${completed} Hold: ${hold} Dropped: ${dropped} Planning: ${planning}`;
        tagElement.appendChild(strongElement);


    // Your code here...
})();