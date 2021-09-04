/*
 * @Description: 阿里的算法题
 * @Author: Pony
 * @Date: 2021-09-02 08:52:45
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-02 09:47:50
 * @FilePath: /PonyDailyReview/阿里算法题.js
 */


/* 实现一个方法fn(str), 输入 字符串 `['a.b.c=1','a.b.d=2']`，输出
{a: {b: {c: 1, d: 2}}}
*/
const newArr = []
const a = ['a.b.c=1','a.b.d=2'];
a.map(i => {
    let baseArr = i.split('.');
    let newObj = {}
    baseArr.map(b => {
        let keys = Object.keys(newObj);
        if (keys.length == 0) {
            newObj[b] = {}
        } else {
            // 子集的key是空的
            let childKeys = Object.keys(newObj[keys[0]])
            if (childKeys.length == 0) {
                newObj[keys[0]][b] = {}
            } 
            if (b.includes('=')) {
               // 再下一级别
               let sonKeys = Object.keys(newObj[keys[0]][childKeys[0]])
               let arr = b.split('=')
               console.log(arr)
               // todo
               if (sonKeys.length == 0) {
                    let targetI = newObj[keys[0]][childKeys[0]]
                    targetI[arr[0]] = arr[1]
                    console.log(targetI)
               }
            }
        }
    })
    newArr.push(newObj)
})
console.log(newArr)



/* 把时间戳转成日期 大概是 2021/2/1 00:00:00 */






/* 写一个方法fn(a, b), 实现2-36进制的转换，例如输入fn(23, 12)，输出1b */