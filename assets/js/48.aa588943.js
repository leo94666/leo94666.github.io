(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{646:function(a,t,r){"use strict";r.r(t);var e=r(8),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("Android不能在主线程(UI线程、Main Thread)做耗时的操作,耗时操作需要在子线程(工作线程)中操作,子线程又不能更新UI,因此需要Handler在子线程发消息给主线程来更新UI")]),a._v(" "),r("h2",{attrs:{id:"_1-handler介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-handler介绍"}},[a._v("#")]),a._v(" 1.Handler介绍")]),a._v(" "),r("p",[a._v("Handler是一套 Android 消息传递机制 / 异步通信机制，Android系统本质上是来说是一个消息驱动的系统，所以在Android开发中，Handler特别重要。"),r("br"),a._v("\nhttps://blog.csdn.net/haovin/article/details/89609688")]),a._v(" "),r("h2",{attrs:{id:"_2-handler使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-handler使用方法"}},[a._v("#")]),a._v(" 2.Handler使用方法")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("概念")]),a._v(" "),r("th",[a._v("定义")]),a._v(" "),r("th",[a._v("作用")]),a._v(" "),r("th",[a._v("备注")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("主线程")]),a._v(" "),r("td",[a._v("App首次启动会自动开启一条线程（主线程）")]),a._v(" "),r("td",[a._v("处理和UI相关的操作")]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[a._v("子线程")]),a._v(" "),r("td",[a._v("人为手动开启线程")]),a._v(" "),r("td",[a._v("主要操作一些耗时操作")]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[a._v("Message")]),a._v(" "),r("td",[a._v("线程间通信的数据单元")]),a._v(" "),r("td",[a._v("通信消息的载体")]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[a._v("MessageQueue")]),a._v(" "),r("td",[a._v("存放Message的队列")]),a._v(" "),r("td"),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[a._v("Handler")]),a._v(" "),r("td",[a._v("子线程和主线程通信的媒介")]),a._v(" "),r("td",[a._v("添加消息到消息队列"),r("br"),a._v("处理Looper分发过来的消息")]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[a._v("Looper")]),a._v(" "),r("td",[a._v("MessageQueue与Handler的通信媒介")]),a._v(" "),r("td"),a._v(" "),r("td")])])]),a._v(" "),r("h3",{attrs:{id:"_2-1-主线程和子线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主线程和子线程"}},[a._v("#")]),a._v(" 2.1 主线程和子线程")]),a._v(" "),r("p",[r("strong",[a._v("主线程")]),a._v(" 即UI线程"),r("br"),a._v(" "),r("strong",[a._v("子线程")])]),a._v(" "),r("h3",{attrs:{id:"_2-2-主线程创建handler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-主线程创建handler"}},[a._v("#")]),a._v(" 2.2 主线程创建Handler")]),a._v(" "),r("h3",{attrs:{id:"_2-2-子线程创建handler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-子线程创建handler"}},[a._v("#")]),a._v(" 2.2 子线程创建Handler")]),a._v(" "),r("h3",{attrs:{id:"_2-3-handler常用的类对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-handler常用的类对象"}},[a._v("#")]),a._v(" 2.3 Handler常用的类对象")]),a._v(" "),r("h4",{attrs:{id:"messagequeue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#messagequeue"}},[a._v("#")]),a._v(" MessageQueue")]),a._v(" "),r("h4",{attrs:{id:"looper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looper"}},[a._v("#")]),a._v(" Looper")]),a._v(" "),r("h4",{attrs:{id:"message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[a._v("#")]),a._v(" Message")]),a._v(" "),r("h4",{attrs:{id:"handler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[a._v("#")]),a._v(" Handler")]),a._v(" "),r("h2",{attrs:{id:"_3-handler原理剖析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-handler原理剖析"}},[a._v("#")]),a._v(" 3.Handler原理剖析")]),a._v(" "),r("h3",{attrs:{id:"_3-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1"}},[a._v("#")]),a._v(" 3.1")]),a._v(" "),r("h2",{attrs:{id:"_4-handler面试tip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-handler面试tip"}},[a._v("#")]),a._v(" 4.Handler面试tip")]),a._v(" "),r("ul",[r("li",[a._v("一个线程有几个Looper？")]),a._v(" "),r("li",[a._v("一个线程成有几个Handler？如果有多个Handler，一个Looper如何识别多个Handler？")])])])}),[],!1,null,null,null);t.default=_.exports}}]);