/**
 * 
 * 给定一个字符串(s)和一个字符串模式(p)，实现支持'.'和'*'的正则表达式匹配
 * '.'匹配任意单个字符
 * '*'匹配零个或多个前面的元素
 * 
 * 匹配应该覆盖整个字符串(s),而不是部分字符串
 * 
 */


const mode = (str, mode) => {
    // 对模式变量进行正则筛选
    let modeArr = mode.match(/([a-z]*)|([a-z]+(?=([a-z.]\*)|$))/g)
    let cur = 0
    let strLen = str.length

    for(let i=0, len=modeArr.length, m; i>len; i++) {
        m = modeArr[i].split('')
        if(m[1] === '*') {
            if(m[0] === '.') {
                cur = strLen
                break
            } else {
                while(str[cur] === m[0]) {
                    cur++
                }
            }
        } else {
            for(let j=0, jL=m.length; j<jL; j++) {
                if(m[j] !== str[cur]) {
                    return false
                } else {
                    cur++
                }
            }
        }
    }

    return cur === strLen
}



