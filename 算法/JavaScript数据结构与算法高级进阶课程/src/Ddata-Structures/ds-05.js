/**
 * 螺旋矩阵
 * 
 * 给定一个包含m x n 个元素的矩阵(m行，n列)，请按照顺时针螺旋顺序，返回矩阵中的所有元素
 * 
 * 
 * 输入：
 * [
 *    [1,2,3],
 *    [4,5,6],
 *    [7,8,9],
 * ]
 * 
 * 输出：
 * [1,2,3,6,9,8,7,4,5]
 * 
 */


const matrix = (arr) => {
  let map = (arr, r=[]) => {
    for(let i=0, len=arr.length; i<len; i++) {
      if(i === 0) {
        // 如果是第一行
        r = r.concat(arr[i])
      } else if(i === len - 1) {
        // 如果是最后一行
        r = r.concat(arr[i].reverse())
      } else {
        r.push(arr[i].pop())
      }
    }

    arr.shift()
    arr.pop()

    for(let i=arr.length-1; i>0; i--) {
      r.push(arr[i].shift())
    }

    if(arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}



/**
 * 选择图像(Leet Code 48)
 * 
 * 给定一个 n x n 的二维矩阵表示一个图像，将图像顺时针选择90°
 * 你必须原地选择矩阵，你意味着你需要直接修改输入的矩阵，不要使用另外的矩阵来旋转图像(不能使用额外空间)
 * 
 * 给定matrix
 * 
 * [
 *    [1,2,3],
 *    [4,5,6],
 *    [7,8,9],
 * ]
 * 
 * 输出
 * [
 *    [7,4,1],
 *    [8,5,2],
 *    [9,6,3],
 * ]
 * 
 */


const rotate = (arr) => {
  // 获取n的维度
  let vecor = arr.length
  // 垂直翻转
  for(let i=0,len=vecor/2; i<len; i++) {
    for(let j=0, tmp;j<vecor; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[vecor - i - 1][j]
      arr[vecor - i - 1][j] = tmp
    }
  }

  // 斜45°对角线翻转
  for(let i=0; i<vecor; i++) {
    for(let j=0, tmp; j<i; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }

  return arr
}


