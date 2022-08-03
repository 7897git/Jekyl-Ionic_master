import{__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as raf}from"./helpers-4d272360.js";var animationPrefix;var processKeyframes=function(e){e.forEach((function(e){for(var n in e){if(e.hasOwnProperty(n)){var r=e[n];if(n==="easing"){var t="animation-timing-function";e[t]=r;delete e[n]}else{var t=convertCamelCaseToHypen(n);if(t!==n){e[t]=r;delete e[n]}}}}}));return e};var convertCamelCaseToHypen=function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()};var getAnimationPrefix=function(e){if(animationPrefix===undefined){var n=e.style.animationName!==undefined;var r=e.style.webkitAnimationName!==undefined;animationPrefix=!n&&r?"-webkit-":""}return animationPrefix};var setStyleProperty=function(e,n,r){var t=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.setProperty(t+n,r)};var removeStyleProperty=function(e,n){var r=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.removeProperty(r+n)};var animationEnd=function(e,n){var r;var t={passive:true};var a=function(){if(r){r()}};var i=function(r){if(e===r.target){a();n(r)}};if(e){e.addEventListener("webkitAnimationEnd",i,t);e.addEventListener("animationend",i,t);r=function(){e.removeEventListener("webkitAnimationEnd",i,t);e.removeEventListener("animationend",i,t)}}return a};var generateKeyframeRules=function(e){if(e===void 0){e=[]}return e.map((function(e){var n=e.offset;var r=[];for(var t in e){if(e.hasOwnProperty(t)&&t!=="offset"){r.push("".concat(t,": ").concat(e[t],";"))}}return"".concat(n*100,"% { ").concat(r.join(" ")," }")})).join(" ")};var keyframeIds=[];var generateKeyframeName=function(e){var n=keyframeIds.indexOf(e);if(n<0){n=keyframeIds.push(e)-1}return"ion-animation-".concat(n)};var getStyleContainer=function(e){var n=e.getRootNode();return n.head||n};var createKeyframeStylesheet=function(e,n,r){var t=getStyleContainer(r);var a=getAnimationPrefix(r);var i=t.querySelector("#"+e);if(i){return i}var o=(r.ownerDocument||document).createElement("style");o.id=e;o.textContent="@".concat(a,"keyframes ").concat(e," { ").concat(n," } @").concat(a,"keyframes ").concat(e,"-alt { ").concat(n," }");t.appendChild(o);return o};var addClassToArray=function(e,n){if(e===void 0){e=[]}if(n!==undefined){var r=Array.isArray(n)?n:[n];return __spreadArray(__spreadArray([],e,true),r,true)}return e};var createAnimation=function(e){var n;var r;var t;var a;var i;var o;var f=[];var u=[];var c=[];var s=false;var v;var l={};var d=[];var y=[];var m={};var p=0;var h=false;var g=false;var E;var P;var S;var A;var C=true;var T=false;var b=true;var k;var w;var x=false;var K=e;var _=[];var I=[];var R=[];var D=[];var L=[];var N=[];var F=[];var O=[];var W=[];var j=[];var H=typeof AnimationEffect==="function"||typeof window.AnimationEffect==="function";var M=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&H;var $=100;var q=function(){return j};var z=function(e){D.forEach((function(n){n.destroy(e)}));Z(e);R.length=0;D.length=0;f.length=0;Q();s=false;b=true;return w};var Z=function(e){U();if(e){V()}};var B=function(){h=false;g=false;b=true;P=undefined;S=undefined;A=undefined;p=0;T=false;C=true;x=false};var G=function(){return p!==0&&!x};var J=function(e,n){var r=(n===null||n===void 0?void 0:n.oneTimeCallback)?I:_;r.push({c:e,o:n});return w};var Q=function(){_.length=0;I.length=0;return w};var U=function(){if(M){j.forEach((function(e){e.cancel()}));j.length=0}else{var e=R.slice();raf((function(){e.forEach((function(e){removeStyleProperty(e,"animation-name");removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-timing-function");removeStyleProperty(e,"animation-iteration-count");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state");removeStyleProperty(e,"animation-fill-mode");removeStyleProperty(e,"animation-direction")}))}))}};var V=function(){L.forEach((function(e){if(e===null||e===void 0?void 0:e.parentNode){e.parentNode.removeChild(e)}}));L.length=0};var X=function(e){N.push(e);return w};var Y=function(e){F.push(e);return w};var ee=function(e){O.push(e);return w};var ne=function(e){W.push(e);return w};var re=function(e){u=addClassToArray(u,e);return w};var te=function(e){c=addClassToArray(c,e);return w};var ae=function(e){if(e===void 0){e={}}l=e;return w};var ie=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];l[t]=""}return w};var oe=function(e){d=addClassToArray(d,e);return w};var fe=function(e){y=addClassToArray(y,e);return w};var ue=function(e){if(e===void 0){e={}}m=e;return w};var ce=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];m[t]=""}return w};var se=function(){if(i!==undefined){return i}if(v){return v.getFill()}return"both"};var ve=function(){if(P!==undefined){return P}if(o!==undefined){return o}if(v){return v.getDirection()}return"normal"};var le=function(){if(h){return"linear"}if(t!==undefined){return t}if(v){return v.getEasing()}return"linear"};var de=function(){if(g){return 0}if(S!==undefined){return S}if(r!==undefined){return r}if(v){return v.getDuration()}return 0};var ye=function(){if(a!==undefined){return a}if(v){return v.getIterations()}return 1};var me=function(){if(A!==undefined){return A}if(n!==undefined){return n}if(v){return v.getDelay()}return 0};var pe=function(){return f};var he=function(e){o=e;Oe(true);return w};var ge=function(e){i=e;Oe(true);return w};var Ee=function(e){n=e;Oe(true);return w};var Pe=function(e){t=e;Oe(true);return w};var Se=function(e){if(!M&&e===0){e=1}r=e;Oe(true);return w};var Ae=function(e){a=e;Oe(true);return w};var Ce=function(e){v=e;return w};var Te=function(e){if(e!=null){if(e.nodeType===1){R.push(e)}else if(e.length>=0){for(var n=0;n<e.length;n++){R.push(e[n])}}else{console.error("Invalid addElement value")}}return w};var be=function(e){if(e!=null){if(Array.isArray(e)){for(var n=0,r=e;n<r.length;n++){var t=r[n];t.parent(w);D.push(t)}}else{e.parent(w);D.push(e)}}return w};var ke=function(e){var n=f!==e;f=e;if(n){we(f)}return w};var we=function(e){if(M){q().forEach((function(n){if(n.effect.setKeyframes){n.effect.setKeyframes(e)}else{var r=new KeyframeEffect(n.effect.target,e,n.effect.getTiming());n.effect=r}}))}else{Ie()}};var xe=function(){N.forEach((function(e){return e()}));F.forEach((function(e){return e()}));var e=u;var n=c;var r=l;R.forEach((function(t){var a=t.classList;e.forEach((function(e){return a.add(e)}));n.forEach((function(e){return a.remove(e)}));for(var i in r){if(r.hasOwnProperty(i)){setStyleProperty(t,i,r[i])}}}))};var Ke=function(){ze();O.forEach((function(e){return e()}));W.forEach((function(e){return e()}));var e=C?1:0;var n=d;var r=y;var t=m;R.forEach((function(e){var a=e.classList;n.forEach((function(e){return a.add(e)}));r.forEach((function(e){return a.remove(e)}));for(var i in t){if(t.hasOwnProperty(i)){setStyleProperty(e,i,t[i])}}}));_.forEach((function(n){return n.c(e,w)}));I.forEach((function(n){return n.c(e,w)}));I.length=0;b=true;if(C){T=true}C=true};var _e=function(){if(p===0){return}p--;if(p===0){Ke();if(v){v.animationFinish()}}};var Ie=function(n){if(n===void 0){n=true}V();var r=processKeyframes(f);R.forEach((function(t){if(r.length>0){var a=generateKeyframeRules(r);k=e!==undefined?e:generateKeyframeName(a);var i=createKeyframeStylesheet(k,a,t);L.push(i);setStyleProperty(t,"animation-duration","".concat(de(),"ms"));setStyleProperty(t,"animation-timing-function",le());setStyleProperty(t,"animation-delay","".concat(me(),"ms"));setStyleProperty(t,"animation-fill-mode",se());setStyleProperty(t,"animation-direction",ve());var o=ye()===Infinity?"infinite":ye().toString();setStyleProperty(t,"animation-iteration-count",o);setStyleProperty(t,"animation-play-state","paused");if(n){setStyleProperty(t,"animation-name","".concat(i.id,"-alt"))}raf((function(){setStyleProperty(t,"animation-name",i.id||null)}))}}))};var Re=function(){R.forEach((function(e){var n=e.animate(f,{id:K,delay:me(),duration:de(),easing:le(),iterations:ye(),fill:se(),direction:ve()});n.pause();j.push(n)}));if(j.length>0){j[0].onfinish=function(){_e()}}};var De=function(e){if(e===void 0){e=true}xe();if(f.length>0){if(M){Re()}else{Ie(e)}}s=true};var Le=function(e){e=Math.min(Math.max(e,0),.9999);if(M){j.forEach((function(n){n.currentTime=n.effect.getComputedTiming().delay+de()*e;n.pause()}))}else{var n="-".concat(de()*e,"ms");R.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-delay",n);setStyleProperty(e,"animation-play-state","paused")}}))}};var Ne=function(e){j.forEach((function(e){e.effect.updateTiming({delay:me(),duration:de(),easing:le(),iterations:ye(),fill:se(),direction:ve()})}));if(e!==undefined){Le(e)}};var Fe=function(e,n){if(e===void 0){e=true}raf((function(){R.forEach((function(r){setStyleProperty(r,"animation-name",k||null);setStyleProperty(r,"animation-duration","".concat(de(),"ms"));setStyleProperty(r,"animation-timing-function",le());setStyleProperty(r,"animation-delay",n!==undefined?"-".concat(n*de(),"ms"):"".concat(me(),"ms"));setStyleProperty(r,"animation-fill-mode",se()||null);setStyleProperty(r,"animation-direction",ve()||null);var t=ye()===Infinity?"infinite":ye().toString();setStyleProperty(r,"animation-iteration-count",t);if(e){setStyleProperty(r,"animation-name","".concat(k,"-alt"))}raf((function(){setStyleProperty(r,"animation-name",k||null)}))}))}))};var Oe=function(e,n,r){if(e===void 0){e=false}if(n===void 0){n=true}if(e){D.forEach((function(t){t.update(e,n,r)}))}if(M){Ne(r)}else{Fe(n,r)}return w};var We=function(e,n){if(e===void 0){e=false}D.forEach((function(r){r.progressStart(e,n)}));Me();h=e;if(!s){De()}Oe(false,true,n);return w};var je=function(e){D.forEach((function(n){n.progressStep(e)}));Le(e);return w};var He=function(e,n,r){h=false;D.forEach((function(t){t.progressEnd(e,n,r)}));if(r!==undefined){S=r}T=false;C=true;if(e===0){P=ve()==="reverse"?"normal":"reverse";if(P==="reverse"){C=false}if(M){Oe();Le(1-n)}else{A=(1-n)*de()*-1;Oe(false,false)}}else if(e===1){if(M){Oe();Le(n)}else{A=n*de()*-1;Oe(false,false)}}if(e!==undefined){J((function(){S=undefined;P=undefined;A=undefined}),{oneTimeCallback:true});if(!v){Qe()}}return w};var Me=function(){if(s){if(M){j.forEach((function(e){e.pause()}))}else{R.forEach((function(e){setStyleProperty(e,"animation-play-state","paused")}))}x=true}};var $e=function(){D.forEach((function(e){e.pause()}));Me();return w};var qe=function(){E=undefined;_e()};var ze=function(){if(E){clearTimeout(E)}};var Ze=function(){ze();raf((function(){R.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-play-state","running")}}))}));if(f.length===0||R.length===0){_e()}else{var e=me()||0;var n=de()||0;var r=ye()||1;if(isFinite(r)){E=setTimeout(qe,e+n*r+$)}animationEnd(R[0],(function(){ze();raf((function(){Be();raf(_e)}))}))}};var Be=function(){R.forEach((function(e){removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state")}))};var Ge=function(){j.forEach((function(e){e.play()}));if(f.length===0||R.length===0){_e()}};var Je=function(){if(M){Le(0);Ne()}else{Fe()}};var Qe=function(e){return new Promise((function(n){if(e===null||e===void 0?void 0:e.sync){g=true;J((function(){return g=false}),{oneTimeCallback:true})}if(!s){De()}if(T){Je();T=false}if(b){p=D.length+1;b=false}J((function(){return n()}),{oneTimeCallback:true});D.forEach((function(e){e.play()}));if(M){Ge()}else{Ze()}x=false}))};var Ue=function(){D.forEach((function(e){e.stop()}));if(s){U();s=false}B()};var Ve=function(e,n){var r;var t=f[0];if(t!==undefined&&(t.offset===undefined||t.offset===0)){t[e]=n}else{f=__spreadArray([(r={offset:0},r[e]=n,r)],f,true)}return w};var Xe=function(e,n){var r;var t=f[f.length-1];if(t!==undefined&&(t.offset===undefined||t.offset===1)){t[e]=n}else{f=__spreadArray(__spreadArray([],f,true),[(r={offset:1},r[e]=n,r)],false)}return w};var Ye=function(e,n,r){return Ve(e,n).to(e,r)};return w={parentAnimation:v,elements:R,childAnimations:D,id:K,animationFinish:_e,from:Ve,to:Xe,fromTo:Ye,parent:Ce,play:Qe,pause:$e,stop:Ue,destroy:z,keyframes:ke,addAnimation:be,addElement:Te,update:Oe,fill:ge,direction:he,iterations:Ae,duration:Se,easing:Pe,delay:Ee,getWebAnimations:q,getKeyframes:pe,getFill:se,getDirection:ve,getDelay:me,getIterations:ye,getEasing:le,getDuration:de,afterAddRead:ee,afterAddWrite:ne,afterClearStyles:ce,afterStyles:ue,afterRemoveClass:fe,afterAddClass:oe,beforeAddRead:X,beforeAddWrite:Y,beforeClearStyles:ie,beforeStyles:ae,beforeRemoveClass:te,beforeAddClass:re,onFinish:J,isRunning:G,progressStart:We,progressStep:je,progressEnd:He}};export{createAnimation as c};