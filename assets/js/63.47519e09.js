(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{565:function(t,a,s){"use strict";s.r(a);var r=s(37),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"js-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-sdk"}},[t._v("#")]),t._v(" JS-SDK")]),t._v(" "),s("h3",{attrs:{id:"回调使用-alert-输出结果没反应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调使用-alert-输出结果没反应"}},[t._v("#")]),t._v(" 回调使用 alert 输出结果没反应")]),t._v(" "),s("p",[t._v("部分接口是会弹出原生选择界面，例如选择组织架构人员。选择人员后，在点击确认时，会关闭这个页面，此时回调方法马上执行 alert，由于 UiWebView 的 bug，会导致 CPU 飙高，出现页面卡死的情况。")]),t._v(" "),s("p",[t._v("而 WkWebView 不存在该问题。")]),t._v(" "),s("p",[t._v("所以，尽可能不要使用 alert 来检验接口返回值，可以使用 "),s("RouterLink",{attrs:{to:"/light-app/vconsole.html"}},[t._v("VConsole")]),t._v(" 等调试工具。")],1),t._v(" "),s("h3",{attrs:{id:"可以多次注入-cordovajs-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可以多次注入-cordovajs-吗"}},[t._v("#")]),t._v(" 可以多次注入 cordovajs 吗？")]),t._v(" "),s("p",[t._v("不可以。")]),t._v(" "),s("p",[t._v("如果你是使用原始 Cordova API，请确保一个 webview 只注入一次。如果使用 js-sdk，则无需考虑该问题，因为 sdk 内部会自动处理。")])])}),[],!1,null,null,null);a.default=e.exports}}]);