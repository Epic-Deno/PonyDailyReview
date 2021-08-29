/*
 * @Description: 面试题 01.03. URL化
 * @Author: Pony
 * @Date: 2021-08-26 00:36:32
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-26 00:51:59
 * @FilePath: /PonyDailyReview/面试题 01.03. URL化.js
 */
/**
 * 输入："Mr John Smith    ", 13
 * "Mr%20John%20Smith"
 * 
*/
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S, length) {
    // 字符串转成数组
    // let targetArr = S.split('')
    // targetArr = targetArr.splice(0, length);
    // let str = ""
    // for (var i = 0; i < length; i++) {
    //     str+= targetArr[i] == " " ? '%20' : targetArr[i]
    // }
    // let newArr= []
    // targetArr.map(i => {
    //     if (i == " ") {
    //         newArr.push('%20')
    //     } else {
    //         newArr.push(i)
    //     }
    // })
    // return newArr.join('')
    var newStr = S.slice(0, length)
    for (var i of newStr) {
        str+= i == " " ? '%20' : i
    }
    return str
    // return S.substr(0, length).replace(/\s/g, "%20")
};
var result = replaceSpaces("Mr John Smith    ", 13)
console.log(result)