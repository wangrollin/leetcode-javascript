/**
 * 最小栈
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x)-- 将元素 x 推入栈中。
 * pop()-- 删除栈顶的元素。
 * top()-- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 *
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/min-stack
 *
 * Solution2
 * 维护一个不同步的队列
 */
export {}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {

    private stack: Array<number> = [];
    private minValueStack: Array<number> = [];

    constructor() {

    }

    push(x: number): void {
        if (this.minValueStack.length === 0) {
            this.stack.push(x);
            this.minValueStack.push(x);
        } else {
            this.stack.push(x);
            if (x <= this.minValueStack[this.minValueStack.length - 1]) {
                this.minValueStack.push(x);
            }
        }
    }

    pop(): void {
        let value: number = this.stack.pop()!;
        if (value === this.minValueStack[this.minValueStack.length - 1]) {
            this.minValueStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minValueStack[this.minValueStack.length - 1];
    }
}