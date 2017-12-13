/*

    BSD 3-Clause License

    Copyright (c) 2017, Robbin
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.

    * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

    * Neither the name of the copyright holder nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

(function () {

    "use strict";

    var section = document.querySelectorAll(".section.highlight");
    var links = document.querySelectorAll(".highlight");
    var header = document.querySelector("#header");
    var topPosOffset = header.clientHeight;

    var lastKnownScrollPos = 0;
    var scrollTicking = false;

    // Highlight function
    function highlight(scrollPos) {

        for (var i = 0; i < section.length; i++) {

            var topPosition = section[i].getBoundingClientRect().y;
            var height = section[i].offsetHeight;
            var marginTop = window.getComputedStyle(section[i], null).getPropertyValue("margin-top").replace(/px/g, '');

            var start = topPosition - marginTop / 2 - topPosOffset + window.scrollY;
            var end = topPosition + height - marginTop / 2 - topPosOffset + window.scrollY;

            // Hightlight if top hits the start of the element
            if (scrollPos > start) {
                links[i].classList.add('active');
                links[i].classList.remove('inactive');
            } else {
                links[i].classList.remove('active');
                links[i].classList.add('inactive');
            }

            // Hightlight if top hits the end of the element
            if (scrollPos > end) {
                links[i].classList.remove('active');
                links[i].classList.add('inactive');
            }
        }
    }

    // Function for scroll events
    function highlightLastKnownScrollPos(event) {
        lastKnownScrollPos = window.scrollY;
        if (!scrollTicking) {
            var animationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function (f) {
                return setTimeout(f, 1000 / 60);
            }; // simulate calling code 60 

            animationFrame(function () {
                highlight(lastKnownScrollPos);
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    window.addEventListener("scroll", highlightLastKnownScrollPos, false);
    highlight(lastKnownScrollPos);
})();
