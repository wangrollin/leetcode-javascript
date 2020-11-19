/**
 * 实现 strStr()
 *
 * 实现strStr()函数。
 * 给定一个haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
 *
 * 示例 1:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 * 示例 2:
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 * 说明:
 * 当needle是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当needle是空字符串时我们应当返回 0 。这与C语言的strstr()以及 Java的indexOf()定义相符。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/implement-strstr
 *
 * Solution1
 * 遍历对比
 */
function strStr(haystack: string, needle: string): number {

    if (needle == null || needle === "") {
        return 0;
    }
    if (haystack.length < needle.length) {
        return -1;
    }

    for (let i: number = 0; i <= haystack.length - needle.length; i++) {

        if (checkTheRest(haystack, needle, i)) {
            return i;
        }
    }

    return -1;
}

function checkTheRest(haystack: string, needle: string, startIndex: number): boolean {

    for (let i: number = 0; i < needle.length; i++, startIndex++) {
        if (haystack[startIndex] !== needle[i]) {
            return false;
        }
    }
    return true;
}