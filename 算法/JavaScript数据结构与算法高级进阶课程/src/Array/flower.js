/**
 * 种花问题(LeetCode 605)
 * 
 * 假设你有一个很长的花园，一部分地块种植了花，一部分地块却没有。可是，花不能种植在相邻的地块上，它们会争夺
 * 水资源，两者都会死去。
 * 给定一个花坛(表示为一个数组包含0和1，其中0表示没有种植花，1表示种植了花)，和一个数n，能否在不打破种植规则的
 * 情况下种入n朵花？能返回true,不能返回false
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出： true
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false(不能在这块地种入2朵花)
 */



const canPlaceFlowers = (arr, n) => {
    let max = 0 //  给定的arr,最多可种max朵花

    for(let i=0,len=arr.length-1; i<len; i++) {
        if(arr[i] === 0) {
            // 说明是空地
            if(i === 0 && arr[1] === 0) {
                max++
                i++
            } else if(arr[i-1] === 0 && arr[i+1] === 0) {
                max++
                i++
            }
        }
    }
    return max >= n
}

