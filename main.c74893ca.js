parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return e(t)||r(t,o)||c(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(e=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(u){o=!0,a=u}finally{try{e||null==i.return||i.return()}finally{if(o)throw a}}return r}}function e(t){if(Array.isArray(t))return t}function o(t){return u(t)||i(t)||c(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"==typeof t)return s(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,n):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var f,l=document.querySelector(".button"),d=document.querySelector(".message-win"),m=document.querySelector(".message-lose"),h=document.querySelector(".message-start"),y=document.querySelectorAll(".field-row"),v=document.querySelector(".game-score"),b=4,p=0,w=!1,A=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],S=function t(n){switch(f=o(A),n.key){case"ArrowLeft":I(f);break;case"ArrowRight":C(f);break;case"ArrowDown":M(f);break;case"ArrowUp":O(f);break;default:return}for(var r=0;r<b;r++)for(var e=0;e<b;e++)f[r][e]!==A[r][e]&&(A=f,x(),T());w&&d.classList.remove("hidden"),q()||(m.classList.remove("hidden"),document.removeEventListener("keydown",t))};function E(){var t=!1;return f.forEach(function(n){n.some(function(t,r){return 0===t||t===n[r+1]})&&(t=!0)}),t}function g(){var t=!1;return f.forEach(function(n){n.forEach(function(r,e){r===n[e+1]&&(t=!0)})}),t}function L(){f.forEach(function(t){return t.reverse()})}function k(){f=f[0].map(function(t,n){return f.map(function(t){return t[n]})})}function j(){var t=[];return A.forEach(function(n,r){n.forEach(function(n,e){0===n&&t.push([r,e])})}),t[Math.floor(Math.random()*t.length)]}function q(){return!!E()||(k(),g())}l.addEventListener("click",function(){document.addEventListener("keydown",S),l.classList.contains("start")?(l.classList.replace("start","restart"),l.innerText="Restart",h.classList.add("hidden")):(w=!1,N()),x(),x(),T()});var x=function(){var n=t(j(),2),r=n[0],e=n[1];A[r][e]=Math.random()<.9?2:4},I=function(){E&&(f=f.map(function(t){var n=t.filter(function(t){return 0!==t});return n.forEach(function(t,r){t===n[r+1]&&(n[r]*=2,n.splice(r+1,1),p+=n[r],2048===n[r]&&(w=!0))}),n.concat(Array(b-n.length).fill(0))}))},C=function(){E&&(L(),I(),L())},M=function(){k(),C(),k()},O=function(){k(),I(),k()},T=function(){A.forEach(function(t,n){t.forEach(function(t,r){var e=y[n].children[r];0===t?(e.textContent="",e.className="field-cell"):(e.textContent=t,e.className="field-cell field-cell--".concat(t))})}),v.textContent=p},N=function(){p=0,A=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],m.classList.contains("hidden")||m.classList.add("hidden"),d.classList.contains("hidden")||d.classList.add("hidden")};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c74893ca.js.map