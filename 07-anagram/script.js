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
    let firstSrt = str1.toLowerCase().replace(/[^а-яa-z]/g);
    let secondStr = str2.toLowerCase().replace(/[^а-яa-z]/g);
    if (firstSrt === secondStr) {
        return false
    } else if (firstSrt.split('').sort().join('') !== secondStr.split('').sort().join('')) {
        return false
    }
    return true
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("up", "UP"));
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
