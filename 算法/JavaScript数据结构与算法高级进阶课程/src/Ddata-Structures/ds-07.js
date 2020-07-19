/**
 * 堆
 * 1.必须是完全二叉树
 * 2.任一节点的值是其子树所有节点的最大值或最小值
 * 
 */


/**
 * 根据字符出现频率排序(Leet Code 451)
 * 
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列
 * 
 * 输入 "tree"
 * 输出 "eert"
 * 
 */

// 创建堆的类
class Heap{
  // constructor(data) {
  //   this.data = data
  // }
  constructor(str) {
    let map = new Map()
    str.split('').forEach(item => {
      if(map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    })
    this.map = map
    this.data = Array.from(map.values())
  }

  sort() {
    let iArr = this.data
    let n = iArr.length
    if(n < 2) {
      return iArr
    } else {
      for(let i=Math.floor(n/2); i>=0; i--) {
        Heap.maxHeap(iArr, i, n)
      }
      for(let j=0; j<n; j++) {
        Heap.swap(iArr, 0, n-1-j)
        Heap.maxHeap(iArr, 0, n-1-j-1)
      }
      return iArr
    }
  }

  toString() {
    let arr = this.sort()
    let str = []
    while(arr.length) {
      let top = arr.pop()
      for(let [k,v] of this.map) {
        if(v === top) {
          str.push(k.repeat(v))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }

  static swap(arr, a, b) {
    if(a === b) return;
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }

  static maxHeap(Arr, i, size) {
    // 左节点索引
    let l = i*2 + 1
    // 右节点索引
    let r = i*2 + 2
    let largest = i
    // 父节点i和左节点l比较，取最大值
    if(l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    if(r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if(largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeap(Arr, largest, size)
    }
  }
}


/*
let heap = new Heap([1,10,9,5,3,11])
console.log( heap.sort() )  // 1,3,5,9,10,11
*/

let heap = new Heap('skdfwejjjskeiukkkk')



/**
 * 超级丑数(Leet Code 313)
 * 
 * 超级丑数是指其所有质因数都是长度为k的质数列表primes中的整数
 * 
 * 输入 n=12, primes=[2,7,13,19]
 * 输出 32
 */


class Ugly{
  constructor(n, primes) {
    this.n = n
    this.primes = primes
  }

  getAll() {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while(res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for(; k<l; k++) {
        if(!primes.find(item => item === arr[k])) {
          break
        }
      }
      // k === l有两种情况
      // 一是当前的数没有质因数
      // 二是所有质因数都在指定列表中
      if(k === l) {
        if(l === 0) {
          if(primes.find(item => item === i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }

  // 计算指定正真数n的质因数
  static getPrimes(n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for(let i=2; i<n/2 + 1; i++) {
        if(n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}


// 采用堆数据结构查找，提升性能

class HeapSearch{
  constructor(arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
  }

  sort() {
    let iArr = this.data
    let n = iArr.length
    if(n < 2) {
      return iArr
    } else {
      for(let i=Math.floor(n/2); i>=0; i--) {
        Heap.maxHeap(iArr, i, n)
      }
      return iArr
    }
  }

  find(val, i=0) {
    let arr = this.data
    if(val > arr[i] || i > this.max) {  // 没找到
      return false
    } else if(val === arr[i]) {
      return val
    } else {
      return this.find(val, i*2 + 1) || this.find(val, i*2 + 2)
    }
  }


  static swap(arr, a, b) {
    if(a === b) return;
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }

  static maxHeap(Arr, i, size) {
    // 左节点索引
    let l = i*2 + 1
    // 右节点索引
    let r = i*2 + 2
    let largest = i
    // 父节点i和左节点l比较，取最大值
    if(l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    if(r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if(largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeap(Arr, largest, size)
    }
  }
}


class HeapUgly{
  constructor(n, primes) {
    this.n = n
    this.primes = new HeapSearch(primes)
  }

  getAll() {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while(res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for(; k<l; k++) {
        if(!primes.find(arr[k]) {
          break
        }
      }
      // k === l有两种情况
      // 一是当前的数没有质因数
      // 二是所有质因数都在指定列表中
      if(k === l) {
        if(l === 0) {
          if(primes.find(i) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }

  // 计算指定正真数n的质因数
  static getPrimes(n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for(let i=2; i<n/2 + 1; i++) {
        if(n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}








