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
 * Solution2
 * 广度优先遍历，BFS，迭代
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

    let result = 0;
    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {

        let node = queue.shift();
        if (node.left != null) {
            if (node.left.left == null && node.left.right == null) {
                result += node.left.val;
            } else {
                queue.push(node.left);
            }
        }
        if (node.right != null) {
            queue.push(node.right);
        }
    }

    return result;
};