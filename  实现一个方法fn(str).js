/* 实现一个方法fn(str), 输入 字符串 `['a.b.c=1','a.b.d=2']`，输出
{a: {b: {c: 1, d: 2}}}

*/


let str = `['a.b.c=1','a.b.d=2','a.f=2','d.f=2']`
const defaultRE = /\'((?:.|\r?\n)+?)\'/g;  // 匹配 ''中的内容
function fn(str) {
  let objs = []
  let match;
  let lastIndex = defaultRE.lastIndex = 0;
  while (match = defaultRE.exec(str)) {
    let index = match.index;
    let val = match[1].trim()
    objs.push(gen(val));
    lastIndex = index + match[0].length
  }
  // 生成每个对象
  function gen(str) {
    str = str.split('.');
    idx = str.length - 1;
    while (idx > -1) {
      var temp = {};
      if (str[idx].includes('=')) {
        temp[str[idx].split('=')[0]] = str[idx].split('=')[1];
      } else {
        temp[str[idx]] = obj;
      }
      obj = temp;
      idx--;
    }
    return obj
  }
  // 合并对象
  function assignObj(target = {}, sources = {}) {
    let obj = target
    for (let key in sources) {
      if (target.hasOwnProperty(key)) {
        obj[key] = assignObj(target[key], sources[key])
      } else {
        obj[key] = sources[key]
      }
    }
    return obj
  }
  return objs.reduce((prev, cur)=> assignObj(prev,cur,{}))
}

console.log(fn(str));
