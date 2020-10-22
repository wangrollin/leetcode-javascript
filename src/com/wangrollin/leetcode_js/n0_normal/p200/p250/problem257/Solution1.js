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
 * @return {string[]}
 */
let binaryTreePaths = function (root) {

    let result = [];
    if (root == null) {
        return result;
    }
    calPath(root, "", result);
    return result;
};

/**
 *
 * @param {TreeNode} node
 * @param {string} curPath
 * @param {string[]} result
 * @return {null}
 */
let calPath = function (node, curPath, result) {

    if (curPath !== "") {
        curPath += "->";
    }
    curPath += node.val;

    if (node.left == null && node.right == null) {
        result.push(curPath);
    } else {
        if (node.left != null) {
            calPath(node.left, curPath, result);
        }
        if (node.right != null) {
            calPath(node.right, curPath, result);
        }
    }
};