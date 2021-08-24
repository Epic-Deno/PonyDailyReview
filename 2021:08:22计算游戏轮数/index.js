/*
 * @Description: 计算游戏轮数
 * @Author: Pony
 * @Date: 2021-08-22 22:54:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-24 00:20:06
 * @FilePath: /2021:08:22计算游戏轮数/index.js
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

const totalScore = arr => {
};

// game with no strikes or spares
const scores_1 = '23  23  23  23  23  23  23  23  23  23';
   // frames:  5,  5,  5,  5,  5,  5,  5,  5,  5,  5
   // total:   5, 10, 15, 20, 25, 30, 35, 40, 45, 50
const solution_1 = 50;

// scores game with spares
const scores_2 = '2/  32  23  23  23  23  23  23  23  23';
   // frames: 13,  5,  5,  5,  5,  5,  5,  5,  5,  5
   // total:  13, 18, 23, 28, 33, 38, 43, 48, 53, 58
const solution_2 = 58;

// scores game with strikes
const scores_3 =  'X  23  23  23  23  23  23  23  23  23';
   // frames: 15,  5,  5,  5,  5,  5,  5,  5,  5,  5
   // total:  15, 20, 25, 30, 35, 40, 45, 50, 55, 60
const solution_3 = 60;

// scores game with consecutive strikes
const scores_4 =  'X   X   X  23  23  23  23  23  23  23';
        // frames: 30, 22, 15, 5,  5,  5,  5,  5,  5,  5
        // total:  30, 52, 67, 72, 77, 82, 87, 92, 97, 102
const solution_4 = 102;

// scores game with spare proceeding strike
const scores_5 =  'X  2/  23  23  23  23  23  23  23  23';
         // frames: 20, 12,  5,  5,  5,  5,  5,  5,  5,  5
         // total:  20, 32, 37, 42, 47, 52, 57, 62, 67, 72
const solution_5 = 72;


// const baseArr = [
//     [10, 0],
//     [10, 0],
//     [10, 0],
//     [2, 3],
//     [2, 3],
//     [2, 3],
//     [2, 3],
//     [2, 3],
//     [2, 3],
//     [2, 3],
// ] 

// function calcTotalArr(newArr) {
//     let targetArr = new Array()

//     newArr.map((i ,index) => {
//         // i [a, b]
//         // 每一项是否是 10 若是10 那么 当前的和就是 加上下一个 index + 1 第一项
       
//         if (i[0] == 10) {
//             let currentlyTotal = 10 + (newArr[index + 1] ? (newArr[index + 1][0] + newArr[index + 1][1]) : 0);
           
//             targetArr.push(currentlyTotal)
//         } else if (i[1] + i[0] === 10) {
//             let currentlyTotal = 10 + (newArr[index + 1] ? newArr[index + 1][0] : 0);
//             // console.log(currentlyTotal)
//             targetArr.push(currentlyTotal)
//         } else {
//             let currentlyTotal = i[0] + i[1];
//             targetArr.push(currentlyTotal)
//         }
//     })
//     return targetArr
// }
// let allTotalArr = calcTotalArr(baseArr)
// let sumValue = allTotalArr.reduce((total, item) => total + item, 0)
// console.log(`所有的结果是：`, allTotalArr)
// console.log(`所有的和是：`, sumValue)

// 第一步 先把数据做成一个二维数组
function splitAllString(Str) {
   let baseArr = Str.split(" ").filter(i => i != "")
   // 一维拆分成二维数组
   let finnallyArr = baseArr.map(i => {
      // 分成两个
      let item = i.split("")
      if (item.some(a => a == 'X')) {
         item[0] = 10 
      }
      if (item.some(a => a == '/')) {
         item[1] = 10 - item[0]
      }
      return item // 分成一个二维数组
   })
   return finnallyArr
}
// console.log(splitAllString(scores_5))
let baseStringArr = splitAllString(scores_5)
console.log(baseStringArr)
// 计算分数
function calcTotalArr(newArr) {
    let targetArr = new Array()
   newArr.map((i, index) => {
      let currentlyTotal = 0;
      if (i[0] == 10) {
         // 第一个全部击中等于下两次击中的和
         let secondItem = newArr[index + 1];
         if (secondItem && secondItem.length < 2) {
            let thirdItem = newArr[index + 2];
            currentlyTotal = 10
            currentlyTotal +=Number(secondItem[0]) + (thirdItem ? Number(thirdItem[0]) : 0);
         } else if (secondItem && secondItem.length == 2) {
            currentlyTotal = 10
            currentlyTotal +=Number(secondItem[0]) + Number(secondItem[1])  
         } else {
             currentlyTotal = 10
         } 
      } else if (Number(i[1]) + Number(i[0]) === 10) {
            currentlyTotal = 10
            currentlyTotal +=newArr[index + 1] ? Number(newArr[index + 1][0]) : 0;  
      } else {
         currentlyTotal += Number(i[0]) + Number(i[1]);
      }
      targetArr.push(currentlyTotal)
   })

   return  targetArr

}

const allTotalArr = calcTotalArr(baseStringArr)
let sumValue = allTotalArr.reduce((total, item) => total + item, 0)
console.log(`所有的结果是：`, allTotalArr)
console.log(`所有的和是：`, sumValue)








































