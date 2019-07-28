## 《算法面试通关40讲》学习笔记
start at 2019-07-25

#### 算法为何重要？
1.算法是编程重要的内功</br>
2.去一流互联网公司的必要条件</br>
3.硅谷的互联网公司面试要求当场写算法题目</br>
4.算法和数据结构是有趣并且实用的</br>

#### 如何有效学习算法和数据结构
1.chunk it up 切碎知识点</br>
2.Deliberate parcticing 刻意练习</br>
3.Feedback  反馈

#### 时间复杂度和空间复杂度
O(1)
O(log n)
O(n)
O(n^2)
O(n^3)
O(2^n)
O(n!)

```
// O(1)
// n不需要进行计算
let n = 1000;
console.log(n);

// O(N)
// 循环的次数取决于n本身
for(let i=1;i<n;i++) {
    console.log(i);
}

// O(N^2)
for(let i=1;i<n;i++) {
    for(let j=1;j<n;j++) {
        console.log(i, j);
    }
}
```

四种算法的时间复杂度：
1.二分查找：O(logn)
2.二叉树遍历：O(n)
3.二维矩阵排序：O(n)
4.常见排序(快排等)：O(nlogn)

#### 如何通过LeetCode进行算法题目练习
网址：https://leetcode.com/problemset/all

