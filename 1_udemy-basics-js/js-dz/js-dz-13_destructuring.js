/* Домашнее задание №13 по деструктуризации */


/* Задание 1 */
/* Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) →
{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] } */

const func = function (first, ...other) {
	return {
		first, other
	}
};

let a = func("a", "b", "c", "d");
console.log(a);




/* Задание 2 */
/* Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

getInfo(organisation); →
Name: Google
Partners: Microsoft Facebook   */

const organisation = {
	name: 'Google',
	info: {
		employees: ["Vlad", "Olga"],
		partners: ['Microsoft', 'Facebook', 'Xing']
	}
};

const getInfo = function (
	{name = "Unknown", 
		info: {employees,
			partners: [one = "none", two = "none"] = []
		} = {} 
	}) {
	console.log(`Name: ${name}`);
	console.log(`Partners: ${one} ${two}`);
};

getInfo(organisation);