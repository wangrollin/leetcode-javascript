/**
 * 二进制求和
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字1和0。
 *
 * 示例1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 * 提示：
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-binary
 *
 * Solution1
 * string 数字加法器
 */
function addBinary(a: string, b: string): string {

    let len: number = Math.max(a.length, b.length);
    let carry: number = 0;
    a = [...a].reverse().join("");
    b = [...b].reverse().join("");
    let result: string = "";

    for (let i: number = 0; i < len; i++) {

        let sum: number = carry;
        if (i < a.length) {
            sum += a[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
        if (i < b.length) {
            sum += b[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
        result += sum % 2;
        carry = Math.floor(sum / 2);
    }

    if (carry !== 0) {
        result += carry;
    }

    return [...result].reverse().join("");
}
