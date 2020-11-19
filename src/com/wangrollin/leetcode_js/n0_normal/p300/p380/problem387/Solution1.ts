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
 * Solution1
 * 遍历一遍，计数，再去一个一个看谁只有一个
 */
export {}

function firstUniqChar(s: string): number {

    let counter: Map<string, number> = new Map();
    s.split("").forEach(x => {
        if (counter.has(x)) {
            counter.set(x, counter.get(x)! + 1);
        } else {
            counter.set(x, 1);
        }
    });
    for (let i: number = 0; i < s.length; i++) {
        if (counter.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}