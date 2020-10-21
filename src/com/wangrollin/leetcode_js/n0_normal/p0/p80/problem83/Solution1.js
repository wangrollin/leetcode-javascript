/**
 * 删除排序链表中的重复元素
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 * 示例1:
 * 输入: 1->1->2
 * 输出: 1->2
 *
 * 示例2:
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 *
 * Solution1
 * 遍历一遍就行了
 */

class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {

    if (head == null) {
        return null;
    }

    let validNode = head;
    for (let curNode = head.next; curNode != null; curNode = curNode.next) {
        if (validNode.val !== curNode.val) {
            validNode.next = curNode;
            validNode = curNode;
        }
    }
    validNode.next = null;
    return head;
};