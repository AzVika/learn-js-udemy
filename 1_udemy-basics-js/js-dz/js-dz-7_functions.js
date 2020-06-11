/* Домашнее задание №7 по функциям */


/* Задание 1 */
/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение. Пример вызова:
multiply(1,2,3) // результат 6(1*2*3); */
function multiply () {
	
	if (arguments.length)
		return 0;

	let mul = 1;
	for (let i = 0; i < arguments.length; i++) {
		mul *= arguments[i];
	}
	return mul;
}

console.log (multiply(2, 4, 5, 6));
console.log (multiply());




/* Задание 2 */
/* Создать функцию, которая принимает строку и возвращает строку-перевертыш.
Примеры вызовов и резульаты:
reverseString('test'); // tset
reverseString(''); // ''
reverseString(null); // llun
reverseString(undefined); // denifednu
reverseString(); // denifednu
*/

function reverseString(str) {
	
	let strNew = str + "";
	let strReverse = strNew.split("").reverse().join("");
	return strReverse;
}

console.log (reverseString('test'));
console.log (reverseString(''));
console.log (reverseString(null));
console.log (reverseString(undefined));
console.log (reverseString());
console.log (reverseString(1234));




/* Задание 3 */
/* Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText("hello"); // "104 101 108 108 111"
подсказка: в решении задачи вам помогут методы charCodeAt и trim  */
function getCodeStringFromText(str) {
	let strUnicode = "";
	let strNew = String(str);

	for (let i = 0; i < strNew.length; i++) {
		strUnicode += strNew[i].charCodeAt() + " ";
	}
	
	return console.log(strUnicode.trim());
}

getCodeStringFromText("hello");
getCodeStringFromText(14);
getCodeStringFromText(null);
getCodeStringFromText(undefined);




/* Задание 4 */
/* Создать функцию - угадай число.
Она принимает число от 1 до 10 (обязательно проверять, что число не больше 10 и не меньше 0).
Если число не соответвует условию, то верните ошибку return new Error ("Please provide number in range 0-10")
Если передано не число, то верните ошибку return new Error ("Please provide a valid number");

Данная функция генерирует рандомное число от 1 до 10 и сравнивает с заданным числом. Если они совпадают, то возвращает строку "You win!"
Если нет, то строку "You are lose, your number is 8, the random number  is 5". Числа в строке указаны как пример, вы подставляете реальные числа.

Если передано число в виде строки, оно должно быть преобразовано в число. */

function guessTheNumber(num) {
	let yourNumbler = parseFloat(num);
	
	if (yourNumbler < 0 || yourNumbler > 10) {
		return new Error ("Please provide number in range 0-10");
	} else if (isNaN(yourNumbler)) {
		return new Error ("Please provide a valid number");
	}

	let randomNumber = + (Math.random()*10).toFixed(0);

	if (yourNumbler === randomNumber) {
		return console.log("You win!");
	} else {
		return console.log("You are lose, your number is " + yourNumbler +", the random number  is " + randomNumber);
	}

}

guessTheNumber(5);






/* Домашнее задание №7 по функциям (по методам массивов) */


/* Задание 5 */
/* Создать функцию, которая принимает число n и возвращает массив, записанный числами от 1 до n.
getArray(10); // [1,2,3,4,5,6,7,8,9,10] */
function getArray(num) {
	let numArray = [];
	for (let i = 0; i < num; i++) {
		numArray[i] = i + 1;
	}
	return numArray;
}

getArray(10);
console.log(getArray(10));




/* Задание 6 */
/* Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива
doubleArray([1,2,3]) // [1,2,3,1,2,3] */
function doubleArray(arr) {
	return arr.concat(arr);
}

doubleArray([1,2,3]); // [1,2,3,1,2,3]
console.log(doubleArray([1,2,3]));





/* Задание 7 */
/* Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
Не забудьте про проверку того, что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr) */
function changeCollection() {
	let arg = arguments;
	let errNew = [];
	for (let i = 0; i < arg.length; i++) {
		if (Array.isArray(arg[i])) {
			arg[i].shift();
			errNew[i] = arg[i];
		}
	}
	return errNew;
}

console.log(changeCollection([1,2,3], ["a", "b", "c"]));
console.log(changeCollection([1,2,3]));





/* Задание 8 */
/* Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Если что-то не передано, то возвращать ошибки return new Error("Error message"). Возвращать новый массив с пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ] */

const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {
	if (!arr || !key || !value) {
		return new Error("Error message");
	} else {
		let result = [];
		
		for(let i = 0; i < arr.length; i++) {
			if (arr[i][key] === value) {
				result.push(arr[i]);
			}
		}
		return result;
	}
}

console.log(filterUsers(users, "age", 36));
console.log(filterUsers("age", 36));
