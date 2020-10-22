/**
 * 翻转二叉树
 *
 * 翻转一棵二叉树。
 *
 * 示例：
 * 输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 输出：
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/invert-binary-tree
 *
 * Solution2
 * 广度优先遍历，BFS，迭代
 */

class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let invertTree = function (root) {

    if (root == null) {
        return null;
    }

    let queue = [];
    queue.push(root);

    while (queue.length !== 0) {

        let node = queue.shift();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left != null) {
            queue.push(node.left);
        }
        if (node.right != null) {
            queue.push(node.right);
        }
    }

    return root;
};