webpackJsonp([2],[function(e,t,n){"use strict";function i(e,t){var n={login:e,password:t},i=JSON.stringify(n),r=new Headers({"Content-Type":"application/json"}),o=Object.assign({},u,{method:"POST",body:i,credentials:"include",headers:r});return fetch(c+l,o).then(function(e){if(e.status>=400&&430!==e.status)throw new Error("Server side error: "+e.statusText);return 430===e.status?e.json().then(function(e){throw new Error(""+e.message)}):e})}function r(e,t,n){var i={name:e,email:t,message:n},r=JSON.stringify(i),o=new Headers({"Content-Type":"application/json"}),a=Object.assign({},u,{method:"POST",body:r,credentials:"include",headers:o});return fetch(c+d,a).then(function(e){if(e.status>=400)throw new Error("Server side error: "+e.statusText);return e})}function o(){return fetch(c+m,u).then(function(e){if(e.status>=400)throw new Error("Server side error: "+e.statusText);return e.json()})}function a(){return fetch(c+f,u).then(function(e){if(e.status>=400)throw new Error("Server side error: "+e.statusText);return e.json()})}function s(){return fetch(c+h,u).then(function(e){if(e.status>=400)throw new Error("Server side error: "+e.statusText);return e.json()})}Object.defineProperty(t,"__esModule",{value:!0}),t.auth=i,t.sendMail=r,t.fetchSkills=o,t.fetchArticles=a,t.fetchWorks=s;var c=void 0,u=void 0;c="http://localhost:3000",u={mode:"same-origin"};var l="/user",d="/contact",f="/api/template/blog",h="/api/template/portfolio",m="/api/template/skills"},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e)}return r(e,[{key:"init",value:function(){var e=document.querySelectorAll(".burger"),t=document.querySelector(".burger_header"),n=document.getElementById("modal"),i=n.querySelector(".modal__left"),r=n.querySelector(".modal__right");e&&t&&n&&i&&r&&[].forEach.call(e,function(e){e.addEventListener("click",function(){n.classList.toggle("modal_active"),t.classList.toggle("burger_cross"),document.body.classList.toggle("prevent-scroll"),setTimeout(function(){i.classList.toggle("modal__left_active"),r.classList.toggle("modal__right_active")},0)})})}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e),this.arrowDown=document.getElementById("arrowDown"),this.arrowUp=document.getElementById("arrowUp")}return r(e,[{key:"init",value:function(){this.arrowDown&&this.arrowDown.addEventListener("click",this.arrowClickHandler.bind(this)),this.arrowUp&&this.arrowUp.addEventListener("click",this.arrowClickHandler.bind(this))}},{key:"arrowClickHandler",value:function(){var e=void 0,t=document.querySelector(".section_split"),n=document.getElementById("mainSection");e=t||n;var i=this.getCoords(e);this.smoothScroll(i)}},{key:"smoothScroll",value:function(e){function t(){var r=Math.min(1,(Date.now()-i)/n),o=window.pageYOffset;window.scrollTo(0,(1-r)*o+e*r),r<1&&window.requestAnimationFrame(t)}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,i=Date.now();t()}},{key:"getCoords",value:function(e){return e.getBoundingClientRect().top+window.pageYOffset}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e)}return r(e,[{key:"init",value:function(){var e=this,t=document.getElementById("parallax"),n=document.getElementById("bgWord"),i=document.getElementById("user"),r=window.innerWidth;window.addEventListener("resize",function(){(r=window.innerWidth)<=768&&(t.style.transform="translate(-50%, -50%)",n.style.transform="translate(-50%, -50%)",i.style.transform="translate(-50%, -50%)")}),window.addEventListener("scroll",function(){if(r>768){var o=window.pageYOffset;e.move(t,o,60),e.move(n,o,10),e.move(i,o,3)}})}},{key:"move",value:function(e,t,n){var i=-t/n+"%",r=e.style,o="translate3d(0, "+i+", 0) translate(-50%, -50%)";r.transform=o}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){var n=document.createElement("div"),i=document.createElement("div");return n.classList.add("connectionError"),void 0!==t&&n.classList.add(t),i.classList.add("connectionError__content"),i.textContent=e,n.appendChild(i),n}Object.defineProperty(t,"__esModule",{value:!0}),t.makeErrorMessage=i},,,,,,,,,,,,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n(6),n(7),n(29),n(2),n(8),n(9),n(3),n(1),n(10),n(11),n(4);var r=n(12),o=i(r),a=n(13),s=i(a),c=n(30),u=i(c),l=n(14),d=i(l),f=n(31),h=i(f);n(5),document.addEventListener("DOMContentLoaded",function(){(new h.default).init().then(function(){(new o.default).init(),(new s.default).init(),(new u.default).init(),(new d.default).init()})})},function(e,t){},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e),this.appWindowWidth=document.documentElement.clientWidth,this.menu=document.getElementById("menu"),this.innerList=document.querySelector(".content__list"),this.articles=document.querySelectorAll(".blog__article"),this.articlesLinks=document.querySelectorAll(".content__link"),this.mainSection=document.getElementById("mainSection"),this.tabletScreenWidth=768,this.isOpen=!1}return r(e,[{key:"init",value:function(){var e=this;this.innerList&&this.articlesLinks&&this.articles&&(window.addEventListener("resize",function(){e.appWindowWidth=window.innerWidth}),this.menu.addEventListener("click",this.openMenuHandler.bind(this)),document.body.addEventListener("click",this.closeMenuHandler.bind(this)),window.addEventListener("scroll",this.activeArticleHandler.bind(this)),window.addEventListener("scroll",this.fixedMenuHandler.bind(this)),window.addEventListener("scroll",this.hideMenuControlOnFirstScreen.bind(this)),window.addEventListener("resize",function(){e.fixedMenuHandler(),e.appWindowWidth<=e.tabletScreenWidth?e.innerList.classList.remove("content__list_fixed"):e.menu.classList.remove("main__content_hidden")}))}},{key:"openMenuHandler",value:function(){!this.isOpen&&this.appWindowWidth<=this.tabletScreenWidth&&(this.menu.classList.add("main__content_active"),this.isOpen=!0)}},{key:"closeMenuHandler",value:function(e){this.isOpen&&!e.target.closest(".main__content")&&(this.menu.classList.remove("main__content_active"),this.isOpen=!1)}},{key:"activeArticleHandler",value:function(){function e(e,t){return e-t}var t=this;if(1===this.articles.length)this.articlesLinks[0].classList.add("content__link_active");else{var n=[].map.call(this.articles,function(e){return t.getVerticalCoords(e).bottom}),i=window.pageYOffset,r=n.concat(i).sort(e),o=r.indexOf(i);[].forEach.call(this.articlesLinks,function(e){return e.classList.remove("content__link_active")}),this.articlesLinks[o].classList.add("content__link_active")}}},{key:"fixedMenuHandler",value:function(){var e=window.pageYOffset,t=this.getVerticalCoords(this.mainSection).top;this.appWindowWidth<=this.tabletScreenWidth||(t<=e?this.innerList.classList.add("content__list_fixed"):this.innerList.classList.remove("content__list_fixed"))}},{key:"hideMenuControlOnFirstScreen",value:function(){var e=window.pageYOffset,t=this.getVerticalCoords(this.mainSection).top;this.appWindowWidth>this.tabletScreenWidth||(t-200>=e?this.menu.classList.add("main__content_hidden"):this.menu.classList.remove("main__content_hidden"))}},{key:"getVerticalCoords",value:function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,bottom:t.bottom+window.pageYOffset}}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),a=n(15),s=function(){function e(){i(this,e)}return r(e,[{key:"init",value:function(){return(0,o.fetchArticles)().then(function(e){if("Empty"===e.type){var t=document.getElementById("mainSection"),n=(0,a.makeErrorMessage)("На данный момент в базе данных нет необходимой информации");return void t.appendChild(n)}var i=document.getElementById("blog"),r=document.getElementById("menu");i.innerHTML=e.articles,r.innerHTML=e.contentList}).catch(function(e){var t=document.getElementById("mainSection"),n="При получении данных с сервера возникла ошибка. "+e.message+" Уверяю вас, я уже работаю над этим.",i=(0,a.makeErrorMessage)(n);t.appendChild(i)})}}]),e}();t.default=s}],[28]);