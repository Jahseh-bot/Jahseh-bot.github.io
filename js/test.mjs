//怎么进入if？
//if(a.x === 1 && a.x === 2 && a.x === 3) {
//   console.log(a)
// }
// let a = {
//   _x: 0
// }
// Object.defineProperty(a,'x',{
//   get:function(){
//     this._x++;
//     console.log(this._x)
//     return this._x;
//   }
// })
// if(a.x === 1 && a.x === 2 && a.x === 3) {
//   console.log('get through!!!')
// }


// let b = {
//   x: 1,
//   y: 2
// }
// handler =  {
//   get: function(target,name) {
//     console.log(target[name])
//   }
// }
// let p = new Proxy(b,handler)

// console.log()

// let patt = /^(https:\/\/steamcommunity.com\/tradeoffer\/new\/\?partner=)/g
// let str = 'https://steamcommunity.com/tradeoffer/new/?partner=fsdafasdfasf'
// console.log(patt.test(str))

// let caf\u00e9 = 1
// console.log('\u{00e9}')

// let mill = 1_000_000_000
// console.log(mill)

// let inf = null
// let inf1 = undefined
// console.log(globalThis)

// function deepClone(target) {
//   let res;
//   if (target && target instanceof Array) {
//     res = []
//     for (let i in target) {
//       res[i] = deepClone(target[i])
//     }
//   }
//   else if (target && target instanceof Object) {
//     res = {}
//     for (let key in target) {
//       res[key] = deepClone(target[key])
//     }
//   }
//   else if (target === null) {
//     res = null
//   }
//   else {
//     res = target
//   }
//   return res
// }

// let obj1 = {
//   a: {
//     a1: 1,
//     a2: [1, null, {
//       c: 0
//     }]
//   },
//   b: 3
// }
// let obj3 = JSON.parse(JSON.stringify(obj1))
// console.log(obj3)
// let obj2 = deepClone(obj1)
// obj2.a.a2.c = [2, 3, 4]
// console.log(obj2.a.a2.c instanceof Object)
// console.log({ obj1: obj1.a.a2 })
// console.log({ obj2: obj2.a.a2 })

// let arr = [1,1,2,2,3,3,3,4,4,4]
// console.log([...new Set(arr)])
// let obj1 = {
//   a: {
//     a1: 1,
//     a2: [1, null, {
//       c: 0
//     }]
//   },
//   b: 3
// }
// console.log(Object.entries(obj1))
// let arr = ['a','b',,'v']
// for(let i in arr) {
//   console.log(arr[i])
// }
// let reg = /^a/gi
// console.log(reg.exec('Abc'))
// function deadLoop() {
//   console.log(1)
//   deadLoop()
// }

// deadLoop()
// let a = 1
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('-------------')
//     resolve(new Promise((resolve, reject) => {
//       resolve(1)
//     }))
//   }, 1000)
// })

// p.then(res => {
//   console.log(res)
// })
// let a = {
//   b: 1,
//   logB() {
//     console.log(this.b)
//   }
// }
// let a0 = {
//   b: 2
// }

// a0.logB = a.logB

// a0.logB()

// let arr = [1, 2, 3, 4]
// let sum = arr.reduce((x, y) => x > y ? x : y)
// console.log(arr.every(x => x <= 4));

// (() => {
//   console.log(this)
// })()
// let obj =  {
//   fn1: () => {
//     console.log(this)
//     fn2()
//     function fn2() {

//       // console.log(this)
//     }
//   }
// }
// obj.fn1()


// let mp = new Map([['jah',23],['j',23]])
// console.log(mp)

//求字符串最长无重复字符子字符串长度
// function getMaxLength(s) {
//   let hashMap = new Map;
//   let start = 0;
//   let end = 0;
//   let maxLength = 0;
//   while(end < s.length) {
//     if(!hashMap.has(s[end])) {
//       hashMap.set(s[end++],1)
//     }
//   }
// }
// 闭包空间
// function fn() {
//   let i = 1;
//   return function fn1() {
//     console.log(i++)
//   }
// }
// let fn2 = fn()
// fn2()
// fn2()

// let arr = [1,2,3,4,5]
// console.log(arr[Symbol.iterator]().next())
