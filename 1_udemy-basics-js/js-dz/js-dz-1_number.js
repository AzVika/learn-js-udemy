/* Домашнее задание 1 на числа */

/* Задача 1 */
/* Получить число pi из Math и округлить его до 2-х знаков после точки */
let numberPi = + Math.PI.toFixed(2);
console.log(numberPi);


/* Задача 2 */
/* Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 */
let arrayNumbers = [15, 11, 16, 12, 51, 12, 13, 51];
let maxNumber = Math.max.apply(null, arrayNumbers);
let minNumber = Math.min.apply(null, arrayNumbers);
console.log(maxNumber);
console.log(minNumber);


/* Задача 3 */
/* Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.*/
let randomA = + Math.random().toFixed(2);
let randomB = + (Math.random()*8).toFixed();
console.log(randomA);
console.log(randomB);


/* Задача 4 */
/* Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)? */
let fixedNumb = + (0.6 + 0.7).toFixed(1);
console.log(fixedNumb);


/* Задача 5 */
/* Получить число из строки ‘100$’ */
let numberFromString = parseInt('100$');
console.log(numberFromString);