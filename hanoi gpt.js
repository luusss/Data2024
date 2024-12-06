function hanoi(n, p1, p2, p3) {
    const stack = []; // 用堆疊來模擬遞迴
    const result = []; // 儲存移動的步驟

    // 初始狀態壓入堆疊
    stack.push({ n, p1, p2, p3 });

    while (stack.length > 0) {
        const { n, p1, p2, p3 } = stack.pop();

        if (n === 1) {
            // 當只剩一個環時，直接移動
            result.push(`${n}套環從 ${p1} 移到 ${p3}`);
        } else {
            // 將步驟反向壓入堆疊以維持正確順序
            stack.push({ n: n - 1, p1: p2, p2: p1, p3 }); // 將 n-1 個環從 p2 移到 p3
            stack.push({ n: 1, p1, p2, p3 });            // 將第 n 個環從 p1 移到 p3
            stack.push({ n: n - 1, p1, p3, p2 });        // 將 n-1 個環從 p1 移到 p2
        }
    }

    // 輸出所有步驟
    result.forEach(step => console.log(step));
}

hanoi(4, "P1", "P2", "P3");
