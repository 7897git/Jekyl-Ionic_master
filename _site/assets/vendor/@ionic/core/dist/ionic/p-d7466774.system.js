/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-9f28e3f7.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.u;n=e.p}],execute:function(){var r=e("startTapClick",(function(e){var r=-f*10;var v=0;var d;var l;var p;var m=e.getBoolean("animated",true)&&e.getBoolean("rippleEffect",true);var L=new WeakMap;var h=function(e){r=t(e);y(e)};var w=function(e){r=t(e);R(e)};var E=function(e){if(e.button===2){return}var n=t(e)-f;if(r<n){y(e)}};var g=function(e){var n=t(e)-f;if(r<n){R(e)}};var T=function(){clearTimeout(p);p=undefined;if(d){q(false);d=undefined}};var y=function(e){if(d){return}b(a(e),e)};var R=function(e){b(undefined,e)};var b=function(e,t){if(e&&e===d){return}clearTimeout(p);p=undefined;var r=n(t),a=r.x,o=r.y;if(d){if(L.has(d)){throw new Error("internal error")}if(!d.classList.contains(u)){S(d,a,o)}q(true)}if(e){var c=L.get(e);if(c){clearTimeout(c);L.delete(e)}var f=i(e)?0:s;e.classList.remove(u);p=setTimeout((function(){S(e,a,o);p=undefined}),f)}d=e};var S=function(e,t,n){v=Date.now();e.classList.add(u);var r=m&&o(e);if(r&&r.addRipple){k();l=r.addRipple(t,n)}};var k=function(){if(l!==undefined){l.then((function(e){return e()}));l=undefined}};var q=function(e){k();var t=d;if(!t){return}var n=c-Date.now()+v;if(e&&n>0&&!i(t)){var r=setTimeout((function(){t.classList.remove(u);L.delete(t)}),c);L.set(t,r)}else{t.classList.remove(u)}};var x=document;x.addEventListener("ionGestureCaptured",T);x.addEventListener("touchstart",h,true);x.addEventListener("touchcancel",w,true);x.addEventListener("touchend",w,true);x.addEventListener("pointercancel",T,true);x.addEventListener("mousedown",E,true);x.addEventListener("mouseup",g,true)}));var a=function(e){if(e.composedPath){var t=e.composedPath();for(var n=0;n<t.length-2;n++){var r=t[n];if(!(r instanceof ShadowRoot)&&r.classList.contains("ion-activatable")){return r}}}else{return e.target.closest(".ion-activatable")}};var i=function(e){return e.classList.contains("ion-activatable-instant")};var o=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t){return t}}return e.querySelector("ion-ripple-effect")};var u="ion-activated";var s=200;var c=200;var f=2500}}}));