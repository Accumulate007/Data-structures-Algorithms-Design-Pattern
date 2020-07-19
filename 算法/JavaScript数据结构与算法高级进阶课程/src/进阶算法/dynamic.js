/**
 * 动态规划
 * 1.不同路径问题
 * 2.最短路径问题
 * 
 * 动态规划三个重要概念：
 * 状态转移方程
 * 最优子结构
 * 边界
 * 
 */


/**
 * 不同路径Ⅱ(Leet Code 63)
 *一个机器人位于一个m x n网格的左上角(起始点标记为start)
 * 机器人每次只能向下或者向右移动一步，机器人视图抵达网格的最右下角(标记为Finish)
 * 现在考虑网格中有障碍物，那么从左上角移动到右下角有多少条不同的路径
 * m,n的值都不超过100
 * 
 */

 const uniquePathsWithObstacles = (arr/*二维数组*/, m, n) => {

  // 最优子结构方程
  let dp = (m, n) => {
    if(m === 2 && n === 2) {
      return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : (arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2
    } else if(m < 2 || n < 2) {
      if(m < 2) {
        // 单行
        return arr[m-1].includes(1) ? 0 : 1
      } else {
        // 单列中不能有障碍物，
        for(let i=0; i<m; i++) {
          if(arr[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      // 状态转移方程
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }

  return dp(m, n)
 }



/**
 * K站中转内最便宜的航班(Leet Code 787)
 * 有n个城市通过m个航班连接，每个航班都从城市u开始，以价格w抵达v
 * 现在给定所有的城市和航班，以及出发城市src和目的地dst，你的任务是找到从src到dst最多经过k站中转的最便宜的价格
 * 如果没有这样的路线，则输出 -1
 * 
 * 
 */


const findCheapestPrice = (src, dst, k) => {
  let fights = [
    [0,1,100],
    [1,2,100],
    [0,2,500]
  ]

  let cheap = (src, dst, k) => {
    // 找到dst的前一站
    let pre = fights.filter(item => item[1] === dst)
    let min = Math.min.apply(null, pre.map(item =>{
      if(item[0] === src && k > -1) {
        // 从dst往前找，找到了起始城市
        return item[2]
      }else if(k === 0 && item[0] !== src) {
        return Number.MAX_SAFE_INTEGER
      } else {
        return item[2] + cheap(src, item[0], k - 1)
      }
    }))
    return min
  }
  return cheap(src, dst, k) || -1
}


