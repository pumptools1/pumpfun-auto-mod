// ==UserScript==
// @name         Pumpfun Anti-Spam Filter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide spammy posts on pump.fun
// @author       AutoMod
// @match        https://pump.fun/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const spamWords = ["pump this", "moon soon", "100x", "airdrop"];
    const observer = new MutationObserver(() => {
        document.querySelectorAll(".message").forEach(el => {
            if (spamWords.some(word => el.innerText.toLowerCase().includes(word))) {
                el.style.display = "none";
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
