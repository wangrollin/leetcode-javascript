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

class TreeNode {

    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
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
let findTilt = function (root) {

    if (root == null) {
        return 0;
    }

    let leftResult = cal(root.left);
    let rightResult = cal(root.right);

    return Math.abs(leftResult.value - rightResult.value)
        + leftResult.key
        + rightResult.key;
};

/**
 * @param {TreeNode} node
 * @returns {Pair}
 */
let cal = function (node) {

    // key: 坡度，value: 节点之和
    if (node == null) {
        return new Pair(0, 0);
    }

    let leftResult = cal(node.left);
    let rightResult = cal(node.right);

    let tilt = Math.abs(leftResult.value - rightResult.value)
        + leftResult.key
        + rightResult.key;
    let sum = leftResult.value + rightResult.value + node.val;
    return new Pair(tilt, sum);
};
