/**
 * 将有序数组转换为二叉搜索树
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
 *
 * Solution1
 * 递归创建node
 */
export {}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums == null || nums.length == 0) {
        return null;
    }

    return createNode(nums, 0, nums.length - 1);
}

function createNode(nums: number[], left: number, right: number) {

    if (left > right) {
        return null;
    } else if (left === right) {
        return new TreeNode(nums[left]);
    } else {
        let mid: number = left + Math.floor((right - left) / 2);
        let node: TreeNode = new TreeNode(nums[mid]);
        node.left = createNode(nums, left, mid - 1);
        node.right = createNode(nums, mid + 1, right);
        return node;
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