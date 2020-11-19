/**
 * 存在重复元素 II
 *
 * 给定一个整数数组和一个整数k，判断数组中是否存在两个不同的索引i和j，
 * 使得nums [i] = nums [j]，并且 i 和 j的差的绝对值最大为 k。
 *
 * 该题目原描述不清晰，重述一下需求：找到 k+1 窗口内是否有重复元素
 *
 * 示例1:
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 *
 * 示例 2:
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 *
 * 示例 3:
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/contains-duplicate-ii
 *
 * Solution1
 * set版窗口
 */
export {}

function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let set: Set<number> = new Set();
    for (let i: number = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size === k + 1) {
            set.delete(nums[i - k]);
        }
    }
    return false;
}