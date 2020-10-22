/**
 * 移除链表元素
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-linked-list-elements/
 *
 * Solution1
 * 哨兵算法
 */

class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function (head, val) {

    let firstNode = new ListNode(0);
    firstNode.next = head;
    let curNode = firstNode;
    while (curNode.next != null) {
        if (curNode.next.val === val) {
            curNode.next = curNode.next.next;
        } else {
            curNode = curNode.next;
        }
    }
    return firstNode.next;
};