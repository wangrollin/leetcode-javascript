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
 * Solution2
 * 广度优先遍历，BFS，迭代
 */
export {}

function hasPathSum(root: TreeNode | null, sum: number): boolean {

    if (root == null) {
        return false;
    }

    let nodeQueue: Array<TreeNode | null> = [];
    nodeQueue.push(root);
    let sumQueue: Array<number> = [];
    sumQueue.push(root.val);

    while (nodeQueue.length !== 0) {

        let size: number = nodeQueue.length;
        while (size > 0) {
            let node: TreeNode = nodeQueue.shift()!;
            let curSum: number = sumQueue.shift()!;
            if (node.left == null && node.right == null && curSum === sum) {
                return true;
            }
            if (node.left != null) {
                nodeQueue.push(node.left);
                sumQueue.push(curSum + node.left.val);
            }
            if (node.right != null) {
                nodeQueue.push(node.right);
                sumQueue.push(curSum + node.right.val);
            }
            size--;
        }
    }

    return false;
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