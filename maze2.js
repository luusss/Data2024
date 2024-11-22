
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
//1,1  end:8,10
//1 表示牆壁或障礙，無法通行。
//0 表示可以通行的路徑。
//2 將用來標記已經走過的路徑。

//物件導向object oriented
class Point{
  constructor(_row, _col)
  {
    this.row = _row;
    this.col = _col;
  }
  isEnd = function()
  {
    return this.row==end.row && this.col==end.col
  }
}
var start= new Point(1,1);//{row:1,col:1} //起點
var end = new Point(8,10);//[8,10] //終點
var Stack=[];
var step = start;

function go() {
    Stack.push(step);
    MAZE[step.row][step.col] = 2; // 標記起點已走過
    while (!step.isEnd()) {
        // 上
        if (MAZE[step.row - 1][step.col] == 0) {
            step = new Point(step.row - 1, step.col);
            MAZE[step.row][step.col] = 2; // 標記已走過
            Stack.push(step);
        } 
        // 下
        else if (MAZE[step.row + 1][step.col] == 0) {
            step = new Point(step.row + 1, step.col);
            MAZE[step.row][step.col] = 2; // 標記已走過
            Stack.push(step);
        } 
        // 左
        else if (MAZE[step.row][step.col - 1] == 0) {
            step = new Point(step.row, step.col - 1);
            MAZE[step.row][step.col] = 2; // 標記已走過
            Stack.push(step);
        } 
        // 右
        else if (MAZE[step.row][step.col + 1] == 0) {
            step = new Point(step.row, step.col + 1);
            MAZE[step.row][step.col] = 2; // 標記已走過
            Stack.push(step);
        } 
        // 無路可走，回退
        else {
            if (Stack.length > 0) {
                step = Stack.pop(); // 回到上一個點
            } else {
                console.log("No solution!");// 如果沒有路且堆疊空了，表示無解
                return;
            }
        }
    }
    console.log("Done!"); // 找到終點
}
