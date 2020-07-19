/**
 * 卡牌分组(LeetCode 914)
 * 
 * 给定一副牌，每张牌上都写着一个整数
 *你需要选定一个数字 X，使得我们可以将整幅排按照下述规则分成1组或者更多组
 * 1.每组都有X张排
 * 2.组内所有的牌上都写着相同的整数
 * 仅当你可选的 X >= 2时返回 true
 * 
 * 输入： [1,2,3,4,4,3,2,1]
 * 输出： true
 * 解释：可行的分组是 [1,1] [2,2] [3,3] [4,4]
 */


const hasGroupSizeX = function(arr) {
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true

  arr.sort((a, b) => a - b)

  for(let i=0, len=arr.length, tmp=[]; i<len; i++) {
    tmp.push(arr[i])

    for(let j=i+1; j<len-1; j++) {
      if(arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if(min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp.length = 0
        i = j
        break
      }
    }
  }

  dispatchEvent.every(item => {
    if(item.length % min !== 0) {
      result = false
      return false
    }
  })

  return result
}


