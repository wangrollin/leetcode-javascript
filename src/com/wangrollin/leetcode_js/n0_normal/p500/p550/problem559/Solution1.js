/**
 * N叉树的最大深度
 *
 * 给定一个 N 叉树，找到其最大深度。
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 *
 * 说明:
 * 树的深度不会超过1000。
 * 树的节点总不会超过5000。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
 *
 * Solution1
 * 递归，后序遍历
 */

class Node {

    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

/**
 * @param {Node} root
 * @return {number}
 */
let maxDepth = function (root) {

    if (root == null) {
        return 0;
    }

    let max = Math.max(...root.children.map(child => maxDepth(child)));
    return 1 + ([Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY].includes(max) ? 0 : max);
};