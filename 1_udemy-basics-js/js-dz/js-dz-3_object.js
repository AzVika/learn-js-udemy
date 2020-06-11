/* Домашнее задание 3 на объекты */
/* Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями. */


/* Задача 1 */
/* Создать объект с полем product, равным ‘iphone’ */
let technics = {
	product: "iphone"
};
console.log(technics);


/* Задача 2 */
/* Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’ */
technics.price = 1000;
technics.currency = "dollar";
console.log(technics);


/* Задача 3 */
/* Добавить поле details, которое будет содержать объект с полями model и color */
technics.details = {};
technics.details.model = "";
technics.details.color = "";
console.log(technics);