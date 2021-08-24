/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function isPrime(n) {
    if (n === 2) {
        return true
    } else if (n < 2 || n % 2 === 0) {
        return false
    } else if (n > 2) {
        for (let i = 3; i * i <= n; i += 2)
            if (n % i === 0) return false;
        return true;
    }
}

function primes(num) {
    let numMass = []
    for (i = 2; i <= num; i++) {
        if (isPrime(i)) {
            numMass.push(i)
        }
    }
    return numMass
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]