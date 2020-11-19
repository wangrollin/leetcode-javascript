/**
 * 移除元素
 *
 * 给定一个数组 nums和一个值 val，你需要原地移除所有数值等于val的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例 1:
 * 给定 nums = [3,2,2,3], val = 3,
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例2:
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 * 注意这五个元素可为任意顺序。
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-element
 *
 * Solution2
 * 单指针遍历一遍，赋值次数等于重复的数字；题目不要求剩下的元素的顺序
 */
function removeElement2(nums: number[], val: number): number {

    if (nums == null || nums.length === 0) {
        return 0;
    }

    let len: number = nums.length;
    let validIndex: number = 0;

    while (validIndex < len) {
        if (nums[validIndex] === val) {
            nums[validIndex] = nums[--len];
        } else {
            ++validIndex;
        }
    }
    return validIndex;
}