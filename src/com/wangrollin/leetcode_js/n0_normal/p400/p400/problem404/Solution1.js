/**
 * 左叶子之和
 *
 * 计算给定二叉树的所有左叶子之和。
 *
 * 示例：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sum-of-left-leaves
 *
 * Solution1
 * 深度优先遍历，DFS，递归
 */

class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumOfLeftLeaves = function (root) {

    if (root == null) {
        return 0;
    }
    if (root.left != null && root.left.left == null && root.left.right == null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    } else {
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    }
};