/**
 * 二叉树的直径
 *
 * 给定一棵二叉树，你需要计算它的直径长度。
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点。
 *
 * 示例 :
 * 给定二叉树
 *           1
 *          / \
 *         2   3
 *        / \
 *       4   5
 * 返回3, 它的长度是路径 [4,2,1,3] 或者[5,2,1,3]。
 *
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
 *
 * Solution1
 * 递归，回溯，后序遍历
 */
export {}

function diameterOfBinaryTree(root: TreeNode | null): number {

    if (root == null) {
        return 0;
    }

    let leftResult: Pair<number, number> = cal(root.left);
    let rightResult: Pair<number, number> = cal(root.right);

    let innerD: number = Math.max(leftResult.value, rightResult.value);
    return Math.max(innerD, leftResult.key + rightResult.key + 1) - 1;
}

function cal(node: TreeNode | null): Pair<number, number> {

    // Pair第一个int代表高度，第二个代表内直径
    if (node == null) {
        return new Pair(0, 0);
    }

    let leftResult: Pair<number, number> = cal(node.left);
    let rightResult: Pair<number, number> = cal(node.right);

    let height: number = Math.max(leftResult.key, rightResult.key) + 1;
    let innerD: number = Math.max(leftResult.value, rightResult.value);
    innerD = Math.max(innerD, leftResult.key + rightResult.key + 1);

    return new Pair(height, innerD);
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

class Pair<K, V> {

    constructor(public key: K, public value: V) {

    }
}