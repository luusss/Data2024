function bracketMatch(inputString){
    var left = "{[(<"; 
    var right = "}])>";
    var isMatched = true;
    var open = [] //stack
    var symbol = inputString.charAt(i=0);

    while(isMatched && symbol!= '' ){
        //if (symbol == '{'||symbol == '('|| symbol == '[')opening.push(symbol);
        if (left.includes(symbol)){
            open.push(symbol);
        }
        //if (symbol == '}'||symbol == ')'|| symbol == ']'){
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
  if (opening.length>0||!isMatched){
    return'unmatched';
  else return 'matched';
}
console.log(bracketMatch("{[()]}"));
console.log(bracketMatch("{[(})}"));
console.log(bracketMatch("{[}"));
console.log(bracketMatch("{[]}"));
