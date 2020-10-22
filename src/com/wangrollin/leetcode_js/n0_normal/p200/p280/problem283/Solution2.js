/**
 * 移动零
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/move-zeroes
 *
 * Solution2
 * 一边遍历，一边互换
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {

    if (nums == null || nums.length <= 1) {
        return;
    }

    let slowPoint = 0;
    let fastPoint = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return;
        }
        if (nums[i] === 0) {
            slowPoint = i;
            fastPoint = i + 1;
            break;
        }
    }

    while (fastPoint < nums.length) {
        if (nums[fastPoint] !== 0) {
            nums[slowPoint] = nums[fastPoint];
            nums[fastPoint] = 0;
            ++slowPoint;
            ++fastPoint;
        } else {
            ++fastPoint;
        }
    }
};