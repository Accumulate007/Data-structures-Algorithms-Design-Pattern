/**
 * 冒泡排序
 * 通过每一轮的遍历，把最大值排到数组的末尾，让最大值冒泡到右边(数组的末尾)
 * 
 */


const sort = (arr) => {
    for(let i=arr.length-1, tmp; i>0; i--) {
        for(let j=0; j<i; j++) {
            tmp = arr[j]
            if(tmp > arr[j+1]) {
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }

    return arr;
}


