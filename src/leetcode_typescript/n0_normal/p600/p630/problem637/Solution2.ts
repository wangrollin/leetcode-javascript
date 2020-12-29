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
 * Solution2
 * 迭代，小心数值相加溢出
 */
export {};

function averageOfLevels(root: TreeNode | null): number[] {

    let result: number[] = [];
    if (root == null) {
        return result;
    }

    let queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length > 0) {
        let curCount: number = 0;
        let avg: number = 0;
        let size: number = queue.length;
        while (size > 0) {
            let node: TreeNode = queue.shift()!;
            avg = (avg * (curCount + 1) + node.val - avg) / (curCount + 1);
            curCount++;
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
            size--;
        }
        result.push(avg);
    }

    return result;
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