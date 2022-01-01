// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let l1 = [9,9,9,9,9,9,9]
let l2 = [9,9,9,9]

var addTwoNumbers = function(l1, l2) {
    let number = 0;
    let numsArray = [];
    let result  = 0;
    let exResult = [];
    for (let i = 0; i < arguments.length; i++ ){
        for (let j = 0; j < arguments[i].length; j++){
            if(j===0){
                number = arguments[i][j];
            }
            else{
                let eachNumber = arguments[i][j];
                for (let k = 0; k < j; k++){
                    eachNumber *= 10;
                } 
                number += eachNumber;
            }
        }
        numsArray.push(number);
    }
    for(let m = 0; m < numsArray.length; m++){
        result += numsArray[m];
    }
    result = result.toString();

    for(let n = 0; n < result.length; n++){
        exResult.unshift(Number(result[n]))
    }
    console.log(exResult)
    return exResult;
};

addTwoNumbers(l1, l2)