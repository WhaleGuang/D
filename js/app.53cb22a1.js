(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],m=0,p=[];m<u.length;m++)c=u[m],r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("comment")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n\t// 这里的@woyaobaocun可以绑定方法\n\t"),n("cinput",{on:{woyaobaocun:t.zhendeyaobaocuna}}),n("clist",{attrs:{comments:t.comments},on:{shanchuwo:t.zhendeyaoshanchu}})],1)},u=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cinput"},[n("label",[n("span",[t._v("用户名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),n("label",[n("span",[t._v("评论内容")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("footer",[n("button",{on:{click:t.doSave}},[t._v("发布消息")])])])},s=[],l={data:function(){return{author:"",content:""}},methods:{doSave:function(){return this.author?this.content?(localStorage.setItem("vvv-authorname",this.author),this.$emit("woyaobaocun",{id:+new Date,author:this.author,content:this.content}),void(this.content="")):alert("内容不能为空！"):alert("用户名不能为空~")}},created:function(){var t=localStorage.getItem("vvv-authorname");t&&(this.author=t)}},m=l,p=n("2877"),f=Object(p["a"])(m,i,s,!1,null,null,null);f.options.__file="comment-input.vue";var h=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clist"},t._l(t.comments,function(e){return n("comment",{key:e.id,attrs:{comment:e},on:{shanchuwo:t.doDelete}})}))},d=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("span",{staticClass:"comment-author"},[t._v(t._s(t.comment.author)+":")]),n("span",{staticClass:"comment-conten"},[t._v(t._s(t.comment.content))]),n("a",{staticClass:"comment-delete",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.deleteMe(e)}}},[t._v("删除")])])},b=[],g={props:["comment"],methods:{deleteMe:function(){this.$emit("shanchuwo",this.comment.id)}}},y=g,w=Object(p["a"])(y,_,b,!1,null,null,null);w.options.__file="comment-item.vue";var O=w.exports,x={props:["comments"],methods:{doDelete:function(t){this.$emit("shanchuwo",t)}},components:{comment:O}},j=x,S=Object(p["a"])(j,v,d,!1,null,null,null);S.options.__file="comment-list.vue";var $=S.exports,P={data:function(){return{comments:[]}},methods:{updateLocal:function(){localStorage.setItem("vvv-comments",JSON.stringify(this.comments))},zhendeyaobaocuna:function(t){this.comments.push(t),this.updateLocal()},zhendeyaoshanchu:function(t){this.comments=this.comments.filter(function(e){return e.id!=t}),this.updateLocal()}},components:{cinput:h,clist:$},created:function(){var t=localStorage.getItem("vvv-comments");t&&(this.comments=JSON.parse(t))}},k=P,C=Object(p["a"])(k,c,u,!1,null,null,null);C.options.__file="comment-comp.vue";var M=C.exports,E={name:"app",components:{comment:M}},z=E,D=(n("034f"),Object(p["a"])(z,r,a,!1,null,null,null));D.options.__file="App.vue";var I=D.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.53cb22a1.js.map