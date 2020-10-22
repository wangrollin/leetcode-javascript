/**
 * 杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/pascals-triangle
 *
 * Solution1
 * 遍历一遍即可
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {

    if (numRows === 0) {
        return [];
    }

    let result = [];
    for (let i = 0; i < numRows; ++i) {
        result.push([]);
        for (let j = 0; j < i + 1; ++j) {
            if (j === 0 || j === i) {
                result[i].push(1);
            } else {
                result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
    }
    return result;
};