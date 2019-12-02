let array = [5, 4, 9, 4, 7, 3];

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log('sum:' + sum);
}
arraySum(array);


function getMaxOfArray(number) {
    return Math.max.apply(null, number);
}

console.log('max:' + getMaxOfArray(array));


function getMinOfArray(number) {
    return Math.min.apply(null, number);
}

console.log('min:' + getMinOfArray(array));


