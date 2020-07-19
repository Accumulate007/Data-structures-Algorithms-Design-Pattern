/**
 * 反转字符串
 * 
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍然保留空格和单词的初始顺序
 * 
 * 输入： "Let's take it"
 * 输出： "s'teL ekat ti"
 */


const reverseFn = (str) => {
    let arr = str.split(' ')

    let result = arr.map((item) => {
        return item.split('').reverse().join('')
    })

    return result.join(' ')
}


const reverseRegFn = (str) => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}


export default reverseFn
