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
export {}

function removeElements(head: ListNode | null, val: number): ListNode | null {

    let firstNode: ListNode = new ListNode(0);
    firstNode.next = head;
    let curNode: ListNode = firstNode;
    while (curNode.next != null) {
        if (curNode.next.val === val) {
            curNode.next = curNode.next.next;
        } else {
            curNode = curNode.next;
        }
    }
    return firstNode.next;
}

class ListNode {

    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}