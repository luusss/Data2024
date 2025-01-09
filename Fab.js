var readline = require("readline-sync");
var n = readline.questionInt("Please input an intger?");
var count=0;
var dis=Fab(n);
console.log( dis );
console.log( dis>384401000?">":"<");


function Fab(n){
    count++;  // 每次執行函數都增加計數
    if(n<=1)
        return 1;  // 基本情況，當 n 為 0 或 1 時回傳 1
    else 
        return Fab(n-1)+Fab(n-2);
}
//384401000
//iteration

//console.log(count)
