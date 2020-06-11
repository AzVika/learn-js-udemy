/* Домашнее задание №11 по переберающим методам массивов */


/* Задание 1 */
/* На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]  */
let array1 = [1,2,3,5,8,9,10];
const arrayAllEven = array1.map( (arr) => ({
		digit: arr,
		odd: Boolean(arr%2)
	}));
console.log(arrayAllEven);




/* Задание 2 */
/* Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true. */
let array2 = [12, 4, 50, 1, 0, 18, 40];
const arrIsZero = array2.some( arr => arr === 0);
console.log(arrIsZero);



/* Задание 3 */
/* Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true */
let array3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const arrMore3letter = array3.every( arr => arr.length > 3);
console.log(arrMore3letter);



/* Задание 4 */
/* Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}: 
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

let array4 = [
{char:"a",index:12},
{char:"w",index:8},
{char:"Y",index:10},
{char:"p",index:3},
{char:"p",index:2}, 
{char:"N",index:6},
{char:" ",index:5},
{char:"y",index:4},
{char:"r",index:13},
{char:"H",index:0},
{char:"e",index:11},
{char:"a",index:1},
{char:" ",index:9},
{char:"!",index:14},
{char:"e",index:7}
]

function getStringFromArray (arr){
	if (!Array.isArray(arr)) {
		return console.log("Введите массив");
	}
	let copyArr = arr.slice();
	let strWord = copyArr.sort( (prev, next) => prev.index - next.index);
	strWord = strWord.map( arr => arr.char).join("");
	console.log(strWord);
	return strWord;
}

getStringFromArray(array4);




/* Задание 5 */
/* Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ] */
let array5 = [ [14, 45], [1], ['a', 'c', 'd'] ];
let arrSort = array5.slice().sort( (prev, next) => prev.length - next.length);
console.log(arrSort);



/* Задание 6 */
/* Есть массив объектов:

[
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).  */
let array6 = [
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
];
let arrSortCores = array6.slice().sort( (prev, next) => prev.info.cores - next.info.cores );
console.log(arrSortCores);




/* Задание 7 */
/* Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]  */
let products = [
{title: 'prod1', price: 5.2},
{title: 'prod2', price: 0.18},
{title: 'prod3', price: 15},
{title: 'prod4', price: 25},
{title: 'prod5', price: 18.9},
{title: 'prod6', price: 8},
{title: 'prod7', price: 19},
{title: 'prod8', price: 63}
];
const filterCollection = (arr, minPrice, maxPrice) => {
	let arrMap = arr.slice().filter( arr => (arr.price >= minPrice && arr.price <= maxPrice));
	arrMap = arrMap.sort( (a, b) => a.price - b.price );
	return arrMap;
};

let abc = filterCollection(products, 15, 30);
console.log(abc);