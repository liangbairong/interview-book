---
title: 数据类型
order: 2
---

# 数据类型

JS 数据类型分为两大类，九个数据类型：  

- 原始类型  
- 对象类型

其中原始类型又分为七种类型，分别为： 
```javascript
boolean
number
string
undefined
null
symbol
bigint
```

对象类型分为两种，分别为：

其中 Object 中又包含了很多子类型，比如 `Array`、`RegExp`、`Math`、`Map`、`Set` 等等，也就不一一列出了。

原始类型存储在栈上，对象类型存储在堆上，但是它的引用地址还是存在栈上。

注意：以上结论前半句是不准确的，更准确的内容我会在闭包章节里说明。
