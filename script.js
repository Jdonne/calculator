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

const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad')

let inputs = [];

keypad.addEventListener('click', displaynum)

function displaynum(e) {
    let clicked = e.target.innerText;
    let lastnum = inputs[inputs.length-1];
    
    if (Number.isInteger(Number(clicked))) {
        display.textContent = e.target.innerText;
      
    }
    if ((Number.isInteger(Number(clicked))) && (Number.isInteger(Number(lastnum)))) {

        inputs.push(inputs.pop()+clicked);
        display.textContent = inputs[inputs.length-1];
    }
    
    else if (clicked == '='){
        operate();
        display.textContent = inputs[0]
    }
    else if (clicked == 'clear'){
        inputs = []
        display.textContent = 0
    }
    else if (clicked == '*' || '+' || '-' || '/'){
    inputs.push(clicked);}

}



let tempOp = 0
function operate() {
    inputs.forEach(function toNums(item,index,arr){ if (Number.isInteger(Number(item))){
        arr[index] = parseInt(item)}})

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

