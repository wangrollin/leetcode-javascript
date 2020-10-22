/**
 * 字符串中的第一个唯一字符
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 * 案例:
 * s = "leetcode"
 * 返回 0.
 *
 * s = "loveleetcode",
 * 返回 2.
 *
 * 注意事项：您可以假定该字符串只包含小写字母。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 *
 * Solution2
 * 记录字符的位置，然后去找只有一个的，然后找到最小的那个
 */

/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {

    let indexMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (indexMap.has(s[i])) {
            indexMap.get(s[i]).push(i);
        } else {
            indexMap.set(s[i], [i]);
        }
    }

    let result = Math.min(...
        [...indexMap.values()]
            .filter(arr => arr.length === 1)
            .map(arr => arr[0]));

    if (![Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY].includes(result)) {
        return result;
    } else {
        return -1;
    }
};