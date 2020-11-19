/**
 * 对称二叉树
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树[1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * 但是下面这个[1,2,2,null,3,null,3] 则不是镜像对称的:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 * 进阶：
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/symmetric-tree
 *
 * Solution2
 * 广度优先遍历，BFS，迭代
 */
export {}

function isSymmetric(root: TreeNode | null): boolean {

    if (root == null) {
        return true;
    }
    return checkLeftAndRight(root.left!, root.right!);
}

function checkLeftAndRight(left: TreeNode, right: TreeNode): boolean {

    let queue1: Array<TreeNode> = [];
    queue1.unshift(left);
    let queue2: Array<TreeNode> = [];
    queue2.unshift(right);

    while (queue1.length !== 0 && queue2.length !== 0) {

        let node1: TreeNode = queue1.pop()!;
        let node2: TreeNode = queue2.pop()!;

        if (node1 == null && node2 == null) {
            continue;
        } else if (node1 == null || node2 == null || node1.val !== node2.val) {
            return false;
        } else {
            queue1.unshift(node1.left!);
            queue1.unshift(node1.right!);
            queue2.unshift(node2.right!);
            queue2.unshift(node2.left!);
        }
    }

    return true;
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