## Chrome 调试的小技巧

### 花式console
* <font color="#ff502c">console.log()、console.error()、console.warn()、console.info()</font>打印常规数据信息

* <font color="#ff502c">console.table()</font> 表格形式的打印复杂数据结构
* <font color="#ff502c">console.group()、console.groupEnd()</font> 分组打印信息
* <font color="#ff502c">console.assert()</font> 条件打印 
* <font color="#ff502c">console.dir</font> 递归打印对象的所有属性
* <font color="#ff502c">console.trace()</font> 追踪函数调用轨迹
* 带样式打印

<div align="left">
    <img align="left" src="./img/img1.png" alt="console.log" />
</div>


### 伪类元素调试
<div align="left">
    <img align="left" src="./img/img2.png" alt="伪类元素调试" />
</div>

### 查看DOM节点绑定事件
 5<div align="left">
    <img align="left" src="./img/img3.png" alt="查看DOM节点绑定事件" />
</div>

### network过滤器
 5<div align="left">
    <img align="left" src="./img/img4.png" alt="network过滤器" />
</div>
* domain:仅显示来自指定域的资源。您可以使用通配符字符（*）纳入多个域
* is：使用 is:running 可以查找 WebSocket 资源，is:from-cache 可查找缓存读出的资源
* Larget-than：显示大于指定大小的资源（以字节为单位）。将值设为1000等同于设置为1k
* scheme：显示通过未保护HTTP（scheme:http）或受保护 HTTPS（scheme:https）检索的资源。
* method：显示通过指定 HTTP 方法类型检索的资源

### 查看内存消耗
* 查看某个操作内存消耗情况，可以使用 HEAP SNAPSHOTS功能进行记录。
<div align="left">
    <img align="left" src="./img/img5.png" alt="查看内存消耗" />
</div>

### 重新发送请求
<div align="left">
    <img align="left" src="./img/img6.png" alt="重新发送请求" />
</div>