/**
 * N叉树的最大深度
 *
 * 给定一个 N 叉树，找到其最大深度。
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 *
 * 说明:
 * 树的深度不会超过1000。
 * 树的节点总不会超过5000。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
 *
 * Solution2
 * 迭代，层级遍历
 */
export {}

function maxDepth(root: Node): number {

    if (root == null) {
        return 0;
    }

    let queue: Node[] = [];
    queue.push(root);
    let height: number = 0;

    while (queue.length !== 0) {
        let size: number = queue.length;
        while (size > 0) {
            let node: Node = queue.shift()!;
            if (node.children != null && node.children.length !== 0) {
                node.children.forEach(child => queue.push(child));
            }
            size--;
        }
        height++;
    }

    return height;
}

class Node {

    val: number
    children: Node[]

    constructor(val?: number, children?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}