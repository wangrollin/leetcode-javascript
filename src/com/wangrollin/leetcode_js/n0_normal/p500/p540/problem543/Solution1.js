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

class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Pair {

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function (root) {

    if (root == null) {
        return 0;
    }

    let leftResult = cal(root.left);
    let rightResult = cal(root.right);

    let innerD = Math.max(leftResult.value, rightResult.value);
    return Math.max(innerD, leftResult.key + rightResult.key + 1) - 1;
};


/**
 *
 * @param {TreeNode} node
 * @returns {Pair}
 */
let cal = function (node) {

    // Pair第一个int代表高度，第二个代表内直径

    if (node == null) {
        return new Pair(0, 0);
    }

    let leftResult = cal(node.left);
    let rightResult = cal(node.right);

    let height = Math.max(leftResult.key, rightResult.key) + 1;
    let innerD = Math.max(leftResult.value, rightResult.value);
    innerD = Math.max(innerD, leftResult.key + rightResult.key + 1);

    return new Pair(height, innerD);
};