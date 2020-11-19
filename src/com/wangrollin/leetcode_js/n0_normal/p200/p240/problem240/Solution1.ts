/**
 * 搜索二维矩阵 II
 *
 * 编写一个高效的算法来搜索mxn矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 *
 * 示例:
 * 现有矩阵 matrix 如下：
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 给定 target=5，返回true。
 * 给定target=20，返回false。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
 *
 * Solution1
 * 在计算的过程中进行剪枝
 */
export {}

function searchMatrix(matrix: number[][], target: number): boolean {

    if (matrix == null || matrix.length === 0) {
        return false;
    }
    let xMax: number = matrix[0].length;
    if (xMax === 0) {
        return false;
    }

    for (const intArr of matrix) {
        for (let x: number = 0; x < xMax; x++) {
            if (intArr[x] === target) {
                return true;
            } else if (intArr[x] < target) {
                continue;
            } else {
                xMax = x;
                break;
            }
        }
    }

    return false;
}