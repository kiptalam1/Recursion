// The Fibonacci Sequence, is a numerical sequence where each number
//  is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13
//  are the first eight digits in the sequence.


// iterative method
// function fib(digits) {
//     let sequence = [0, 1];
//     // base cases
//     if (digits <= 0) return [];
//     if (digits === 1) return [0];
//     if (digits === 2) return sequence;

//     // rest of the sequence
//     for (let i = 2; i < digits; i++) {
//         let num = sequence[i - 1] + sequence[i - 2];
//         sequence.push(num);
//     }
//     return sequence;
// }

// console.log(fib(2));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(1));
// console.log(fib(8));
// console.log(fib(0));
// console.log(fib(-2));

// recursive method.
function fibRec(digits) {
    let sequence = [0, 1];
    // base cases.
    if (digits <= 0) return [];
    if (digits === 1) return [0];
    if (digits === 2) return sequence;

    // rest of the cases.
    let prevSequence = fibRec(digits - 1);
    let nextNum = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
    prevSequence.push(nextNum);
    return prevSequence;
}

console.log(fibRec(2));
console.log(fibRec(4));
console.log(fibRec(6));
console.log(fibRec(0));
console.log(fibRec(8));
console.log(fibRec(20));

