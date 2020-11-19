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
 * Solution2
 * 使用letter count map作为key，存储list，最后汇总
 */
function groupAnagrams2(strs: string[]): string[][] {

    let resultMap: Map<string, Array<string>> = new Map();

    strs.forEach(word => {

        let keyMap: Map<string, number> = new Map();

        word.split("").forEach(value => {
            if (keyMap.has(value)) {
                keyMap.set(value, keyMap.get(value)! + 1);
            } else {
                keyMap.set(value, 1);
            }
        });

        let keyMapStr: string = JSON.stringify([...keyMap].sort());

        if (resultMap.has(keyMapStr)) {
            resultMap.get(keyMapStr)!.push(word);
        } else {
            resultMap.set(keyMapStr, [word]);
        }
    });

    let result: Array<Array<string>> = [];
    resultMap.forEach(value => result.push(value));
    return result;
}