/**
 * 最大矩阵
 * 给定一个只包含0和1的二维二进制矩阵，找出只包含1的最大矩形，并返回其面积。
 * 
 * 1 1 0 0
 * 1 1 0 1
 * 0 1 0 1
 * 
 * 最大面积是 2*2 = 4(只包含1的矩形的面积)
 * 
 */


const maximalRectangle = (arr) => {
  let result = [];
  let reg = /1{2,}/g;

  // 把二维数组重新表达，把相邻的1提取出来(起始点+截止点)
  arr = arr.map(item => {
    let str = item.join(',');
    let r = reg.exec(str);
    let tmp = [];
    while(r) {
      tmp.push([r.index, r.index + r[0].length - 1]);
      r = reg.exec(str);
    }
  })

  // 递归计算相邻的矩阵
  let maxRect = (arr, result, n = 1) => {
    let top = arr.pop();  // 弹出第一行
    let next = arr.pop(); // 弹出第二行

    let tt; // 记录第一行的每一个起始点和截止点
    let nn; // 记录第二行的每一个起始点和截止点

    let start;  // 记录交叉的起始索引
    let end;  // 记录交叉的截止索引
    let width = 1;
    let maxWidth = 1;

    n++;

    for(let i=0, len=top.length; i<len; i++) {
      tt = top[i];
      for(let j=0, jl=next.length; j<jl; j++) {
        nn = next[j];
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
        if(width > maxWidth) {
          maxWidth = width;
          start = Math.max(tt[0], nn[0]);
          end = Math.min(tt[1], nn[1]);
        }
      }
    }

    // 没有找到交叉点
    if(start === undefined || end === undefined) {
      if(n < 3) {
        return false;
      } else {
        width = top[0][1] - top[0][0] + 1;
        if(width > 1) {
          result.push((n -1) * width);
        }
      }
    } else {
      arr.push([start, end]);
      maxRect(arr, result, n++);
    }
  }

  while(arr.length > 1) {
    maxRect([].concat(), result);
    arr.pop();
  }

  // 取结果的最大值
  let max = 0;
  let item = result.pop();
  while(item) {
    if(item > max) {
      max = item;
    }
    item = result.pop();
  }

  return max > 0 ? max : -1;
}

