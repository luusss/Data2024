var ary2d=[
    [1,2,3], //索引值 0
    [4,5,6], //索引值 1
    [7,8,9]  //索引值 2
];
var Ans=[0,1,2,3,4,5,6,7,8,9];
 //get index 0 at Ans: Ans[0]
 //get 6 in ary2d? 
 ary2d[1].push("N"); //---將N放進二維陣列會放進哪裡
//  [
//     [1,2,3], //索引值 0
//     [4,5,6,"N"], //索引值 1
//     [7,8,9]  //索引值 2
                         //---"N"會放入索引值二的陣列裡
// ];
ary2d.push("N") //將N放進陣列裡
//  [
//     [1,2,3], //index 0
//     [4,5,6], //index 1
//     [7,8,9],  //index 2
//     "N"
                        //---"N"會成為索引值4
// ];


//push ["A","B","C"] to ary2d?
ary2d.push(["A","B","C"])//---新增陣列到二維陣列裡
// ary2d[3].push("A");
// ary2d[3].push("B");
// ary2d[3].push("C");
                      //---個別新增但結果是相同的
console.log(ary2d)

//Dynamic
var row=9, col=7;
var dynaAry2d=[];
for(var _row=0;_row<row;_row++){
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++){
        dynaAry2d[_row].push(_col);
    }
}

//Dynamic2
var row=9, col=7;
var dynaAry2d=[];
for(var _row=0;_row<row;_row++){
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++){
        dynaAry2d[_row].push(_col+_row*col);
    }
}