(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{700:function(a,s,e){"use strict";e.r(s);var t=e(8),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" Map")]),a._v(" "),e("ul",[e("li",[a._v("HashMap")])]),a._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("它根据键的hashCode值存储数据，大多数情况下可以直接定位到它的值，因而具有很快的访问速度，但遍历顺序却是不确定的。 HashMap最多只允许一条记录的键为null，允许多条记录的值为null。HashMap非线程安全，即任一时刻可以有多个线程同时写HashMap，可能会导致数据的不一致。如果需要满足线程安全，可以用 Collections的synchronizedMap方法使HashMap具有线程安全的能力，或者使用ConcurrentHashMap。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("Hashtable")])]),a._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Hashtable是遗留类，很多映射的常用功能与HashMap类似，不同的是它承自Dictionary类，并且是线程安全的，任一时间只有一个线程能写Hashtable，并发性不如ConcurrentHashMap，因为ConcurrentHashMap引入了分段锁。Hashtable不建议在新代码中使用，不需要线程安全的场合可以用HashMap替换，需要线程安全的场合可以用ConcurrentHashMap替换。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("LinkedHashMap")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LinkedHashMap是HashMap的一个子类，保存了记录的插入顺序，在用Iterator遍历LinkedHashMap时，先得到的记录肯定是先插入的，也可以在构造时带参数，按照访问次序排序。\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("TreeMap")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("TreeMap实现SortedMap接口，能够把它保存的记录根据键排序，默认是按键值的升序排序，也可以指定排序的比较器，当用Iterator遍历TreeMap时，得到的记录是排过序的。如果使用排序的映射，建议使用TreeMap。在使用TreeMap时，key必须实现Comparable接口或者在构造TreeMap传入自定义的Comparator，否则会在运行时抛出java.lang.ClassCastException类型的异常。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h1",{attrs:{id:"源码分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[a._v("#")]),a._v(" 源码分析")]),a._v(" "),e("ul",[e("li",[a._v("初始化")]),a._v(" "),e("li",[a._v("put方法分析")]),a._v(" "),e("li",[a._v("get方法分析")]),a._v(" "),e("li",[a._v("Node对象  implement Entry对象")]),a._v(" "),e("li",[a._v("扩容")])]),a._v(" "),e("h2",{attrs:{id:"hashmap基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap基本原理"}},[a._v("#")]),a._v(" HashMap基本原理")]),a._v(" "),e("ul",[e("li",[a._v("Hash 散列将一个任意的长度通过某种（Hash函数算法）算法转换成一个固定值--移位")]),a._v(" "),e("li",[a._v("Map：地图x、y存储")]),a._v(" "),e("li",[a._v("通过Hash出来的值，然后通过值定位到这个Map，然后Value存储到这个Map")])]),a._v(" "),e("h1",{attrs:{id:"手写实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手写实现"}},[a._v("#")]),a._v(" 手写实现")])])}),[],!1,null,null,null);s.default=r.exports}}]);