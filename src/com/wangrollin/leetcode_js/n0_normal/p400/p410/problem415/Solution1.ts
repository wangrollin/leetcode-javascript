/**
 * 字符串相加
 *
 * 给定两个字符串形式的非负整数num1 和num2，计算它们的和。
 *
 * 注意：
 * num1 和num2的长度都小于 5100.
 * num1 和num2 都只包含数字0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-strings
 *
 * Solution1
 * 双指针大法
 */
export {}

function addStrings(num1: string, num2: string): string {

    let result: number[] = [];
    let i: number = num1.length - 1;
    let j: number = num2.length - 1;
    let carry: number = 0;

    while (i >= 0 || j >= 0) {
        let n1: number = i >= 0 ? num1.charCodeAt(i--) - '0'.charCodeAt(0) : 0;
        let n2: number = j >= 0 ? num2.charCodeAt(j--) - '0'.charCodeAt(0) : 0;
        let sum: number = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    if (carry !== 0) {
        result.push(carry);
    }

    return result.reverse().join("");
}