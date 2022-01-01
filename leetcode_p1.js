// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


let nums = [3, 2, 3, 2];
let target = 4;

let sum = 0;
let indices = [];
let iteration = 0;
for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
        iteration++
        sum = nums[i] + nums[j];
        if(sum === target){
            if(i===j){
                continue;
            }
            indices = [ i, j];
            return indices;
        }
        else if( i === nums.length-1){
            return indices;
        }
    }
}