var readline = require("readline-sync");

var Ans=Math.floor(Math.random()*9)+1 //0<= rand <1
var win=false;

while(!win){
    do{
        var G = readline.questionInt("請猜0-9之間的數字 ?");

    }while(G<0 || G>9)
    // for(var i=0;i<10;i++){

    // }
    // while(){

    // }

    if(Ans == G){
        console.log("猜對了!")
        //question
        var again=readline.question("Again? Yes/No");
        if(again=="Yes"){
            Ans=Math.floor(Math.random()*9)+1 
        }else{
            win=true;
        }
        
    }else{
        console.log("Wrong");


    }
        //goto 4
    }