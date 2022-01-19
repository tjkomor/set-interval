const array = [1, 2, 3, 4] //const instead of let since we are not mutating array
let i = 0 //declare i so you can increase i during the loop and access each element in array

const printElementWithInterval = setInterval(() => {
    console.log(array[i++]) // log element at specific index in array
    if (i === array.length) { // if last element in array, break interval loop;
        clearInterval(printElementWithInterval)
    }
}, 3000)
