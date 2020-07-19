/**
 * 按奇偶排序数组(LeetCode 922)
 * 
 * 给定一个非负整数数组A，A中一半是奇数，一半是偶数
 * 对数组A进行排序，以便当A[i]为奇数时，i也是奇数，当A[i]为偶数时，i也是偶数
 * 可以返回任何满足上述条件的数组作为答案
 * 
 * 
 */



export default (arr) => {
  // 数组降序排序
  arr.sort((a, b) => a - b);
  // 声明一个数组用来存储奇偶排序后的数组
  let r = [];

  let odd = 1;
  let even = 0;

  arr.forEach(item => {
    if(item % 2 === 1) {
      // 奇数
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  })

  return arr;
}


