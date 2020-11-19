/**
 * N叉树的前序遍历
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 *
 * 说明:递归法很简单，你可以使用迭代法完成此题吗?
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
 *
 * Solution1
 * 深度优先遍历，DFS，递归
 */
// todo 此题在leetcode官网没有ts版本，等官网有了就补上
export {}

function preorder(root: Node): number[] {

    let result: number[] = [];
    doPreorder(root, result);
    return result;
}

function doPreorder(node: Node, result: number[]): number[] {

    if (node == null) {
        return;
    }
    result.push(node.val);
    node.children.forEach(child => doPreorder(child, result));
}


class Node {

    val: number
    children: Node[]

    constructor(val?: number, children?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}
