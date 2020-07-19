/**
 *排序链表(Leet Code 148)
 * 
 * 在O(nlogn)时间复杂度和常数级空间复杂度下，对链表进行排序
 * 
 * 
 * 快速排序
 * 先选择一个基准元素
 * 遍历所有元素，小于基准元素的放在基准的左边，大于基准的放在基准的右边
 * 左边的再选一个基准元素，进行同样的操作
 */

// 声明链表节点
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表
class NodeList {
  constructor(arr) {
    // 声明链表头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    });
    return head // 构造器返回的是对象，则new NodeList得到的就是这个返回的对象
  }
}

// 交换两个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 寻找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while(q !== end) {
    if(q.val < val) {
      swap(p.next, q)
      p = p.next
    }
    q = q.next
  }
  swap(p, begin)
  return p
}


const sortList = (begin, end) => {
  if(begin !== end) {
    let part = partion(begin, end)
    sortList(begin, part)
    sortList(part.next, end)
  }
}




/**
 * 环形链表(Leet Code 141)
 * 给定一个链表，判断链表中是否有环
 * 我们使用整数pos表示链表尾连接到链表中的位置(索引从0开始)，如果pos是-1，则该链表中没有环
 * 
 */



const hasCircle = () => {




  
}





















