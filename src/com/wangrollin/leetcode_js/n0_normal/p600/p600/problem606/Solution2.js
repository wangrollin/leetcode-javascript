/**
 * 根据二叉树创建字符串
 *
 * 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。
 * 空节点则用一对空括号 "()" 表示。
 * 而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。
 *
 * 示例 1:
 * 输入: 二叉树: [1,2,3,4]
 *        1
 *      /   \
 *     2     3
 *    /
 *   4
 * 输出: "1(2(4))(3)"
 * 解释: 原本将是“1(2(4)())(3())”，
 * 在你省略所有不必要的空括号对之后，
 * 它将是“1(2(4))(3)”。
 *
 * 示例 2:
 * 输入: 二叉树: [1,2,3,null,4]
 *        1
 *      /   \
 *     2     3
 *      \
 *       4
 * 输出: "1(2()(4))(3)"
 * 解释: 和第一个示例相似，
 * 除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/construct-string-from-binary-tree
 *
 * Solution2
 * 迭代，前序遍历，用stack（来做遍历）和set（来做回溯），前序遍历
 */

class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {TreeNode} t
 * @return {string}
 */
let tree2str = function (t) {

    if (t == null) {
        return "";
    }

    let stack = [];
    stack.push(t);
    let leftSet = new Set();
    let rightSet = new Set();
    let result = [];

    while (stack.length !== 0) {

        let node = stack[stack.length - 1];

        if (node.left == null && node.right == null) {
            result.push(node.val);
            stack.pop();
            continue;
        }

        if (node.left != null && node.right != null) {
            if (!leftSet.has(node)) {
                result.push(node.val, "(");
                stack.push(node.left);
                leftSet.add(node);
            } else if (!rightSet.has(node)) {
                result.push(")(");
                stack.push(node.right);
                rightSet.add(node);
            } else {
                result.push(')');
                leftSet.delete(node);
                rightSet.delete(node);
                stack.pop();
            }
            continue;
        }

        if (node.left != null && node.right == null) {
            if (!leftSet.has(node)) {
                result.push(node.val, "(");
                stack.push(node.left);
                leftSet.add(node);
            } else {
                result.push(')');
                leftSet.delete(node);
                stack.pop();
            }
            continue;
        }

        if (node.left == null && node.right != null) {
            if (!rightSet.has(node)) {
                result.push(node.val, "()(");
                stack.push(node.right);
                rightSet.add(node);
            } else {
                result.push(')');
                rightSet.delete(node);
                stack.pop();
            }
            continue;
        }
    }

    return result.join("");
};