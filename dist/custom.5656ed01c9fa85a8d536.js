!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=511)}({511:function(e,t){!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top-56},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")});var t=e(".dynamic-nav-link");t.each(function(){e(this).attr("href",e(this).attr("data-href"))}),t.click(function(){e(".navbar-collapse").collapse("hide");var t=e(".id-content");return t.length&&e("html, body").animate({scrollTop:t.offset().top-56},1e3,"easeInOutExpo"),!0});var n=function(){var t=e("#mainNav");t.length&&(t.offset().top>100?t.addClass("navbar-shrink"):t.removeClass("navbar-shrink"))};n(),e(window).scroll(n)}(jQuery)}});
//# sourceMappingURL=custom.5656ed01c9fa85a8d536.js.map