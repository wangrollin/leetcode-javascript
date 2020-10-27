/**
 * N叉树的前序遍历
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 *
 * 说明:递归法很简单，你可以使用迭代法完成此题吗?
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
 *
 * Solution2
 * 广度优先遍历，BFS，迭代
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
let preorder = function (root) {

    let result = [];

    if (root == null) {
        return result;
    }

    let stack = [];
    stack.push(root);

    while (stack.length !== 0) {

        let node = stack.pop();
        result.push(node.val);
        node.children
            .reverse()
            .forEach(child => stack.push(child));
    }

    return result;
};