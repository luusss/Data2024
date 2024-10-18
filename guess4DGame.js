var readline = require("readline-sync");

//Generate 4 digit randomly
var Ans=[0,1,2,3,4,5,6,7,8,9]; // 一組 0-9 的數字
for(var i=0;i<4;i++){  //迴圈執行 4 次
  var rand = Math.floor(Math.random()*10);// 產生 0 到 9 的隨機數字 // 交換 i 和 rand 位置上的數字
  var temp= Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;
}
var gCount=10;
do{
  do{
    var G=readline.questionInt("Please input 4 digits? ");
  }while(String(G).length!=4)// 檢查輸入是否是 4 位數字
  //}while(G<1000 || G>=10000);
  var Gstr = G.toString();
  //adjuge ?A?B
  var countA=0,countB=0;
  for(var i=0;i<4;i++){//Ans[0]~A[3]
      if(Ans[i] == Gstr[i])
        countA++;
      else if(Ans.includes(parseInt(Gstr[i]))){
        countB++;
      }
      
  }
  gCount--;
  console.log("Result: "+countA+"A"+countB+"B");//"${CountA}A${countB}B"
  //Win?
  if(countA==4){
    console.log("You win!");
  }
}while(countA<4 && gCount>0)

if(countA<4)
  console.log("You lose!");