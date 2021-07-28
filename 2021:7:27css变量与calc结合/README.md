<!--
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-07-28 22:44:05
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-28 23:36:19
-->
# Css的一些小技巧
![Build Status](https://travis-ci.org/Stevenzwzhai/plugs.svg?branch=master)

### 1.动态计算:

     Calc（）用于计算单位，数值、长度、角度、时间和百分比作为参数。由于执行数学表达式后返回运算后的计算值，可以减少大量的人工计算甚至无需人工计算。

  * 数值： 整数、浮点数
  * 长度： px、em、rem、vw、 vh
  * 角度：deg、 turn
  * 时间：s、ms
  * 百分比：%

### 2.Calc() 谨记一下特点：

  * 四则运算： 只能使用+、-、*、/作为运算符号
  * 运算规则： 遵循加减乘除的顺序，可以使用()提示运算等级,calc(100% - (10vw * 2vw))
  * 符号连接： 每个符号必须使用额外的空间,calc(100% - 20px)
  * 混合运算： 可以混合不同单位动态计算
### 3.vue项目和react项目页面跳转的时候存在滚动条抖动

        padding-right: calc(100vw - 100%)

### 3.移动端开发的时候不考虑到版本兼容性，下面一行css秒杀所有移动端: 
        font-size(100vw / 7.5);

### 4.event提供的八个偏移量：
* screenX/screenY:  相对于屏幕区域的左上角， 若发生了滚动行为，则相对高区域定位
* pageX/pageY: 相对于网页区域左上角定位
* clientX/clientY: 相对于浏览器可是区域左上角定位
* offsetX/offsetY: 相对父节点左上角定位，若无父节点就相对于html或body定位

<font color="#1E90FF">详细效果见： index.html</font>
