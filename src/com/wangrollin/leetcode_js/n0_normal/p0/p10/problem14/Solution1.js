/**
 * 最长公共前缀
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串""。
 *
 * 示例1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 示例2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 * 说明:
 * 所有输入只包含小写字母a-z。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-common-prefix
 *
 * Solution1
 * 从前到后，对比每一位是否相同
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {

    let result = "";

    if (strs.length === 0) {
        return result;
    }

    let len = strs.map(str => str.length).sort()[0];

    for (let i = 0; i < len; i++) {

        let charArr = strs.map(str => str[i]);
        if (charArr.every(ch => ch === charArr[0])) {
            result += charArr[0];
        } else {
            break;
        }
    }

    return result;
};
