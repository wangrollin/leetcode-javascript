/**
 * 赎金信
 *
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
 * 判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
 * 如果可以构成，返回 true ；否则返回 false。
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 *
 * 注意：
 * 你可以假设两个字符串均只含有小写字母。
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/ransom-note
 *
 * Solution2
 * 记录每个字符的当前可用位置
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomNote, magazine) {

    if (ransomNote.length > magazine.length) {
        return false;
    }
    let chars = new Array(26);
    for (let i = 0; i < ransomNote.length; i++) {
        let c = ransomNote[i];
        let index = magazine.indexOf(c, chars[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
        if (index === -1) {
            return false;
        }
        chars[c.charCodeAt(0) - 'a'.charCodeAt(0)] = index + 1;
    }
    return true;
};