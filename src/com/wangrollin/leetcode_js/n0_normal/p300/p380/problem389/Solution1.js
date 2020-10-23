/**
 * 找不同
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 字符串t由字符串s随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 *
 * 示例:
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 输出：
 * e
 * 解释：
 * 'e' 是那个被添加的字母。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-the-difference
 *
 * Solution1
 * int[26]，先加上去，再减下来，-1是要找的
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let findTheDifference = function (s, t) {

    let charCount = new Array(26).fill(0);
    s.split("").forEach(x => charCount[x.charCodeAt(0) - "a".charCodeAt(0)]++);
    for (let i = 0; i < t.length; i++) {
        let c = t[i];
        if (--charCount[c.charCodeAt(0) - "a".charCodeAt(0)] === -1) {
            return c;
        }
    }
    return " ";
};