/**
 * 路径总和
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 *
 * 说明:叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
 *
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/path-sum
 *
 * Solution1
 * 深度优先遍历，DFS，递归
 */
export {}

function hasPathSum(root: TreeNode | null, sum: number): boolean {

    if (root == null) {
        return false;
    }
    return calSum(root, 0, sum);
}

function calSum(node: TreeNode, curSum: number, targetSum: number): boolean {

    if (node.left == null && node.right == null) {
        return curSum + node.val === targetSum;
    } else {
        let leftResult: boolean = false;
        if (node.left != null) {
            leftResult = calSum(node.left!, curSum + node.val, targetSum);
        }
        if (leftResult) {
            return true;
        }
        let rightResult: boolean = false;
        if (node.right != null) {
            rightResult = calSum(node.right!, curSum + node.val, targetSum);
        }
        return rightResult;
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