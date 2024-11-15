function bracketMatch(inputString){
    var opening=[]; //創建陣列
    var isMatched = true;
    var i = 0 //定義i為0
    var symbol = inputString.charAt(i=0);

    while(isMatched && symbol!='\n' ){
        if (symbol == '{'||symbol == '('|| symbol == '[')
            opening.push(symbol);
        if (symbol == '}'||symbol == ')'|| symbol == ']'){
            if (opening.length==0)isMatched=false;
        else{
            match = opening.pop();
            isMatched=(symbol == '}' && match == '{') ||
                      (symbol == ')' && match == '(') ||
                      (symbol == ']' && match == '[');
            
        }
    }
    symbol=inputString.charAt(++i);
}
  if (opening.length>0||!isMatched)
    return'unmatched';
  else return 'matched';
}
console.log(bracketMatch("{[()]}"));
console.log(bracketMatch("{[(})}"));
console.log(bracketMatch("{[}"));
console.log(bracketMatch("{[]}"));
