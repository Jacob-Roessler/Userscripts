// ==UserScript==
// @name         Sakugabooru - Show Comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sakugabooru.com/post/show/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sakugabooru.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /*
    let num_comments = $(".response-list").children().length;
    let button = $(`<br/><button>Show (${num_comments}) Comments</button>`).on("click", () => {
        $("#comments").toggle()
    });
    button.insertBefore($("#comments"));
    */
    // Your code here...

    var responseList = document.querySelector(".response-list");
    var children = responseList.children;
    var num_comments = children.length;

    var button = document.createElement("button");
    button.textContent = "Show (" + num_comments + ") Comments";

    var comments = document.querySelector("#comments");
    comments.style.display ="none"

    button.addEventListener("click", function() {
        comments.style.display = (comments.style.display === "none") ? "block" : "none";
    });


    var commentsElement = document.querySelector("#comments");
    commentsElement.parentNode.insertBefore(button, commentsElement);
})();