//var math_it_up = {
//    '+': function (x, y) { return x + y },
//    '-': function (x, y) { return x - y }
//  }​​​​​​​;
//  math_it_up['+'](1, 2) == 3;

//inputs into array
//['1','+','2','*','3']
//find *, * indexes before and after
//splice from index-1, 3 numbers add multiplied
//do it for the rest of operations
//return sole number 
let inputs = [2,'+',12,'*',3,'/',4,'-',1]
let tempOp = 0
function operate() {
    //MULTIPLICATION
    for (let i = 0; i <= inputs.length; i++) {
        let mIndex = inputs.indexOf('*')
        if (mIndex == -1) {
            break
        }
        else if (mIndex) {
            tempOp = inputs[(mIndex - 1)] * inputs[(mIndex + 1)]
            inputs.splice(mIndex - 1, 3, tempOp)
        }
    }
    //DIVISION
    for (let i = 0; i <= inputs.length; i++) {
        let dIndex = inputs.indexOf('/')
        if (dIndex == -1) {
            break
        }
        else if (dIndex) {
            tempOp = inputs[(dIndex - 1)] / inputs[(dIndex + 1)]
            inputs.splice(dIndex - 1, 3, tempOp)
        }
    }
    //ADDITION
    for (let i = 0; i <= inputs.length; i++) {
        let aIndex = inputs.indexOf('+')
        if (aIndex == -1) {
            break
        }
        else if (aIndex) {
            tempOp = inputs[(aIndex - 1)] + inputs[(aIndex + 1)]
            inputs.splice(aIndex - 1, 3, tempOp)
        }
    }
    //SUBSTRACTION
    for (let i = 0; i <= inputs.length; i++) {
        let sIndex = inputs.indexOf('-')
        if (sIndex == -1) {
            break
        }
        else if (sIndex) {
            tempOp = inputs[(sIndex - 1)] - inputs[(sIndex + 1)]
            inputs.splice(sIndex - 1, 3, tempOp)
        }
    }
    return inputs
}
operate()

// let inputs = []
// let operator
// let result
// function operate(){
//     for (let i = 0; i<=inputs.length; i++){
// if (inputs[i]== '*'){
// result = inputs[i-1]*inputs[i+1] 
// } 
// else if(inputs[i]== '/'){
//     result = inputs[i-1]/inputs[i+1] 
// }
// else if (inputs[i]== '+'){
//     result = inputs[i-1]+inputs[i+1] 
// }
// else if (inputs[i]== '-'){
//     result = inputs[i-1]-inputs[i+1] 
// }
//     }

// }