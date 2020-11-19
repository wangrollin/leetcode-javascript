/**
 * Excel表列序号
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 *
 * 例如，
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 *     ...
 *
 * 示例 1:
 * 输入: "A"
 * 输出: 1
 *
 * 示例2:
 * 输入: "AB"
 * 输出: 28
 *
 * 示例3:
 * 输入: "ZY"
 * 输出: 701
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/excel-sheet-column-number
 *
 * Solution1
 * 进制转换问题
 */
export {}

function titleToNumber(s: string): number {

    let result: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        let tmp: number = s.charCodeAt(i) - 64;
        for (let j: number = 0; j < s.length - 1 - i; j++) {
            tmp *= 26;
        }
        result += tmp;
    }
    return result;
}