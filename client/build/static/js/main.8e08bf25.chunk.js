(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e,t,n){e.exports=n(377)},160:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){e.exports=n.p+"static/media/mark-trifto.82cfb846.svg"},168:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(78),o=(n(160),n(112)),i=n(12),c=n(63),s=n.n(c),m=(n(165),n(166),n(151)),u=n.n(m),p="REQUEST_LOCATION_SHOPS",d="RECEIVE_LOCATION_SHOPS",f=function(e){return{type:"MARKER_SELECTED",payload:e}};function h(e){return function(t){return t(function(e){return{type:p,location:e}}(e)),u()("/api/shops/".concat(e)).then((function(e){return e.json()})).then((function(n){return t(function(e,t){return{type:d,location:e,shops:t,recievedAt:Date.now()}}(e,n))})).catch((function(e){return console.log(e)}))}}var E={primary:"#DB6664",primaryDark:"#EB3D4B",dark:"#222",background:"rgba(0,0,0,0.03)",backgroundDark:"rgba(0,0,0,0.2)"},k=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.location})),l=t.lat,c=t.lng,m=t.zoom,u=t.maxBounds,p=t.pitch,d=t.name,h=Object(i.c)((function(e){return e.isSelected})),k=d,y=Object(a.useState)(null),v=Object(o.a)(y,2),g=v[0],b=v[1],M=Object(a.useState)(null),O=Object(o.a)(M,2),w=O[0],L=O[1],S=Object(a.useRef)(null),j=Object(i.c)((function(e){return e.shopsByLocation[k].items}));return s.a.accessToken="pk.eyJ1IjoiYWxiaW5vcGxhbnQiLCJhIjoiY2s1cmQyZmNmMDA4ZDNubG9raTMwYWc2NCJ9.aGLZ5QbPXy528k8UMWyjRw",Object(a.useEffect)((function(){g||function(e){var t=e.setMap,a=e.mapContainer,r=new s.a.Map({container:a.current,style:"mapbox://styles/albinoplant/ck5s0v7we22rv1ipi6j3yenpw",center:[c,l],zoom:m,maxBounds:u,pitch:p,attributionControl:!1});r.addControl(new s.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}));var o=[];j.forEach((function(e){var t=document.createElement("div"),a=document.createElement("div");t.setAttribute("href","#shop".concat(e.id)),t.id=e.id,t.classList="markers",a.appendChild(t);var r=new s.a.Marker(a).setLngLat(e.geo);a.style.backgroundImage="url(".concat(n(167),")"),a.style.backgroundSize="cover",a.style.width="120px",a.style.height="120px",a.style.transition="height 1s, width 1s";var l=document.createElement("h3");l.textContent=e.name,l.style.backgroundColor=E.primary,a.appendChild(l),o.push(r)})),r.on("load",(function(){t(r),o.forEach((function(e){return e.addTo(r)})),r.resize(),L(document.getElementsByClassName("markers"))}))}({setMap:b,mapContainer:S})}),[g,k,j,l,c,m,u,p,w,h,e]),Object(a.useEffect)((function(){w&&(function(t){for(var n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){t.target.id&&e(f(parseInt(t.target.id)))}))}(w),function(e,t){for(var n=0;n<j.length;n++){var a=j[n];a.id===t&&e.flyTo({center:a.geo,zoom:13})}}(g,h),function(e,t){for(var n=0;n<e.length;n++)parseInt(e[n].id)!==t&&e[n].parentElement.classList.remove("selected"),parseInt(e[n].id)===t&&e[n].parentElement.classList.add("selected")}(w,h))}),[h,w,g,j,e]),r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement("div",{className:"mapContainer",ref:function(e){return S.current=e},style:{position:"absolute",top:"0",width:"100%",bottom:"0",minHeight:"300px"}}))},y=function(e){var t=e.shop;return r.a.createElement("ul",{className:"prices"},t.priceperkilo.map((function(e,t){return 0===e?"closed":r.a.createElement("li",{key:t},e," PLN")})))},v=function(e){var t=e.shop;return r.a.createElement("ul",{className:"workinghours"},t.workinghours.map((function(e,t){return r.a.createElement("li",{key:t},e," ")})))},g=function(){return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("span",null,"mon"),r.a.createElement("input",{type:"text",name:"mon"})),r.a.createElement("label",null,r.a.createElement("span",null,"tue"),r.a.createElement("input",{type:"text",name:"tue"})),r.a.createElement("label",null,r.a.createElement("span",null,"wen"),r.a.createElement("input",{type:"text",name:"wen"})),r.a.createElement("label",null,r.a.createElement("span",null,"thu"),r.a.createElement("input",{type:"text",name:"thu"})),r.a.createElement("label",null,r.a.createElement("span",null,"fri"),r.a.createElement("input",{type:"text",name:"fri"})),r.a.createElement("label",null,r.a.createElement("span",null,"sat"),r.a.createElement("input",{type:"text",name:"sat"})),r.a.createElement("label",null,r.a.createElement("span",null,"sun"),r.a.createElement("input",{type:"text",name:"sun"})),r.a.createElement("input",{type:"submit",value:"Submit"}))},b=function(){return r.a.createElement("form",null,r.a.createElement("label",null,"godzinki",r.a.createElement("input",{type:"text",name:"name"})),r.a.createElement("input",{type:"submit",value:"Wy\u015blij"}))},M=function(e){var t=e.shop;return r.a.createElement("div",{className:"shops-extended"},r.a.createElement("div",null,t.priceperkilo?r.a.createElement(y,{shop:t}):r.a.createElement(g,null),t.workinghours?r.a.createElement(v,{shop:t}):r.a.createElement(b,null)))},O=function(e){var t=e.shops,n=Object(i.c)((function(e){return e.isSelected})),l=Object(i.b)();return Object(a.useEffect)((function(){var e=document.getElementsByClassName("shop"),t=!0,a=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var i=l.value;i.id===n?i.classList.add("selected-list-item"):i.classList.remove("selected-list-item")}}catch(c){a=!0,r=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}}),[n]),r.a.createElement("ul",{className:"shop-list"},t.map((function(e){return r.a.createElement("li",{className:"shop",id:"shop"+e.id,key:e.id,onClick:function(){var t=n!==e.id&&e.id;l(f(t))}},r.a.createElement("h2",null,e.name,r.a.createElement("span",{style:{fontWeight:"300",fontSize:"70%"}}," ",e.address)),n===e.id&&r.a.createElement(M,{shop:e}))})))},w=(n(168),n(55)),L=function(){return r.a.createElement("svg",{width:"120",height:"65",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 10 200 125"},r.a.createElement("g",{strokeOpacity:"1",transform:"translate(0 -147)"},r.a.createElement("ellipse",{cx:"167.836",cy:"226.716",fill:E.dark,fillOpacity:"0",fillRule:"evenodd",stroke:E.dark,strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"8.808",opacity:"1",paintOrder:"stroke fill markers",rx:"15.426",ry:"15.426"}),r.a.createElement("path",{style:{lineHeight:"1.25"},fill:"none",fillOpacity:"1",stroke:E.dark,strokeDasharray:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"7.187",d:"M60.194 195.54H42.368v47.156H40.55V195.54H22.725v-1.816h37.469z",fontFamily:"Roboto",fontSize:"50.8",fontStretch:"normal",fontStyle:"normal",fontVariant:"normal",fontWeight:"200",letterSpacing:"0",paintOrder:"stroke fill markers",wordSpacing:"0"}),r.a.createElement("path",{style:{lineHeight:"1.25"},fill:"none",fillOpacity:"1",stroke:E.dark,strokeDasharray:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"7.187",d:"M80.599 207.512l-2.355-.202c-3.094 0-5.684 1.01-7.77 3.028-2.085 1.995-3.452 4.798-4.103 8.408v23.847h-1.816v-32.805h1.816v3.98c.987-2.534 2.467-4.54 4.44-6.02 1.973-1.48 4.451-2.22 7.433-2.22 1.054 0 1.906.123 2.557.37z",fontFamily:"Roboto",fontSize:"50.8",fontStretch:"normal",fontStyle:"normal",fontVariant:"normal",fontWeight:"200",letterSpacing:"0",paintOrder:"stroke fill markers",wordSpacing:"0"}),r.a.createElement("path",{style:{lineHeight:"1.25"},fill:"none",fillOpacity:"1",stroke:E.dark,strokeDasharray:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"7.166",d:"M93.676 242.091H91.84v-35.766h1.837z",fontFamily:"Roboto",fontSize:"50.8",fontStretch:"normal",fontStyle:"normal",fontVariant:"normal",fontWeight:"200",letterSpacing:"0",paintOrder:"stroke fill markers",wordSpacing:"0"}),r.a.createElement("g",{fillOpacity:"0",stroke:E.primary,transform:"matrix(2.0191 0 0 2.0191 -108.218 62.459)"},r.a.createElement("g",{strokeDasharray:"none",strokeMiterlimit:"4",strokeWidth:"6.5",transform:"scale(.67157) rotate(8.462 234.42 738.776)"},r.a.createElement("path",{fillOpacity:"0",fillRule:"evenodd",stroke:E.primary,strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeOpacity:"1",strokeWidth:"6.351",d:"M72.06 117.27l23.474 10.412",opacity:"1",paintOrder:"markers stroke fill"})),r.a.createElement("g",{transform:"scale(.67157) rotate(43.601 190.894 129.923)"},r.a.createElement("path",{fillOpacity:"0",fillRule:"evenodd",stroke:E.primary,strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeOpacity:"1",strokeWidth:"6.974",d:"M161.085 169.236a9.4 9.4 0 001.99 1.196c.568.232 3.218 1.102 5.974.094.724-.308.947-.449 1.378-.766.163-.109.503-.382.653-.505.151-.123.296-.253.433-.39.619-.579.701-.635 1.425-1.883.075-.18.156-.415.214-.602.058-.187.166-.713.186-.91.268-1.427.053-2.32-.242-3.12-2.442-4.678-7.826-7.133-5.204-10.634m5.42-5.507l-5.326 5.373",opacity:"1",paintOrder:"markers stroke fill"})),r.a.createElement("g",{transform:"scale(.67157) rotate(74.499 219.625 134.759)"},r.a.createElement("path",{fillOpacity:"0",fillRule:"evenodd",stroke:E.primary,strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeOpacity:"1",strokeWidth:"6.4",d:"M177.645 189.883c-2.392-.46-2.696-.796-3.342-1.09-.61-.284-1.48-.977-1.971-1.507-.544-.591-.942-1.152-1.579-2.428a7.882 7.882 0 01-.188-.616 8.585 8.585 0 01-.164-.93c-.236-1.459.069-3.868 1.262-5.158",opacity:"1",paintOrder:"markers stroke fill"})),r.a.createElement("g",{transform:"matrix(.40355 .5368 -.5368 .40355 140.056 -10.517)"},r.a.createElement("path",{fillOpacity:"0",fillRule:"evenodd",stroke:E.primary,strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeOpacity:"1",strokeWidth:"6.409",d:"M68.338 117.85l16.215 5.497",opacity:"1",paintOrder:"markers stroke fill"}))),r.a.createElement("path",{style:{lineHeight:"1.25"},fill:"none",fillOpacity:"1",stroke:E.dark,strokeDasharray:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"7.187",d:"M134.504 208.153v-.224h8.274v1.85h-8.274v32.656c.034 1.585-1.888 2.026-1.85.235V209.78h-6.727v-1.85h6.727v.224z",fontFamily:"Roboto",fontSize:"50.8",fontStretch:"normal",fontStyle:"normal",fontVariant:"normal",fontWeight:"200",letterSpacing:"0",paintOrder:"stroke fill markers",wordSpacing:"0"})))},S=function(e){var t=e.city,n=e.icon;return r.a.createElement("div",{className:"nav-top"},n?n():"",r.a.createElement(w.b,{to:"/"},r.a.createElement(L,null)),r.a.createElement("h1",{style:{fontWeight:"300",fontSize:"1rem",paddingTop:"1rem"}},(t||"").toLowerCase()))},j=function(){var e=Object(i.c)((function(e){return e.location.name})),t=Object(i.c)((function(t){return t.shopsByLocation[e].items}));return r.a.createElement("nav",null,r.a.createElement(S,{city:e}),r.a.createElement(O,{shops:t}))},x=function(){return r.a.createElement(r.a.Fragment,null)},z=(n(172),function(e){var t=e.children;return r.a.createElement("div",{className:"layout"},t,r.a.createElement(j,null),r.a.createElement(x,null))});var D=function(){return r.a.createElement(z,null,r.a.createElement(k,null))},C=(n(173),function(e){var t=e.children,n=e.onClick,a=e.to,l=e.className;return r.a.createElement(w.b,{to:a},r.a.createElement("button",{className:l,onClick:n,style:N},t))}),N={backgroundColor:E.primary,padding:"0.5rem 1rem",margin:"auto 0.5rem 0.5rem 0.5rem",border:"none",boxShadow:"2px 2px 4px 2px rgba(0,0,0,0.05)",fontSize:"200%",borderBottom:"solid 2px ".concat(E.primaryDark),color:"white",cursor:"pointer"},W={name:"Szczecin",lng:14.55,lat:53.43,zoom:11,maxBounds:[[14.45,53.38],[14.65,53.48]],pitch:20};var I=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 24 24",id:"account"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{id:"2",fill:E.backgroundDark,d:"M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}))};var T=function(e){var t=e.style;return r.a.createElement("svg",{style:t,xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"20 40 200 150",height:"13rem"},r.a.createElement("g",{stroke:"#111",strokeWidth:"1.2",strokeOpacity:"0.8",display:"inline",opacity:"0.903"},r.a.createElement("path",{fill:E.primary,stroke:"none",d:"M161.282 133.152c2.413-3.63 7.827-11.959 5.788-16.766-2.383-5.618-26.731-11.962-33.288-14.674-8.462-3.5-10.863-13.996-20.868-18.024-7.416-2.985-14.997-2.755-22.534-.969-2.936.696-8.936 6.483-11.44 7.986-7.677 4.61-25.839 23.47-25.839 23.47-2.494 12.655.04 9.36 13.217 15.598 5.431 2.572 12.877 13.742 12.877 13.742 2.424 3.5 7.937 5.943 11.267 7.967 5.314 3.23 12 9.08 17.936 11.056 1.58.526 2.983-2.336 4.199-2.902 2.71-1.26 9.994 2.545 13.653 2.357 6.779-.35 9.59-3.37 14.536-7.126.927-.704 1.296-2.275 2.104-1.733.735.493 9.237-6.523 10.15-8.687.846-2 8.242-11.295 8.242-11.295z"}),r.a.createElement("path",{fill:"none",d:"M40.11 110.116c-1.371-1.434-1.882-3.244-2.854-4.982-3.245-5.806 4.329 1.06 4.329 1.063 0 .474.663-.683.93-1.075 1.06-1.552 2.448-2.869 3.45-4.422.219-.339-.183.852-.501 1.1-.408.319-.655 5.315-.655 6.065 0 1.172 3.854 2.664 2.93 1.943-.971-.76-3.026-.663-3.68.383-1.08 1.731 1.898 6.034.4 5.098-.964-.602-3.356-3.96-4.247-4.038-.972-.086-2.358.675-3.354.953-.502.14-1.558-.392-1.558.129 0 1.185 2.863-2.245 4.81-2.217z"}),r.a.createElement("path",{fill:"none",d:"M46.84 138.183c-.146-.325-1.978 11.4-1.978 10.304 0-1.687 2.286-4.35 3.284-5.463 4.335-4.837 2.276-1.261 5.459.09.662.28 1.77.31 2.01 1.083.6 1.933-4.322-6.672-2.727-5.426 1.548 1.21 5.342-3.521 7.105-3.521 1.906 0-3.786-.516-5.636-.98-5.201-1.307-2.062-.207-3.628-7.107-.6-2.647.73 4.354-.637 4.808-2.141.71-8.062-1.594-9.719-.2-.254.212 2.287.904 2.338.917.958.248 2.628 1.925 3.329 2.67 2.719 2.887 1.519 1.194-1.436 1.45-3.114.271 1.443 1.3 2.237 1.375z"}),r.a.createElement("path",{fill:"none",d:"M107.143 67.076c.833.179.59-6.199 1.172-6.17.567.028.565 2.057.628 2.434.282 1.69 1.464 3.169 2.4 4.388.227.295-.281-.93.083-1.451.71-1.017 2.912-1.547 3.994-.796.868.602-3.852 2.816-3.56 3.77.848 2.772 2.31 6.838 2.262 6.877-.54.44-.981-.991-1.442-1.515-.934-1.062-2.404-2.09-3.195-3.269-.181-.27-.335 1.178-.395 1.422-.216.882-1.559 1.27-1.559 2.081 0 1.299.21-3.93-.342-4.233-.584-.32-5.807-1.252-5.738-2.036.005-.058 4.819.005 5.692-1.502z"}),r.a.createElement("path",{fill:"none",d:"M47.65 124.315c-.842-.157-1.695-.014-2.445.152"}),r.a.createElement("path",{fill:"none",d:"M38.429 126.103c-1.688.19-3.48.87-5.077 1.439"}),r.a.createElement("path",{fill:"none",d:"M62.726 148.321c-.629.252-1.77 1.521-2.089 1.822"}),r.a.createElement("path",{fill:"none",d:"M56.293 159.735c-.091 1.403-.692 3.23-.81 4.323"}),r.a.createElement("path",{fill:"none",d:"M76.493 156.583c-.145.955.322 3.097.354 3.317"}),r.a.createElement("path",{fill:"none",d:"M77.522 165.977c-.196 1 .184 2.04.445 3.026"}),r.a.createElement("path",{fill:"none",d:"M49.211 85.88c-1.215.745-2.602.607-3.95.674"}),r.a.createElement("path",{fill:"none",d:"M36.19 87.475c-1.761-.235-.527.209-1.378.545"}),r.a.createElement("path",{fill:"none",d:"M77.755 79.503c-.159-.81-.11-1.646-.165-2.47"}),r.a.createElement("path",{fill:"none",strokeDasharray:"1,1",strokeDashoffset:"0",strokeMiterlimit:"4",strokeWidth:"1",d:"M79.644 61.91c.103-2.655-.1-1.436.496-3.672"}),r.a.createElement("path",{fill:"none",d:"M115.997 77.92c.837-.822 1.437-2.002 1.933-2.954"}),r.a.createElement("path",{fill:"none",d:"M123.638 71.197c.857-.91 1.744-1.255 2.5-2.05"}),r.a.createElement("path",{fill:"none",d:"M126.662 81.346c.63-1.055 2.148-2.142 2.861-2.77"}),r.a.createElement("path",{fill:"none",d:"M137.48 75.137c1.366-.385 2.601-1.123 3.851-1.764"}),r.a.createElement("path",{fill:"none",d:"M135.526 98.376c1.222-1.165 3.085-1.511 4.543-1.85"}),r.a.createElement("path",{fill:"none",d:"M146.572 93.952c2.016-.276 4.141-1.423 5.658-2.354"}),r.a.createElement("path",{fill:"none",d:"M120.637 174.202c.996 1.878 1.795 4.847 2.13 6.762"}),r.a.createElement("path",{fill:"none",d:"M124.422 185.627c.38 1.972.193.827.489 3.446"}),r.a.createElement("path",{fill:"none",d:"M144.484 158.502c.748 1.003 1.44 1.997 1.714 2.483"}),r.a.createElement("path",{fill:"none",d:"M149.68 164.146c.635.465 1.34.835 2.054 1.166"}),r.a.createElement("path",{fill:"none",d:"M162.443 144.609c.829 1.367 2.783 1.821 4.073 1.969"}),r.a.createElement("path",{fill:"none",d:"M167.203 133.611c1.491 1.554 2.91 3.351 4.366 4.796"}),r.a.createElement("path",{fill:"none",d:"M167.92 109.783c.605-.488 3.84-3.93 4.409-4.537"}),r.a.createElement("path",{fill:"none",d:"M176.062 101.64c.723-.85 1.903-2.123 2.556-2.836"}),r.a.createElement("path",{fill:"none",d:"M176.819 117.807c1.078-.707 2.517-.56 3.775-.84"}),r.a.createElement("path",{fill:"none",d:"M189.796 114.639c1.108.128 3.903-.25 4.151-.276"}),r.a.createElement("path",{fill:"none",d:"M88.817 181.487c3.007-8.568-1.02-16.26 3.28-4.267.467 1.305 1.982 2.482 2.118 3.949.167 1.795-3.806-.526-5.398.318z"}),r.a.createElement("path",{fill:"none",d:"M160.686 152.329c-1.34.718-1.862 1.865-2.567 3.059-5.026 8.506-2.07 1.232 6.52 3.15.666.148 1.62.377 1.609.592-.01.22-.172-.406-.272-.602-.14-.272-4.808-6.582-5.29-6.2-.296.235 2.171 5.401 2.324 5.7.293.572-1.347 3.92-1.564 4.94-.103.482-.126 3.314-.5 3.307-3.095-.06-2.96-12.81-.26-13.946z"}),r.a.createElement("path",{fill:"none",d:"M165.732 159.08c-1.777 2.316-3.588 4.645-4.742 7.09"}),r.a.createElement("path",{fill:"none",d:"M155.967 160.02c1.606 1.75 3.829 5.32 5.023 6.15"})),r.a.createElement("g",{fill:"none",stroke:E.primaryDark,strokeOpacity:"0.7"},r.a.createElement("path",{d:"M51.774 119.482c4.462 5.383 10.16 10.462 17.084 13.007 3.26 1.199 7.191.72 10.264 2.264 2.856 1.434 5.325 3.789 8.029 5.626.976.663 4.341 2.16 5.049 3.233.426.647-1.03 3.352-.722 4.477.487 1.78 3.76 4.402 5.047 6.077 3.9 5.079 8.684 6.097 10.031 13.113.276 1.437 5.095 5.693 4.535 3.268"}),r.a.createElement("path",{d:"M55.128 117.108c10.35 7.765 21.347 12.267 34.79 14.768 1.524.283 7.59 1.814 7.59 3.538 0 2.054.112 8.703 1.181 10.363 2.062 3.198 20.703 13.229 24.608 13.777"}),r.a.createElement("path",{d:"M68.835 107.83c1.39 3.252 6.96 4.175 10.115 5.1 8.148 2.387 13.79 5.64 20.718 9.89 6.381 3.913-1.62 11.011 17.515 11.223 1.666.018 6.294 11.249 11.176 13.334"}),r.a.createElement("path",{d:"M98.449 79.7c2.606.033 5.236.6 7.834 1.276 1.541.401 3.655-.271 5.177.25 8.52 2.911 14.003 9.055 18.689 16.743.765 1.255.653 2.903 1.904 3.88 2.102 1.643 7.05 2.714 8.454 4.5 1.294 1.647 3.236 4.791 5.45 5.989 2.714 1.468 5.55.561 8.23 1.608 1.154.45 3.377 2.605 3.791 3.728.323.877-.838 2.802.097 2.802 2.13 0-10.032 12.593-10.631 13.093-2.858 2.38-5.347 6.393-6.705 9.894-.659 1.697-1.81 6.947-1.884 5.128-.034-.832-1.745 1.103-3.043 1.881-.091.055-4.025-1.375-4.027-1.365-.71 3.77-1.035 15.18-5.231 16.571-7.132 2.365-21.114-10.9-21.889-10.282-.61.486 6.737 13.51 10.559 14.573.167.046 3.763-3.252 4.631-4.112"}),r.a.createElement("path",{d:"M51.774 119.482c-1.025-5.295 5.893-12.268 10.504-13.812 2.777-.93 4.46-.15 6.724-2.576 2.71-2.904 4.39-7.126 6.965-10.263 1.324-1.612 3.117.093 5.855-1.813 5.275-3.672 9.41-14.166 16.627-11.319"})),r.a.createElement("g",{fill:"none",stroke:"#FFF",strokeDasharray:"none",strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeWidth:"3",paintOrder:"stroke markers fill"},r.a.createElement("path",{d:"M98.142 94.921c.962-6.538 11.962-13.423 10.521-3.074-.562 4.035-24.514 41.495-26.75 42.644-4.565 2.346 14.909 3.617 17.449 3.485 5.236-.273 39.054-2.06 40.8-3.955 1.075-1.167-28.404-35.177-29.768-36.118"}),r.a.createElement("path",{d:"M127.512 120.275c-8.982-14.217-27.74-10.562-33.949 1.248.4 4.726 28.936 11.329 33.897.226"}),r.a.createElement("path",{d:"M111.714 117.428c-2.43.827-3.605 2.34-2.355 4.4 5.133 8.452 11.453-10.247 2.355-4.4z"})))},B=(n(174),function(){var e=Object(i.b)(),t=function(t){e({type:"INITIATE_LOCATION",location:t}),e(function(e){return function(t,n){return function(e,t){var n=e.shopsByLocation[t];return!n||!n.isFetching&&void 0}(n(),e)?t(h(e)):Promise.resolve()}}(t.name))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{icon:I}),r.a.createElement("div",{className:"hello-box",style:{padding:"1rem",backgroundColor:"".concat(E.background),zIndex:"0",paddingBottom:"2rem"}},r.a.createElement(T,{style:{display:"table",margin:"auto"}}),r.a.createElement("h1",null,r.a.createElement("span",{style:{color:"".concat(E.primary)}},"Trifto ")," is your trift guide"),r.a.createElement("p",{className:"hello-description"},"It brings you all the necessery info like where are second hands in your area, price per kilo or day when new stuff arives!"," ")),r.a.createElement("div",{className:"hello-area"},r.a.createElement("h2",null,"Where are we?"),r.a.createElement("h3",{style:{fontWeight:"300"}},"select the city:"),r.a.createElement(C,{to:"/cockpit",onClick:function(){return t(W)}},"Szczecin"),r.a.createElement(C,{className:"soon"},"more cities SOON")))}),R=n(10);var H=function(){var e=Object(i.c)((function(e){return e.location}));return r.a.createElement(w.a,null,r.a.createElement(R.d,null,r.a.createElement(R.b,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(R.b,{path:"/cockpit"},e?r.a.createElement(D,null):r.a.createElement(R.a,{to:"/"}))))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIATE_LOCATION":return t.location;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MARKER_SELECTED":return t.payload;default:return e}},F=n(152);var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case p:return Object.assign({},e,Object(F.a)({},t.location,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object.assign({},e,{isFetching:!0});case d:return Object.assign({},e,{isFetching:!0,items:t.shops,lastUpdated:t.recievedAt});default:return e}}(e[t.location],t)));default:return e}},P=n(39),J=Object(P.c)({location:_,isSelected:A,shopsByLocation:V}),U=n(153),G=n(154),Q=Object(G.createLogger)(),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d;n(175);var Y,Z=Object(P.e)(J,Y,X(Object(P.a)(U.a,Q)));Object(l.render)(r.a.createElement(i.a,{store:Z},r.a.createElement(H,null)),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.8e08bf25.chunk.js.map