let inputs = []
let operator
let result
function operate(){
    for (let i = 0; i<=inputs.length; i++){
if (inputs[i]== '*'){
result = inputs[i-1]*inputs[i+1] 
} 
else if(inputs[i]== '/'){
    result = inputs[i-1]/inputs[i+1] 
}
else if (inputs[i]== '+'){
    result = inputs[i-1]+inputs[i+1] 
}
else if (inputs[i]== '-'){
    result = inputs[i-1]-inputs[i+1] 
}
    }

}


//var math_it_up = {
//    '+': function (x, y) { return x + y },
//    '-': function (x, y) { return x - y }
//  }​​​​​​​;
//  math_it_up['+'](1, 2) == 3;

//['1','+','2','*','3']
//find *, * indexes before and after
//splice from index-1, 3 numbers add multiplied
//do it for the rest of operations
//return sole number 