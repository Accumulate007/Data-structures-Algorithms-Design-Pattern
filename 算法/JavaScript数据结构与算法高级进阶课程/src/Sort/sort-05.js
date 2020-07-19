/**
 * 数组中的第K个最大元素
 * 在未排序的数组中找到第K个最大的元素，你需要找到的是数组排序后的第K个最大元素，而不是第K个不同的元素
 * 
 * 输入 [3,2,1,5,6,4] 和 K=2
 * 输出 5
 */


const findMax = (arr, k) => {
  let len = arr.length - 1;

  for(let i=len, tmp; i>len - k; i--) {
    for(let j=0; j<i; j++) {
      if(arr[j] > arr[j+1]) {
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }

  // 返回到数第k个元素
  return arr[len - (k-1)];
}



