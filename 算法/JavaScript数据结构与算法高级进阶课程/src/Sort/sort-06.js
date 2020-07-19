/**
 * 缺失的第一个正数(LeetCode 41)
 * 
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数
 * 
 * 
 * 输入： [1,2,0]
 * 输出：3
 */


const firstMissingPositive = (arr) => {
  // 因为查找的是最小的正整数，先过滤负数
  arr = arr.filter(item => item > 0);

  if(arr.length === 0) return 1;

  arr.sort((a, b) => a - b);

  if(arr[0] === 1) {
    return 1;
  } else {
    // 从左开始遍历，只要下一个元素和当前元素差值大于1，说明当前元素加1 即为未出现的最小正整数
    for(let i=0, len=arr.length - 1; i<len; i++) {
      if(arr[i + 1] - arr[i] > 1) {
        return arr[i] + 1;
      }
    }
    return arr[arr.length -1] + 1;
  }
}


// 更优解(使用选择排序)
const findMissingMin = (arr) => {
  arr = arr.filter(item => item > 0);

  // 实现选择排序，先拿到最小值，如果第一个元素不是1，则直接返回1
  // 如果第一个元素是1，则比较相邻元素的差值
  for(let i=0, len=arr.length, min; i<len; i++) {
    min = arr[i];
    for(let j=i+1; j<len; j++) {
      if(arr[j] < min) {
        let c = min;
        min = arr[j];
        arr[j] = c;
      }
    }
    arr[i] = min;
    if(i > 0) {
      if(arr[i] - arr[i-1] > 1) {
        return arr[i - 1] + 1;
      }
    } else {
      if(min !== 1) {
        return 1;
      } else {

      }
    }
  }
  return arr.length === 0 ? 1 : (arr[arr.length - 1] + 1)
}


