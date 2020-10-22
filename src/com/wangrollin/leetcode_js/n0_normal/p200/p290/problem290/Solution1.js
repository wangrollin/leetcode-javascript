/**
 * 单词规律
 *
 * 给定一种规律 pattern和一个字符串str，判断 str 是否遵循相同的规律。
 * 这里的遵循指完全匹配，例如，pattern里的每个字母和字符串str中的每个非空单词之间存在着双向连接的对应规律。
 *
 * 示例1:
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 *
 * 示例 2:
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 *
 * 示例 3:
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 *
 * 示例4:
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 *
 * 说明:
 * 你可以假设pattern只包含小写字母，str包含了由单个空格分隔的小写字母。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/word-pattern
 *
 * Solution1
 * 一个map，一个set
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function (pattern, s) {

    let patternLen = pattern == null ? 0 : pattern.length;
    let wordListLen = s == null ? 0 : s.split(" ").length;
    if (patternLen !== wordListLen) {
        return false;
    }
    if (patternLen === 0 && wordListLen === 0) {
        return true;
    }
    let wordList = s.split(" ");
    let pMap = new Map();
    let strSet = new Set();
    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        if (pMap.has(ch)) {
            if (pMap.get(ch) !== wordList[i]) {
                return false;
            }
        } else {
            pMap.set(ch, wordList[i]);
            if (strSet.has(wordList[i])) {
                return false;
            } else {
                strSet.add(wordList[i]);
            }
        }
    }
    return true;
};