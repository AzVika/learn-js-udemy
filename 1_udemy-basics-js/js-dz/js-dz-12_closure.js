/* Домашнее задание №12 по замыканию */


/* Задание 1 */
/* Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию. */
function minus(a = 0) {
	return function (b = 0) {
		return a - b;
	}
}

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0


/* Задание 2 */
/* Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)  */


function multiplyMaker(a = 2) {
	return function (b = 1) {
		return a *= b;
	}
}
const multiply = multiplyMaker(2);

a1 = multiply(2); // 4 (2 * 2)
a2 = multiply(1); // 4 (4 * 1)
a3 = multiply(3); // 12 (4 * 3)
a4 = multiply(10); // 120 (12 * 10)
console.log(a1, a2, a3, a4);




/* Задание 3 */
/* Реализовать модуль, который работает со строкой и имеет методы:

a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5  */

function modulFun () {
	let localStr = "";
	return {

		setString (str = "") {
			localStr = String(str);
		},
		getString () {
			return console.log(localStr);
		},
		getLengthString () {
			return console.log(localStr.length);
		},
		getReverseString () {
			return console.log(localStr.split("").reverse().join(""));
		}
	}
}

const modul = modulFun ();

modul.setString("abcde");
modul.getString();
modul.getLengthString();
modul.getReverseString();




/* Задание 4 */
/* Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:

модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100  */

const modulCalc = (function () {
	let localNumb = 0;
	return {
		setNumber (numb) {
			localNumb = Number(numb);
			return this;
		},
		plus (numb) {
			localNumb += numb;
			return this;
		},
		minus (numb) {
			localNumb -= numb;
			return this;
		},
		multy (numb) {
			localNumb *= numb;
			return this;
		},
		div (numb) {
			if(!numb) {
				return Error("На ноль делить нельзя!");
			}
			localNumb /= numb;
			return this;
		},
		power (power = 2) {
			localNumb = Math.pow(localNumb, power);
			return this;
		},
		getNumber () {
			localNumb = + localNumb.toFixed(2) || 0;
			return console.log(localNumb);
		}
	}
})();

modulCalc.setNumber(10);  // 10
modulCalc.plus(5);  // 15
modulCalc.multy(2);  // 30
modulCalc.getNumber();  // 30

modulCalc.setNumber(5).power(2).getNumber();