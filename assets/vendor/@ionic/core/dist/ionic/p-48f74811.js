/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const e="ionic";let t,n,l,s=!1,o=!1,i=!1,r=!1,c=!1;const f="undefined"!=typeof window?window:{},a=f.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},$=e=>{Object.assign(u,e)},d=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),m=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=y(e,n),i=p(t,s),r=b(n);u.ael(o,l,i,r),(t.o=t.o||[]).push((()=>u.rel(o,l,i,r)))}))},p=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){Oe(e)}},y=(e,t)=>4&t?a:8&t?f:16&t?a.body:e,b=e=>0!=(2&e),w="http://www.w3.org/1999/xlink",g=new WeakMap,v=(e,t,n)=>{let l=Ce.get(e);h&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Ce.set(e,l)},k=(e,t,n)=>{let l=j(t,n);const s=Ce.get(l);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,n=g.get(e=e.head||e);n||g.set(e,n=new Set),n.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=s:(t=a.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link"))),n&&n.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l},j=(e,t)=>"sc-"+(t&&32&e.t?e.$+"-"+t:e.$),S=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),O=e=>Re.push(e),x=e=>ve(e).h,M={},C=e=>"object"==(e=typeof e)||"function"===e,R=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,r=!1;const c=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!C(l))&&(l+=""),i&&r?c[c.length-1].m+=l:c.push(i?T(null,l):l),r=i)};if(f(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,N);const a=T(e,null);return a.p=t,c.length>0&&(a.g=c),a.v=s,a.k=o,a},T=(e,t)=>({t:0,j:e,m:t,S:null,g:null,p:null,v:null,k:null}),L={},N={forEach:(e,t)=>e.map(P).forEach(t),map:(e,t)=>e.map(P).map(t).map(_)},P=e=>({vattrs:e.p,vchildren:e.g,vkey:e.v,vname:e.k,vtag:e.j,vtext:e.m}),_=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),R(e.vtag,t,...e.vchildren||[])}const t=T(e.vtag,e.vtext);return t.p=e.vattrs,t.g=e.vchildren,t.v=e.vkey,t.k=e.vname,t},D=(e,t,n,l,s,o)=>{if(n!==l){let i=Se(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=I(n),o=I(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=C(l);if((i||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(w,t):e.removeAttribute(t)):(!i||4&o||s)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(w,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Se(f,r)?r.slice(2):r[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},E=/\s/,I=e=>e?e.split(E):[],U=(e,t,n,l)=>{const s=11===t.S.nodeType&&t.S.host?t.S.host:t.S,o=e&&e.p||M,i=t.p||M;for(l in o)l in i||D(s,l,o[l],void 0,n,t.t);for(l in i)D(s,l,o[l],i[l],n,t.t)},W=(e,o,c,f)=>{const u=o.g[c];let $,d,h,m=0;if(s||(i=!0,"slot"===u.j&&(t&&f.classList.add(t+"-s"),u.t|=u.g?2:1)),null!==u.m)$=u.S=a.createTextNode(u.m);else if(1&u.t)$=u.S=a.createTextNode("");else{if(r||(r="svg"===u.j),$=u.S=a.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.j),r&&"foreignObject"===u.j&&(r=!1),U(null,u,r),null!=t&&$["s-si"]!==t&&$.classList.add($["s-si"]=t),u.g)for(m=0;m<u.g.length;++m)d=W(e,u,m,$),d&&$.appendChild(d);"svg"===u.j?r=!1:"foreignObject"===$.tagName&&(r=!0)}return $["s-hn"]=l,3&u.t&&($["s-sr"]=!0,$["s-cr"]=n,$["s-sn"]=u.k||"",h=e&&e.g&&e.g[c],h&&h.j===u.j&&e.S&&F(e.S,!1)),$},F=(e,t)=>{u.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(V(s).insertBefore(s,q(s)),s["s-ol"].remove(),s["s-ol"]=void 0,i=!0),t&&F(s,t)}u.t&=-2},A=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=W(null,n,o,e),r&&(s[o].S=r,c.insertBefore(r,q(t))))},B=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.S,X(l),o=!0,s["s-ol"]?s["s-ol"].remove():F(s,!0),s.remove())},H=(e,t)=>e.j===t.j&&("slot"===e.j?e.k===t.k:e.v===t.v),q=e=>e&&e["s-ol"]||e,V=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.S=e.S,l=e.g,s=t.g,o=t.j,i=t.m;let c;null===i?(r="svg"===o||"foreignObject"!==o&&r,"slot"===o||U(e,t,r),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],$=t[a],d=l.length-1,h=l[0],m=l[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=l[++r];else if(null==m)m=l[--d];else if(H(u,h))z(u,h),u=t[++i],h=l[++r];else if(H($,m))z($,m),$=t[--a],m=l[--d];else if(H(u,m))"slot"!==u.j&&"slot"!==m.j||F(u.S.parentNode,!1),z(u,m),e.insertBefore(u.S,$.S.nextSibling),u=t[++i],m=l[--d];else if(H($,h))"slot"!==u.j&&"slot"!==m.j||F($.S.parentNode,!1),z($,h),e.insertBefore($.S,u.S),$=t[--a],h=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].v&&t[f].v===h.v){c=f;break}c>=0?(o=t[c],o.j!==h.j?s=W(t&&t[r],n,c,e):(z(o,h),t[c]=void 0,s=o.S),h=l[++r]):(s=W(t&&t[r],n,r,e),h=l[++r]),s&&V(u.S).insertBefore(s,q(u.S))}i>a?A(e,null==l[d+1]?null:l[d+1].S,n,l,r,d):r>d&&B(t,i,a)})(n,l,t,s):null!==s?(null!==e.m&&(n.textContent=""),A(n,null,t,s,0,s.length-1)):null!==l&&B(l,0,l.length-1),r&&"svg"===o&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.m!==i&&(n.data=i)},G=e=>{const t=e.childNodes;let n,l,s,o,i,r;for(l=0,s=t.length;l<s;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==n["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){n.hidden=!0;break}G(n)}},J=[],K=e=>{let t,n,l,s,i,r,c=0;const f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Q(n,s)?(i=J.find((e=>e.O===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.M=t:J.push({M:t,O:n}),n["s-sr"]&&J.map((e=>{Q(e.O,n["s-sn"])&&(i=J.find((e=>e.O===n)),i&&!e.M&&(e.M=i.M))}))):J.some((e=>e.O===n))||J.push({O:n}));1===t.nodeType&&K(t)}},Q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,X=e=>{e.p&&e.p.ref&&e.p.ref(null),e.g&&e.g.map(X)},Y=e=>ve(e).C,Z=(e,t,n)=>{const l=Y(e);return{emit:e=>ee(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},ee=(e,t,n)=>{const l=u.ce(t,n);return e.dispatchEvent(l),l},te=(e,t)=>{t&&!e.R&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.R=t)))},ne=(e,t)=>{if(e.t|=16,!(4&e.t))return te(e,e.T),Ie((()=>le(e,t)));e.t|=512},le=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>fe(n,e,t))),e.u=null),l=fe(n,"componentWillLoad")),l=ae(l,(()=>fe(n,"componentWillRender"))),ae(l,(()=>se(e,n,t)))},se=async(e,t,n)=>{const l=e.C,s=l["s-rc"];n&&(e=>{const t=e.L,n=e.C,l=t.t,s=k(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.h);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(e);oe(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>ie(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},oe=(e,r)=>{try{r=r.render&&r.render(),e.t&=-17,e.t|=2,((e,r)=>{const c=e.C,f=e.L,$=e.N||T(null,null),d=(e=>e&&e.j===L)(r)?r:R(null,null,r);if(l=c.tagName,f.P&&(d.p=d.p||{},f.P.map((([e,t])=>d.p[t]=c[e]))),d.j=null,d.t|=4,e.N=d,d.S=$.S=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],s=0!=(1&f.t),o=!1,z($,d),u.t|=1,i){let e,t,n,l,s,o;K(d.S);let i=0;for(;i<J.length;i++)e=J[i],t=e.O,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<J.length;i++)if(e=J[i],t=e.O,e.M){for(l=e.M.parentNode,s=e.M.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}o&&G(d.S),u.t&=-2,J.length=0})(e,r)}catch(t){Oe(t,e.C)}return null},ie=e=>{const t=e.C,n=e.i,l=e.T;fe(n,"componentDidRender"),64&e.t?fe(n,"componentDidUpdate"):(e.t|=64,ue(t),fe(n,"componentDidLoad"),e._(t),l||ce()),e.D(t),e.R&&(e.R(),e.R=void 0),512&e.t&&De((()=>ne(e,!1))),e.t&=-517},re=e=>{{const t=ve(e),n=t.C.isConnected;return n&&2==(18&t.t)&&ne(t,!1),n}},ce=()=>{ue(a.documentElement),De((()=>ee(f,"appload",{detail:{namespace:"ionic"}})))},fe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Oe(e)}},ae=(e,t)=>e&&e.then?e.then(t):t(),ue=e=>e.classList.add("hydrated"),$e=(e,t,n,l,s,o,i)=>{let r,c,f,u;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(f={t:0,I:c[0],U:c[1],W:c[2],F:c[3],j:o.tagName.toLowerCase(),S:o,p:null,g:null,v:null,k:null,m:null},t.push(f),o.removeAttribute("c-id"),e.g||(e.g=[]),e.g[f.F]=f,e=f,l&&"0"===f.W&&(l[f.F]=f.S))),u=o.childNodes.length-1;u>=0;u--)$e(e,t,n,l,s,o.childNodes[u],i);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)$e(e,t,n,l,s,o.shadowRoot.childNodes[u],i)}else if(8===o.nodeType)c=o.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],f={t:0,I:c[1],U:c[2],W:c[3],F:c[4],S:o,p:null,g:null,v:null,k:null,j:null,m:null},"t"===r?(f.S=o.nextSibling,f.S&&3===f.S.nodeType&&(f.m=f.S.textContent,t.push(f),o.remove(),e.g||(e.g=[]),e.g[f.F]=f,l&&"0"===f.W&&(l[f.F]=f.S))):f.I===i&&("s"===r?(f.j="slot",o["s-sn"]=c[5]?f.k=c[5]:"",o["s-sr"]=!0,l&&(f.S=a.createElement(f.j),f.k&&f.S.setAttribute("name",f.k),o.parentNode.insertBefore(f.S,o),o.remove(),"0"===f.W&&(l[f.F]=f.S)),n.push(f),e.g||(e.g=[]),e.g[f.F]=f):"r"===r&&(l?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.j){const t=T(null,o.textContent);t.S=o,t.F="0",e.g=[t]}},de=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)de(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)de(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},he=(e,t,n)=>{if(t.A){e.watchers&&(t.B=e.watchers);const l=Object.entries(t.A),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ve(this).H.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=ve(e),o=s.C,i=s.H.get(t),r=s.t,c=s.i;if(n=((e,t)=>null==e||C(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.A[t][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.H.set(t,n),c)){if(l.B&&128&r){const e=l.B[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){Oe(e,o)}}))}2==(18&r)&&ne(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ve(this);return n.q.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){u.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.P.push([e,s]),s}))}}return e},me=e=>{fe(e,"connectedCallback")},pe=e=>{if(0==(1&u.t)){const t=ve(e),n=t.L,l=()=>{};if(1&t.t)m(e,t,n.V),me(t.i);else{let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if(1&n.t){const t=k(e.shadowRoot,n,e.getAttribute("s-mode"));e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const s=e.shadowRoot,o=[],i=s?[]:null,r=l.N=T(t,null);u.G||de(a.body,u.G=new Map),e["s-id"]=n,e.removeAttribute("s-id"),$e(r,o,[],i,e,e,n),o.map((e=>{const n=e.I+"."+e.U,l=u.G.get(n),o=e.S;l&&""===l["s-en"]&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=t,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),u.G.delete(n)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,n.$,l,t)}l||12&n.t&&ye(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){te(t,t.T=n);break}}n.A&&Object.entries(n.A).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),De((()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Me(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.B=s.watchers,he(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){Oe(e)}t.t&=-9,t.t|=128,e(),me(t.i)}if(s.style){let l=s.style;"string"!=typeof l&&(l=l[t.h=(e=>Re.map((t=>t(e))).find((e=>!!e)))(e)]);const o=j(n,t.h);if(!Ce.has(o)){const e=()=>{};v(o,l,!!(1&n.t)),e()}}}const o=t.T,i=()=>ne(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(e,t,n)))}l()}},ye=e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},be=(e,t={})=>{const n=[],l=t.exclude||[],s=f.customElements,o=a.head,i=o.querySelector("meta[charset]"),r=a.createElement("style"),c=[],$=a.querySelectorAll("[sty-id]");let d,h=!0,m=0;for(Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",a.baseURI).href,u.t|=2;m<$.length;m++)v($[m].getAttribute("sty-id"),S($[m].innerHTML),!0);e.map((e=>{e[1].map((t=>{const o={t:t[0],$:t[1],A:t[2],V:t[3]};o.A=t[2],o.V=t[3],o.P=[],o.B={};const i=o.$,r=class extends HTMLElement{constructor(e){super(e),je(e=this,o),1&o.t&&e.attachShadow({mode:"open",delegatesFocus:!!(16&o.t)})}connectedCallback(){d&&(clearTimeout(d),d=null),h?c.push(this):u.jmp((()=>pe(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=ve(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),fe(t,"disconnectedCallback")}})()))}componentOnReady(){return ve(this).J}};o.K=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,he(r,o,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),h=!1,c.length?c.map((e=>e.connectedCallback())):u.jmp((()=>d=setTimeout(ce,30)))},we=e=>{const t=new URL(e,u.l);return t.origin!==f.location.origin?t.href:t.pathname},ge=new WeakMap,ve=e=>ge.get(e),ke=(e,t)=>ge.set(t.i=e,t),je=(e,t)=>{const n={t:0,C:e,L:t,H:new Map};return n.q=new Promise((e=>n.D=e)),n.J=new Promise((e=>n._=e)),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.V),ge.set(e,n)},Se=(e,t)=>t in e,Oe=(e,t)=>(0,console.error)(e,t),xe=new Map,Me=e=>{const t=e.$.replace(/-/g,"_"),n=e.K,l=xe.get(n);return l?l[t]:__sc_import_ionic(`./${n}.entry.js`).then((e=>(xe.set(n,e),e[t])),Oe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Ce=new Map,Re=[],Te=[],Le=[],Ne=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&u.t?De(_e):u.raf(_e))},Pe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Oe(e)}e.length=0},_e=()=>{Pe(Te),Pe(Le),(c=Te.length>0)&&u.raf(_e)},De=e=>d().then(e),Ee=Ne(Te,!1),Ie=Ne(Le,!0),Ue={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1};export{Ue as B,L as H,e as N,O as a,be as b,Ie as c,a as d,Z as e,Ee as f,x as g,R as h,Y as i,re as j,we as k,d as p,ke as r,$ as s,f as w}