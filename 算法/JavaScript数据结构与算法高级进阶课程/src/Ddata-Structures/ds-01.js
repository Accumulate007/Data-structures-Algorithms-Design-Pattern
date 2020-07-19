/**
 * 栈
 * 
 * 棒球比赛
 * 给定一个字符串列表，每个字符串可以是以下四种之一
 * 1.整数(一轮的得分):直接表示你在本轮的得分
 * 2."+"(一轮的得分)：表示本轮的得分是前两轮有效回合得分的总和
 * 3."D"(一轮的得分)：表示本轮得分是前一轮有效回合得分的两倍
 * 4."C"()：表示你获得的最后一个有效回合的得分是无效的，应该被移除
 * 
 * 每一轮的操作都是永久性的，可能会对前一轮或后一伦产生影响，你需要返回你在所有回合中得分的总和
 * 
 * 输入： ["5", "2", "C", "D", "+"]
 * 输出： 30
 */


// 使用堆栈的两个条件：1.线性的操作；2.操作受限

const calPoints = (arr) => {
  // 数组模拟栈结构
  let result = [];
  let pre;  // 上轮数据
  let preTwo; // 上上轮数据

  arr.forEach(item => {
    switch(item) {
      case 'C':
        if(result.length) {
          result.pop();
        }
        break;
      case 'D':
        pre = result.pop();
        result.push(pre, pre*2);
        break;
      case '+':
        pre = result.pop();
        preTwo = result.pop();
        result.push(preTwo, pre, preTwo+pre);
        break;
      default:
        result.push(item * 1);
    }
  })

  return result.reduce((total, num) => total+num);
}


