/**
 * 平衡二叉树
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。
 *
 * 示例 1:
 * 给定二叉树 [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回 true 。
 *
 * 示例 2:
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *        1
 *       / \
 *      2   2
 *     / \
 *    3   3
 *   / \
 *  4   4
 * 返回false 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/balanced-binary-tree
 *
 * Solution1
 * 深度优先遍历，DFS，自上而下递归，判断每个节点都是平衡的
 */
export {}

function isBalanced(root: TreeNode | null): boolean {

    if (root == null) {
        return true;
    } else {
        return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
            && isBalanced(root.left)
            && isBalanced(root.right);
    }
}

function getHeight(node: TreeNode | null): number {

    if (node == null) {
        return 0;
    } else {
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
}

class TreeNode {

    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}