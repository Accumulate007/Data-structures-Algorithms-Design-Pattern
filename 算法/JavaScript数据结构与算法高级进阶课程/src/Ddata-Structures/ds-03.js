/**
 * 设计循环队列(Leet Code 622)
 * 
 * 
 */


class MyCircularQueue {
  constructor(k) {
    // 存储数据长度为K的数据结构
    this.list = Array(k)
    // 队首指针
    this.front = 0
    // 队尾指针
    this.rear = 0
    // 数据长度
    this.max = k
  }

  enQueue(num) {
    if(this.isFull()) return false;
    this.list[this.rear] = num
    this.rear = (this.reat + 1) % this.max
    return true
  }

  deQueue() {
    let v = this.list[this.front]
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return v
  }

  isEmpty() {
    return this.front === this.reat && !this.list[this.front]
  }

  isFull() {
    return this.front === this.reat && !!this.list[this.front]
  }

  Front() {
    return this.list[this.front]
  }

  Rear() {
    let rear = this.rear - 1
    return this.list[rear < 0 ? (this.max - 1) : rear]
  }

}




/**
 * 任务调度器(Leet Code 621)
 * 
 * 给定一个字符数组表示的CPU需要执行的任务列表，其中包含使用大写的A-Z字母表示的26种不同种类的任务。
 * 任务可以按任意顺序执行，并且每个任务都可以在1个单位时间内执行完，
 * CPU在任何一个单位时间内都可以执行一个任务，或者在待命状态
 * 然而，两个相同种类的任务之间必须有长度为n的冷却时间
 * 因此至少有连续n个单位时间内CPU在执行不同的任务，或者在待命状态
 * 你需要计算完成所有任务所需要的最短时间
 * 
 * 
 * 输入： ["A", "A", "A", "B", "B", "B"], n = 2
 * 输出： 8
 * 
 * 解释，执行顺序： A -> B -> (待命) -> A -> B -> (待命) -> A -> B
 */


function a(tasks, n) {
  // 表示队列最终执行的结果
  let q = ''
  // 存储归类
  let Q = {}

  // 对内容进行归类
  tasks.forEach(item => {
    if(Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })

  while(1) {
    let keys = Object.keys(Q)
    if(!keys[0]) {
      break
    }

    let tmp = []
    for(let i=0; i<= n; i++) {
      let max = 0
      let key 
      let pos
      keys.forEach((item, idx) => {
        if(Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      if(key) {
        tmp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        if(Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += tmp.join('').padEnd(n+1, '-')
  }

  // 处理边界，最后不要出现冷却时间
  q = q.replace(/-+$/g, '')
  return q.length
}




