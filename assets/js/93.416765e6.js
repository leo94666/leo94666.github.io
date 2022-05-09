(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{691:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"线性表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表"}},[t._v("#")]),t._v(" 线性表")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("线性表是具有"),a("strong",[t._v("相同类型")]),t._v("的n(n>0)个元素的"),a("strong",[t._v("有限序列")]),t._v("，其中n为表长，当n=0时，该表为空表")]),t._v(" "),a("p",[t._v("若L命名为线性表，则一般表示为")]),t._v(" "),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{"vertical-align":"-0.452ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"39.367ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 17400 950"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"merror","data-mjx-error":"Undefined control sequence \\L"}},[a("rect",{attrs:{"data-background":"true",width:"17400",height:"950",y:"-200"}}),a("g",{staticStyle:{"font-family":"serif"},attrs:{"data-mml-node":"mtext"}},[a("text",{attrs:{"data-variant":"-explicitFont",transform:"scale(1,-1)","font-size":"884px"}},[t._v("Undefined control sequence \\L")])])])])])])])],1),t._v(" "),a("ul",[a("li",[t._v("前续节点")]),t._v(" "),a("li",[t._v("后续节点")])]),t._v(" "),a("h3",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),a("ul",[a("li",[t._v("InitList(&L):初始化表。构造一个空的线性表")]),t._v(" "),a("li",[t._v("DestoryList(&L):销毁操作。销毁线性表，并释放线性表L所占用的内存空间")]),t._v(" "),a("li",[t._v("LocateElem(L,e):按值查找。在表中L查找具有给定关键字值的元素")]),t._v(" "),a("li",[t._v("GetElem(L,i):按位查找，获取表L中第i个位置的元素的值")]),t._v(" "),a("li",[t._v("ListIntsert(&L,i,e):插入操作，在表L中的第i个位置插入制定元素e")]),t._v(" "),a("li",[t._v("ListDelete(&L,i,&e):删除操作。删除表L中第i个位置的元素，并用e返回删除元素的值")]),t._v(" "),a("li",[t._v("PrintList(L):输出操作")]),t._v(" "),a("li",[t._v("Empty(L):判空操作")]),t._v(" "),a("li",[t._v("Length(L):求表长")])]),t._v(" "),a("h3",{attrs:{id:"线性表的顺序存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的顺序存储"}},[t._v("#")]),t._v(" 线性表的顺序存储")]),t._v(" "),a("ul",[a("li",[t._v("逻辑顺序和物理顺序是相同的")]),t._v(" "),a("li",[t._v("第n个元素的内存地址 = LOC(A)+(n-1)*sizeof(ElemType)")])]),t._v(" "),a("p",[t._v("数组静态分配")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("MaxSize")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ElemType data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MaxSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//固定空间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("sqlList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("数组动态分配")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("MaxSize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ElemType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没有固定空间，动态分配")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("sqlList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"线性表的链式存储-单链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的链式存储-单链表"}},[t._v("#")]),t._v(" 线性表的链式存储(单链表)")]),t._v(" "),a("ul",[a("li",[t._v("通过指针实现线性逻辑关系")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ElemType data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("LNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("LinkList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"线性表的顺序表示-数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的顺序表示-数组"}},[t._v("#")]),t._v(" 线性表的顺序表示(数组)=")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("数组")]),t._v(" "),a("p",[t._v("数组是由"),a("strong",[t._v("相同类型的元素")]),t._v("的集合所组成的一种线性数据结构,当我们创建一个数组时,在内存里面是分配了"),a("strong",[t._v("一块连续的内存空间")]),t._v("来存储的,当我们获取数组中的元素时,可以"),a("strong",[t._v("通过元素的索引计算出该元素对应的存储地址")]),t._v("."),a("br"),t._v(" "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("核心规则")])]),t._v(" "),a("ul",[a("li",[t._v("数组在内存里面是一块连续的内存空间")]),t._v(" "),a("li",[t._v("数组里存的元素类型是相同的")]),t._v(" "),a("li",[t._v("数组是通过索引来获取对应的元素")])]),t._v(" "),a("p",[a("strong",[t._v("基本操作")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操作")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("InitList(&L)")]),t._v(" "),a("td",[t._v("初始化表。构造一个空的线性表")])]),t._v(" "),a("tr",[a("td",[t._v("DestoryList(&L)")]),t._v(" "),a("td",[t._v("销毁操作。销毁线性表，并释放线性表L所占用的内存空间")])]),t._v(" "),a("tr",[a("td",[t._v("LocateElem(L,e)")]),t._v(" "),a("td",[t._v("按值查找。在表中L查找具有给定关键字值的元素")])]),t._v(" "),a("tr",[a("td",[t._v("GetElem(L,i)")]),t._v(" "),a("td",[t._v("按位查找，获取表L中第i个位置的元素的值")])]),t._v(" "),a("tr",[a("td",[t._v("ListIntsert(&L,i,e)")]),t._v(" "),a("td",[t._v("插入操作，在表L中的第i个位置插入制定元素e")])]),t._v(" "),a("tr",[a("td",[t._v("ListDelete(&L,i,&e)")]),t._v(" "),a("td",[t._v("删除操作。删除表L中第i个位置的元素，并用e返回删除元素的值")])]),t._v(" "),a("tr",[a("td",[t._v("PrintList(L)")]),t._v(" "),a("td",[t._v("输出操作")])]),t._v(" "),a("tr",[a("td",[t._v("Empty(L)")]),t._v(" "),a("td",[t._v("判空操作")])]),t._v(" "),a("tr",[a("td",[t._v("Length(L)")]),t._v(" "),a("td",[t._v("求表长")])])])]),t._v(" "),a("p",[a("strong",[t._v("数组特性")])]),t._v(" "),a("ul",[a("li",[t._v("数组在通过索引读写元素的时候非常快，但是在插入、删除元素的时候就比较慢了")]),t._v(" "),a("li",[t._v("数组扩容比较麻烦")])])]),t._v(" "),a("h4",{attrs:{id:"数组的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组的创建"}},[t._v("#")]),t._v(" 数组的创建")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/363343364")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("98.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("78.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("当我们执行上面的代码的时候,就会在内存里面申请一个长度为8,数据类型为double的数组,它在内存里面是以一段连续的内存空间来标识。")]),t._v(" "),a("p",[a("strong",[t._v("question")]),t._v(": 为什么必须指定数组的数据类型？")]),t._v(" "),a("p",[t._v("如果我们在创建一个数组的时候不指定数据类型，那么意味着我是无法知道未来这个数组会存储什么数据的，如果在我不知道需要存储什么数据的情况下又如何知道我要向内存申请多大的空间来创建这个数组呢？显然这么一思考答案就不言而喻了。好了，现在我们已经知道了数组在创建的时候就指定了能存储的数据类型了，那么创建数组的时候，只需要稍微计算一下就能知道需要向内存申请的空间大小了，比如new int[8] 我会向内存申请一个8*4 字节的大小的内存空间(int类型数据占用4字节)。")]),t._v(" "),a("h4",{attrs:{id:"数组读写元素的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组读写元素的过程"}},[t._v("#")]),t._v(" 数组读写元素的过程")]),t._v(" "),a("h4",{attrs:{id:"数组插入元素的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组插入元素的过程"}},[t._v("#")]),t._v(" 数组插入元素的过程")]),t._v(" "),a("h4",{attrs:{id:"数组删除元素的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组删除元素的过程"}},[t._v("#")]),t._v(" 数组删除元素的过程")]),t._v(" "),a("h4",{attrs:{id:"数组的扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组的扩容"}},[t._v("#")]),t._v(" 数组的扩容")]),t._v(" "),a("p",[t._v("因为数组内存连续性的要求,所以在申请内存的时候必须指定数组的空间大小,而这个空间大小在申请后就已经固定无法变更,所以数组自己无法扩容,只是我们人为用逻辑的方式对数组进行扩容，我们可以通过创建一个更大的新数组，然后把原数组的元素一个个迁移到新数组上来，通过这种方式进行人为的扩容")]),t._v(" "),a("h2",{attrs:{id:"线性表的链表示-链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性表的链表示-链表"}},[t._v("#")]),t._v(" 线性表的链表示(链表)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("链表")]),t._v(" "),a("p",[t._v("链表是一种"),a("strong",[t._v("不要求内存连续的顺序存储")]),t._v("的数据结构,他的数据节点可以分布在内存中的各个地方,节点之间是各自记录下一个元素的指针,通过指针把所有节点串联起来组成了一条链式的结构")]),t._v(" "),a("p",[a("strong",[t._v("组成部分")]),a("br"),t._v("\n一个完整的链表需要由以下几个部分组成:")]),t._v(" "),a("ul",[a("li",[t._v("头指针")]),t._v(" "),a("li",[t._v("节点\n"),a("ul",[a("li",[t._v("头节点")]),t._v(" "),a("li",[t._v("首元节点")]),t._v(" "),a("li",[t._v("其他节点")])])])]),t._v(" "),a("p",[a("strong",[t._v("基本操作")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操作")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("List_Init(LinkList &L)")]),t._v(" "),a("td",[t._v("创建")])]),t._v(" "),a("tr",[a("td",[t._v("List_HeadInsert(LNode &L)/List_TailInsert(LNode &L)")]),t._v(" "),a("td",[t._v("插入(头插法/尾插法)")])]),t._v(" "),a("tr",[a("td",[t._v("List_deleate(ElemType e)")]),t._v(" "),a("td",[t._v("删除")])]),t._v(" "),a("tr",[a("td",[t._v("LNode *GetElem(LinkList L,int i) / LNode *LocateElem(LinkList L,ElemType e)")]),t._v(" "),a("td",[t._v("查找(按序号/按值查找)")])]),t._v(" "),a("tr",[a("td",[t._v("Length(&L)")]),t._v(" "),a("td",[t._v("求表长")])]),t._v(" "),a("tr",[a("td",[t._v("Empty(&L)")]),t._v(" "),a("td",[t._v("判空操作")])])])]),t._v(" "),a("ul",[a("li",[t._v("头插法"),a("br"),t._v("\n从一个空表开始，重复读入数据，生成新结点，将读入数据存放到新结点的数据域中，然后将新结点插入到当前链表的表头节点之后，逆序的链表")]),t._v(" "),a("li",[t._v("尾插法"),a("br"),t._v("\n从一个空表开始，重复读入数据，生成新结点，将读入数据存放到新结点的数据域中，然后将新结点插入到当前链表的表尾结点之后，顺序的链表")])])]),t._v(" "),a("h4",{attrs:{id:"单链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单链表"}},[t._v("#")]),t._v(" 单链表")]),t._v(" "),a("h4",{attrs:{id:"双向链表-双链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向链表-双链表"}},[t._v("#")]),t._v(" 双向链表(双链表)")]),t._v(" "),a("h4",{attrs:{id:"循环链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[t._v("#")]),t._v(" 循环链表")]),t._v(" "),a("ul",[a("li",[t._v("单循环链表——在单链表中，将终端结点的指针域NULL改为指向表头结点或开始结点即可。")]),t._v(" "),a("li",[t._v("多重链的循环链表——将表中结点链在多个环上。")])]),t._v(" "),a("p",[t._v("约瑟夫环")]),t._v(" "),a("h4",{attrs:{id:"静态链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态链表"}},[t._v("#")]),t._v(" 静态链表")])])}),[],!1,null,null,null);s.default=n.exports}}]);