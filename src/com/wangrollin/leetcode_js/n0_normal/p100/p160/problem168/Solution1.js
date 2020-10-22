/**
 * Excel表列名称
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 *
 * 例如，
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB
 *     ...
 *
 * 示例 1:
 * 输入: 1
 * 输出: "A"
 *
 * 示例2:
 * 输入: 28
 * 输出: "AB"
 *
 * 示例3:
 * 输入: 701
 * 输出: "ZY"
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/excel-sheet-column-title
 *
 * Solution1
 * 本质上是一个进制转换问题，26进制，但是要注意没有A0被AZ表示了
 */

/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function (n) {

    let result = [];
    while (n !== 0) {
        result.push(String.fromCharCode((n - 1) % 26 + 'A'.charCodeAt(0)));
        n = Math.floor((n - 1) / 26);
    }
    return result.reverse().join("");
};
