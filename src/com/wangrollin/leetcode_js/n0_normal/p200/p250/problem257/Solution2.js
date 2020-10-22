/**
 * 二叉树的所有路径
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 *
 * 说明:叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 输入:
 *
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 * 输出: ["1->2->5", "1->3"]
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-tree-paths
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
 * @return {string[]}
 */
let binaryTreePaths = function (root) {

    let result = [];
    if (root == null) {
        return result;
    }

    let nodeQueue = [];
    nodeQueue.push(root);
    let pathQueue = [];
    pathQueue.push(root.val.toString());

    while (nodeQueue.length !== 0) {

        let node = nodeQueue.shift();
        let curPath = pathQueue.shift();

        if (node.left == null && node.right == null) {
            result.push(curPath);
        } else {
            if (node.left != null) {
                nodeQueue.push(node.left);
                pathQueue.push(curPath + "->" + node.left.val);
            }
            if (node.right != null) {
                nodeQueue.push(node.right);
                pathQueue.push(curPath + "->" + node.right.val);
            }
        }
    }

    return result;
};