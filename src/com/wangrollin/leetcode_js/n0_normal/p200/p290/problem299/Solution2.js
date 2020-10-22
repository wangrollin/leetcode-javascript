/**
 * 猜数字游戏
 *
 * 你正在和你的朋友玩猜数字（Bulls and Cows）游戏：你写下一个数字让你的朋友猜。
 * 每次他猜测后，你给他一个提示，告诉他有多少位数字和确切位置都猜对了（称为“Bulls”, 公牛），
 * 有多少位数字猜对了但是位置不对（称为“Cows”, 奶牛）。你的朋友将会根据提示继续猜，直到猜出秘密数字。
 * 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，用 A 表示公牛，用B表示奶牛。
 * 请注意秘密数字和朋友的猜测数都可能含有重复数字。
 *
 * 示例 1:
 * 输入: secret = "1807", guess = "7810"
 * 输出: "1A3B"
 * 解释: 1公牛和3奶牛。公牛是 8，奶牛是 0, 1和 7。
 *
 * 示例 2:
 * 输入: secret = "1123", guess = "0111"
 * 输出: "1A1B"
 * 解释: 朋友猜测数中的第一个 1是公牛，第二个或第三个 1可被视为奶牛。
 *
 * 说明: 你可以假设秘密数字和朋友的猜测数都只包含数字，并且它们的长度永远相等。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/bulls-and-cows
 *
 * Solution2
 * 猜对数字但是没猜对位置的数量cow = min(某个数字在secret的数量，某个数字在guess的数量)
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
let getHint = function (secret, guess) {

    let secretBucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let guessBucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let bull = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            ++bull;
        } else {
            ++secretBucket[secret.charCodeAt(i) - '0'.charCodeAt(0)];
            ++guessBucket[guess.charCodeAt(i) - '0'.charCodeAt(0)];
        }
    }
    let cow = 0;
    for (let i = 0; i < 10; i++) {
        cow += Math.min(secretBucket[i], guessBucket[i]);
    }
    return bull + "A" + cow + "B";
};