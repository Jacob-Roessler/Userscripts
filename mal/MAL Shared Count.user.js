// ==UserScript==
// @name         MAL Shared Count
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @match        https://myanimelist.net/shared.php?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myanimelist.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".shared-table").each( function(index) {
        let num_entries = $(this).find("tr").length;
        if(index == 0){
            num_entries -= 3;
        }else{
            num_entries -= 2;
        }
        $(this).prepend($(`<h3>Entries: ${num_entries}</h3>`));
    })

    // Your code here...
})();