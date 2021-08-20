/*
完成一个函数, 从给定字符串中找出最长回环子串并打印出来
abcbdef -> bcb
a       -> a
*/

class Item {
	constructor (val) {
		this.value = val.value
		this.next = val.next
	}
	
}
class LinkedList {
	constructor () {
		this.head = null
		this.length = 0
		this.current = null
	}
	getLastItem () {
		this.current = this.head
		while (this.current.next) {
			this.current = this.current.next
		}
		return this.current
	}
	getNextItem (node) {
		console.log('getNextItem fun')
		this.current = node
		this.current = this.current.next ? this.current.next : this.head
		return this.current
	}
	push (val) {
		if (this.length <= 0) {
			this.head = new Item(val)
			console.log('this.head -------------------', this.head)
		} else {
			let newItem = new Item(val)
			this.current = this.getLastItem()
			this.current.next = newItem
		}
		this.length++
	}
}


function strToLinkedList (str) {
	let len = str.length
	let linkedDemo = new LinkedList()
	for (let i = 0; i < len; i++) {
		linkedDemo.push({
			value: str[i],
			next: null
		})
	}
	return linkedDemo
}
function solution (str) {
	if (str.length <= 1) {
		return str
	}
	let listOriginal1 = strToLinkedList(str)
	let listOriginal2 = strToLinkedList(str)
	let target = []
	let fast = listOriginal1.getNextItem(listOriginal1.head)
	let slow = listOriginal2.head
	while (fast !== null && slow !== null && fast.value !== slow.value) {
		fast = listOriginal1.getNextItem(listOriginal1.getNextItem(fast))
		slow = listOriginal2.getNextItem(slow)
	}
	if (fast === null || slow === null) return false
	let startPoint = slow
	target.push(slow.value)
	slow = listOriginal2.getNextItem(slow)
	while (slow.value !== startPoint.value) {
		target.push(slow.value)
		slow = listOriginal2.getNextItem(slow)
	}
	target.push(slow.value)
	slow = listOriginal2.getNextItem(slow)
	return target.join('')
}

let res = solution('abcbdef') // abcbdef
console.log('res', res)