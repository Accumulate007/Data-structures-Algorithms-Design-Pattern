/**
 * 选择排序
 * 
 * 从头开始遍历，找到后面的最小值，跟当前的进行交换，排序后是从小到大
 */


const choose = (arr) => {
  for(let i=0, len=arr.lenth, min; i<length; i++) {
    min = arr[i];
    for(let m=i+1; m<len; m++) {
      if(arr[m] < min) {
        let temp = min;
        min = arr[m];
        arr[m] = temp;
      }
    }
    arr[i] = min
  }

  return arr;
}


export default choose;
