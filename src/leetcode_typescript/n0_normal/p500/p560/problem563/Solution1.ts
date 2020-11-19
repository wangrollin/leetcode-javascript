/**
 * 二叉树的坡度
 *
 * 给定一个二叉树，计算整个树的坡度。
 * 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。
 * 空结点的的坡度是0。
 * 整个树的坡度就是其所有节点的坡度之和。
 *
 * 示例：
 * 输入：
 *          1
 *        /   \
 *       2     3
 * 输出：1
 * 解释：
 * 结点 2 的坡度: 0
 * 结点 3 的坡度: 0
 * 结点 1 的坡度: |2-3| = 1
 * 树的坡度 : 0 + 0 + 1 = 1
 *
 * 提示：
 * 任何子树的结点的和不会超过 32 位整数的范围。
 * 坡度的值不会超过 32 位整数的范围。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-tree-tilt
 *
 * Solution1
 * 递归，回溯，后序遍历
 */
export {}

function findTilt(root: TreeNode | null): number {

    if (root == null) {
        return 0;
    }

    let leftResult: Pair<number, number> = cal(root.left);
    let rightResult: Pair<number, number> = cal(root.right);

    return Math.abs(leftResult.value - rightResult.value)
        + leftResult.key
        + rightResult.key;
}

function cal(node: TreeNode | null): Pair<number, number> {

    // key: 坡度，value: 节点之和
    if (node == null) {
        return new Pair(0, 0);
    }

    let leftResult: Pair<number, number> = cal(node.left);
    let rightResult: Pair<number, number> = cal(node.right);

    let tilt: number = Math.abs(leftResult.value - rightResult.value)
        + leftResult.key
        + rightResult.key;
    let sum: number = leftResult.value + rightResult.value + node.val;
    return new Pair(tilt, sum);
}

class Pair<K, V> {

    constructor(public key: K, public value: V) {

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