/**
 * 最大间距
 * 
 * 给定一个无序的数组，找出排序之后，相邻元素之间最大的差值
 * 
 * 输入：[3, 6, 9, 1]
 * 输出： 3
 * 
 */

import choose from './sort-02'

// 常规方法
const fn1 = (arr) => {
  if(arr.length < 2) return 0;

  arr.sort();
  let max = 0;
  for(let i=0, len=arr.length-1, tmp; i<len; i++) {
    tmp = arr[i + 1] - arr[i]
    if(tmp > max) {
      max = tmp
    }
  }
  return max;
}


// 排序的同时存储相邻元素的差值
const maximumGap = (arr) => {
  if(arr.length < 2) return 0;

  let max = 0;
  let len = arr.length - 1;
  let space;
  for(let i=len, tmp; i>0; i--) {
    for(let k=0; k<i; k++) {
      tmp = arr[k];
      if(tmp > arr[k + 1]) {
        arr[k] = arr[k + 1];
        arr[k + 1] = tmp;
      }
    }

    // 第二轮开始才能取相邻的差值
    if(i < len) {
      space = arr[i + 1] - arr[i];
      if(space > max) {
        max = space
      }
    }
  }
  
  // 上面的循环会漏掉 arr[1] - arr[0]的值
  return Math.max(max, arr[1] - arr[0]);
}


