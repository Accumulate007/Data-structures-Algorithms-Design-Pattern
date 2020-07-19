/**
 * 对称二叉树(Leet Code 101)
 * 
 * 给定一个二叉树，检查它是否是镜像对称的(中心轴左右对称)
 * 
 * 
 * 
 */

 class Node{
   constructor(val) {
     this.val = val
     this.left = undefined  // 左节点
     this.right = undefined // 右节点
   }
 }

 // 对称二叉树
 class Tree{
   constructor(data) {
     // 临时存储所有节点,方便寻找父子节点
     let nodeList = []
     // 顶部节点
     let root
     for(let i=0, len=data.length; i<len; i++) {
       let node = new Node(data[i])
       nodeList.push(node)
       if(i > 0) {
         let n = Math.floor(Math.sqrt(i+1))  // 当前节点的层数
         let q = Math.pow(2, n) - 1          // 当前层的起始点
         let p = Math.pow(2, n - 1) - 1      // 上一层的起始点
         let parent = nodeList[p + Math.floor((i - q) / 2)]   // 找到当前节点的父节点
         // 将当前节点和上一层的父节点做关联
         if(parent.left) {
           parent.right = node
         } else {
           parent.left = node
         }
       }
     }
     root = nodeList.shift()
     nodeList.length = 0
     return root
   }

   static isSymmetry(root) {
     if(!root) return true;
     let walk = (left, right) => {
       if(!left && !right) return true;
       if((left && !right) || (!left && right) || (left.val !== right.val)) return false;
       return walk(left.left, right.right) && walk(left.right, right.left)
     }

     return (root,left, root.right)
   }
 }




/**
 * 验证二叉搜索树(Leet Code 98)
 * 
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树
 * 假设一个二叉搜索树有如下特征
 * 1.节点的左子树只包含小于当前节点的数
 * 2.节点的右子树只包含大于当前节点的数
 * 3.所有左子树和右子树必须自身也是二叉搜索树
 * 
 */

 class SNode{
   constructor(val) {
     this.val = val
     this.left = this.right = undefined
   }
 }

 class STree{
   constructor(data) {
     let root = new SNode(data.shift())
     // 遍历所有数据，逐渐插入当前的搜索树中
     data.forEach(item => {
       this.insert(root, item)
     })
     return root
   }

   insert(node, data) {
     if(node.val > data) {
       // 放在左子树
       if(node.left === undefined) {
         node.left = new SNode(data)
       } else {
         this.insert(node.left, data)
       }
     } else {
       if(node.right === undefined) {
         node.right = new SNode(data)
       } else {
         this.insert(node.right, data)
       }
     }
   }

   static walk(root) {
    if(!root.left && !root.right) {
      return true
    } else if((roo.left && root.val < root.left.val) || (root.right && root.val > root.right.val) ){
      return false
    } else {
      return STree.walk(root.left) && STree.walk(root.right)
    }
   }
 }

 const st1 = new STree([2,1,3])

 STree.walk(st1)  // true


