const readline = require("readline-sync");

const n = readline.questionInt("Please input an integer? ");
let count = 0;

function FabIterative(n) {
    count++; // 每次計算都增加計數
    if (n <= 1) return 1;

    let prev1 = 1, prev2 = 1, current = 1;

    for (let i = 2; i <= n; i++) {
        count++; // 每次迴圈執行都記錄一次
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}

const dis = FabIterative(n);

console.log(dis);
console.log(dis > 384401000 ? ">" : "<");
console.log(count);
