/**
 * 字母异位词分组
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/group-anagrams
 *
 * Solution1
 * 使用排序后的str作为key，存储list，最后汇总
 */
function groupAnagrams(strs: string[]): string[][] {

    let resultMap: Map<string, Array<string>> = new Map();

    strs.forEach(word => {

        let key: string = word.split("").sort().join("");

        if (resultMap.has(key)) {
            resultMap.get(key)?.push(word);
        } else {
            resultMap.set(key, [word]);
        }
    });

    let result: Array<Array<string>> = [];
    resultMap.forEach(value => result.push(value));
    return result;
}

