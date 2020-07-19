/**
 * 贪心算法
 * 在对问题求解时，总是做出在当前看来最好的选择。不从整体最优上加以考虑，是某种意义上的局部最优解
 * 
 */


/**
 * 买卖股票的最佳时机(Leet Code 122)
 * 给定一个数组，它的第i个元素是一支给定股票第i天的价格
 * 设计一个算法来计算你所能获得的最大利润，你可以尽可能多的完成更多的交易(多次买卖一支股票)
 * 不能同时参与多笔交易(必须在再次购买前出售掉之前的股票)
 * 
 * 输入 [7,1,5,3,6,4]
 * 输出 7
 */


const maxProfit = (prices) => {
  // 利润
  let count = 0

  for(let i=0,len=prices.length; i<len; i++) {
    for(let j=i; j<len-1; j++) {
      if(prices[j+1] > prices[j]) {
        count += prices[j+1] - prices[j]
        i = j
      } esle {
        i = j
        break
      }
    }
  }
  return count
}


/**
 * 柠檬水找零(Leet Code 860)
 * 
 * 在柠檬水摊上，每一杯柠檬水的价格为5美元
 * 顾客排队购买你的产品，一次购买一杯
 * 每位顾客只购买一杯，向你支付5美元，10美元，或者20美元
 * 你必须给美味顾客正确找零，也就是说净交易是每位顾客想你支付了5美元
 * 注意，一开始你手头上没有任何零钱
 * 如果你能给每位顾客正确找零则返回True,否则返回false
 * 
 * 输入： [5,5,5,10,20]
 * 输出：true
 * 
 */



 // 策略：给钱找零，优先给金额大的零钱，尽量把小的零钱留在手里
const lemonadeChange = (input) => {
  // 手头有的零钱(一开始手头没有零钱)
  let hand = []

  while(input.length) {
    // 取出当前排在最前面顾客的钱
    let money = input.shift()
    if(money === 5) {
      // 不用找零
      hand.push(money)
    } else {
      // 零钱降序排列
      hand.sort((a, b) => b - a)
      // 需要找的零钱
      let change = money - 5
      for(let i=0,len=hand.length; i<len; i++) {
        if(hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          // 删除元素后数组长度发生变化，要维持刚才的i不变
          i--
        }
        if(change === 0) {
          break
        }
      }
      if(change !== 0) {
        return false
      } else {
        hand.push(money)
      }
    }
  }
  return true
}



















