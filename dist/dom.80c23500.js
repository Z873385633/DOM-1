parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fRxd":[function(require,module,exports) {
window.dom={create:function(e){var n=document.createElement("template");return n.innerHTML=e.trim(),n.content.firstChild},after:function(e,n){e.parentNode.insertBefore(n,e.nextSibling)},before:function(e,n){e.parentNode.insertBefore(n,e)},append:function(e,n){e.appendChild(n)},wrap:function(e,n){dom.before(e,n),dom.append(n,e)},remove:function(e){return e.parentNode.removeChild(e),e},empty:function(e){for(var n=[],t=e.firstChild;t;)n.push(dom.remove(e.firstChild)),t=e.firstChild;return n},attr:function(e,n,t){if(3===arguments.length)e.setAttribute(n,t);else if(2===arguments.length)return e.getAttribute(n)},text:function(e,n){if(2===arguments.length)"innerText"in e?e.innerText=n:e.textContent=n;else if(1===arguments.length)return"innerText"in e?e.innerText:e.textContent},html:function(e,n){if(2===arguments.length)e.innerHTML=n;else if(1===arguments.length)return e.innerHTML},style:function(e,n,t){if(3===arguments.length)e.style[n]=t;else if(2===arguments.length){if("string"==typeof n)return e.style[n];if(n instanceof Object){var r=n;for(var i in r)e.style[i]=r[i]}}},on:function(e,n,t){e.addEventListener(n,t)},off:function(e,n,t){e.removeEventListener(n,t)},find:function(e,n){return(n||document).querySelectorAll(e)},parent:function(e){return e.parentNode},children:function(e){return e.children},siblings:function(e){return Array.from(e.parentNode.children).filter(function(n){return n!=e})},next:function(e){for(var n=e.nextSibling;n&&3===n.nodeType;)n=n.nextSibling},previous:function(e){for(var n=e.previousSibling;n&&3===n.nodeType;)n=n.previousSibling;return n},each:function(e,n){for(var t=0;t<e.length;t++)n.call(null,e[t])}};
},{}]},{},["fRxd"], null)
//# sourceMappingURL=dom.80c23500.js.map