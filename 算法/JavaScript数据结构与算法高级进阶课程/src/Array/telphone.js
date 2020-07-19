/**
 * 电话号码的字母组合
 * 
 * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合
 * 数字到字母的映射与电话号码按键相同(九宫格输入法一致)，注意，1 不对应任何字母
 * 
 * 输入： "23"
 * 输出： ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */

const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}


function letterCombinations(str) {
	let num = str.split('')
	// code用于保存 str 映射后的内容
	let code = []

	num.forEach(item => {
		if(map[item]) {
			code.push(map[item])
		}
	})

	return comb(code)
}

let comb = (arr) => {
	// 临时变量用于存储前两个组合的结果
	let tmp = []

	for(let i=0,iL=arr[0].length; i<iL; i++) {
		for(let j=0,jL=arr[1].length; j<jL; j++) {
			tmp.push(`${arr[0][i]}${arr[1][j]}`)
		}
	}
	arr.splice(0, 2, temp)	// 替换数组 0，1 下标的元素

	if(arr.length > 1) {
		comb(arr)
	} else {
		return temp
	}
	return arr[0]
}
