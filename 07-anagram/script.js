/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const firstSrt = str1.toLowerCase().replace(/[^а-яa-z]/g, '').split('').sort().join('');
    const secondStr = str2.toLowerCase().replace(/[^а-яa-z]/g, '').split('').sort().join('');
    console.log(firstSrt)
    console.log(secondStr)
    if (firstSrt === secondStr) {
        return true
    } 
    return false
}

// const build = str => {
//     const charObj = {};
//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//         charObj[char] = charObj[char] + 1 || 1;
//     }
//     return charObj;
// }

// function anagram(str1, str2) {
//     const firstSrt = build(str1);
//     const secondStr = build(str2);
//     console.log(firstSrt)
//     console.log(secondStr)
//     if (Object.keys(firstSrt).length !== Object.keys(secondStr).length) {
//         return false;
//     }
//     for (let char in firstSrt) {
//         if (firstSrt[char] !== secondStr[char]) {
//             return false
//         }
//         return true
//     }
// }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("up", "UP")); 
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
