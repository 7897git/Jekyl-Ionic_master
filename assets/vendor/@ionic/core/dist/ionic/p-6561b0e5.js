/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=()=>{document.addEventListener("backbutton",(()=>{}))},n=()=>{const t=document;let n=!1;t.addEventListener("backbutton",(()=>{if(n)return;let o=0,e=[];const c=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){e.push({priority:t,handler:n,id:o++})}}});t.dispatchEvent(c);const i=()=>{if(e.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};e.forEach((n=>{n.priority>=t.priority&&(t=n)})),n=!0,e=e.filter((n=>n.id!==t.id)),(async t=>{try{if(null==t?void 0:t.handler){const n=t.handler(i);null!=n&&await n}}catch(t){console.error(t)}})(t).then((()=>n=!1))}};i()}))},o=100,e=99;export{e as MENU_BACK_BUTTON_PRIORITY,o as OVERLAY_BACK_BUTTON_PRIORITY,t as blockHardwareBackButton,n as startHardwareBackButton}