/**
 * 二叉树的层平均值
 *
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 *
 * 示例 1：
 * 输入：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 输出：[3, 14.5, 11]
 * 解释：
 * 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 *
 * 提示：
 * 节点值的范围在32位有符号整数范围内。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
 *
 * Solution1
 * 递归
 */
export {};

function averageOfLevels(root: TreeNode | null): number[] {

    let result: number[] = [];
    if (root == null) {
        return result;
    }

    let counts: number[] = [];
    let sums: number[] = [];
    cal(root, counts, sums, 1);

    for (let i = 0; i < counts.length; i++) {
        result.push(sums[i] / counts[i]);
    }
    return result;
}

function cal(node: TreeNode, counts: number[], sums: number[], curDepth: number): void {

    if (counts.length < curDepth) {
        counts.push(1);
        sums.push(node.val);
    } else {
        counts[curDepth - 1]++;
        sums[curDepth - 1] += node.val;
    }

    if (node.left != null) {
        cal(node.left, counts, sums, curDepth + 1);
    }
    if (node.right != null) {
        cal(node.right, counts, sums, curDepth + 1);
    }
}

class TreeNode {

    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}