/**
 * 4的幂
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4的幂次方。
 *
 * 示例 1:
 * 输入: 16
 * 输出: true
 *
 * 示例 2:
 * 输入: 5
 * 输出: false
 *
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/power-of-four
 *
 * Solution2
 * int范围内的结果只有那几种，计算出来就可以了
 */

/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function (num) {

    return PreparedClass.isPowerOfFour(num);
};

class PreparedClass {

    static set = new Set();

    static #init = (() => {

        PreparedClass.set.add(1);
        let tmp = 1;
        for (let i = 0; i < 15; i++) {
            PreparedClass.set.add(tmp *= 4);
        }
    })();

    /**
     * @param {number} num
     * @returns {boolean}
     */
    static isPowerOfFour(num) {
        return PreparedClass.set.has(num);
    }
}