// ==UserScript==
// @name        MAL Profile Search List
// @namespace   https://myanimelist.net/
// @description Modal tier list using MAL api
// @author      elpo
// @include     https://myanimelist.net/profile/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @grant       GM.xmlHttpRequest
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @icon        http://i.imgur.com/b7Fw8oH.png
// @grant GM.log
// ==/UserScript==
GM_addStyle(" #search-anime-list, #search-anime-list-text { margin: 5px 0 5px 0; border-bottom: 0; border-left: #2e51a2 1px solid; border-right: 0; border-top: 0; fheight: 18px; padding-left: 2px; text-indent: 4px; width: 286px; }");
GM_addStyle(" #search-anime-list:focus, #search-anime-list-text:focus {    outline: 0; }");

(function() {
    'use strict';
    const url = location.pathname; //Create a new global variable to detect the url
    let username = url.split("/").slice(-1)[0];
    let search_bar = $(`<form id="search-anime-list" method="get" class="searchBar"> <input id="search-anime-list-text" type="text" name="keyword" placeholder="Search ${username}'s List" size="30" autocomplete="off" class="inputtext fl-l"></form>`);
    $("#statistics h2:eq(0)").after(search_bar);
    $('#search-anime-list').submit(function(e) {
        e.preventDefault();
        let search_string = $("#search-anime-list-text").val();
        window.location = `https://myanimelist.net/animelist/${username}?s=${search_string}`;
    });
    })();