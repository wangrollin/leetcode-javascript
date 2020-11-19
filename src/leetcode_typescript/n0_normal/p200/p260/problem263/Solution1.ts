/**
 * 丑数
 *
 * 编写一个程序判断给定的数是否为丑数。
 * 丑数就是只包含质因数2, 3, 5的正整数。
 *
 * 示例 1:
 * 输入: 6
 * 输出: true
 * 解释: 6 = 2 ×3
 *
 * 示例 2:
 * 输入: 8
 * 输出: true
 * 解释: 8 = 2 × 2 ×2
 *
 * 示例3:
 * 输入: 14
 * 输出: false
 * 解释: 14 不是丑数，因为它包含了另外一个质因数7。
 *
 * 说明：
 * 1是丑数。
 * 输入不会超过 32 位有符号整数的范围
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/ugly-number
 *
 * Solution1
 * 一直除下去
 */
export {}

function isUgly(num: number): boolean {

    while (true) {
        let tmp: number = num;
        num = num % 2 === 0 ? Math.floor(num / 2) : num;
        num = num % 3 === 0 ? Math.floor(num / 3) : num;
        num = num % 5 === 0 ? Math.floor(num / 5) : num;

        if (num === 1) {
            return true;
        }
        if (tmp === num) {
            return false;
        }
    }
}