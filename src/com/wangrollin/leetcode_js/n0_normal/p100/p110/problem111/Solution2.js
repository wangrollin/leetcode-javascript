/**
 * 二叉树的最小深度
 *
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明:叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 给定二叉树[3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最小深度 2.
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
 *
 * Solution2
 * 广度优先遍历，BFS，迭代
 */

class TreeNode {

    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let minDepth = function (root) {

    if (root == null) {
        return 0;
    }

    let queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length !== 0) {

        let size = queue.length;
        while (size > 0) {
            let node = queue.shift();
            if (node.left == null && node.right == null) {
                return depth + 1;
            } else {
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            size--;
        }
        depth++;
    }

    return depth;
};