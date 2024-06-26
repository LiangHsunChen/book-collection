(function(){"use strict";var o={4526:function(o,n,t){var e=t(2856),r=function(){var o=this,n=o._self._c;return n("div",[n("h1",[o._v("Home Page")]),n("p",[o._v("Welcome to the home page.")]),n("button",{staticClass:"create-button",on:{click:o.redirectToCreateBook}},[o._v(" Insert New Book ")]),o.books.length>0?n("div",[n("table",[n("thead",[n("tr",o._l(o.books[0],(function(t,e){return n("th",{key:e},[o._v(o._s(e))])})),0)]),n("tbody",o._l(o.books,(function(t){return n("tr",{key:t.id},o._l(t,(function(t,e){return n("td",{key:e},[o._v(o._s(t))])})),0)})),0)])]):n("div",[n("p",[o._v("No books available.")])])])},i=[],c={name:"BooksComponent",data(){return{books:[]}},mounted(){this.fetchBooks()},methods:{fetchBooks(){fetch(window.location.origin+"/coding-challenge/books",{method:"GET"}).then((o=>o.json())).then((o=>{this.books=o})).catch((o=>{console.error("Error fetching books:",o)}))},redirectToCreateBook(){window.location.href=window.location.origin+"/coding-challenge/books/create"}}},u=c,a=t(1656),f=(0,a.A)(u,r,i,!1,null,null,null),l=f.exports;e.Ay.config.productionTip=!1,new e.Ay({el:"#books-component",render:o=>o(l)})}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return o[e].call(i.exports,i,i.exports,t),i.exports}t.m=o,function(){var o=[];t.O=function(n,e,r,i){if(!e){var c=1/0;for(l=0;l<o.length;l++){e=o[l][0],r=o[l][1],i=o[l][2];for(var u=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(o){return t.O[o](e[a])}))?e.splice(a--,1):(u=!1,i<c&&(c=i));if(u){o.splice(l--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=o.length;l>0&&o[l-1][2]>i;l--)o[l]=o[l-1];o[l]=[e,r,i]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){var o={524:0};t.O.j=function(n){return 0===o[n]};var n=function(n,e){var r,i,c=e[0],u=e[1],a=e[2],f=0;if(c.some((function(n){return 0!==o[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(n&&n(e);f<c.length;f++)i=c[f],t.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return t.O(l)},e=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[504],(function(){return t(4526)}));e=t.O(e)})();
//# sourceMappingURL=app.js.map