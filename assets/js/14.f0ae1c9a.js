(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{335:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"oracle存储过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle存储过程"}},[s._v("#")]),s._v(" Oracle存储过程")]),s._v(" "),t("h2",{attrs:{id:"_1-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-规范"}},[s._v("#")]),s._v(" 1. 规范")]),s._v(" "),t("p",[s._v("TODO")]),s._v(" "),t("h2",{attrs:{id:"_2-循环使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-循环使用"}},[s._v("#")]),s._v(" 2. 循环使用")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * 判断数据存在则清除数据\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Created on 2019/11/20 by 04012 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Local variables here")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    has "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    lsql varchar2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32767")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n    i:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    has:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Test statements here")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("loop")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" has "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tran_log l "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cus_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'LXY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" has "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--delete from fnc_cus_tran_log l where l.cus_name='LXY';")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--commit;")]),s._v("\n          dbms_output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清除数据'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--execute immediate lsql;")]),s._v("\n        i:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("loop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);