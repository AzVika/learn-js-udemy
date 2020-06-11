/* Домашнее задание №4 на логические операторы, if statement */


/* Задание 1 */
/* Чему равно а, почему? */
let a = 0 || 'string';  // 'string' - ищет первое true
a = 1 && 'string'; //  'string' - true и true (false не находит, выдает последний true) 
a = null || 25;	// 25 - ищет первое true
a = null && 25; // null - первый элемент fasle и дальше стравнение прекращается
a = null || 0 || 35; // 35 - ищет первое true (null и 0 - это false)
a = null && 0 && 35; // null - первый элемент fasle и дальше стравнение прекращается
console.log(a);


/* Задание 2 */
/* Что отобразится в консоли. Почему? */
console.log(12 + 14 + '12');	// 2612
console.log(3 + 2 - '1');	// 4
console.log('3' + 2 - 1);	// 31
console.log(true + 2);	//	3
console.log(+'10' + 1);	// 11
console.log(undefined + 2);	// NaN
console.log(null + 5);	// 5
console.log(true + undefined);	// NaN


/* Задание 3 */
/* Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. */
let visibility = "hidden";
if (visibility === "hidden") {
	visibility = "visible";
} else {
	visibility = "hidden";
}
console.log(visibility);


/* Задание 4 */
/* Создать переменную и присвойте ей число.
Используя if, записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */
let nunber = 10;
if (nunber === 0) nunber = 1;
else if (nunber < 0) nunber = "less then zero";
else if (nunber > 0) nunber *= 10;
console.log(nunber);


/* Задание 5 */
/* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */
let car = {
	name: 'Lexus', 
	age: 10, 
	create: 2008, 
	needRepair: false
};
if (car.age > 5) {
	console.log ('Need Repair');
	car.needRepair = true;
} else {
	car.needRepair = false;
}
//console.log (car.needRepair);


/* Задание 6 */
/* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */
let item = { 
	name: 'Intel core i7',
	price: '100$',
	discount: '15%'
}

const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
if ( !isNaN(price) && !isNaN(discount) ) {
	item.priceWithDiscount = price * (100 - discount) / 100 + '$';
	console.log(item.priceWithDiscount);
} else {
	console.log(item.price);
}


/* Задание 7 */
/* Дан следующий код:
let product = {
	name: “Яблоко”,
	price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */
let product = {
	name: "Яблоко",
	price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if ( (parseFloat(product.price) >= min) && (parseFloat(product.price) <= max) ) {
	console.log(product.name);
} else {
	console.log("товар не найдено");
}