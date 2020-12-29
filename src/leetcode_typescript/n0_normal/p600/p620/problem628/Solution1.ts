/**
 * 三个数的最大乘积
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 *
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: 6
 *
 * 示例 2:
 * 输入: [1,2,3,4]
 * 输出: 24
 *
 * 注意:
 * 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-product-of-three-numbers
 *
 * Solution1
 * 要注意有负数的情况，经过观察可以看出要找到大的那个 min1 * min2 * max1, max1 * max2 * max3
 */
export {};

function maximumProduct(nums: number[]): number {

    let min1: number = Number.MAX_SAFE_INTEGER;
    let min2: number = Number.MAX_SAFE_INTEGER;

    let max1: number = Number.MIN_SAFE_INTEGER;
    let max2: number = Number.MIN_SAFE_INTEGER;
    let max3: number = Number.MIN_SAFE_INTEGER;

    for (let num of nums) {

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }

        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }

    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}