function Fab(n) {
    if (n <= 1) {
        return 1;
    }
    
    let a = 1; // Fib(0)
    let b = 1; // Fib(1)
    let fib = 1;

    for (let i = 2; i <= n; i++) {
        fib = a + b; // 計算目前的斐波那契數 Calculate current Fibonacci number
        a = b;       // 將此數值儲存到 fabAll 陣列中 Move forward in the series
        b = fib;     // Update the previous Fibonacci number
    }

    return fib; // Return the n-th Fibonacci number
}
console.log(Fab(42))