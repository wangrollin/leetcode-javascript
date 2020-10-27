/**
 * N叉树的后序遍历
 *
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 *
 * 说明:递归法很简单，你可以使用迭代法完成此题吗?
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal
 *
 * Solution1
 * 深度优先遍历，DFS，递归
 */

class Node {

    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

/**
 * @param {Node} root
 * @return {number[]}
 */
let postorder = function (root) {

    let result = [];
    doPostorder(root, result);
    return result;
};

/**
 * @param {Node} node
 * @param {number[]} result
 */
let doPostorder = function (node, result) {

    if (node == null) {
        return;
    }
    node.children.forEach(child => doPostorder(child, result));
    result.push(node.val);
};