/**
 * 七进制数
 *
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 *
 * 示例 1:
 * 输入: 100
 * 输出: "202"
 *
 * 示例 2:
 * 输入: -7
 * 输出: "-10"
 *
 * 注意: 输入范围是[-1e7, 1e7] 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/base-7
 *
 * Solution1
 * 取余
 */
export {}

function convertToBase7(num: number): string {

    if (num === 0) {
        return "0";
    }

    let pre: string = "";
    if (num < 0) {
        pre = "-";
        num *= -1;
    }

    let sb: string[] = [];
    while (num !== 0) {
        sb.push((num % 7).toString());
        num = Math.floor(num / 7);
    }

    sb.push(pre);
    return sb.reverse().join("");
}