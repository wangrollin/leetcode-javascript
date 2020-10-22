/**
 * 反转字符串中的元音字母
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *
 * 示例 1:
 * 输入: "hello"
 * 输出: "holle"
 *
 * 示例 2:
 * 输入: "leetcode"
 * 输出: "leotcede"
 *
 * 说明:
 * 元音字母不包含字母"y"。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
 *
 * Solution1
 * 双指针相向而行
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {

    if (s == null || s.length <= 1) {
        return s;
    }
    let chars = s.split("");
    let univocalicSet = new Set(['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U']);
    for (let left = 0, right = s.length - 1; left < right;) {
        if (!univocalicSet.has(chars[left])) {
            left++;
            continue;
        }
        if (!univocalicSet.has(chars[right])) {
            right--;
            continue;
        }
        let tmp = chars[left];
        chars[left] = chars[right];
        chars[right] = tmp;
        left++;
        right--;
    }
    return chars.join("");
};