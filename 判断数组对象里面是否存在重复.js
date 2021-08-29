/*
 * @Description: 判断两个数组对象里否相等
 * @Author: Pony
 * @Date: 2021-08-29 22:30:21
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-29 23:06:21
 * @FilePath: /PonyDailyReview/判断数组对象里面是否存在重复.js
 */
function judgeObject(objFirst, objSecond) {
    // 拿到所有对象的键
    let objOneKeys = Object.keys(objFirst)
    let objSecKeys = Object.keys(objSecond)
    if (objOneKeys.length != objSecKeys.length) { // 两个对象的键的数量不一样的 返回 false
        return false
    }
    // 循环键
    let keysArr = [];
    objOneKeys.map(i => {
        // 第二个里面是否包含
        if (objSecKeys.includes(i)) {
            objFirst[i] == objSecond[i] && keysArr.push(i)
        } 
    })
    return keysArr.length == objOneKeys.length
}
function looperArrObj(arrFist, arrSec) {
    if (arrFist.length != arrSec.length) {
        return  false
    }
    let resultArr = []
    arrFist.map((i, index) => {
        let result = judgeObject(i, arrSec[index])
        resultArr.push(result)
    })
    return resultArr.every(i => i === true)
}
let a = [{ name: 1, age: 18 }, { name: 2, age: 18 }]
let b = [{ name: 1, age: 18 }, { name: 2, age: 18 }]
console.log(looperArrObj(a, b))