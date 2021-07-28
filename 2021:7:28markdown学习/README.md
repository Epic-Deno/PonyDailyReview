<!--
 * @Description: jsx渲染的的写法
 * @Author: Pony
 * @Date: 2021-07-29 00:28:12
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-29 00:59:27
-->
# 有关于jsx去渲染带html标签的字符串

 ## 1.Vue中插入HTML代码的方法

<hr>

 ### 1.1 使用v-html

```
    const text = `<p>Hello Pony</p>`

    <template>
        My name is Pony.
        <p v-html="text"></p> 
    </template>
```
### 1.2 渲染函数
   **<font color="#FF7F50">渲染函数：这是通过对VNode（虚拟DOM）的操作来生成</font>**
   ```
    text() {
        render: (h) => {
            h(
                'div',
                [
                    h('p', 'hello'),
                    'pony!'
                ]
            )
        }
    }
    <p>{{this.text}}</p>
   ```
### 1.3 JSX
  **<font color="#FF7F50">JSX：这个方法在React使用最为广泛，但是Vue中使用需要安装<font color="#228B22">[Babel插件](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2Fvuejs%2Fbabel-plugin-transform-vue-jsx)</font></font>**

  ```
    text() {
        return (<p>Hello Pony</p>)
    }
    <p>{{ this.text() }}</p>
  ```
### 1.4 domPropsInnerHtml
  **<font color="#FF7F50">domPropsInnerHtml: 如果说JSX在vue很少用到，那么这个东西就更少有人使用到了</font>**
  ```
    const newText = '<p>how are you?</p>'
    text() {
        return (
            <p>
                Hello Pony
                <p domPropsInnerHtml={ this.newText }></p>
            </p>
        )
    }
    <p>Hi Pony {{ this.text() }}</p>
```
****
## 2. React当中实现
**<font color="#FF7F50">使用 dangerouslySetInnerHTML={{ __html: String }}</font>**
```
    const text = '<p>Hi, Pony</p>'
    const pony = () => (
        <>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </>
    )
```