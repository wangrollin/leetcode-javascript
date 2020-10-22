/**
 * 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/valid-palindrome
 *
 * Solution1
 * 遍历一遍
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {

    if (s == null || s === "") {
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    while (left <= right) {

        if (!/^\d+$/.test(s[left]) && !/^[a-z]$/i.test(s[left])) {
            ++left;
            continue;
        }
        if (!/^\d+$/.test(s[right]) && !/^[a-z]$/i.test(s[right])) {
            --right;
            continue;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        } else {
            ++left;
            --right;
        }
    }
    return true;
};