(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad4f0312"],{"7e12":function(e,t,o){var n=o("da84"),a=o("58a8").trim,i=o("5899"),r=n.parseFloat,l=1/r(i+"-0")!==-1/0;e.exports=l?function(e){var t=a(String(e)),o=r(t);return 0===o&&"-"==t.charAt(0)?-0:o}:r},c35a:function(e,t,o){var n=o("23e7"),a=o("7e12");n({target:"Number",stat:!0,forced:Number.parseFloat!=a},{parseFloat:a})},d605:function(e,t,o){},dbdd:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"head-menu-main"},[o("el-dropdown",{attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[e._v(" 网页端操作 ")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{nativeOn:{click:function(t){return e.openWebUrl(t)}}},[e._v("打开网页")])],1)],1),o("span",{staticClass:"el-dropdown-link",on:{click:e.openCopy}},[e._v(" 复制内容 ")]),o("el-dropdown",{attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[e._v(" 页面刷新 ")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{nativeOn:{click:function(t){return e.reloadHome(t)}}},[e._v("刷新首页")]),o("el-dropdown-item",{nativeOn:{click:function(t){return e.reloadThis(t)}}},[e._v("刷新当前页面")])],1)],1),o("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[o("el-slider",{attrs:{"show-input":"",min:.5,max:2,step:.1},on:{change:e.zoomValueChange},model:{value:e.zoomValue,callback:function(t){e.zoomValue=t},expression:"zoomValue"}}),o("span",{staticClass:"el-dropdown-link",attrs:{slot:"reference"},slot:"reference"},[e._v(" 缩放界面 ")])],1),o("span",{staticClass:"el-dropdown-link"},[e._v(" 当前版本@"+e._s(e.pcVersion)+" ")])],1)},a=[],i=(o("c35a"),o("a9e3"),o("ac1f"),o("5319"),{name:"HeadMenuIndex",components:{},props:{},data:function(){return{zoomValue:Number.parseFloat(this.$store.state.app.zoom),pcVersion:"2000-08-25"}},computed:{},watch:{},created:function(){},mounted:function(){document.body.style.zoom=this.zoomValue},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},methods:{zoomValueChange:function(e){this.$store.dispatch("app/setZoom",e),document.body.style.zoom=e},reloadThis:function(){var e=this,t=this.$store.state.tagsView.nowView;this.$store.dispatch("tagsView/delCachedView",t).then((function(){var o=t.fullPath;e.$nextTick((function(){e.$router.replace({path:"/redirect"+o})}))}))},reloadHome:function(){location.href="/"},openWebUrl:function(){window.open("https://github.com/liyang-it/vue-element-admin-liyangit")},openCopy:function(){var e=this.$createElement,t="我是复制内容";this.$msgbox({title:"消息",message:e("p",null,[e("span",null,"点击复制, 会复制以下内容  "),e("i",{style:"color: teal"},t),e("span",null,"....")]),showCancelButton:!1,confirmButtonText:"复制"}).then((function(e){if(navigator.clipboard)navigator.clipboard.writeText(t);else{var o=document.createElement("textarea");document.body.appendChild(o),o.style.position="fixed",o.style.clip="rect(0 0 0 0)",o.style.top="10px",o.value=t,o.select(),document.execCommand("copy",!0),document.body.removeChild(o)}}))}}}),r=i,l=(o("eb16"),o("2877")),s=Object(l["a"])(r,n,a,!1,null,"43f5db04",null);t["default"]=s.exports},eb16:function(e,t,o){"use strict";o("d605")}}]);