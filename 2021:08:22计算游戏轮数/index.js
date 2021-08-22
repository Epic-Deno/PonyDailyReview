/*
 * @Description: 计算游戏轮数
 * @Author: Pony
 * @Date: 2021-08-22 22:54:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-22 23:55:33
 * @FilePath: /PonyDailyReview/2021:08:22计算游戏轮数/index.js
 */

// # 规则
// #
// # 游戏每一局有10轮
// # 每一轮有2次抛球机会
// # 基本规则：击倒几个瓶子就得几分。例如 3 4, 2 7 -> [7, 9]
// # 特殊规则1(spares): 每一轮第二抛击倒所有瓶子，那当前轮所得分为10+下一抛击倒瓶子数
// # 例如 3 7, 2 8, 3 5  -> [12, 13, 8]
// # 特殊规则2(strikes): 每一轮第一抛击倒所有瓶子，那当前轮所得分为10+下两抛击倒瓶子数
// # 例如 10, 2 8, 3 5 -> [20, 13, 8]

//  循环10次  一次有两个Radom 一共10个球
// 每一轮的得分等于 两次 抛掷击倒数量的和
// 每一轮第二次抛击如果把所有的击中的，这轮的得分就等于下一轮的第一次击中数量 + 10
// 每一轮 第一次抛击击中所有的就等于， 下一轮两次抛掷击中和加上10

const baseArr = [
    [3, 7],
    [2, 8],
    [3, 5],
    [10, 0],
    [2, 8],
    [3, 5],
    [2, 8],
    [4, 2],
    [4, 6],
    [10, 0],
] // [12, 13, 8, 20, 13, 8, 14, 6, 20, 10]

function calcTotalArr(newArr) {
    let targetArr = new Array()

    newArr.map((i ,index) => {
        // i [a, b]
        // 每一项是否是 10 若是10 那么 当前的和就是 加上下一个 index + 1 第一项
       
        if (i[0] == 10) {
            let currentlyTotal = 10 + (newArr[index + 1] ? (newArr[index + 1][0] + newArr[index + 1][1]) : 0);
           
            targetArr.push(currentlyTotal)
        } else if (i[1] + i[0] === 10) {
            let currentlyTotal = 10 + (newArr[index + 1] ? newArr[index + 1][0] : 0);
            // console.log(currentlyTotal)
            targetArr.push(currentlyTotal)
        } else {
            let currentlyTotal = i[0] + i[1];
            targetArr.push(currentlyTotal)
        }
    })
    return targetArr
}
let allTotalArr = calcTotalArr(baseArr)
let sumValue = allTotalArr.reduce((total, item) => total + item, 0)
console.log(`所有的结果是：`, allTotalArr)
console.log(`所有的和是：`, sumValue)