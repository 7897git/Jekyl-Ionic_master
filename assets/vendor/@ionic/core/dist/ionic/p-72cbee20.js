/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as o}from"./p-18d5f1a9.js";import{a as t}from"./p-89cb27c4.js";const s="ion-content",n=".ion-content-scroll-host",a=o=>o&&"ION-CONTENT"===o.tagName,e=async t=>a(t)?(await new Promise((s=>o(t,s))),t.getScrollElement()):t,r=o=>o.querySelector(".ion-content-scroll-host")||o.querySelector("ion-content, .ion-content-scroll-host"),c=o=>o.closest("ion-content, .ion-content-scroll-host"),i=(o,t)=>a(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),l=(o,t,s,n)=>a(o)?o.scrollByPoint(t,s,n):Promise.resolve(o.scrollBy({top:s,left:t,behavior:n>0?"smooth":"auto"})),f=o=>t(o,"ion-content"),h=o=>{if(a(o)){const t=o.scrollY;return o.scrollY=!1,t}return o.style.setProperty("overflow","hidden"),!0},m=(o,t)=>{a(o)?o.scrollY=t:o.style.removeProperty("overflow")};export{s as I,r as a,n as b,l as c,h as d,c as f,e as g,a as i,f as p,m as r,i as s}