/*
 * @Description: 函数的作用链
 * @Author: Pony
 * @Date: 2021-08-07 22:20:06
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-07 22:48:36
 */

let index = 0

let funcArray = new Array()

const next = () => {
    let targetFn = funcArray[index]
    index++
    typeof targetFn === 'function' && targetFn()
}

function BaseFn (name) {
    funcArray.push(function() {
        console.log(name)
        next()
    })
}

function lazy (name) {
    return new BaseFn(name)
}

BaseFn.prototype.eat = function (food) {
    funcArray.push(function()  {
        console.log(food)
        next()
    })
    return this
}

BaseFn.prototype.hobby = function (sth) {
    funcArray.push(function()  {
        console.log(`my hobby is ${sth}`)
        next()
    })
    return this
}

BaseFn.prototype.sleep = function (delayTime) {
    funcArray.push(function() {
        setTimeout(() => {
            console.log('sleep')
            next()
        }, delayTime)
    })
    return this
}

lazy('man').sleep(1000).eat('rice').sleep(2000).eat('meet').sleep(1000).hobby('coding')
next()