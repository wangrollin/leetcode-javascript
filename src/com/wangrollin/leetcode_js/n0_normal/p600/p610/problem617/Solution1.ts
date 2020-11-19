/**
 * 合并二叉树
 *
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，
 * 那么将他们的值相加作为节点合并后的新值，否则不为NULL 的节点将直接作为新二叉树的节点。
 *
 * 示例1:
 * 输入:
 * 	Tree 1                     Tree 2
 *           1                         2
 *          / \                       / \
 *         3   2                     1   3
 *        /                           \   \
 *       5                             4   7
 * 输出:
 * 合并后的树:
 * 	     3
 * 	    / \
 * 	   4   5
 * 	  / \   \
 * 	 5   4   7
 *
 * 注意:合并必须从两个树的根节点开始。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-two-binary-trees
 *
 * Solution1
 * 递归
 */
export {}

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {

    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }

    merge(t1!, t2!);
    return t1;
}

function merge(t1: TreeNode, t2: TreeNode) {

    t1.val += t2.val;

    if (t1.left != null && t2.left != null) {
        merge(t1.left, t2.left);
    } else if (t1.left == null && t2.left != null) {
        t1.left = t2.left;
    }

    if (t1.right != null && t2.right != null) {
        merge(t1.right, t2.right);
    } else if (t1.right == null && t2.right != null) {
        t1.right = t2.right;
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