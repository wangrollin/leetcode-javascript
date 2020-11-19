/**
 * 相同的树
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例1:
 * 输入:       1         1
 *           / \       / \
 *          2   3     2   3
 *
 *         [1,2,3],   [1,2,3]
 * 输出: true
 *
 * 示例 2:
 * 输入:      1          1
 *           /           \
 *          2             2
 *
 *         [1,2],     [1,null,2]
 * 输出: false
 *
 * 示例3:
 * 输入:       1         1
 *           / \       / \
 *          2   1     1   2
 *
 *         [1,2,1],   [1,1,2]
 * 输出: false
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/same-tree
 *
 * Solution2
 * 广度优先遍历，BFS，迭代
 */
export {}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    let queue1: Array<TreeNode> = [];
    queue1.unshift(p!);
    let queue2: Array<TreeNode> = [];
    queue2.unshift(q!);

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
            queue2.unshift(node2.left!);
            queue2.unshift(node2.right!);
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