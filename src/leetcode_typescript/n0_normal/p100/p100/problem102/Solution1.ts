/**
 * 二叉树的层序遍历
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 *
 * Solution1
 * 层序遍历
 */
export {}

function levelOrder(root: TreeNode | null): number[][] {

    let result: Array<Array<number>> = [];

    if (root == null) {
        return result;
    }

    let queue: Array<TreeNode> = [];
    queue.push(root!);

    while (queue.length !== 0) {

        result.push(queue.map(treeNode => treeNode.val));

        let size: number = queue.length;
        while (size > 0) {
            let node: TreeNode = queue.shift()!;
            if (node.left != null) {
                queue.push(node.left!);
            }
            if (node.right != null) {
                queue.push(node.right!);
            }
            size--;
        }
    }

    return result;
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