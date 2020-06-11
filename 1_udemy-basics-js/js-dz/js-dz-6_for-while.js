/* Домашнее задание №6 по по циклам */


/* Задание 1 */
/* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */
let string1 = "i am in the easycode";
let strResult = "";
for(let i = 0; i < string1.length; i++) {	
	if(i === 0 || string1[i-1] === " ") {
		strResult += string1[i].toUpperCase();
	} else {
		strResult += string1[i];
	}
}
console.log(strResult);


/* Задание 2 */
/* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд). */
let string2 = "tseb eht ma i";
let strReverse = "";
for (let i =0; i < string2.length; i++) {
	strReverse += string2[string2.length - 1 - i];
}
console.log(strReverse);


/* Задание 3 */
/* Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.*/
let a = 10;
let factorial = 1;
for (let i = a; i > 0; i--) {
	factorial *= i;
}
console.log(factorial);


/* Задание 4 */
/* На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */
let string4 = "JavaScript is a pretty good language";
let strResult4 = "";
for(let i = 0; i < string4.length; i++) {	
	if(i === 0 || string4[i-1] == " ") {
		strResult4 += string4[i].toUpperCase();
	} else if (string4[i] !== " ") {
		strResult4 += string4[i];
	}
}
console.log(strResult4);


/* Задание 5 */
/* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */
let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of array5) {
	if (value % 2) {
		console.log(value);
	}
}


/* Задание 6 */
/* Дан объект:
let list = {
	name: ‘denis’,
	work: ‘easycode’,
	age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in. */
let list = {
	name: "denis",
	work: "easycode",
	age: 29
}
for (let key in list) {
	if (typeof list[key] === 'string') {
		list[key] = list[key].toUpperCase();
	}
	
}
console.log(list);