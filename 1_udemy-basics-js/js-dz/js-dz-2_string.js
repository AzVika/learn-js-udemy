/* Домашнее задание 2 на строки */
/* Дана строка: let string = "some test string";
ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ */

let string = "some test string";

/* Задача 1 */
/* Получить первую и последнюю буквы строки */
let firstLetter = string[0];
let lastLetter = string[string.length - 1];
console.log(firstLetter);
console.log(lastLetter);


/* Задача 2 */
/* Сделать первую и последнюю буквы в верхнем регистре */
firstLetter = string[0].toUpperCase();
lastLetter = string[string.length - 1].toUpperCase();
let string2 = firstLetter + string.slice(1, string.length - 1) + lastLetter;
console.log(string2);


/* Задача 3 */
/* Найти положение слова ‘string’ в строке */
let positionString = string.indexOf("string");
console.log(positionString);


/* Задача 4 */
/* Найти положение второго пробела (“вручную” ничего не считать) */
let positionTwoSpace = string.indexOf(" ", string.indexOf(" ") + 1);
console.log(positionTwoSpace);


/* Задача 5 */
/* Получить строку с 5-го символа длиной 4 буквы */
let simbol5x = string.substr(5, 4);
console.log(simbol5x);


/* Задача 6 */
/* Получить строку с 5-го по 9-й символы */
let simbol5y = string.slice(5, 10);
console.log(simbol5y);


/* Задача 6 */
/* Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов) */
let simbol6out = string.slice(0, -6);
console.log(simbol6out);


/* Задача 7 */
/* Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” */
let a = 20;
let b = 16;
let str = a + "" + b;
// ИЛИ str = String(a) + String(b);
console.log(str);