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
 * Solution2
 * 广度优先遍历，BFS，迭代
 */
// todo 此题在leetcode官网没有ts版本，等官网有了就补上
export {}

function preorder(root: Node): number[] {

    let result: number[] = [];

    if (root == null) {
        return result;
    }

    let stack: Node[] = [];
    stack.push(root);

    while (stack.length !== 0) {

        let node: Node = stack.pop()!;
        result.push(node.val);
        node.children
            .reverse()
            .forEach(child => stack.push(child));
    }

    return result;
}

class Node {

    val: number
    children: Node[]

    constructor(val?: number, children?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}