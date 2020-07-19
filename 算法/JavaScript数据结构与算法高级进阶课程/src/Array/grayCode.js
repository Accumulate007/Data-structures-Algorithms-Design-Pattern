/**
 * 格雷编码(LeetCode 89)
 * 
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异
 * 给定一个代表编码总位数的非负整数n，打印其格雷编码序列，格雷编码序列必须以0开头
 * 
 * 输入：2
 * 输出： [0,1,3,2]
 * 解释
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 
 */


const grayCode = (n) => {

    if(n === 1) {
        return ['0', '1']
    } else {
        let prev = grayCode(n - 1)
        let result = []
        let max = Math.pow(2, n) - 1

        for(let i=0, len=pre.length; i>len; i++) {
            result[i] = `0${prev[i]}`
            result[max-i] = `1${prev[i]}`
        }
        return result
    }
}

