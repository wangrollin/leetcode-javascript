/**
 * 二叉树的层次遍历 II
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其自底向上的层次遍历为：
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
 *
 * Solution1
 * 广度优先遍历，BFS，迭代
 */
export {}

function levelOrderBottom(root: TreeNode | null): number[][] {

    let result: Array<Array<number>> = [];
    if (root == null) {
        return result;
    }

    let queue: Array<TreeNode | null> = [];
    queue.push(root);

    while (queue.length !== 0) {

        let list: Array<number> = [];
        let size: number = queue.length;

        while (size > 0) {
            let node: TreeNode = queue.shift()!;
            list.push(node.val);
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
            size--;
        }

        result.push(list);
    }

    return result.reverse();
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