(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(s,a,e){"use strict";e.r(a);var t=e(12),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle关于shell执行语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle关于shell执行语句"}},[s._v("#")]),s._v(" Oracle关于Shell执行语句")]),s._v(" "),a("h2",{attrs:{id:"执行方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行方式"}},[s._v("#")]),s._v(" 执行方式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sqlplus -s / as sysdba "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" run.log")]),s._v("\nset lines 300\nprompt 检查待用的数据库表空间TBS是否存在:\nSELECT 1 FROM dba_tablespaces t where t.TABLESPACE_NAME = 'TBS';\nprompt\nprompt 检查数据库表空间大小及使用情况:\ncolumn TABLESPACE_NAME format A25;\ncolumn TS_SIZE format 999999999;\nSELECT t.tablespace_name, round(SUM(bytes / (1024 * 1024)), 0) ts_size FROM dba_tablespaces t, dba_data_files d\nWHERE t.tablespace_name = d.tablespace_name GROUP BY t.tablespace_name;\nprompt\nselect dbf.tablespace_name,dbf.totalspace as \"totalspace(M)\",dbf.totalblocks,dfs.freespace,dfs.freeblocks,(1-(dfs.freespace/dbf.totalspace))*100 as usedPercent,\n       dbf.maxbytes as \"maxspace(M)\"\nfrom (select t.tablespace_name,sum(t.bytes)/1024/1024 totalspace,sum(t.blocks) totalblocks,sum(t.maxbytes)/1024/1024 as maxbytes from dba_data_files t group by t.tablespace_name) dbf,\n     (select tt.tablespace_name,sum(tt.bytes)/1024/1024 freespace,sum(tt.blocks) freeblocks from dba_free_space tt group by tt.tablespace_name) dfs\nwhere trim(dbf.tablespace_name)=trim(dfs.tablespace_name);\nprompt\nprompt 检查数据库字符集:\ncolumn NLS_CHARACTERSET format A20;\nselect a.VALUE AS NLS_CHARACTERSET from nls_database_parameters a where a.PARAMETER='NLS_CHARACTERSET';\nprompt 检查字符计算单位:\ncolumn DISPLAY_VALUE format A20;\nselect a.DISPLAY_VALUE from v\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$parameter")]),s._v(" a where a.NAME = 'nls_length_semantics';\nprompt 检查中间库字符集:\ncolumn PARAMETER format A50;\ncolumn VALUE format A50;\nSELECT * FROM NLS_DATABASE_PARAMETERS ORDER BY PARAMETER;\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("p",[s._v("空行识别")])])}),[],!1,null,null,null);a.default=n.exports}}]);