(function(){"use strict";var o={1027:function(o,e,t){var r=t(2856),n=function(){var o=this,e=o._self._c;return e("div",{attrs:{id:"books-component"}},[e("h1",[o._v("Home Page")]),e("p",[o._v("Welcome to the home page.")]),e("button",{staticClass:"create-button",on:{click:o.redirectToCreateBook}},[o._v(" Insert New Book ")]),o.books.length>0?e("div",[e("table",[e("thead",[e("tr",o._l(o.books[0],(function(t,r){return e("th",{key:r},[o._v(o._s(r))])})),0)]),e("tbody",o._l(o.books,(function(t){return e("tr",{key:t.id},o._l(t,(function(t,r){return e("td",{key:r},[o._v(o._s(t))])})),0)})),0)])]):e("div",[e("p",[o._v("No books available.")])])])},a=[],i={name:"BooksComponent",data(){return{books:[]}},mounted(){this.fetchBooks()},methods:{fetchBooks(){fetch(window.location.origin+"/coding-challenge/books",{method:"GET"}).then((o=>o.json())).then((o=>{this.books=o})).catch((o=>{console.error("Error fetching books:",o)}))},redirectToCreateBook(){window.location.href=window.location.origin+"/coding-challenge/books/create"}}},s=i,l=t(1656),c=(0,l.A)(s,n,a,!1,null,"75f02cb0",null),u=c.exports,d=function(){var o=this,e=o._self._c;return e("div",{attrs:{id:"create-book-component"}},[e("h1",[o._v("Create Book Page")]),e("p",[o._v("Welcome to the create book page.")]),e("BookFormComponent",{attrs:{action:o.action,submitForm:o.submitForm}})],1)},p=[],m=function(){var o=this,e=o._self._c;return e("div",{attrs:{id:"book-form-component"}},[e("form",{on:{submit:function(e){return e.preventDefault(),o.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[o._v("Title:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.localBook.title,expression:"localBook.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:""},domProps:{value:o.localBook.title},on:{input:function(e){e.target.composing||o.$set(o.localBook,"title",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"author"}},[o._v("Author:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.localBook.author,expression:"localBook.author"}],staticClass:"form-control",attrs:{type:"text",id:"author",required:""},domProps:{value:o.localBook.author},on:{input:function(e){e.target.composing||o.$set(o.localBook,"author",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"genre"}},[o._v("Genre:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.localBook.genre,expression:"localBook.genre"}],staticClass:"form-control",attrs:{type:"text",id:"genre",required:""},domProps:{value:o.localBook.genre},on:{input:function(e){e.target.composing||o.$set(o.localBook,"genre",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"published_year"}},[o._v("Published Year:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:o.localBook.published_year,expression:"localBook.published_year"}],staticClass:"form-control",attrs:{id:"published_year",required:""},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(o){return o.selected})).map((function(o){var e="_value"in o?o._value:o.value;return e}));o.$set(o.localBook,"published_year",e.target.multiple?t:t[0])}}},o._l(o.years,(function(t){return e("option",{key:t,domProps:{value:t}},[o._v(" "+o._s(t)+" ")])})),0)]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[o._v("Description:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:o.localBook.description,expression:"localBook.description"}],staticClass:"form-control",attrs:{id:"description"},domProps:{value:o.localBook.description},on:{input:function(e){e.target.composing||o.$set(o.localBook,"description",e.target.value)}}})]),e("button",{staticClass:"create-button",attrs:{type:"submit"}},[o._v("Insert New Book")]),o.successMessage?e("div",{staticClass:"success-message"},[o._v(" "+o._s(o.successMessage)+" ")]):o._e()])])},f=[],h=(t(4114),{name:"BookForm",props:{book:{type:Object,default:()=>({title:"",author:"",genre:"",published_year:(new Date).getFullYear(),description:""})},action:String,submitForm:{type:Function,required:!0}},data(){return{localBook:{...this.book},years:[]}},created(){this.populateYears()},methods:{populateYears(){const o=(new Date).getFullYear();for(let e=o;e>=1900;e--)this.years.push(e)},handleSubmit(){this.submitForm(this.localBook).then((o=>{this.resetForm(),this.successMessage=`Book ${o.title} successfully ${this.action} with id: ${o.id}`})).catch((o=>{console.error(o),alert("An error occurred while submitting the form.")}))},resetForm(){this.localBook={title:"",author:"",genre:"",published_year:(new Date).getFullYear(),description:""}}}}),v=h,b=(0,l.A)(v,m,f,!1,null,"e2cb5262",null),k=b.exports,g={name:"CreateBookComponent",components:{BookFormComponent:k},data(){return{action:"created",years:[]}},methods:{submitForm(o){return fetch(window.location.origin+"/coding-challenge/books/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.ok?o.json():o.json().then((o=>{throw new Error(o.error||"Unknown error")})))).then((o=>(console.log("Book created:",o),o))).catch((o=>{console.error("Error creating book:",o)}))}}},_=g,y=(0,l.A)(_,d,p,!1,null,"7b739a02",null),B=y.exports;r.Ay.config.productionTip=!1,new r.Ay({el:"#books-component",render:o=>o(u)}),new r.Ay({el:"#create-book-component",render:o=>o(B)})}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return o[r].call(a.exports,a,a.exports,t),a.exports}t.m=o,function(){var o=[];t.O=function(e,r,n,a){if(!r){var i=1/0;for(u=0;u<o.length;u++){r=o[u][0],n=o[u][1],a=o[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(o){return t.O[o](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){o.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=o.length;u>0&&o[u-1][2]>a;u--)o[u]=o[u-1];o[u]=[r,n,a]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={524:0};t.O.j=function(e){return 0===o[e]};var e=function(e,r){var n,a,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==o[e]}))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(l)var u=l(t)}for(e&&e(r);c<i.length;c++)a=i[c],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(u)},r=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1027)}));r=t.O(r)})();
//# sourceMappingURL=app.js.map