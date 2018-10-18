// For-loop functions

function positiveIntSum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        sum = sum + i;
    }
    return sum;
}


function additionPatternSum(start, diff, limit){
    let sum = start;
    for(let k = 1; k <= limit; k++){
        sum = sum + k*diff;
    }
    return sum;
}




// While-loop function

function multiplicationPatternSum(start, factor, max){
    let sum = start;
    let k=start;
    while(k <= max){
        sum = sum + factor * k;
        k = k * factor;
    }
    return sum;
}


console.log(positiveIntSum(2000000));
console.log(additionPatternSum(-80,60,50));
console.log(multiplicationPatternSum(2,-3,50000))