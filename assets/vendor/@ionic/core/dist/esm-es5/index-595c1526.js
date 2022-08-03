/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{u as now,p as pointerCoord}from"./helpers-4d272360.js";var startTapClick=function(e){var t=-MOUSE_WAIT*10;var n=0;var r;var a;var i;var o=e.getBoolean("animated",true)&&e.getBoolean("rippleEffect",true);var s=new WeakMap;var u=function(e){t=now(e);l(e)};var c=function(e){t=now(e);E(e)};var f=function(e){if(e.button===2){return}var n=now(e)-MOUSE_WAIT;if(t<n){l(e)}};var v=function(e){var n=now(e)-MOUSE_WAIT;if(t<n){E(e)}};var d=function(){clearTimeout(i);i=undefined;if(r){D(false);r=undefined}};var l=function(e){if(r){return}T(getActivatableTarget(e),e)};var E=function(e){T(undefined,e)};var T=function(e,t){if(e&&e===r){return}clearTimeout(i);i=undefined;var n=pointerCoord(t),a=n.x,o=n.y;if(r){if(s.has(r)){throw new Error("internal error")}if(!r.classList.contains(ACTIVATED)){A(r,a,o)}D(true)}if(e){var u=s.get(e);if(u){clearTimeout(u);s.delete(e)}var c=isInstant(e)?0:ADD_ACTIVATED_DEFERS;e.classList.remove(ACTIVATED);i=setTimeout((function(){A(e,a,o);i=undefined}),c)}r=e};var A=function(e,t,r){n=Date.now();e.classList.add(ACTIVATED);var i=o&&getRippleEffect(e);if(i&&i.addRipple){p();a=i.addRipple(t,r)}};var p=function(){if(a!==undefined){a.then((function(e){return e()}));a=undefined}};var D=function(e){p();var t=r;if(!t){return}var a=CLEAR_STATE_DEFERS-Date.now()+n;if(e&&a>0&&!isInstant(t)){var i=setTimeout((function(){t.classList.remove(ACTIVATED);s.delete(t)}),CLEAR_STATE_DEFERS);s.set(t,i)}else{t.classList.remove(ACTIVATED)}};var L=document;L.addEventListener("ionGestureCaptured",d);L.addEventListener("touchstart",u,true);L.addEventListener("touchcancel",c,true);L.addEventListener("touchend",c,true);L.addEventListener("pointercancel",d,true);L.addEventListener("mousedown",f,true);L.addEventListener("mouseup",v,true)};var getActivatableTarget=function(e){if(e.composedPath){var t=e.composedPath();for(var n=0;n<t.length-2;n++){var r=t[n];if(!(r instanceof ShadowRoot)&&r.classList.contains("ion-activatable")){return r}}}else{return e.target.closest(".ion-activatable")}};var isInstant=function(e){return e.classList.contains("ion-activatable-instant")};var getRippleEffect=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t){return t}}return e.querySelector("ion-ripple-effect")};var ACTIVATED="ion-activated";var ADD_ACTIVATED_DEFERS=200;var CLEAR_STATE_DEFERS=200;var MOUSE_WAIT=2500;export{startTapClick};