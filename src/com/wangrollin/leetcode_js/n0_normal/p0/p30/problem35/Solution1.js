/**
 * 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 * 示例2:
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 * 示例 3:
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 * 示例 4:
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-insert-position
 *
 * Solution1
 * 二分法查找
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {

    if (nums == null || nums.length === 0) {
        return 0;
    }
    let left = 0;
    let right = nums.length;
    while (true) {
        if (left === right) {
            return right;
        }
        if (target > nums[Math.floor((left + right) / 2)]) {
            left = Math.floor((left + right) / 2) + 1;
        } else if (target < nums[Math.floor((left + right) / 2)]) {
            right = Math.floor((left + right) / 2);
        } else {
            return Math.floor((left + right) / 2);
        }
    }
};
