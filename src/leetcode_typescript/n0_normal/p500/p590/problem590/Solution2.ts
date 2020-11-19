/**
 * N叉树的后序遍历
 *
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 *
 * 说明:递归法很简单，你可以使用迭代法完成此题吗?
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal
 *
 * Solution2
 * 广度优先遍历，BFS，迭代；也可以先用类似全序遍历的方式得到result，然后reverse就是后序遍历
 */
// todo 此题在leetcode官网没有ts版本，等官网有了就补上
export {}

function postorder(root: Node): number[] {

    let result: number[] = [];

    if (root == null) {
        return result;
    }

    let stack: Node[] = [];
    stack.push(root);
    let set: Set<Node> = new Set();

    while (stack.length !== 0) {

        let node: Node = stack[stack.length - 1];
        if (set.has(node)) {
            set.delete(node);
            stack.pop();
            result.push(node.val);
        } else {
            set.add(node);
            node.children
                .reverse()
                .forEach(child => stack.push(child));
        }
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