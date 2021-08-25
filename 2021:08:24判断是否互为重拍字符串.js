/*
 * @Description: 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串
 * @Author: Pony
 * @Date: 2021-08-25 22:24:28
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-25 23:47:14
 * @FilePath: /PonyDailyReview/2021:08:24判断是否互为重拍字符串.js
 */

/**
 * 输入: s1 = "abc", s2 = "bca"
 * 输出: true 
 * 
 * 输入: s1 = "abc", s2 = "bad"
 * 输出: false
 * 
*/
// var CheckPermutation = function(s1, s2) {
//     if (s2.length != s1.length) return false
//     // 1. 把第一个拆分一个新的数组
//     let newStrArr = s1.split('')
//     let stringArr = []
//     const looper = (arrs, str) => {
//             // console.log(arrs)
//             if (arrs.length >= 2) {
//                 arrs.map(item => {
//                     // str+=item;
//                     let newStrings = str + item
//                     let nowArr = arrs.filter(i => i != item)
//                     looper(nowArr, newStrings)
//                 })
//             } else {
//                 // console.log(nowArr)
//                 str+=arrs[0]
//                 stringArr.push(str)
//                 // console.log(stringArr, 111)
//                 return
//             }
//     }
//     for (var a = 0; a < s2.length; a++) {
//         let str = ''
//         // if (index > 0) {
//             // 就是提取原有的数组里面删除这一样
//             str+=newStrArr[a]
//             let currentlyItem = newStrArr.filter(item => item != newStrArr[a])
//             // console.log(currentlyItem)
//            looper(currentlyItem, str)
//         // }
//     }
//     // console.log(stringArr)
//     return stringArr.some(i => i == s2)
// };
// var result = CheckPermutation("ahkiznwdgo","wipacyqkvq")
// console.log(result)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 //
 /*
 *  s1 = "hello"
 *  { h: 1, e: 1, l: 2, o: 1 }
 */
// 只要保证 s1的元素全在s2里面有就可以
var CheckPermutation = function(s1, s2) {
    // 先拿到S1的字母组合
    let targetObj = new Object()

    // 遍历s1
    for (var i of s1) {
        if (targetObj[i]) {
            targetObj[i]++ 
        } else {
            targetObj[i] = 1 
        }

    }
    // 遍历 s3
    for (var i of s2) {
        // 当前的键
        // 没有就直接出来
        if (!targetObj[i]) {
            return false
        } else {
            targetObj[i]--
            if (targetObj[i] == 0) { // 删除为0的数据
                delete targetObj[i]
            }
        }
    }
    return Object.keys(targetObj).length == 0
};
var result = CheckPermutation('abc', 'bca')
console.log(result)