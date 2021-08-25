/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-25 23:47:34
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-25 23:48:40
 * @FilePath: /PonyDailyReview/2021:08:23判定字符是否唯一.js
 */
/***
 * 输入: s = "leetcode"
 *输出: false 
 * /
/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    // 1.拆分出所有的字符数组
    let strArr = astr.split('');
    // 利用对象的特性
    let newObj = new Object()
    strArr.map(i => {
        if (!newObj[i]) {
            newObj[i] = 1
        }
    })
    let keysArr = Object.keys(newObj);
    return keysArr.length === strArr.length
};