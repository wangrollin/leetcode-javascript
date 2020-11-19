/**
 * 杨辉三角 II
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 3
 * 输出: [1,3,3,1]
 * 进阶：
 *
 * 优化算法到 O(k) 空间复杂度
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/pascals-triangle-ii/
 *
 * Solution1
 * 遍历的时候复用数组
 */
export {}

function getRow(rowIndex: number): number[] {

    rowIndex += 1;
    let result: Array<number> = [];
    for (let i: number = 0; i < rowIndex; ++i) {
        let carry: number = 1;
        let tmp: number;
        for (let j: number = 0; j < i + 1; ++j) {
            if (i === 0) {
                result.push(1);
            } else if (j !== 0 && j !== i) {
                tmp = result[j];
                result[j] = carry + tmp;
                carry = tmp;
            } else if (j === i) {
                result.push(1);
            }
        }
    }
    return result;
}