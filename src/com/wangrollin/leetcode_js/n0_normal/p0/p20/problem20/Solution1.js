/**
 * 有效的括号
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 * 输入: "()"
 * 输出: true
 *
 * 示例2:
 * 输入: "()[]{}"
 * 输出: true
 *
 * 示例3:
 * 输入: "(]"
 * 输出: false
 *
 * 示例4:
 * 输入: "([)]"
 * 输出: false
 *
 * 示例5:
 * 输入: "{[]}"
 * 输出: true
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/valid-parentheses
 *
 * Solution1
 * 用栈来匹配，提前终止的条件：长度为奇数、栈的高度大于长度的一半
 */

/**
 * @param {string} a
 * @param {string} b
 */
let isAPair = function (a, b) {

    return (a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}');
};

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {

    if (s == null || s === "") {
        return true;
    }

    let len = s.length;
    if (len % 2 === 1) {
        return false;
    }

    let maxStackSize = Math.floor(len / 2);
    let stack = [];

    for (let i = 0; i < len; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            if (stack.length === maxStackSize) {
                return false;
            } else {
                stack.push(s[i]);
            }
        } else {
            if (stack.length === 0 || !isAPair(stack.pop(), s[i])) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
