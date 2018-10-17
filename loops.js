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
    for(let i = 1; i <= limit; i = i + 1){
        sum = sum + i*diff;
    }
    return sum;
}




// While-loop function

function multiplicationPatternSum(start, factor, max){
    sum = start;
    while(start <= max){
        start = start * factor;
    }
    return sum;
}


console.log(positiveIntSum(2000000));
console.log(additionPatternSum(-80,60,50));